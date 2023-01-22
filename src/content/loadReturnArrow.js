const loadReturnArrow = (parent) => {
    // variable for the namespace 
    const svgns = "http://www.w3.org/2000/svg";
    // make a simple rectangle
    let returnArrowSvg = document.createElementNS(svgns, 'svg');
    returnArrowSvg.setAttribute("x", "0");
    returnArrowSvg.setAttribute("y", "0");
    returnArrowSvg.setAttribute("width", "100");
    returnArrowSvg.setAttribute("height", "100");
    returnArrowSvg.setAttribute("fill", "#5cceee");

    const line = document.createElementNS(svgns, 'path');
    line.setAttribute('d', "M22,29.5h-9.5c-6.627,0-12-5.373-12-12V0");
    line.setAttribute('stroke-miterlimit', "10");
    line.setAttribute('fill', "none");
    line.setAttribute('stroke', "#000000");

    const dot = document.createElementNS(svgns, 'circle');
    dot.setAttribute('cx', "29.875");
    dot.setAttribute('cy', "29.125");
    dot.setAttribute('r', "7.875");
    dot.setAttribute('fill', "#000000");

    returnArrowSvg.append(line,dot);
    parent.appendChild(returnArrowSvg);

    return returnArrowSvg
}

export default loadReturnArrow;