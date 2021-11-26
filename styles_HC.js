
var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://127.0.0.1:5500/styles_HC.css';
    link.media = 'all';
    head.appendChild(link);
};

var iconSearch = document.getElementsByClassName(".navbar-default .search > a");
console.log(iconSearch.style.backgroundImage);
iconSearch.style.backgroundImage = "background-image", "url(https://www.hygienes.net/wp-content/themes/healthandco/img/logo.png) !important";