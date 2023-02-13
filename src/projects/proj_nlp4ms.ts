import Project from "../types/Project"
import {ContentElement as ce} from "../types/ContentElement";

//media
import home from '../assets/nlp4ms/home.png';
import freetxt_00 from '../assets/nlp4ms/gui_freetext_00.jpg';
import guiMain from '../assets/nlp4ms/gui_main.jpg';
import sampleSentiment from '../assets/nlp4ms/gui_sampleAnalysis.jpg';
import gui_userAnalysis from '../assets/nlp4ms/gui_userAnalysis_01.jpg';
import classDiagram from '../assets/nlp4ms/classDiagram.jpg';

const nlp4ms = () :Project => {
    let proj = new Project("NLP for Multiple Sclerosis", 2022, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("code");
    proj.addCategory("AI");

    proj.Subtitle = "Diagnosis Tool for Researchers working on Multiple Sclerosis";


    //HEADING
    proj.pushContents(
        ce.H1(proj.Title),
        ce.H2(proj.Subtitle),
        ce.H5('Project Year: ' + proj.Year),
        ce.H5('Project Location: ' + proj.Location),
        ce.H5('<a href=https://github.com/Abstractmachina/icc_NLP4MS>Github</a>', true)
    );

    //INTRO
    proj.pushContents(
        ce.H3("Introduction"),
        ce.P('Natural Language Processing for the Diagnosis of Multiple Sclerosis was a group research project done as part of the software engineering design course at Imperial. The app is designed to be used by researchers at the UK MS Register, where a large collection of unprompted free-text data (patient reported outcomes) was amassed over the years, but there has been no effective tool to process and take advantage of that information to date. Our app sought to provide a simple interface to extract meaningful free-text data in the medical research for the diagnosis of MS. There was no prior code base, as our group was the first to collaborate with the MS Register, however, the intention is to continue the development in subsequent years.'),
        ce.P('<strong>Team:</strong> Matt Barker, Colin Taylor, Taole Chen, Kaixuan Khoo, Ronan Patrick, Gus Levinson, Jack Cheng<br><strong>Supervisors:</strong> Chiraag Lala, Rod Middleton, Richard Nicholas<br>In collaboration with the <a href = "https://ukmsregister.org/">UK MS Register</a>', true)
    );

    //FEATURES
    proj.pushContents(
        ce.H3('Features'),
        ce.UL([
            new ce('li', 'Free-text analyzer for simple text processing, looking at frequency of terms and phrases, n-grams to identify trends and key terminologies used by patients'),
            new ce('li', 'Logistic regression classifier with bag-of-words model for predicting MS in patients based on their text prompts.'),
            new ce('li', 'Sentiment and Extendend Disability Status Analysis to identify trends in individual users and dempgraphics. Implementation of the VADER sentiment library.'),
            new ce('li', 'Custom CSV import capabalities, giving researchers more freedom in adapting the app to specific needs.'),
            new ce('li', 
    'Hexagonal Architecture, allowing the swapping of modules in the future, thus improving re-useability of the code base'),
    new ce('li', 
    'All modules limited to the NLTK platform, as code is hosted on secure servers of the MS Register.'),
        ]),
        ce.Figure(home, 'App Home Page'),
        ce.Figure(freetxt_00, 'Free text analysis page'),
        ce.Figure(guiMain, 'Main menu'),
        ce.Figure(sampleSentiment, 'Example of generated trend graphs for a group of patients'),
        ce.Figure(gui_userAnalysis, 'User sentiment analysis page'),
    );

  
    //TECHNOLOGIES
    proj.pushContents(
        ce.H3('Technologies'),
        ce.UL( [
            new ce('li', 
        'Python back-end'),
        new ce('li', 
        'tkinter front-end'),
        new ce('li', 
        'VADER sentiment analysis implementation'),
        new ce('li', 
        'Sci-kit Learn text classification implementation')
        ]),
        ce.Figure(classDiagram, 'Class Diagram'),
    );
    return proj;
};


export default nlp4ms;