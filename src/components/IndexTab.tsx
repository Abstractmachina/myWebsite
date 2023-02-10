import React, { FC, ReactElement, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';


type IndexProps = {
    show:boolean,
}

const IndexTab : FC<IndexProps> = ( {show}):ReactElement => {

    useEffect(() => {
        {console.log("Indextab: show= "+show)};
    })

    return (
       
        <CSSTransition
        in={show}
        timeout={0}
        classNames="slideFromBottom"
        unmountOnExit>
            <div className="projectIndex">
                <div className="topEdge"></div>
                <div className="projectFilter"></div>
                <div className="indexTableContainer">
                    <table className="projectIndexTable"></table>
                </div>
            </div>
        </CSSTransition>
    )
};


export default IndexTab;