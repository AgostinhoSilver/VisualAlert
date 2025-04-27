# VISUAL ALERT
This library helps create modern visual javascript alerts,ranging from snackbars,modal alerts,toast and to more advanced alert elements.


## Installation!
Visual Alert is available on NPM JS. You can make use of visual alert by using cdn


```
<script src="https://cdn.jsdelivr.net/npm/visualalert@1.2.0/visual.js"></script>
```

## Getting started!
In the current version of the Visual Alert, you can display different types of snackbars. Don't worry more stuff are coming soon!!


### Displaying a normal snackbar

To display a normal snackbar you simply call the createSnackBar function:

```js

createSnackBar(
    string message, 
string backgroundColor,
string textColor,
string position, // top or bottom
string animationType = "fade",//fade or bounce
number timeout = 3000, 
boolean setIcon = false,
string iconType = null,
string iconBackgroundColor = null, 
string innerColor = null) 
```

#### Example:
add any html element of your choice then, insert the visual-button id to the element
```html
<button  id="visual-button" >Show Snackbar</button>
```


Then call the createSnackBar function inside your js script tag, ideally at the bottom of your body tag


```js


createSnackBar("Hello world",
"orange",
"white",
"top",
"bounce",
10000);


```

### Displaying a snackbar with gradient color
To display a snackabr with gradient color you simply call the

```js

createGradientSnackBar("Hello World!",
"#FFD700",
"#F0E68C",
"#FFC72C",
"top",
"fade",
3000);
```