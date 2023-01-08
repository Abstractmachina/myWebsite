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