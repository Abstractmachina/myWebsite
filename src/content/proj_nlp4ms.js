import { Project } from "../Project"
import { createElementText, createImage } from "../util";

//media

const nlp4ms = () => {
    let proj = new Project("NLP for Multiple Sclerosis", 2022, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("code");
    proj.addCategory("AI");

    proj.Subtitle = "Diagnosis Tool for Researchers working on Multiple Sclerosis";


    const title = createElementText('h1', proj.Title);
    const subtitle = createElementText('h2', proj.Subtitle);
    const year = createElementText('h5', 'Project Year: ' + proj.Year);
    const location = createElementText('h5', 'Project Location: ' + proj.Location);

    const git = document.createElement('h5');
    git.innerHTML = '<a href=https://github.com/Abstractmachina/icc_NLP4MS>Repo</a>'
    //const cover = new Image();

    const introHeading = createElementText('h3', 
        "Introduction");
    const intro = createElementText('p', 
        'Natural Language Processing for the Diagnosis of Multiple Sclerosis was a group research project done as part of the software engineering design course at Imperial. The app is designed to be used by researchers at the UK MS Register, where a large collection of unprompted free-text data (patient reported outcomes) was amassed over the years, but there has been no effective tool to process and take advantage of that information to date. Our app sought to provide a simple interface to extract meaningful free-text data in the medical research for the diagnosis of MS. There was no prior code base, as our group was the first to collaborate with the MS Register, however, the intention is to continue the development in subsequent years.');

    const team = document.createElement('div');
    team.innerHTML = 
        '<strong>Team:</strong> Matt Barker, Colin Taylor, Taole Chen, Kaixuan Khoo, Ronan Patrick, Gus Levinson, Jack Cheng<br><strong>Supervisors:</strong> Chiraag Lala, Rod Middleton, Richard Nicholas<br>In collaboration with the <a href = "https://ukmsregister.org/">UK MS Register</a>';

    proj.pushContents(title, subtitle, year, location, git, introHeading, intro, team);

    const featuresHeading = createElementText("h3", 'Features');
    const featlist = document.createElement('ul');
    const feat0 = createElementText('li', 
        'Free-text analyzer for simple text processing, looking at frequency of terms and phrases, n-grams to identify trends and key terminologies used by patients')
    const feat1 = document.createElement('li');
    feat1.innerHTML = 
        'Logistic regression classifier with bag-of-words model for predicting MS in patients based on their text prompts.';
    const feat2 = createElementText('li', 
        'Sentiment and Extendend Disability Status Analysis to identify trends in individual users and dempgraphics. Implementation of the VADER sentiment library.');
    const feat3 = createElementText('li', 
        'Custom CSV import capabalities, giving researchers more freedom in adapting the app to specific needs.');
    const feat4 = createElementText('li', 
        'Hexagonal Architecture, allowing the swapping of modules in the future, thus improving re-useability of the code base');
    featlist.append(feat0, feat1, feat2, feat3, feat4);
    proj.pushContents(featuresHeading, featlist);

    const techHeading = createElementText("h3", 'Technologies');
    const techlist = document.createElement('ul');
    const tech0 = createElementText('li', 
        'Python')
    const tech1 = document.createElement('li');
    feat1.innerHTML = 
        'tkinter Front-end';
    const tech2 = createElementText('li', 
        'VADER sentiment analysis implementation');
    const tech3 = createElementText('li', 
        'VADER sentiment analysis implementation');
    
    const img_classDiagram = new Image();
    img_classDiagram.src = diagram_classes;
    techlist.append( tech0, tech1);
    proj.pushContents(techHeading, techlist);

    return proj;
};


export default nlp4ms;