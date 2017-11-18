## reactAppWidget
React app as a UMD.
<br/>
Simple implementation of a widget in react and embedding it in another application.

App Installation
- `npm i` install packages
- `webpack-dev-server` for development
- `webpack` to build the bundle.js file
-  initialize the react widget in the base app, initTag takes the ID of the div where the react app should render
```html
    <script src="/javascripts/bundle.js" type="text/javascript"></script>
    <script type="text/javascript">
        MyApp.init({
            initTag: "app"
        });
    </script>
