import React, {FC, ReactElement} from 'react'
import { CSSTransition } from 'react-transition-group';
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
                    { 
                    content.map( c=> {
                        let props: Record<string, any> = { };
                        if (c.Tag === 'img') props.src = (c.Attributes) ? c.Attributes["src"] : '';

                        const el = React.createElement(c.Tag, {}, c.Content );
                        el.key = idx++;
                        
                        return el;
                        // switch (c.Tag) {
                        //     case 'p':
                        //         return (<p></p>)
                        // }
                        
                    }) }
                </div>
            </div>
        </CSSTransition>
    );
};

export default ProjectTab; 