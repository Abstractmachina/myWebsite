import React, { FC, ReactElement, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';


type ProjectFilterProps = {
    handleGetCategories:() => string[] | null,
}

const ProjectFilter : FC<ProjectFilterProps> = ( {handleGetCategories}):ReactElement => {

    const[categories, setCategories] = useState(handleGetCategories());

    
    // _prebuildIndexTab(projects) {
    //     const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
    //     this._removeAllChildren(filterContainer); //reset container


    //     this._createSelAllCheckbox(filterContainer);
    //     this._createSelNoneCheckbox(filterContainer);
        

    //     let categoryFilters = this._getUniqueCategories(projects);

    //     // create checkbox for each category
    //     categoryFilters.forEach(ca => {
    //         const newCat = this._createCategoryCheckbox(filterContainer, ca.toString());
    //         this._bindCategoryCheckbox(newCat, filterContainer, projects);
    //     });

    //     //pre-build index with everything
    //     this._buildIndexTable(projects, this._getUniqueCategories(projects));
    // }

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

    // _createSelAllCheckbox(parent) {
    //     const container = document.createElement('div');
    //     const selAll = document.createElement('input');
    //     selAll.setAttribute('type', 'checkbox');
    //     selAll.id = 'selAll';
    //     selAll.setAttribute('name', selAll.id);
    //     selAll.classList.add("tgl");
    //     selAll.classList.add("tgl-skewed");
    //     selAll.checked = true;
    //     const label = document.createElement('label');
    //     label.setAttribute("for", selAll.id);
    //     // lbl_selAll.textContent = 'All';
    //     label.classList.add("tgl-btn");
    //     label.setAttribute('data-tg-off','All');
    //     label.setAttribute('data-tg-on', 'All');
    //     label.style.width = 3 + 'em';
    //     container.append(selAll, label);
    //     parent.append(container);
    // }
    // _createSelNoneCheckbox(parent) {
    //     const container = document.createElement('div');
    //     const selNone = document.createElement('input');
    //     selNone.setAttribute('type', 'checkbox');
    //     selNone.id = 'selNone';
    //     selNone.setAttribute('name', selNone.id);
    //     selNone.classList.add("tgl");
    //     selNone.classList.add("tgl-skewed");
    //     selNone.checked = false;
    //     const label = document.createElement('label');
    //     label.setAttribute("for", selNone.id);
    //     label.classList.add("tgl-btn");
    //     label.setAttribute('data-tg-off','None');
    //     label.setAttribute('data-tg-on', 'None')
    //     label.style.width = 4 + 'em';
    //     container.append(selNone, label);
    //     parent.append(container);
    // }

    return (
        <div className='projectFilter'>projectFilter</div>
    )
};


export default ProjectFilter;