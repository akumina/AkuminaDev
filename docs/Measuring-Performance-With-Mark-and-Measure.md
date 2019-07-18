---
id: Measuring-Performance-With-Mark-and-Measure
title: Measuring Performance With Mark and Measure
---

## Applies to
Akumina ^4.5

# Overview
PerfLogger.AddMark enables an easy/convenient way for developers to measure different aspects of widget performance.

### Basic Usage
Let's observe the performance of a call out to the Microsoft Graph API. We'll modify [MyFirstReactComponent](/akumina/AkuminaDev/blob/master/FrontEndReact/src/js/widgets/MyFirstReactComponent/js/widgets/MyFirstReactComponent.tsx).

#### Basic Usage: Step 1
Deploy [FrontEndReact](/akumina/AkuminaDev/tree/master/FrontEndReact).

#### Basic Usage: Step 2
Update [MyFirstReactComponent](/akumina/AkuminaDev/blob/master/FrontEndReact/src/js/widgets/MyFirstReactComponent/js/widgets/MyFirstReactComponent.tsx) with a new event handler:
```javascript

export class MyFirstReactComponent extends React.Component<IMyFirstReactComponentProps, IMyFirstReactComponentState> {

...

  constructor(props: IMyFirstReactComponentProps) {
    super(props);
    this.state = {
      pageLifecycleComplete: false,
      testIncrement: 0
    };
    this.Increment = this.Increment.bind(this);
    this.Fetch = this.Fetch.bind(this);
  }

...

  Fetch() {
    console.log("fetch");
  }

...

    if (this.state.pageLifecycleComplete) {
      return (
        <div>
          <p>mycustomprop: {this.props.mycustomprop}</p>
          <p>testIncrement: {this.state.testIncrement}</p>
          <input
            type="button"
            onClick={this.Increment}
            value="Increment Test"
          />
          <input type="button" onClick={this.Fetch} value="Perform Fetch" />
        </div>
      );
}
```

#### Basic Usage: Step 3
Update the Fetch method to call AddMark with the string(s) of your choice:
```javascript
  Fetch() {
    let akConfig = Akumina.Digispace.ConfigurationContext;
    let user: string = Akumina.Digispace.UserContext.UserLoginName;
    //Invoke Mark API
    Akumina.Digispace.PerfLogger.AddMark("Graph call start");
    new AkMsGraphApiService(
      akConfig.InterchangeURL,
      akConfig.InterchangeQueryKey,
      user
    )
      .fetchAllUsers()
      .then(function(response) {
        //Invoke Mark API
        Akumina.Digispace.PerfLogger.AddMark("Graph call end");
        console.log(response.status);
      });
  }
```
Note that we're instantiating a custom class ```AkMsGraphApiService``` to call the API (include this at the end of your MyFirstReactComponent.tsx file):
```javascript
class AkMsGraphApiService {
  static readonly GRAPH_BASE_ENDPOINT = "https://graph.microsoft.com/v1.0/";
  static readonly GRAPH_API_ROUTE = "/api/graph/graphquery?queryurl=";
  _interchangeUrl: string;
  _interchangeQueryKey: string;
  _loginUserName: string;

  constructor(
    interchangeUrl: string,
    interchangeQueryKey: string,
    loginUserName: string
  ) {
    this._interchangeUrl = interchangeUrl;
    this._interchangeQueryKey = interchangeQueryKey;
    this._loginUserName = loginUserName;
  }

  fetchAllUsers(): Promise<Response> {
    let entityTypeParam: string = "/users";
    let requestUrl: string = this._interchangeUrl;
    requestUrl += AkMsGraphApiService.GRAPH_API_ROUTE;
    requestUrl += encodeURIComponent(
      AkMsGraphApiService.GRAPH_BASE_ENDPOINT + entityTypeParam
    );
    requestUrl += this.getEncodedCacheKeyObject(entityTypeParam);

    let requestOptions: RequestInit = {
      method: "GET",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "X-Akumina-QueryKey": this._interchangeQueryKey
      }
    };

    return fetch(requestUrl, requestOptions);
  }

  private getEncodedCacheKeyObject(entityTypeParam: string): string {
    let cacheKeyObject = {
      key:
        `/user/${this._loginUserName}/` +
        AkMsGraphApiService.GRAPH_BASE_ENDPOINT +
        entityTypeParam,
      dependencies: []
    };
    return "&cacheKey=" + encodeURIComponent(JSON.stringify(cacheKeyObject));
  }
}

``` 

#### Basic Usage: Step 4
Now it is possible to view the elapsed time between the start of the API call and when the the client received the data back from the server in the performance section of the debug dialog from the tray:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/MarkAndMeasureCapture.PNG)
