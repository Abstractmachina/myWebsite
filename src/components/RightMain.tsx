import PreviewObject from "../types/PreviewObject";

import { FC, useEffect, useRef, useState } from "react";
import { getCenterPos, getRandomPoint } from "../scripts/util";

import {motion} from 'framer-motion'

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

        //if no preview, reset style and return
        if (!previewObj.show) {
            let style: PreviewStyle = {
                opacity : 0,
                backgroundImage : '',
                left:  0,
                top: 0
            }
            setPreviewStyle(style);
            _dismissBanner();
            return;
        }

        //get absolute position of circle in viewport
        let x:number|undefined, y:number|undefined;
        
        let element:HTMLElement | null = null;
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
        if (previewObj.show) {
            let style: PreviewStyle = {
                opacity : 1,
                backgroundImage : `url(${previewObj.img})`,
                left:  x ? x : 0,
                top: y ? y : 0
            }

            setPreviewStyle(style);

            if (rect) _spawnBanner(rect, 200, previewObj.category);
        }

    }, [previewObj])

    function _spawnBanner(spawnRect:DOMRect, range:number, content:string) {

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

    function _dismissBanner() {
        let style: BannerStyle = {
            left :0,
            top : 0,
            opacity:0,
        }

        setBannerContent('');
        setBannerStyle(style);
    }

    return (
        <motion.main 
            className="mainContainer right"
            initial={{bottom: '100%'}}
            animate={{bottom: 0,
                transition: {
                    ease: "easeOut",
                    duration: 0.4,
                    delay: 0.2
                },
                
            }}
        >
            <div className="background"></div>
            <div className="circleContainer">
                <div className="circle circleDesign" ref={designRef}/>
                <div className="circle circleCode" ref={codeRef}/>
                <div className="circle circleArt" ref={artRef}/>
            </div>
            <div className="preview" style={previewStyle}></div>
            <div className="banner" style={bannerStyle}>{bannerContent}</div>
        </motion.main>
    )
};

export default RightMain;