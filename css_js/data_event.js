// DATA BASE JAMAN MAJAPAHIT

function addImageToElement(elementClass, imageUrl) {
  var elements = document.getElementsByClassName(elementClass);
  for (var i = 0; i < elements.length; i++) {
    var image = new Image();
    image.src = imageUrl;
    elements[i].appendChild(image);
  }
}

// image Event Data 

addImageToElement("imageCMR", "https://jkt48webfans.netlify.app/poster.carameminumramune.jpg");

addImageToElement("imageEV", "https://jkt48.com/images/icon.cat2.png");

addImageToElement("imageTDBS", "https://images.genius.com/1eef0d901cdbb6d9969ffddcbc9e932c.1000x563x1.png");

addImageToElement("imageIB", "https://jkt48.com/images/icon.cat19.png");


addImageToElement("imageAAC", "https://jkt48webfans.netlify.app/poster.aturananticinta.jpg");

addImageToElement("imageBJ", "https://jkt48webfans.netlify.app/banner_banzai_jkt48.jpg")


//DATA NAMA EVENT

const bjText = "BANZAI JKT48";
const bjTextElements = document.querySelectorAll('p.bj-text');

function tambahkanBjText() {
    bjTextElements.forEach(paragraph => {
        paragraph.innerText = bjText;
    });
}

tambahkanBjText();

const cmrText = "Cara Meminum Ramune";
const cmrTextElements = document.querySelectorAll('p.cmr-text');

function tambahkanCmrText() {
    cmrTextElements.forEach(paragraph => {
        paragraph.innerText = cmrText;
    });
}

tambahkanCmrText();



const ibText = "Ingin Bertemu";
const ibTextElements = document.querySelectorAll('p.ib-text');

function tambahkanIbText() {
    ibTextElements.forEach(paragraph => {

        paragraph.innerText = ibText;
    });
}

tambahkanIbText();



const aacText = "Aturan Anti Cinta";
const aacTextElements = document.querySelectorAll('p.aac-text');

function tambahkanAacText() {
    aacTextElements.forEach(paragraph => {
        paragraph.innerText = aacText;
    });
}

tambahkanAacText();



const tdbsText = "Tunas di Balik Seragam";
const tdbsTextElements = document.querySelectorAll('p.tdbs-text');

function tambahkanTdbsText() {
    tdbsTextElements.forEach(paragraph => {
        paragraph.innerText = tdbsText;
    });
}

tambahkanTdbsText();
