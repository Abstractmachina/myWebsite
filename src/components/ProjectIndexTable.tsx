import React, { FC, ReactElement, useEffect, useState } from 'react';
import { ProjectInfo } from '../types/interfaces';

type IndexTableProps = {
    projectInfo: ProjectInfo[];
}

const ProjectIndexTable : FC<IndexTableProps> = ( {projectInfo}):ReactElement => {

    return (
        <div className="indexTableContainer">
            <table className="projectIndexTable">
                <thead>
                    <tr>
                        <th>Year</th><th>Title</th><th>Location</th><th>Categories</th> 
                    </tr>
                </thead>
                <tbody>
                    {projectInfo.map(p => {
                        return (
                            <tr id={p.id}>
                                <td>{p.year}</td>
                                <td>{p.title}</td>
                                <td>{p.location}</td>
                                <td>{p.categories}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};

    // //========= INDEX TAB ======================

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

    // _buildIndexTable(projects, categoryFilters) {

    //     if (!Array.isArray(categoryFilters)) throw "Error: parameter is not of type Array";

    //     //sort projects descending by year
    //     projects.sort((a, b) => b.year - a.year);

    //     let parent = document.querySelector(".projectIndexTable");
    //     this._initIndexHeaders(parent);

    //     for (let project of projects) {
    //         for (let c of project.categories) {
    //             if (categoryFilters.includes(c)) {
    //                 const newRow = document.createElement('tr');

    //                 const rowTitle = createElementText("td", project.title);
    //                 const rowYear = createElementText('td', project.year.toString());
    //                 const rowLoc = createElementText('td', project.location);
    //                 const tags = document.createElement('td');
    //                 tags.textContent = Array.from(project.categories).map(c => {return c.slice(0,2)}).join('.');
    //                 newRow.id = project.id;

    //                 newRow.append(rowYear, rowTitle, rowLoc, tags);
    //                 parent.appendChild(newRow);
    //                 break;
    //             }
    //         }
    //     }   
    // }


export default ProjectIndexTable;