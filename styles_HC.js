function initialisation() {
    console.log("Test test");
}

initialisation();

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
}

var sectionNum = $("div.home-products-content");
sectionNum.onload = function () {
    $("div.home-products-content").children.addClass("section1-2");
    console.log("num test");
};