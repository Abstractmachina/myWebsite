import React, { FC, ReactElement, useEffect, useState } from 'react';
// import { CSSTransition } from 'react-transition-group';
import CategoryCheckbox from './CategoryCheckBox';

export type CategoryCheckboxState = {
    id:string;
    checkIsOn:boolean;
}

type ProjectFilterProps = {
    getCategoriesHandler:() => string[] | null,
    filterRequestHandler: (cats:string[]) => void;
}

const ProjectFilterGroup : FC<ProjectFilterProps> = ( {getCategoriesHandler, filterRequestHandler}):ReactElement => {

    const[checkboxStates, setCheckboxStates] = useState(new Array<CategoryCheckboxState>());
    const[selAllState, setSelAllState] = useState({id:"all", checkIsOn:true} as CategoryCheckboxState);
    const [selNoneState, setSelNoneState] = useState({id: "none", checkIsOn:false} as CategoryCheckboxState);

    useEffect(() => {
        processCategories();
    }, []);

    function processCategories() {
        let categories = getCategoriesHandler();
        if (categories !== null) {
            let states = categories.map(c => {
                return {id:c, checkIsOn: true} as CategoryCheckboxState;
            });
            setCheckboxStates(states);
            buildFilterRequest();

        }
    }

    function buildFilterRequest() {
        let result = checkboxStates.filter(s => s.checkIsOn).map(s=>s.id);

        filterRequestHandler(result);
    }

    function categorySelected(id?:string) {

        let copiedStates = [...checkboxStates];

        let idx = copiedStates.findIndex(s => s.id === id);

        let isChecked = copiedStates[idx].checkIsOn;
        copiedStates[idx].checkIsOn = !isChecked;
        setCheckboxStates(copiedStates);

        turnOffSelNone();
        checkIfAllIsSelected();
        buildFilterRequest();
    }

    function allSelected(id?:string) {
        
        let copiedStates = [...checkboxStates];
        for (let i = 0; i < copiedStates.length;i++) {
            copiedStates[i].checkIsOn = true;
        }
        setCheckboxStates(copiedStates);
        turnOnSelAll();
        turnOffSelNone();
        buildFilterRequest();
    }
    function noneSelected(id?:string) {
        let copiedStates = [...checkboxStates];

        for (let i =0; i < copiedStates.length; i++) {
            copiedStates[i].checkIsOn = false;
        }
        setCheckboxStates(copiedStates);
        turnOnSelNone();
        turnOffSelAll();
        buildFilterRequest();
    }

    function checkIfAllIsSelected() {
        let allSelected = true;
        for (let i =0; i < checkboxStates.length; i++) {
            if (!checkboxStates[i].checkIsOn) {
                allSelected = false;
                break;
            }
        }

        if (allSelected) turnOnSelAll();
        else turnOffSelAll();

    }

    function turnOnSelNone() {
        let none = Object.assign(selNoneState) as CategoryCheckboxState;
        none.checkIsOn = true;
        setSelNoneState(none);
    }
    function turnOffSelNone() {
        let none = Object.assign(selNoneState) as CategoryCheckboxState;
        none.checkIsOn = false;
        setSelNoneState(none);
    }
    function turnOnSelAll() {
        let all = Object.assign(selAllState) as CategoryCheckboxState;
        all.checkIsOn = true;
        setSelAllState(all);
    }
    function turnOffSelAll() {
        let all = Object.assign(selAllState) as CategoryCheckboxState;
        all.checkIsOn = false;
        setSelAllState(all);
    }

    return (
        <div className='projectFilter'>
            <CategoryCheckbox 
            state = {selAllState}
            toggleCheckHandler={allSelected}/>
            <CategoryCheckbox 
            state = {selNoneState}
            toggleCheckHandler={noneSelected}/>
            {checkboxStates.map(state => {
                return (
                <CategoryCheckbox 
                state={state}
                toggleCheckHandler={categorySelected}
                key={state.id}/>
                )
            })}
        </div>
    )
};


export default ProjectFilterGroup;