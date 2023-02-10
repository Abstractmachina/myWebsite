import React, { FC, ReactElement, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ProjectFilterGroup from './ProjectFilterGroup';

type CategoryCheckBoxProps = {
    id: string;
}

const CategoryCheckbox : FC<CategoryCheckBoxProps> = ( {id}):ReactElement => {

    const [isChecked, setChecked] = useState(true);
        // _createCategoryCheckbox(parent, id) {
    //     const container = document.createElement('div');
    //     const newCat = document.createElement('input');
    //     newCat.setAttribute('type', 'checkbox');
    //     newCat.id = id;
    //     newCat.setAttribute('name', id);
    //     newCat.classList.add("tgl");
    //     newCat.classList.add("tgl-skewed");
    //     newCat.checked = true;
    //     const label = document.createElement('label');
    //     label.setAttribute("for", id);
    //     label.classList.add("tgl-btn");
    //     // label.textContent = id;
    //     label.setAttribute('data-tg-off',id);
    //     label.setAttribute('data-tg-on', id);
    //     // label.textContent = id;
    //     label.style.width = (id.length*0.7) + 'em';
    //     container.append(newCat, label);
    //     parent.append(container);

    //     return newCat;
    // }

    function toggleCheck(e:any) {
        console.log(e.target.htmlFor);
        setChecked(!isChecked);
    }

    return (
        <div className="checkboxContainer" id={id} onClick={toggleCheck}>
            <input 
            type="checkbox" 
            name={id} 
            id={id}
            className= "tgl" 
            checked={isChecked}></input>
            <label 
            htmlFor={id} 
            className="tgl-btn"
            data-tg-off={id}
            data-tg-on ={id}
            style={{width:  (id.length*0.7) + 'em'}}>
            </label>
        </div>
    )
};


export default CategoryCheckbox;