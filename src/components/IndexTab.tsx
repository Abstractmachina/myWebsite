import React, { FC, ReactElement, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ProjectFilter from './Index_ProjectFilter';


type IndexProps = {
    show:boolean,
    getCategoriesHandler: () => string[] | null
}

const IndexTab : FC<IndexProps> = ( {show, getCategoriesHandler}):ReactElement => {

    useEffect(() => {
    })

    // //========= INDEX TAB ======================

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
    // /**
    //  * populate table with preset headers (title, year, location, categories) and attach to parent
    //  * @returns empty <table> with headers.
    //  */
    // _initIndexHeaders(tableContainer) {
    //     this._removeAllChildren(tableContainer);
    //     const head_title = createElementText('th', "Title");
    //     const head_year = createElementText('th', 'Year');
    //     const head_loc = createElementText('th','Location');
    //     const head_cat = createElementText('th', 'Categories');
    //     tableContainer.append(head_title, head_year, head_loc, head_cat);
    // }

    function handleGetCategories(): string[] | null {
        return getCategoriesHandler();
    }

    return (
        <CSSTransition
        in={show}
        appear={true}
        timeout={200}
        classNames="slideFromBottom"
        >
            <div className="projectIndex">
                <div className="topEdge"></div>
                <ProjectFilter handleGetCategories={handleGetCategories}/>
                <div className="indexTableContainer">
                    <table className="projectIndexTable"></table>
                </div>
            </div>
        </CSSTransition>
    )
};


export default IndexTab;