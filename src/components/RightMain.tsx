import PreviewObject from "../types/PreviewObject";

import preview_design from '../assets/matnet/fab_05.jpg';
import preview_code from '../assets/lbd/HiveMindClasses.jpg';
import preview_art from '../assets/barbican_00.jpg';
import { FC, useEffect, useRef, useState } from "react";

type RightMainProps = {
    previewObj: PreviewObject;
}

type PreviewStyle = {
    left: number;
    top: number;
    backgroundImage: string;
    opacity:number;
}

const RightMain : FC<RightMainProps> = ({previewObj}) => {

    const designRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);
    const artRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    const [previewStyle, setPreviewStyle] = useState<PreviewStyle>({left:0, top:0, backgroundImage:'', opacity: 0})

    useEffect(()=> {

        if (!previewObj.show) {
            let style: PreviewStyle = {
                opacity : 0,
                backgroundImage : '',
                left:  0,
                top: 0
            }
            setPreviewStyle(style);
            return;
        }

        //get absolute position of circle in viewport
        let x:number|undefined, y:number|undefined;
        let rect: DOMRect | undefined = undefined;
        if (previewObj.category === "design") {
            rect = designRef.current?.getBoundingClientRect();            
        }
        else if (previewObj.category === "code") {
            rect = codeRef.current?.getBoundingClientRect();
        }
        else if (previewObj.category === "art") {
            rect = artRef.current?.getBoundingClientRect();
        }

        if (rect) {
            x = rect.left;
            y = rect.top;
        }

        if (x && y) console.log(x + ' ' + y);

        if (previewObj.show) {
            let style: PreviewStyle = {
                opacity : 1,
                backgroundImage : `url(${previewObj.img})`,
                left:  x ? x : 0,
                top: y ? y : 0
            }

            setPreviewStyle(style);
        }

    }, [previewObj])


    return (
        <main className="mainContainer right">
            <div className="background"></div>
            <div className="circleContainer">
                <div className="circle circleDesign" ref={designRef}/>
                <div className="circle circleCode" ref={codeRef}/>
                <div className="circle circleArt" ref={artRef}/>
            </div>
            <div className="preview" ref={previewRef} style={previewStyle}></div>
        </main>
    )
};

export default RightMain;


    // //===============   HOVER PREVIEW   ===========================
    // bindHoverProjects(handler) {
    //     const table = document.querySelector('.projectIndexTable');
    //     const rows = table.querySelectorAll('tr');

    //     for (let i = 0; i < rows.length; i++) {
    //         const row = rows[i];
    //         const categories = handler(row.id);
    //         row.addEventListener('mouseover', () => {
    //             this._callPreviewCircles(categories);
    //         });
    //         row.addEventListener('mouseout', () => {
    //             this._dismissPreviewCircles(categories);
    //         })
    //     }
    // }


// //populate preview circles with predefined graphics
    // _callPreviewCircles(categories) {
    //     if (categories.has("design")) {
    //         const container = this._rightMain.querySelector(".circleDesign");
    //         container.style.backgroundImage = "url(" + preview_design + ")";
    //         this._instantiateBanner(container, 200, 'DESIGN');
    //     }
    //     if (categories.has("code")) {
    //         const container = this._rightMain.querySelector(".circleCode");
    //         container.style.backgroundImage = "url(" + preview_code + ")";
    //         this._instantiateBanner(container, 200, 'CODE');
    //     }
    //     if (categories.has("art")) {
    //         const container = this._rightMain.querySelector(".circleArt");
    //         container.style.backgroundImage = "url(" + preview_art + ")";
    //         this._instantiateBanner(container, 200, 'ART');

    //     }
    // }

    // _dismissPreviewCircles(categories) {
    //     const circles = this._rightMain.querySelectorAll('.circle');
    //     for (let i = 0; i < circles.length; i++) {
    //         const c = circles[i];
    //         c.style.backgroundImage = null;
    //     }
    //     const banners = this._app.querySelectorAll('.banner');
    //     for (let i = 0 ; i < banners.length;i++) {
    //         this._app.removeChild(banners[i]);
    //     }
    // }

    // _instantiateBanner(spawnElement, range, content) {
    //     const banner = document.createElement('div');
    //         banner.textContent = content;
    //         banner.classList.add('banner');

    //         let {x, y} = getCenterPos(spawnElement)

    //         let {newX, newY} = getRandomPoint(x,y, range);

    //         banner.style.left = newX + 'px';
    //         banner.style.top = newY + 'px';

    //         this._app.append(banner);

    //         return banner;
    // }