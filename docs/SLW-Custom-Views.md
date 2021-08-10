---
id: Akumina-SLW-Custom-Views
title: Akumina SLW Custom Views
---
 

### Overview  

The purpose of this article is to explain how to create custom views for Summary Links Widget. 

This article makes the following assumptions:
* Akumina Framework Version 5.0 or higher
* The developer has knowledge on React and can develop views using React JS
  

### Summary Links Widget Recap 

The **Summary Links Widget (SLW)** provides front-end content management and design without the need for the advanced concept of content apps or the need to manage multiple lists. The SLW is a powerful and versatile widget that allows you to easily create and edit content links, change content groupings, add a presentation layer, and order the display from the front-end. 

For more information, see the [Community Site Documentation](https://community.akumina.com/knowledge-base/working-with-summary-links-widget/)  

### Creating Custom Views for SLW 

The views for SLW are written in React JS. See below an example view:

```HTML
#root#
<div  className="interAction foundation-widget">
	<div  className="ia-header ia-header__modern">
		<i  className="fa fa-newspaper-o"  aria-hidden="true"></i>
		<h3  className="ia-header--title">{model.CollectionName}</h3>
	</div>
	<section>
	{Children}
	</section>
</div>
#group#
<div  className="ak-slw-group slw-customview-group">
{model.Title}
	<div  className="slw-customview-items">
	{Children}
	</div>
</div>
#item#
<a  href={model.Link} target={model.LinkTarget} className={Akumina.Digispace.ConfigurationContext.IsSPAMode ? "ak-spalink ak-slw-item" : "ak-slw-item" } title={model.Tooltip}>
	<div  class="slw-customview-img">
		<img  className="ia-feature-box-image"  src={model.ImageUrl}></img>
	</div>
	<div  class="slw-customview-title">
{model.Title}
	</div>
</a>

``` 

The following are the important points to understand when creating a custom view for SLW:

 1. There are 3 sections in an SLW view:  
	 - **Root**: The root section will be the wrapper around all SLW items.

        It should only contain html that is needed for the wrapper and should include an HTML element with {Children} to render its children.
            
        The model property here will contain Collection specific properties like model.CollectionName.
            
        The Children property will contain all the direct children of the collection i.e. groups and unparented links (links that do not belong to any group).
		
        Example:

	    ```html
	    #root#
		<div className="interAction foundation-widget">
		    <div className="ia-header ia-header__modern">
		        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
		        <h3 className="ia-header--title">{model.CollectionName}</h3>
		    </div>
		    <section>
		        {Children}
		    </section>
		</div>
	    ```
		     
	 - **Group**: The group section will contain the html for all group items.

        It should only contain html that is needed for rendering groups and should include an HTML element with {Children} to render its children.

        The model property here will contain Group specific properties like model.Title.

        The Children property will contain all the child links of the group.
        
        Example:

	    ```html
	    #group#
		<div className="ak-slw-group slw-customview-group">
		    {model.Title}
		    <div className="slw-customview-items">
		        {Children}
		    </div>
		</div>
	    ```
    
	 - **Item**: The item section should only contain html that is needed for rendering child level items in SLW.
    
        The model property here will contain item specific properties like model.Title, model.Link, model.ImageUrl.

        Example:

		```html
	    #item#
		<a href={model.Link} target={model.LinkTarget} className={Akumina.Digispace.ConfigurationContext.IsSPAMode ? "ak-spalink ak-slw-item" : "ak-slw-item" } title={model.Tooltip}>
		    <div class="slw-customview-img">
		        <img className="ia-feature-box-image" src={model.ImageUrl}></img>
		    </div>
		    <div class="slw-customview-title">
		        {model.Title}
		    </div>
		</a>
	    ```

 2. The sections start with #sectionName#, for e.g., #root#

 3. All the sections are mandatory. If you do not need a particular section, just keep it blank.

    For e.g., you need to show only links in SLW and don't need to show groups (this will also hide links that belong to any group):
    ```html
    #root#
    <div className="interAction foundation-widget">
        <div className="ia-header ia-header__modern">
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>
            <h3 className="ia-header--title">{model.CollectionName}</h3>
        </div>
        <section>
            {Children}
        </section>
    </div>
    #group#
    #item#
    <div class="slw-customview-title">
         {model.Title}
    </div> 
    ```
 4. The views for SLW are written in React instead of handlebars. So, use "className" instead of "class" and single curly braces ({ }) for variables instead of double curly braces({{ }})

 5. It is mandatory to have "ak-slw-group" class on you group element and "ak-slw-item" class on your item element to allow for editing them in the Edit Page mode

 6. Comments will not work in SLW views. The widget will fail to render if any comments are added in the view (html comments <!--->)

### Deploying custom views to your site

Once your custom view is ready, you need to register it with the SLW widget and enable it for your widget instance like with any other Akumina widget as explained [here](https://community.akumina.com/knowledge-base/extending-a-widgets-view/)

### Setting up a thumbnail image for your custom view

Once registered for the SLW widget and enabled for your widget instance, the view will come up on the configure views modal in the page edit mode as shown below:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/configure-slw-views.png)

To customize the thumbnail image for your custom view,

1. Add a class to any of your css files as below:

    ```css
    .ia-slw-CustomView {
        background-image: url('yourImageUrl')
    }
    ```

2. The class name is derived from the name of your view that you registered with the SLW widget.

    It is derived by replacing all spaces in the view name with "-" and prepending with "ia-slw-" to ensure uniqueness.

For e.g., if you registered your view with the name "Carousel View", the class name would be "ia-slw-Carousel-View"
    