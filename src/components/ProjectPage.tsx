import React, {FC, ReactElement, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ContentConverter from '../types/ContentConverter';
import ContentElement from '../types/ContentElement';

import {motion} from 'framer-motion';

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
    function handleBackToIndex() {
        navigate("../");
    }

    let idx = 0;
    return (
        <motion.div 
            className='projectPage'
            initial={{opacity:0}}
            animate={{opacity:1, transition: {duration: 0.5}}}
            exit={{opacity:0}}
        >
            <div className='scrollContainer'>
                <div className="projectContentContainer">
                    { projectContent.map( c => {
                        idx++;
                        return ContentConverter.convertFromContentElement(c, idx.toString());
                        
                    }) }
                </div>
            </div>
            
            <motion.div className='backToIndex' onClick={handleBackToIndex}
                whileHover={{height:'3em', transition: {duration: 0.2}}}
            >
                <hr />
                Index
            </motion.div>
        </motion.div>
    );
};

export default ProjectPage; 