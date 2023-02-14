import React, { FC, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import loadProjects from '../projects/loadProjects';
import ContentElement from '../types/ContentElement';
import { ProjectInfo } from '../types/interfaces';
import Model from '../types/Model';
import GUI from './GUI';

const Controller : FC  = () => {
    const _model : Model = new Model(loadProjects());
    // let p = _model.Projects?.get("printFast1");
    // console.log(p?.Content?.toString());

    const [categories, setCategories] = useState(_model.GetUniqueCategories());
    
    function getCategories(): string[] | null {
        return _model.GetUniqueCategories();
    }

    function getProjectInfo(categories: string[]) : ProjectInfo[] {
        let projects = _model.Projects;
        let infoObjects = new Array<ProjectInfo>();
        if (projects !== null) {
            projects.forEach((p, key) => {
                for (let i = 0; i < categories.length; i++) {
                    //if project has category, build info object and break categories loop, move on to next project
                    if (p.Categories.has(categories[i])){
                        let infoObj:ProjectInfo = {
                            id: key,
                            title: p.Title, 
                            year: p.Year, 
                            location: p.Location, 
                            categories: Array.from(p.Categories).map(c => c.slice(0,2)).join('.')}
                        infoObjects.push(infoObj);
                        break;
                    }
                }
            })
        }
        //sort projects descending by year
        infoObjects.sort((a, b) => b.year - a.year);

        return infoObjects;
    }

    function getContent(id:string) : ContentElement[] {
        let contentArray = new Array<ContentElement>();
        if (_model.Projects !== null) {
            let node = _model.Projects.get(id)?.Content?.Head;
            while (node !== null && node !== undefined){
                contentArray.push(node.Value);
                node = node.Next;
            }
        }
        return contentArray;
    }


    // _view is the GUI component

    return (
        <Router>
            <GUI 
            getCategoriesHandler={getCategories} 
            getProjectInfoHandler={getProjectInfo}
            getContentHandler={getContent}/>
        </Router>
    );
} 
export default Controller;