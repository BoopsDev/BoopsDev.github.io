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
    link.href = '/styles_HC.css';
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

$("#home-products").on("change", function () {
    var products = $('.home-products-item');
    console.log("rc");
});


/*$(document).ready(function(){
    $.ajax({
        //L'URL de la requête
        url: "une/url/au/choix",

        //La méthode d'envoi (type de requête)
        method: "GET",

        //Le format de réponse attendu
        dataType : "json",
    })
});*/