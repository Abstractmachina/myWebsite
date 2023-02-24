import React, {FC, ReactElement, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ContentConverter from '../types/ContentConverter';
import ContentElement from '../types/ContentElement';

type ProjectPageProps = {
    fetchProjectContent: (pid:string) => ContentElement[];
}

const ProjectPage : FC<ProjectPageProps> = ({fetchProjectContent}) : ReactElement => {

    const navigate = useNavigate();
    
    const {projectName} = useParams(); //gets proj id for fetching content

    //init empty array for content
    const [projectContent, setProjectContent] = useState(new Array<ContentElement>());

    //fetch project content on component mount
    useEffect(() => {
        if (projectName){
            const content = fetchProjectContent(projectName);
            setProjectContent(content);
        }

    }, []);

    //equivalent to pressing back button. 
    //TODO: figure out how to restore state with index called
    function handleBackToIndex() {
        navigate("../");
    }

    let idx = 0;
    return (
        <div className='projectPage'>
            <div className="projectContentContainer">
                { projectContent.map( c => {
                    idx++;
                    return ContentConverter.convertFromContentElement(c, idx.toString());
                    
                }) }
            </div>
            
            <div className='backToIndex' onClick={handleBackToIndex}>
                <hr style={{
                    color: "black",
                    backgroundColor: "black",
                    height: 1
                }}/>
                Index
            </div>
        </div>
        // <CSSTransition
        //     in={show}
        //     appear={true}
        //     timeout={200}
        //     classNames="slideFromRight"
        //     unmountOnExit={true}>
        //     <div className="projectTab">
        //         <div className="leftEdge">close</div>
        //         <div className="projectContentContainer">
        //             { content.map( c => {
        //                 idx++;
        //                 return ContentConverter.convertFromContentElement(c, idx.toString());
                        
        //             }) }
        //         </div>
        //     </div>
        // </CSSTransition>
    );
};

export default ProjectPage; 