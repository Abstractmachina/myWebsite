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

import '../styles/style_main.scss';
import '../styles/style_anim_projectArrow.scss';
import '../styles/style_anim_checkboxes.scss';
import '../styles/style_mobile.scss';
import '../styles/AboutTab.scss';
import '../styles/animations.scss';
import '../styles/IndexTab.scss';
import '../styles/ProjectPage.scss';
import '../styles/ContactTab.scss';
import PreviewObject from '../types/PreviewObject';

const MainController : FC  = () => {
    const _model : Model = new Model(loadProjects());
    
    function getCategories(): string[] | null {
        return _model.GetUniqueCategories();
    }

    /**
     * Build an array of ProjectInfo objects, providing general information of all loaded projects in the model.
     * @param categories 
     * @returns 
     */
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

    function buildPreview(id:string) : PreviewObject | undefined {

        let result:PreviewObject = {show:true, img:'', category:''}
        let project = _model.Projects?.get(id);
        if (!project) return undefined;

        //set category
        if (project.Categories.has("design")) {
            result.category = 'design';
        } 
        if (project.Categories.has("code")) {
            result.category = 'code';
        }
        if (project.Categories.has("art")) {
            result.category = 'art';

        }
       
        //set img
        let node = project.Content?.Head;
        while (node !== null && node) {
            let val = node.Value;
            //find first img or figure element and get src
            if (val.Tag === "img" && val.Attributes){

                result.img = val.Attributes['src'];
                // console.log("result done");
                // console.log(result);
                return result;
            }
            else if (val.Tag === "figure" && val.Children) {
                let child = val.Children[0];
                if (child.Attributes){
                    result.img = child.Attributes['src'];
                    // console.log("result done");
                    // console.log(result);
                    return result;
                }
            }
            node = node.Next;
        }
        return undefined;

    }

    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={
                    <Main 
                        getCategoriesHandler={getCategories} 
                        getProjectInfoHandler={getProjectInfo}
                        getContentHandler={getContent}
                        getPreviewData= {buildPreview}
                    />} 
                />
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