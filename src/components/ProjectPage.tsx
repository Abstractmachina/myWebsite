import React, {FC, ReactElement, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ContentConverter from '../types/ContentConverter';
import ContentElement from '../types/ContentElement';

import {motion, useAnimationControls} from 'framer-motion';

type ProjectPageProps = {
    fetchProjectContent: (pid:string) => ContentElement[];
}

const ProjectPage : FC<ProjectPageProps> = ({fetchProjectContent}) : ReactElement => {

    const navigate = useNavigate();
    const animation = useAnimationControls()
    
    const {projectName} = useParams(); //gets proj id for fetching content

    //init empty array for content
    const [projectContent, setProjectContent] = useState(new Array<ContentElement>());

    //fetch project content on component mount
    useEffect(() => {
        if (projectName){
            const content = fetchProjectContent(projectName);
            setProjectContent(content);
        }

        backTabInSequence();
    }, []);


    //equivalent to pressing back button. 
    function handleBackToIndex() {
        navigate("../");
    }

    async function backTabInSequence() {
        await animation.start({opacity:1});
        animation.start({height: '2em',
        transition: {
            ease:'easeInOut',
            duration:0.5}});
    }


    return (
        <motion.div 
            className='projectPage'
            initial={{opacity:1}}
            animate={{opacity:1, transition: {duration: 0.5}}}
            exit={{opacity:0}}
        >
            <div className='scrollContainer'>
                <div className="projectContentContainer">
                    { projectContent.map( (c, i) => {
                        let el = ContentConverter.convertFromContentElement(c, i.toString());
                        return <motion.div
                            initial={{opacity: 0, translateY:100}}
                            animate={{opacity:1, translateY: 0}}
                            transition={{
                                duration:0.3, 
                                delay: 0.2 +  i*0.03}}
                        >{el}</motion.div>
                    }) }
                </div>
            </div>
            
            <motion.div 
                className='backToIndex' 
                onClick={handleBackToIndex}
                initial={{
                    opacity:1,
                    height: '60%'}}
                animate={animation}
                exit={{height: '100%'}}
                whileHover={{height:'3em', transition: {duration: 0.2}}}
            >
                <hr />
                Index
            </motion.div>
        </motion.div>
    );
};

export default ProjectPage; 