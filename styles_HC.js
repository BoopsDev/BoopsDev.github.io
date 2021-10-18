/*function initialisation() {
    console.log("Test test");
}

initialisation();*/

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

//let sectionNum = document.querySelector('#home-products');
var itemNum = document.getElementsByClassName("home-products-item");

window.onload = function () {
    alert("LOADED!");
    $("#products").load(function () {//function init() {
        alert('evzkmevze');
        /*for (var i = 0; i < itemNum.length; i++) {
            itemNum[i].addClass("section1-2");
        }*/
        console.log('evzkmevze');
    });
};


//document.addEventListener('loaded', init);

/*window.addEventListener('load', (event) => {
    let logo = document.querySelector('#home-products');

    logo.addEventListener('load', (event) => {
        console.log('Logo has been loaded!');
        alert('evzkmevze');
    });
});*/