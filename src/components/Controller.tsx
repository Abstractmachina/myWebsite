import React, { FC, useState } from 'react';
import loadProjects from '../projects/loadProjects';
import Model from '../types/Model';

// import Model from './Model.js';
// import GUI from './GUI.js'
// import loadProjects from "./OLD/projects/loadProjects";


import GUI from './GUI';

const Controller : FC  = () => {
    const _model : Model = new Model(loadProjects());
    // let p = _model.Projects?.get("printFast1");
    // console.log(p?.Content?.toString());

    const [categories, setCategories] = useState(_model.GetUniqueCategories());
    
    function getCategories(): string[] | null {
        return _model.GetUniqueCategories();
    }


    // _view is the GUI component

    return (
            <GUI getCategoriesHandler={getCategories}/>
    );
} 
export default Controller;