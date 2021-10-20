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


//var divPoss = document.getElementById("products");

// Select the node that will be observed for mutations
const targetNode = document.getElementById('products');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();


/*$(document).on('DOMNodeInserted', function (e) {
    var test = $('.home-products-item');
    console.log(test.length + " daz");
    if (e.target.id == "products") {
        //console.log(divPoss.scrollLeft);
        console.log(test.length);
    }
});*/

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