import { AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadProjects from '../projects/loadProjects';
import ContentElement from '../types/ContentElement';
import { ProjectInfo } from '../types/interfaces';
import Model from '../types/Model';
import GUI from './GUI';

import Main from './Main';
import ProjectPage from './ProjectPage';

const MainController : FC  = () => {
    const _model : Model = new Model(loadProjects());
    
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

    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Main 
                getCategoriesHandler={getCategories} 
                getProjectInfoHandler={getProjectInfo}
                getContentHandler={getContent}/>} />
                <Route path="/:projectName" 
                    element={<ProjectPage fetchProjectContent={getContent}/>} />
            {/* <GUI 
            getCategoriesHandler={getCategories} 
            getProjectInfoHandler={getProjectInfo}
            getContentHandler={getContent}/> */}
            </Routes>

        </AnimatePresence>
    );
} 
export default MainController;