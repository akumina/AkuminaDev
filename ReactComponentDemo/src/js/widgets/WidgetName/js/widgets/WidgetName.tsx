import * as Akumina from 'akumina-core';
import * as React from 'react';
import IGetListRequest from 'akumina-core/interfaces/IGetListRequest';
import { FooterComponent } from '../../components/FooterComponent';

interface IWidgetNameState {
    pageLifecycleComplete: boolean,
    testIncrement: number
}

interface IWidgetNameProps {
    id: number,
    displaytemplateurl: string,
    mycustomprop: string
}

export class WidgetName extends React.Component<IWidgetNameProps, IWidgetNameState> {

    private ImageData: ImageModel;
    private WidgetProps: WidgetProperties;
    /**
     *
     */
    constructor(props: IWidgetNameProps) {
        super(props);
        this.state = {
            pageLifecycleComplete: false,
            testIncrement: 0
        }
        this.Increment = this.Increment.bind(this);
        this.ImageData = new ImageModel();
        this.WidgetProps = this.SetDefaultsProperties(props);
    }
    componentWillMount() {
        
    }

    componentDidMount() {
        var request: IGetListRequest = {} as IGetListRequest; // Request object model included as part of Akumina type definitions
        request.listName = 'ImageGallery_AK'; // List Name we're querying
        request.selectFields = 'Title,Image'; // Fields we're interested in retrieving
        request.isRoot = true; // Denotes the list exists on the root site and not the subsite
        request.contextSiteUrl = Akumina.Digispace.SiteContext.RootSiteUrl; // URL of the root site of the site collection
                
        var spcaller = new Akumina.Digispace.Data.DataFactory(true); // true denotes legacy mode
        spcaller.GetList(request).then((res) => {
            var response = res.response;

            try {
                this.ImageSuccessHandler(response);

                this.setState({ pageLifecycleComplete: true }); // Set the state to indicate we're done processing and trigger a re-render
            } catch (error) {
                console.log('ERROR HAS OCCURRED: ' + error);
            }
        }, (error) => {
            console.log('EROR OCCURRED DURING SHAREPOINT QUERY: ' + error);
        })
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    AkRender() {
        this.setState({ pageLifecycleComplete: true });
    }

    Increment() {
        this.setState({ testIncrement: this.state.testIncrement + 1 });
    }

    render() {
        console.log(this.state.pageLifecycleComplete);
        if (this.state.pageLifecycleComplete) {
            return (
                <div>
                    <div>
                        <label htmlFor="image-data">Test Image:</label>
                        {this.ImageData.Url !== '' ? <img id="image-data" src={this.ImageData.Url} /> : <p id="image-data">There is no image. :(</p>}
                    </div>
                    <p>mycustomprop: {this.props.mycustomprop}</p>
                    <p>testIncrement: {this.state.testIncrement}</p>
                    <input type="button" onClick={this.Increment} value="Increment Test"></input>
                    <div>
                        {React.createElement(FooterComponent, this.WidgetProps)}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }

    Init(props: any) {
        this.WidgetProps = this.SetDefaultsProperties(props);
    }

    SetDefaultsProperties(requestIn: any): WidgetProperties {
        var requestOut = new WidgetProperties();

        requestOut.widgetframework = this.GetPropertyValue(requestIn, 'widgetframework', '');
        requestOut.mycustomprop = this.GetPropertyValue(requestIn, 'mycustomprop', '');
        requestOut.FooterListName = this.GetPropertyValue(requestIn, 'footerlistname', '');

        return requestOut;
    }

    GetPropertyValue(requestIn: any, key: string, defaultValue: any): any {
        //Obtain property value
        var returnValue = requestIn[key];

        //Determine if empty or null
        if (returnValue === null || typeof returnValue === 'undefined' || returnValue === '') {
            //If empty or null, use default value
            returnValue = defaultValue;
        }

        return returnValue;
    }

    private ImageSuccessHandler(response: any) {
        var listEnum = response.listItems.getEnumerator();

        while (listEnum.moveNext()) {
            var model = new ImageModel();
            var listItem = listEnum.get_current();

            // We are not interested in data without images
            if (listItem.get_item('Image') == null) continue;

            model.Title = listItem.get_item('Title');
            model.Url = listItem.get_item('Image').get_url();
            
            this.ImageData = model;
            break;
        }
    }

}

export class ImageModel {
    Title: string;
    Url: string;

    constructor() {
        this.Title = '';
        this.Url = '';
    }
}

export class WidgetProperties {
    widgetframework: string;
    mycustomprop: string;
    FooterListName: string;

    constructor() {
        this.widgetframework = '';
        this.mycustomprop = '';
        this.FooterListName = '';
    }
}