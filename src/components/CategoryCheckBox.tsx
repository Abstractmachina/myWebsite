import React, { FC, ReactElement, useEffect, useState } from 'react';
import { CategoryCheckboxState } from './ProjectFilterGroup';

type CategoryCheckBoxProps = {
    state: CategoryCheckboxState;
    toggleCheckHandler: (id?:string) => void;
}

const CategoryCheckbox : FC<CategoryCheckBoxProps> = ( {state, toggleCheckHandler}):ReactElement => {

    // const [isChecked, setChecked] = useState(initState);


    function toggleCheck(e:any) {
        toggleCheckHandler(state.id);
    }

    return (
        <div className="checkboxContainer" >
            <input 
            type="checkbox" 
            name={state.id} 
            id={state.id}
            className= "tgl" 
            checked={state.checkIsOn}
            onChange={toggleCheck}></input>
            <label 
            htmlFor={state.id} 
            className="tgl-btn"
            data-tg-off={state.id}
            data-tg-on ={state.id}
            style={{width:  (state.id.length*0.7) + 'em'}}>
            </label>
        </div>
    )
};


export default CategoryCheckbox;