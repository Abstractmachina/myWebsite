export function isElement(o) {
    return (o instanceof Element);
}

//compare two html elements. must be html elements.
export function areEqual(a, b) {
    if (!isElement(a) || !isElement(b)) return false;
    if (a.nodeName !== b.nodeName) return false;
    if (a.textContent !== b.textContent) return false;
    return true;
}

export function createElementText(tag, text) {
    if (typeof tag !== 'string' || typeof text !== 'string') return null;
    const output = document.createElement(tag);
    output.textContent = text;
    return output;
}

export function createImage(source = '') {
    const img = new Image();
    img.src = source;
    return img;
}

export function createImages() {
    const output = [];
    for (let i = 0; i < arguments.length; i++) {
        const img = new Image();
        img.src = arguments[i];
        output.push(img);
    }

    return output;
}

export function createFigure(source = '', caption = '') {
    if (typeof caption !== 'string') throw new Error("caption must be a string!");

    const figure = document.createElement('figure');
    const img = new Image();
    img.src = source;
    const capt = document.createElement('figcaption');
    capt.textContent = 'fig: ' + caption;
    figure.append(img, capt);
    return figure;
}

export function createCompositeFigure(sources, caption) {
    if (!Array.isArray(sources)) throw new Error('Input is not an array!');
    if (typeof caption !== 'string') throw new Error("caption must be a string!");

    const figure = document.createElement('figure');
    const imageContainer = document.createElement('div');

    for (let i = 0; i < sources.length; i++) {
        const img_wrap = document.createElement('div');
        img_wrap.classList.add('imageWrapper');
        const img = new Image();
        img.src = sources[i];
        img_wrap.appendChild(img);
        imageContainer.appendChild(img_wrap);
    }
    const capt = document.createElement('figcaption');
    capt.textContent = 'fig: ' + caption;
    figure.classList.add('compositeFigure');

    figure.append(imageContainer, capt);
    return figure;

}


export function getRandomPoint(x,y,range) {
    let x_r = Math.random() * range - range/2;
    let y_r = Math.random() * range - range/2;

    let newX = x + x_r;
    let newY = y+ y_r;

    return {newX, newY};
}

export function getCenterPos(element) {
    var position = element.getBoundingClientRect();
        var x = (position.left + position.right)/2;
        var y = (position.top + position.bottom)/2;

        return {x, y};
}

export function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
