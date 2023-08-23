function addImageToElement(elementClass, imageUrl) {
    var elements = document.getElementsByClassName(elementClass);
    for (var i = 0; i < elements.length; i++) {
        var image = new Image();
        image.src = imageUrl;
        elements[i].appendChild(image);
    }
}


addImageToElement('theatericon', 'https://jkt48.com/images/icon.cat1.png');
addImageToElement('eventicon', 'https://jkt48.com/images/icon.cat2.png');
addImageToElement('goodsicon', 'https://jkt48.com/images/icon.cat6.png');
addImageToElement('bdayicon', 'https://jkt48.com/images/icon.cat5.png');
addImageToElement('othericon', 'https://jkt48.com/images/icon.cat8.png');
addImageToElement('releaseicon', 'https://jkt48.com/images/icon.cat4.png');
addImageToElement('jkt48icon', 'https://jkt48webfans.netlify.app/icon.cat17_jkt48.png');
