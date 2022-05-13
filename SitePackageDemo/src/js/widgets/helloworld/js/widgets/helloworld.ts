import * as Akumina from 'akumina-core';
import * as $ from 'jquery';

export class helloworld extends Akumina.BaseWidget {

    constructor() {
        super();
    }

    SetDefaultsProperties(requestIn: any) {
        var requestOut = requestIn;
        requestOut.DisplayTemplateUrl = super.GetPropertyValue(requestIn, "displaytemplateurl", new Akumina.Digispace.AppPart.Data().Templates.GetViewPrefix() + "/Style%20Library/" + Akumina.Digispace.ConfigurationContext.TemplateFolderName + "/Content/Templates/Core/Tray.html");
        requestOut.SenderId = super.GetPropertyValue(requestIn, "id", "");
        return requestOut;
    };

    Init(properties: any) {
        this.Properties = this.SetDefaultsProperties(properties);
        //set loading text
        $("#" + this.Properties.SenderId).html(Akumina.Digispace.ConfigurationContext.LoadingTemplateHtml);
        //write out INIT and properties
        Akumina.AddIn.Logger.WriteInfoLog("helloworld INIT!");
        Akumina.AddIn.Logger.WriteInfoLog(this.Properties);
        //subscribe to page lifecycle events
        Akumina.Digispace.AppPart.Eventing.Subscribe('/loader/completed/', () => { this.Render() }, this.Properties.SenderId);
        Akumina.Digispace.AppPart.Eventing.Subscribe('/widget/updated/', () => { this.RefreshWidget(this.Properties); }, this.Properties.SenderId);
    };

     Render() {
        try {
            var targetDiv = this.Properties.SenderId;
            var cur = this;
            var request: any = {};
            request.listName = "Apps_AK";
            request.selectFields = "Title";
            //setting legacyMode to true means it will perform JSOM (ProcessQuery)
            var legacyMode = true;
            var spcaller = new Akumina.Digispace.Data.DataFactory(legacyMode);
            spcaller.GetList(request).then(function (data: any) {
                var Items = [];
                var listEnumerator = data.response.listItems.getEnumerator();
                while (listEnumerator.moveNext()) {
                    var listItem = listEnumerator.get_current();
                    var item: any = {};
                    item.Title = listItem.get_item('Title');
                    Items.push(item);
                }
                data.Items = Items;
                data.Listname = request.listName;
                if (!cur.Properties.EditMode) {
                    cur.BindTemplate(cur.Properties.DisplayTemplateUrl, data, targetDiv);
                }
            });
        } catch (e) {
            Akumina.AddIn.Logger.WriteErrorLog("ERROR IN DeleteMeTypeScript RENDER");
            Akumina.AddIn.Logger.WriteErrorLog(e);
        }
    };

}

