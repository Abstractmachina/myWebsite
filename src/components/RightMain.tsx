import PreviewObject from "../types/PreviewObject";

import preview_design from '../assets/matnet/fab_05.jpg';
import preview_code from '../assets/lbd/HiveMindClasses.jpg';
import preview_art from '../assets/barbican_00.jpg';
import { FC, useEffect, useRef, useState } from "react";
import { getCenterPos, getRandomPoint } from "../scripts/util";

type RightMainProps = {
    previewObj: PreviewObject;
}

type PreviewStyle = {
    left: number;
    top: number;
    backgroundImage: string;
    opacity:number;
}

type BannerStyle = {
    left: number;
    top: number;
    opacity:number;
}

const RightMain : FC<RightMainProps> = ({previewObj}) => {

    const designRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);
    const artRef = useRef<HTMLDivElement>(null);

    const [previewStyle, setPreviewStyle] = useState<PreviewStyle>({left:0, top:0, backgroundImage:'', opacity: 0});
    const [bannerStyle, setBannerStyle] = useState<BannerStyle>({left:0, top:0, opacity: 0});
    const [bannerContent, setBannerContent] = useState<string>('');

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
        
        let element:HTMLElement | null = null;
        let textContent:string = '';
        if (previewObj.category === "design") {
            element = designRef.current;    
        }
        else if (previewObj.category === "code") {
            element = codeRef.current;    
        }
        else if (previewObj.category === "art") {
            element = artRef.current;    
        }

        let rect: DOMRect | undefined = element?.getBoundingClientRect();

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

            if (rect)
            spawnBanner(rect, 200, previewObj.category);
        }

    }, [previewObj])

    function spawnBanner(spawnRect:DOMRect, range:number, content:string) {

            let {x, y} = getCenterPos(spawnRect)

            let {newX, newY} = getRandomPoint(x,y, range);

            let style: BannerStyle = {
                left :newX,
                top : newY,
                opacity:1,
            }

            setBannerContent(content);
            setBannerStyle(style);
    }

    return (
        <main className="mainContainer right">
            <div className="background"></div>
            <div className="circleContainer">
                <div className="circle circleDesign" ref={designRef}/>
                <div className="circle circleCode" ref={codeRef}/>
                <div className="circle circleArt" ref={artRef}/>
            </div>
            <div className="preview" style={previewStyle}></div>
            <div className="banner" style={bannerStyle}>{bannerContent}</div>
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