import React, { FC, ReactElement, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ProjectInfo } from '../types/interfaces';
import ProjectFilterGroup from './ProjectFilterGroup';
import ProjectIndexTable from './ProjectIndexTable';

type IndexProps = {
    show:boolean,
    getCategoriesHandler: () => string[] | null,
    getProjectInfoHandler: (categoryFilters: string[]) => ProjectInfo[],
    selectProjectHandler: (id:string) => void;
}

const IndexTabController : FC<IndexProps> = ( {show, getCategoriesHandler, getProjectInfoHandler, selectProjectHandler}):ReactElement => {

    
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

    function handleSelectProject(id:string) {
        selectProjectHandler(id);
    }

    return (
        <CSSTransition
            in={show}
            appear={true}
            timeout={200}
            classNames="slideFromBottom">
            <div className="projectIndex">
                <div className="topEdge"></div>
                <ProjectFilterGroup 
                    getCategoriesHandler={handleGetCategories}
                    filterRequestHandler={handleFilterRequest}/>
                <ProjectIndexTable projectInfo={projectInfo} selectProjectHandler={handleSelectProject}/>
            </div>
        </CSSTransition>
    )
};


export default IndexTabController;