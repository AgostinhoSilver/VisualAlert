// document.getElementById("visual-button").addEventListener("click",btn);



class VisualJs{


  constructor(visualType){
    this.visualType = visualType;
  }




   myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")
    
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }


  setVisualSnackBar(color, colorType, text, position, timeout, icon) {

    //Create a reference to the html head element
    var head = document.head;
  
    //
    var snackbarCss = "#visual-snackbar{";
    var style = document.createElement('style');
    style.textContent = snackbarCss;
  
    head.appendChild(style);
  }



  /**
 * 
 * @param {*} message 
 * @param {*} setIcon 
 * @param {*} iconType 
 * @param {*} backgroundColor 
 * @param {*} iconBackgroundColor 
 * @param {*} innerColor 
 * @param {*} textColor 
 * @param {*} position 
 */

createSnackBar( message, setIcon,iconType,backgroundColor,iconBackgroundColor,innerColor, textColor, position) {
  //Create a reference to the html head element
  var head = document.head;
  var body = document.body;
  var iconDiv =null;
  //
  var style = document.createElement('style');
  var snackbarContainer = document.createElement('div');
  var snackbarMessageContainer = document.createElement('div');


  
  iconDiv = hasIcon(setIcon,iconType,iconBackgroundColor,innerColor);


  //Dynamically set snackbar attributes
  snackbarContainer.setAttribute("id", "snackbar");
  snackbarMessageContainer.setAttribute("style","float: right;");
  if(iconDiv!==null){
      //Dynamically set the snackbar message
    snackbarMessageContainer.innerHTML = message;
    snackbarContainer.appendChild(iconDiv);
    snackbarContainer.appendChild(snackbarMessageContainer)
  }else{
     //Dynamically set the snackbar message
    snackbarContainer.innerHTML = message;
  }

 

  var snackbarStyle = `
      #snackbar {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
  
    background: ${backgroundColor};
    color: ${textColor}; /* Set text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 50%; /* Center the snackbar */
    ${position}: 30px; /* 30px from the bottom */
}`;

  setVisualAnimation("fade", position)

  body.appendChild(snackbarContainer);
  style.textContent = snackbarStyle;
  head.appendChild(style);
}





/**
 * 
 * 
 * @param {string} message - Snackbar message
 * @param {string} backgroundColor - set snackbar backgroundcolor
 * @param {string} startColor - start color for gradient snackbar
 * @param {string} endColor - end color for gradient snackbar
 * @param {string} position - position of the snackbar
 * @param {boolean} animationType - set the snackbar display animation. Options are: fade,bounce,slide. Default: fade
 * @param {boolean} setIcon - decide whether to display icon or not
 * @param {string} iconType - Set icon type options are: info, question,warning,error
 * @param {string} iconBackgroundColor - set the icon backgroudcolor if snackbar icon is enabled
 * @param {string} iconInnerColor - Inner color of the icon, if available
 * 
 * 
 * 
 */

createGradientSnackBar(message,backgroundColor,startColor, endColor,position,animationType="fade",setIcon=false,iconType=null,iconBackgroundColor=null,iconInnerColor=null) {
  //Create a reference to the html head element
  var head = document.head;
  //Create a reference to the html body element
  var body = document.body;
  //
  var iconDiv =null;
  //Create a style element
  var style = document.createElement('style');
  var positionValue = "30px";

  // Create snackbar container
  var snackbarContainer = document.createElement('div');

  // Create Snack message container- it is optinal though
  var snackbarMessageContainer = document.createElement('div');

  // Create a div to hold the icon container
  iconDiv = hasIcon(setIcon,iconType,iconBackgroundColor,iconInnerColor);


  //Dynamically set snackbar attributes
  snackbarContainer.setAttribute("id", "snackbar");

  //Set the attributes for the message container
  snackbarMessageContainer.setAttribute("style","float: right;");

  if(iconDiv!==null){
      //Dynamically set the snackbar message
    snackbarMessageContainer.innerHTML = message;
    snackbarContainer.appendChild(iconDiv);
    snackbarContainer.appendChild(snackbarMessageContainer)
  }else{
     //Dynamically set the snackbar message
    snackbarContainer.innerHTML = message;
  }
  

  var snackbarStyle = `
  #snackbar {
visibility: hidden; /* Hidden by default. Visible on click */
min-width: 250px; /* Set a default minimum width */
margin-left: -125px; /* Divide value of min-width by 2 */

background: ${backgroundColor};
background: linear-gradient(135deg, ${startColor},${endColor});
color: #fff; /* White text color */
text-align: center; /* Centered text */
border-radius: 2px; /* Rounded borders */
padding: 16px; /* Padding */
position: fixed; /* Sit on top of the screen */
z-index: 1; 
left: 50%; /* Center the snackbar */
${position}: ${positionValue}; 
}`;

  setVisualAnimation(animationType, position)
 
  body.appendChild(snackbarContainer);
  style.textContent = snackbarStyle;
  head.appendChild(style);
}





/**
 * 
 * @param {boolean} showIcon 
 * @param {string} iconType
 * @param {string} backgroundColor
 * @param {string} innerColor
 */
hasIcon(showIcon,iconType,backgroundColor,innerColor) {

  if (showIcon) {
    var iconDiv = document.createElement('div');
    var icon = createIcon(iconType,backgroundColor,innerColor);
    iconDiv.setAttribute("style","float: left;");
    iconDiv.appendChild(icon);
    return iconDiv;
  }else{
    return null;
  }
}


/**
 * 
 * @param {string} animationType 
 * @param {string} position 
 * @returns 
 */

setVisualAnimation(animationType, position) {
  var head = document.head;
  var animation = null;
  var style = document.createElement("style");

  switch (animationType) {

    case "fade":
      animation = `
            
            @-webkit-keyframes fadein {
                from {${position}: 0; opacity: 0;}
                to {${position}: 30px; opacity: 1;}
            }
            
            @keyframes fadein {
    from {${position}: 0; opacity: 0;}
    to {${position}: 30px; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
    from {${position}: 30px; opacity: 1;}
    to {${position}: 0; opacity: 0;}
}

    @keyframes fadeout {
    from {${position}: 30px; opacity: 1;}
    to {${position}: 0; opacity: 0;}
            }      
            `;
      break;

    case "slide":
      break;

    case "bounce":
      animation = `

      @keyframes bounceIn {
	0% {
		animation-timing-function: linear;
		opacity: 0;
		transform: translateY(-230px);
	}

	38% {
		animation-timing-function: linear;
		opacity: 1;
		transform: translateY(0);
	}

	55% {
		animation-timing-function: linear;
		transform: translateY(-65px);
	}

	72% {
		animation-timing-function: linear;
		transform: translateY(0);
	}

	81% {
		animation-timing-function: linear;
		transform: translateY(-28px);
	}

	90% {
		animation-timing-function: linear;
		transform: translateY(0);
	}

	95% {
		animation-timing-function: linear;
		transform: translateY(-8px);
	}

	100% {
		animation-timing-function: linear;
		transform: translateY(1);
	}
}


@keyframes bounceOut {
	0% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	5% {
		animation-timing-function: ease-in;
		transform: translateY(-30px);
	}

	15% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	25% {
		animation-timing-function: ease-in;
		transform: translateY(-38px);
	}

	38% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	52% {
		animation-timing-function: ease-in;
		transform: translateY(-75px);
	}

	70% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	85% {
		opacity: 1;
	}

	100% {
		opacity: 0;
		transform: translateY(-250px);
	}
}

`;
      break;

    case "shake":
      break;

    case "drop":
      break;

    default:
      break;
  }
  style.textContent = animation;
  head.appendChild(style);
}



/**
 * 
 * @param {string} type 
 * @param {string} backgroundColor 
 * @param {string} innerColor 
 * @returns 
 */

createIcon(type, backgroundColor, innerColor) {


  const svgNS = "http://www.w3.org/2000/svg";
  const xlinkNS = "http://www.w3.org/1999/xlink";
  const svg = document.createElementNS(svgNS, "svg");




  switch (type) {

    case "info":
      svg.setAttribute("height", "30px");
      svg.setAttribute("width", "30px");
      svg.setAttribute("version", "1.1");
      svg.setAttribute("id", "Layer_1");
      svg.setAttribute("xmlns", svgNS);
      svg.setAttribute("xmlns:xlink", xlinkNS);
      svg.setAttribute("viewBox", "0 0 496.158 496.158");
      svg.setAttribute("xml:space", "preserve");
      svg.setAttribute("fill", "#000000");

      const g1 = document.createElementNS(svgNS, "g");
      g1.setAttribute("id", "SVGRepo_bgCarrier");
      g1.setAttribute("stroke-width", "0");

      const g2 = document.createElementNS(svgNS, "g");
      g2.setAttribute("id", "SVGRepo_tracerCarrier");
      g2.setAttribute("stroke-linecap", "round");
      g2.setAttribute("stroke-linejoin", "round");

      const g3 = document.createElementNS(svgNS, "g");
      g3.setAttribute("id", "SVGRepo_iconCarrier");

      const path1 = document.createElementNS(svgNS, "path");
      path1.setAttribute("style", "fill:" + backgroundColor + ";");
      path1.setAttribute("d", "M496.158,248.085c0-137.022-111.069-248.082-248.075-248.082C111.07,0.003,0,111.063,0,248.085 c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.158,385.086,496.158,248.085z");

      const gInner = document.createElementNS(svgNS, "g");

      const path2 = document.createElementNS(svgNS, "path");
      path2.setAttribute("style", "fill:" + innerColor + ";");
      path2.setAttribute("d", "M315.249,359.555c-1.387-2.032-4.048-2.755-6.27-1.702c-24.582,11.637-52.482,23.94-57.958,25.015 c-0.138-0.123-0.357-0.348-0.644-0.737c-0.742-1.005-1.103-2.318-1.103-4.015c0-13.905,10.495-56.205,31.192-125.719 c17.451-58.406,19.469-70.499,19.469-74.514c0-6.198-2.373-11.435-6.865-15.146c-4.267-3.519-10.229-5.302-17.719-5.302 c-12.459,0-26.899,4.73-44.146,14.461c-16.713,9.433-35.352,25.41-55.396,47.487c-1.569,1.729-1.733,4.314-0.395,6.228 c1.34,1.915,3.825,2.644,5.986,1.764c7.037-2.872,42.402-17.359,47.557-20.597c4.221-2.646,7.875-3.989,10.861-3.989 c0.107,0,0.199,0.004,0.276,0.01c0.036,0.198,0.07,0.5,0.07,0.933c0,3.047-0.627,6.654-1.856,10.703 c-30.136,97.641-44.785,157.498-44.785,182.994c0,8.998,2.501,16.242,7.432,21.528c5.025,5.393,11.803,8.127,20.146,8.127 c8.891,0,19.712-3.714,33.08-11.354c12.936-7.392,32.68-23.653,60.363-49.717C316.337,364.326,316.636,361.587,315.249,359.555z");

      const path3 = document.createElementNS(svgNS, "path");
      path3.setAttribute("style", "fill:" + innerColor + ";");
      path3.setAttribute("d", "M314.282,76.672c-4.925-5.041-11.227-7.597-18.729-7.597c-9.34,0-17.475,3.691-24.176,10.971 c-6.594,7.16-9.938,15.946-9.938,26.113c0,8.033,2.463,14.69,7.32,19.785c4.922,5.172,11.139,7.794,18.476,7.794 c8.958,0,17.049-3.898,24.047-11.586c6.876-7.553,10.363-16.433,10.363-26.393C321.646,88.105,319.169,81.684,314.282,76.672z");

      // Append elements in order
      gInner.appendChild(path2);
      gInner.appendChild(path3);
      g3.appendChild(path1);
      g3.appendChild(gInner);
      svg.appendChild(g1);
      svg.appendChild(g2);
      svg.appendChild(g3);

      return svg;


    case "warning":
      var head = document.head;

      svg.setAttribute("fill", backgroundColor);
      svg.setAttribute("width", "30px");
      svg.setAttribute("height", "30px");
      svg.setAttribute("viewBox", "0 0 256 256");
      svg.setAttribute("id", "Flat");
      svg.setAttribute("xmlns", svgNS);
      svg.setAttribute("stroke", backgroundColor);

      const wg1 = document.createElementNS(svgNS, "g");
      wg1.setAttribute("id", "SVGRepo_bgCarrier");
      wg1.setAttribute("stroke-width", "0");

      const wg2 = document.createElementNS(svgNS, "g");
      wg2.setAttribute("id", "SVGRepo_tracerCarrier");
      wg2.setAttribute("stroke-linecap", "round");
      wg2.setAttribute("stroke-linejoin", "round");

      const wg3 = document.createElementNS(svgNS, "g");
      wg3.setAttribute("id", "SVGRepo_iconCarrier");

      const wgOpacity = document.createElementNS(svgNS, "g");
      wgOpacity.setAttribute("opacity", "0.3");

      const wpath1 = document.createElementNS(svgNS, "path");

      wpath1.setAttribute("d", "M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z");

      const wpath2 = document.createElementNS(svgNS, "path");


      wpath2.setAttribute("d", "M120,144V112a8,8,0,0,1,16,0v32a8,8,0,0,1-16,0Zm116.76758,67.981a23.75438,23.75438,0,0,1-20.791,12.01123H40.02344A23.99994,23.99994,0,0,1,19.252,187.96973L107.22852,35.97705a24.00024,24.00024,0,0,1,41.543,0l87.97657,151.99219A23.75354,23.75354,0,0,1,236.76758,211.981Zm-13.86719-15.99658L134.92383,43.99219a8.00025,8.00025,0,0,0-13.84766,0h0L33.09961,195.98438a8.00079,8.00079,0,0,0,6.92383,12.00781H215.97656a8.00079,8.00079,0,0,0,6.92383-12.00781ZM128,168a12,12,0,1,0,12,12A12,12,0,0,0,128,168Z");


      wgOpacity.appendChild(wpath1);
      wg3.appendChild(wgOpacity);
      wg3.appendChild(wpath2);

      svg.appendChild(wg1);
      svg.appendChild(wg2);
      svg.appendChild(wg3);

      return svg;

    case "question":
      svg.setAttribute("fill", backgroundColor);
      svg.setAttribute("stroke", backgroundColor);
      svg.setAttribute("version", "1.1");
      svg.setAttribute("id", "Capa_1");
      svg.setAttribute("xmlns", svgNS);
      svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      svg.setAttribute("width", "30px");
      svg.setAttribute("height", "30px");
      svg.setAttribute("viewBox", "0 0 552.855 552.855");
      svg.setAttribute("xml:space", "preserve");

      const qg1 = document.createElementNS(svgNS, "g");
      qg1.setAttribute("id", "SVGRepo_bgCarrier");
      qg1.setAttribute("stroke-width", "0");

      const qg2 = document.createElementNS(svgNS, "g");
      qg2.setAttribute("id", "SVGRepo_tracerCarrier");
      qg2.setAttribute("stroke-linecap", "round");
      qg2.setAttribute("stroke-linejoin", "round");

      const qg3 = document.createElementNS(svgNS, "g");
      qg3.setAttribute("id", "SVGRepo_iconCarrier");

      const outerGroup = document.createElementNS(svgNS, "g");
      const innerGroup = document.createElementNS(svgNS, "g");

      const qpath = document.createElementNS(svgNS, "path");
      qpath.setAttribute("d", "M511.9,157.425c-3.408-25.845-17.057-53.513-40-76.463c-22.943-22.944-50.605-36.585-76.445-39.994 c-11.695-1.542-27.307-8.005-36.664-15.184C338.1,9.915,308.889,0,276.434,0s-61.665,9.915-82.351,25.784 c-9.357,7.179-24.97,13.642-36.665,15.184c-25.845,3.409-53.501,17.05-76.445,39.994c-22.944,22.95-36.592,50.619-40,76.463 c-1.536,11.695-8.005,27.295-15.178,36.653c-15.875,20.686-25.79,49.896-25.79,82.35c0,32.455,9.915,61.666,25.784,82.352 c7.179,9.357,13.642,24.963,15.178,36.652c3.409,25.844,17.056,53.514,40,76.463c22.944,22.943,50.606,36.586,76.445,39.994 c11.695,1.543,27.308,8.006,36.665,15.184c20.686,15.869,49.896,25.783,82.351,25.783c32.455,0,61.666-9.914,82.352-25.783 c9.357-7.178,24.969-13.641,36.664-15.184c25.846-3.408,53.502-17.051,76.445-39.994c22.943-22.949,36.592-50.619,40-76.463 c1.537-11.695,8.006-27.295,15.178-36.652c15.869-20.686,25.783-49.896,25.783-82.352c0-32.454-9.914-61.665-25.783-82.35 C519.9,184.72,513.438,169.12,511.9,157.425z M309.525,433.191c0,6.764-5.484,12.24-12.24,12.24h-39.652 c-6.756,0-12.24-5.477-12.24-12.24v-39.65c0-6.764,5.483-12.24,12.24-12.24h39.652c6.756,0,12.24,5.477,12.24,12.24V433.191z M384.502,243.674c-7.994,12.632-25.068,29.823-51.238,51.58c-13.543,11.26-21.951,20.312-25.221,27.16 c-2.447,5.135-3.904,13.305-4.344,24.51c-0.264,6.758-5.588,12.234-12.352,12.234h-33.72c-6.757,0-12.301-3.428-12.369-7.65 c-0.061-3.916-0.098-6.463-0.098-7.643c0-18.869,3.122-34.389,9.357-46.562c6.243-12.172,18.715-25.862,37.429-41.083 c18.717-15.214,29.896-25.184,33.545-29.896c5.631-7.454,8.445-15.673,8.445-24.651c0-12.479-4.975-23.164-14.945-32.069 c-9.969-8.904-23.391-13.354-40.281-13.354c-11.604,0-21.842,2.356-30.741,7.068c-5.973,3.164-14.406,10.355-18.476,15.753 c-4.541,6.022-8.219,13.268-11.034,21.738c-2.136,6.414-8.636,11.138-15.349,10.306l-34.584-4.29 c-6.714-0.833-11.897-6.995-10.698-13.648c3.978-22.032,15.098-41.114,33.354-57.24c21.53-19.021,49.792-28.531,84.786-28.531 c36.824,0,66.107,9.626,87.865,28.874c21.756,19.248,32.639,41.653,32.639,67.216 C396.484,217.658,392.488,231.048,384.502,243.674z");

      innerGroup.appendChild(qpath);
      outerGroup.appendChild(innerGroup);
      qg3.appendChild(outerGroup);
      svg.appendChild(qg1);
      svg.appendChild(qg2);
      svg.appendChild(qg3);

      return svg;
    case "error":
      svg.setAttribute("version", "1.1");
      svg.setAttribute("id", "Capa_1");
      svg.setAttribute("xmlns", svgNS);
      svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      svg.setAttribute("viewBox", "0 0 50 50");
      svg.setAttribute("xml:space", "preserve");
      svg.setAttribute("width", "30px");
      svg.setAttribute("height", "30px");
      svg.setAttribute("fill", innerColor);

      const eg1 = document.createElementNS(svgNS, "g");
      eg1.setAttribute("id", "SVGRepo_bgCarrier");
      eg1.setAttribute("stroke-width", "0");

      const eg2 = document.createElementNS(svgNS, "g");
      eg2.setAttribute("id", "SVGRepo_tracerCarrier");
      eg2.setAttribute("stroke-linecap", "round");
      eg2.setAttribute("stroke-linejoin", "round");

      const eg3 = document.createElementNS(svgNS, "g");
      eg3.setAttribute("id", "SVGRepo_iconCarrier");

      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("style", "fill:" + backgroundColor + ";");
      circle.setAttribute("cx", "25");
      circle.setAttribute("cy", "25");
      circle.setAttribute("r", "25");

      const polyline1 = document.createElementNS(svgNS, "polyline");
      polyline1.setAttribute(
        "style",
        "fill:none;stroke:"+innerColor+";stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
      );
      polyline1.setAttribute("points", "16,34 25,25 34,16");

      const polyline2 = document.createElementNS(svgNS, "polyline");
      polyline2.setAttribute(
        "style",
        "fill:none;stroke:"+innerColor+";stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
      );
      polyline2.setAttribute("points", "16,16 25,25 34,34");

      eg3.appendChild(circle);
      eg3.appendChild(polyline1);
      eg3.appendChild(polyline2);

      svg.appendChild(eg1);
      svg.appendChild(eg2);
      svg.appendChild(eg3);

      return svg;








    default:
      break;
  }



}








}
























var vJs = new VisualJs('snackbar');
window.myFunction = vJs.myFunction;
window.hasIcon = vJs.hasIcon;
window.createSnackBar = vJs.createSnackBar;
window.setVisualAnimation = vJs.setVisualAnimation;
window.createGradientSnackBar = vJs.createGradientSnackBar;