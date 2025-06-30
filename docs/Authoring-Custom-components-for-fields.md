---
id: Authoring-Custom-Components-For-Fields
title: Custom Components for Fields
---

# Applies to
6.0+
# Overview

Content apps in Voice support custom components for fields of type Text and Hyperlink. This allows clients to customize the look and feel of the fields.

The custom components can be implemented using React components - both functional and class components are supported.

# How to implement and configure custom components for fields

## Writing your custom components

1.	You need to write your component in React
2.	It can be either a class or functional component
3.	The custom components will receive 3 props that you can use (Refer [samples](https://akuminadev.visualstudio.com/Akumina/_wiki/wikis/Akumina.wiki/404/Custom-components-for-fields?anchor=samples)):
**a.	field** => The entire field object which will have all field related properties like below:
![image](https://github.com/user-attachments/assets/f354b94c-fcf7-4dfa-818f-3d752f27c58e)

**b.	onChange** => This is the onChange event handler that needs to be called on the onChange event of your field.
    The onChange of a text field should return an object like: 
{currentTarget:{value: newValue}}
    The onChange event of a hyperlink field should return an object like:
{Url: newUrl, Description: newUrlDescription}
**c.	extend** => This prop contains extra information like the listName
4.	Once your react component is ready, you need to compile it using Babel. Go to the [Babel compiler link](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Ctypescript&prettier=true&targets=&version=7.21.4&externalPlugins=&assumptions=%7B%7D)
5.	Make sure the React Runtime configuration (under Presets > Options) is set to Classic:
 ![image](https://github.com/user-attachments/assets/7f02db01-5774-4c8a-9ee7-08b0e4b993f4)

6.	Paste your react code.
7.	Copy the compiled JS, paste it into a file and deploy it at a path that is accessible from your site. Keep this path for usage in the next step. 

## Configure fields in the Field View Manager

A new management app has been introduced to manage custom components for fields - Field View Manager. Add this management app if not already available in your central site management apps.

1.	Go to your management apps
2.	Open Field View Manager app
3.	Add custom components for Text/Hyperlink fields
4.	You will see the 5 properties listed below:
a.	Title: A title for your custom component
b.	Description: A description for your custom component
c.	Component Js Path: The file path where your compiled custom component is hosted --> This is the path where you deployed your custom component in the first [step](https://akuminadev.visualstudio.com/Akumina/_wiki/wikis/Akumina.wiki/404/Custom-components-for-fields?anchor=writing-your-custom-components)
d.	Component Class: The class that defines your custom component --> For the above example, this will be CustomComponents.DisabledTextField or CustomComponents.TextFieldWithModal
e.	Internal Name: A unique identifier for your custom component

## Configure your content app to use the custom components for customizing your field experience

1.	Go to Settings > Content app settings
2.	Edit your content app
3.	Go to the Field Properties section
4.	For Text/Hyperlink type of fields, select the custom component that you would like to render
5.	Save

## Testing

1. Go to the Voice authoring panel
2. Open the content app that you updated in the previous section
3. See that the field you configured uses your custom component to render the field

## Samples

1.	Disabled text field. (Written as a Functional component)

``` ts
var CustomComponents: any;

if (typeof CustomComponents === "undefined") {
    CustomComponents = {};
}

interface IDisabledTextFieldProps {
    onChange: any
    field: any
    extend: any
}

CustomComponents.DisabledTextField = function (props: IDisabledTextFieldProps) {
    return (
        <input
            value={props.field.Value}
            placeholder={"Add" + props.field.Title}
            onChange={props.onChange}
            disabled={true}
            type="text"
            maxLength={props.field.MaxLength}
        />
    )
}
```

2.	A text field with an open modal button. On click of button, open a modal with a text field. On click of save in modal, populate the value inside the text field. (Written as a Class component)

``` ts
var CustomComponents: any;

if (typeof CustomComponents === "undefined") {
    CustomComponents = {};
}

interface IModalProps {
    handleClose: () => void,
    handleSave: (val: string) => void;
    field: any
}

const Modal = (props: IModalProps) => {

    const [state, setState] = React.useState({
        value: props.field.Value
    });

    const onChange = (e: any) => {
        setState({
            value: e.target.value
        })
    };

    return (
        <>
            <div className="akv-modal-overlay"></div>
            <div className="akv-modal akv-modal-small">
                <header className="akv-modal-header"><div className="akv-modal-header-title-wrapper"><h2>Enter {props.field.Title}</h2></div></header>
                <section className="akv-modal-content">
                    <input
                        value={state.value}
                        placeholder={"Add Value"}
                        onChange={onChange}
                        disabled={false}
                        type="text"
                        maxLength={200}
                    />
                </section>
                <footer className="akv-modal-footer">
                    <button className="akv-btn" type="button" onClick={props.handleClose}>
                        Close
                    </button>
                    <button className="akv-btn akv-primary" type="button" onClick={() => props.handleSave(state.value)}>
                        Save
                    </button>
                </footer>
            </div>
        </>
    );
};

interface ITextFieldWithModalProps {
    onChange: any
    field: any
    extend: any
}

interface ITextFieldWithModalState {
    showModal: boolean
}

class TextFieldWithModal extends React.Component<ITextFieldWithModalProps, ITextFieldWithModalState> {
    constructor(props: ITextFieldWithModalProps) {
        super(props);
        this.state = { showModal: false };
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    };

    handleSave = (val: any) => {
        let event = {
            currentTarget: {
                value: val
            }
        };
        this.props.onChange(event);
        this.toggleModal();
    };

    render() {
        return (
            <div className="akv-value akv-input-group akv-no-gap">
                <div style={{ flexGrow: 2 }}>
                    <input
                        value={this.props.field.Value}
                        placeholder={"Add " + this.props.field.Title}
                        onChange={this.props.onChange}
                        disabled={true}
                        type="text"
                    />
                </div>
                {this.state.showModal && <Modal handleClose={this.toggleModal} handleSave={this.handleSave} field={this.props.field} />}
                <button className="akv-btn" type="button" onClick={this.toggleModal}>
                    Open Modal
                </button>
            </div>
        );
    }
}

CustomComponents.TextFieldWithModal = TextFieldWithModal;
```
