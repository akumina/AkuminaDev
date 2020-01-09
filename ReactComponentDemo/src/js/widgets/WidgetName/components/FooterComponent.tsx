import * as Akumina from 'akumina-core';
import * as React from 'react';
import IGetListRequest from 'akumina-core/interfaces/IGetListRequest';

interface IFooterComponentState {
    pageLifecycleComplete: boolean
}

interface IFooterComponentProps {
    widgetframework: string,
    mycustomprop: string,
    FooterListName: string
}

export class FooterComponent extends React.Component<IFooterComponentProps, IFooterComponentState> {
    private FooterData: string;

    constructor(props: IFooterComponentProps) {
        super(props);
        this.state = {
            pageLifecycleComplete: false
        }

        this.FooterData = '';
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        var request: IGetListRequest = {} as IGetListRequest; // Request object model included as part of Akumina type definitions
        request.listName = this.props.FooterListName; // List Name we're querying
        request.selectFields = 'Title'; // Fields we're interested in retrieving
        request.isRoot = true; // Denotes the list exists on the root site and not the subsite
        request.contextSiteUrl = Akumina.Digispace.SiteContext.RootSiteUrl; // URL of the root site of the site collection
                
        var spcaller = new Akumina.Digispace.Data.DataFactory(true); // true denotes legacy mode
        spcaller.GetList(request).then((res) => {
            var response = res.response;

            try {
                this.FooterSuccessHandler(response);

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

    render() {
        if (this.state.pageLifecycleComplete) {
            return (
                <div>
                    Footer Component: {this.FooterData}
                </div>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }

    private FooterSuccessHandler(response: any): any {
        var listEnum = response.listItems.getEnumerator();

        while (listEnum.moveNext()) {
            //There should only be one line in the list
            var listItem = listEnum.get_current();
            this.FooterData = listItem.get_item('Title');
        }
    }
}