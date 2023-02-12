import React, {FC, ReactElement} from 'react'
import { CSSTransition } from 'react-transition-group';
import ContentConverter from '../types/ContentConverter';
import ContentElement from '../types/ContentElement';
import Project from '../types/Project';

type ProjectTabProps = {
    show:boolean;
    content: ContentElement[];
}

const ProjectTab : FC<ProjectTabProps> = ({show, content}) : ReactElement => {
    let idx = 0;
    return (
        <CSSTransition
            in={show}
            appear={true}
            timeout={200}
            classNames="slideFromRight">
            <div className="projectTab">
                <div className="leftEdge">close</div>
                <div className="projectContentContainer">
                    { content.map( c => {
                        return ContentConverter.convertReact(c, idx.toString());
                        idx++;
                    }) }
                </div>
            </div>
        </CSSTransition>
    );
};

export default ProjectTab; 