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



function modifyText() {
    alert('vczvze');
    console.log('daze');
}

const el = document.getElementById("#details-slider");
if (el) {
    console.log(el);
    el.addEventListener("click", modifyText, false);
};

/*$.ajax({
    //L'URL de la requête
    url: "une/url/au/choix",

    //La méthode d'envoi (type de requête)
    method: "GET",

    //Le format de réponse attendu
    dataType : "json",
})*/
