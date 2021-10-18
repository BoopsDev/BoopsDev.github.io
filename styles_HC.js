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

/*window.onload = function () {
    $('#home-products .home-products-item:nth-child(odd)').addClass('.section1-2');
};*/

//document.addEventListener('loaded', init);

/*window.addEventListener('load', (event) => {
    let logo = document.querySelector('#home-products');

    logo.addEventListener('load', (event) => {
        console.log('Logo has been loaded!');
        alert('evzkmevze');
    });
});*/

//document.getElementById("home-products").onload = function () { myFunction() };
var loadMessage = $('#loadMessage');

if (loadMessage.css("display", "none")) {
    console.log('de');
};

function myFunction() {
    var products = $('#home-products .home-products-item');
    console.log(products.length)
};