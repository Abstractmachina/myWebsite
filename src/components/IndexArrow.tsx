import React, {FC, ReactElement} from "react";


type IndexArrowProps = {
    clickHandler: () => void,
}
const IndexArrow : FC<IndexArrowProps> = ({clickHandler}): ReactElement => {

    function handleClick() {
        console.log("indexarrow clicked")
        clickHandler();
    }

    return (
        <a className="link" id="projectArrow" href="#" onClick={handleClick}>
            <span className="link__arrow">
                <span></span><span></span>
            </span>
            <span className="link__line"></span>
            <span className="link__text">projects</span>
        </a>
    );
};

export default IndexArrow;