 /* ================================= 
 Theme Switcher using localStorage 
    - Add above var manywho = {
 ================================= */
 let themeName = 'Default Theme';
 let themeUrl = "https://files-manywho-com.s3.amazonaws.com/55e9b01a-fc9e-4c66-aaa2-9360aea9eaaf/deftheme.css";
 let themeStorage = localStorage.getItem("theme");

 // custom theme
 if (themeStorage === 'custom') {
     themeUrl = "https://files-manywho-com.s3.amazonaws.com/55e9b01a-fc9e-4c66-aaa2-9360aea9eaaf/northeme.css";
     themeName = 'Norton Special Theme';
 };

 /* ================================= 
 Theme Switcher using localStorage
 - Add below  var options = {}; 
 ================================= */
 (function (manywho) {
     class themeSwitch extends React.Component {
         constructor(props) {
             super(props);

         }
         componentDidMount() {


             let customTheme = document.querySelector('.theme-custom');
             let defaultTheme = document.querySelector('.theme-default'); 

             defaultTheme.addEventListener('click', function () {
                 localStorage.remmoveItem('theme');
             });

             customTheme.addEventListener('click', function () {
                 localStorage.setItem('theme', 'custom');
             });

         }
         render() {
             return null;
         }

     }
    manywho.component.register('themeSwitch', themeSwitch);


 }(manywho));