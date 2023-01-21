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
