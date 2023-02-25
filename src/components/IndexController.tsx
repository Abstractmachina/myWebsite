import React, { FC, ReactElement, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ProjectInfo } from '../types/interfaces';
import ProjectFilterGroup from './ProjectFilterGroup';
import IndexTable from './IndexTable';

import {motion} from 'framer-motion'

type IndexProps = {
    show:boolean,
    getCategoriesHandler: () => string[] | null,
    getProjectInfoHandler: (categoryFilters: string[]) => ProjectInfo[],
    selectProjectHandler: (id:string) => void;
    propagateCallPreview: (id:string) => void;
    propagateDismissPreview: () => void;
}

const variants = {
    closed: { top: '100%' },
    open: { top: '40%' },
}

const IndexTabController : FC<IndexProps> = ( {show, getCategoriesHandler, getProjectInfoHandler, selectProjectHandler, propagateCallPreview, propagateDismissPreview}):ReactElement => {

    
    const [projectInfo, setProjectInfo] = useState(new Array<ProjectInfo>());

    useEffect(() => {
        let allCategories = getCategoriesHandler();

        if (allCategories!== null) {
            let allProjects = getProjectInfoHandler(allCategories);
            setProjectInfo(allProjects);
        }
    }, [])

    function handleGetCategories(): string[] | null {
        return getCategoriesHandler();
    }

    function handleFilterRequest(filters:string[]): void {
        let infoObjects = getProjectInfoHandler(filters);
        setProjectInfo(infoObjects);
    }

    function CallPreviewHandler(id:string) {
        propagateCallPreview(id);
    }

    function DismissPreviewHandler() {
        propagateDismissPreview();
    }

    return (
        <motion.div className="projectIndex"
            animate={show ? "open" : "closed"}
            variants={variants}
        >
            <div className="topEdge"></div>
            <ProjectFilterGroup 
                getCategoriesHandler={handleGetCategories}
                filterRequestHandler={handleFilterRequest}/>
            <IndexTable projectInfo={projectInfo} propagateCallPreview={propagateCallPreview} propagateDismissPreview={DismissPreviewHandler}/>
        </motion.div>
    )
};


export default IndexTabController;