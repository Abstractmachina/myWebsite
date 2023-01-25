{/* <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" viewBox="0 0 564 127" xml:space="preserve">
<path id="X" d="M53,1.2v16.7H36.2v108.3h-17V17.8H0V1.2H53z"/>
<path id="XMLID_17_" d="M96.6,126.1l-2.7-26.9H74.1l-2.7,26.9H53.9l13.8-125h32.6l13.8,125H96.6z M75.7,82.6h16.7l-4.1-40.8L86,20.2
	h-4.4l-1.9,21.6L75.7,82.6z"/>
<path id="XMLID_14_" d="M176.3,1.2v125h-52.4V1.2H176.3z M140.9,109.5h18.4V17.8h-18.4V109.5z"/>
<path id="XMLID_12_" d="M189.5,1.2h17v108.3h25.7v16.7h-42.7V1.2z"/>
<path id="XMLID_10_" d="M257.9,71.2v38.3h25v16.7h-42V1.2h42l-0.5,16.7h-24.5v36.7h18.4l-0.9,16.7H257.9z"/>
<path id="XMLID_8_" d="M370.4,42.5l-17,0V17.8h-16.7v91.6h16.7V81.6l17-0.1v44.6h-50.7V1.2h50.7V42.5z"/>
<path id="XMLID_6_" d="M415.6,1.2h17v125h-17V71.4l-17.3,0v54.7h-17V1.2h17v53.3l17.3-0.1V1.2z"/>
<path id="XMLID_4_" d="M464.8,71.2v38.3h25v16.7h-42V1.2h42l-0.5,16.7h-24.5v36.7h18.4l-0.9,16.7H464.8z"/>
<path id="XMLID_2_" d="M519.9,35.2l-1.5-12.6h-0.7v103.5h-17V1.2H529l14.8,89.9l1.5,12.6h0.7V1.2l17,0v124.9l-27.9,0L519.9,35.2z"/>
</svg> */}

{/* <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" viewBox="0 0 564 127" xml:space="preserve">
</svg> */}

const loadLogo = (parent) => {
    // variable for the namespace 
    const svgns = "http://www.w3.org/2000/svg";

    let shape = document.createElementNS(svgns, 'svg');
    shape.setAttribute("x", "-5");
    shape.setAttribute("y", "2px");
    shape.setAttribute("viewBox", "0 0 560 127");
    shape.setAttribute("fill", "#5cceee");

    const p0 = document.createElementNS(svgns, 'path');
    p0.setAttribute('d', "M53,1.2v16.7H36.2v108.3h-17V17.8H0V1.2H53z");

    const p1 = document.createElementNS(svgns, 'path');
    p1.setAttribute('d', "M96.6,126.1l-2.7-26.9H74.1l-2.7,26.9H53.9l13.8-125h32.6l13.8,125H96.6z M75.7,82.6h16.7l-4.1-40.8L86,20.2h-4.4l-1.9,21.6L75.7,82.6z");

    const p2 = document.createElementNS(svgns, 'path');
    p2.setAttribute('d', "M176.3,1.2v125h-52.4V1.2H176.3z M140.9,109.5h18.4V17.8h-18.4V109.5z");

    const p3 = document.createElementNS(svgns, 'path');
    p3.setAttribute('d', "M189.5,1.2h17v108.3h25.7v16.7h-42.7V1.2z");

    const p4 = document.createElementNS(svgns, 'path');
    p4.setAttribute('d', "M257.9,71.2v38.3h25v16.7h-42V1.2h42l-0.5,16.7h-24.5v36.7h18.4l-0.9,16.7H257.9z");

    const p5 = document.createElementNS(svgns, 'path');
    p5.setAttribute('d', "M370.4,42.5l-17,0V17.8h-16.7v91.6h16.7V81.6l17-0.1v44.6h-50.7V1.2h50.7V42.5z");

    const p6 = document.createElementNS(svgns, 'path');
    p6.setAttribute('d', "M415.6,1.2h17v125h-17V71.4l-17.3,0v54.7h-17V1.2h17v53.3l17.3-0.1V1.2z");

    const p7 = document.createElementNS(svgns, 'path');
    p7.setAttribute('d', "M464.8,71.2v38.3h25v16.7h-42V1.2h42l-0.5,16.7h-24.5v36.7h18.4l-0.9,16.7H464.8z");

    const p8 = document.createElementNS(svgns, 'path');
    p8.setAttribute('d', "M519.9,35.2l-1.5-12.6h-0.7v103.5h-17V1.2H529l14.8,89.9l1.5,12.6h0.7V1.2l17,0v124.9l-27.9,0L519.9,35.2z");

    shape.append(p0,p1,p2,p3,p4,p5,p6,p7,p8);
    parent.appendChild(shape);

    return shape
}

export default loadLogo;