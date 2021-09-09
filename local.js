let frame = document.getElementById('iframe');
frame.contentWindow.postMessage('https://preprod.aboshop.fr/clients/boops/');

function test() {
    var iframe = document.getElementById('iframe');
    var iframeContent = iframe.contentWindow.document;
    var content = document.getElementById('source');
    content.innerHTML = iframeContent.innerHTML;
};

window.onload = test;
