import { Project } from "../Project"
import { createElementText, createImage } from "../util";

//media
import diagram_classes from '../assets/lbd/HiveMindClasses.jpg';

const drones = () => {
    let proj = new Project("Learning-Based Design", 2022, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("additive manufacturing");
    proj.addCategory("code");
    proj.addCategory("AI");

    proj.Subtitle = "Implementing a Learning-Based Change Detection Framework for a Self-Corrective Behavioural Model in Aerial Additive Manufacturing | Imperial College Master Thesis";


    const title = createElementText('h1', proj.Title);
    const subtitle = createElementText('h2', proj.Subtitle);
    const year = createElementText('h5', 'Project Year: ' + proj.Year);
    const location = createElementText('h5', 'Project Location: ' + proj.Location);

    const cover = new Image();

    const introHeading = createElementText('h3', 
        "Introduction");
    const intro = createElementText('p', 
        'Learning-Based Design was my master thesis for the MSc in Computing at Imperial College London. Due to the confidential nature of the project, I am not able to publish any concrete results, however, I will include here some general information and technologies used. If there is interest, please feel free to contact me for further discussion while avoiding any sensitive topics :).');

    const team = document.createElement('div');
    team.innerHTML = '<strong>Team:</strong> Taole Chen, Yusuf Kaya, Lachlan Orr<br><strong>Advisor:</strong>Dr.   Basaran Bahadir Kocer<br>In collaboration with the <a href = "https://www.imperial.ac.uk/aeronautics/about/">Imperial Aeronautics Department</a> and <a href="https://www.empa.ch/web/empa/research-areas">EMPA</a>';

    proj.pushContents(title, subtitle, year, location, cover, introHeading, intro, team);

    //level 0 neighborhood
    const summaryHead = createElementText('h3', "Summary");
    // const neighsubHead = createElementText('h4', 'The Building as a Network')
    const sum0 = document.createElement('p');
    sum0.innerHTML = 
        'The project situates design in the context of Industry 4.0 and the radically new discipline of <a href="http://www.aerial-abm.com/">Aerial Additive Building Manufacturing</a>. With the proliferation of digital technologies in the AEC industry, the future trajectory of the industry is pointing towards autonomous, closed-loop robotic systems, creating the need to develop design methodologies that can engage with machine-centric processes.';
    const sum1 = createElementText('p', 
        'Aerial Additive Manufacturing (AAM) is an early-stage research that is developing a pioneering framework for multi-agent additive manufacturing with Unmanned Aerial vehicles (UAV). Currently, AAM does not have a design-to-fabrication workflow nor a dedicated design framework to interface with due to its infancy. To address this gap, my research aimed to develop the first stages of a design interface for multi-agent AAM. More specifically, a realtime, in-situ change detection and correction framework with a machine learning approach based on point clouds was developed and subsequently validated through physical experiments.');
    const neigh2 = createElementText('p', 
        'The change detection framework ');

    // const vid_zoomScales = createImage(anim_zoomScales_00);
    // const vid_growth_all = createImage(anim_growth_all);
    // const vid_growth_turntable = createImage(anim_growth_turntable);

    proj.pushContents(summaryHead, sum0, sum1, neigh2);

    const featuresHeading = createElementText("h3", 'Features');
    const featlist = document.createElement('ul');
    const feat0 = createElementText('li', 
        'Behavioural Model for AAM using point clouds as a data medium. Point clouds have the advantage of being an integral part of drone vision, so no additional translation is required between design and fabrication.')
    const feat1 = document.createElement('li');
    feat1.innerHTML = 
        'C# Wrapper for the popular C++ <a href="https://pointclouds.org/">Point Cloud Library</a> (pcl), a 2D/3D processing library that is popular among robotic development communities and integrates with the ROS framework.';
    const feat2 = createElementText('li', 
        'Machine Learning model implementing a custom random forest classifier with JSON export for ease of distribution. Other classifiers, such as a neural network, were also implemented, though not used for the final experiment.');
    const feat3 = createElementText('li', 
        'Tensor data object implementation in Grasshopper using Tensorflow.NET\'s Numpy, allowing multidimensional matrix operations in the GH environment.');
    const feat4 = createElementText('li', 
        'Stand-alone core C# library with testing that can be ported to other applications.');


    featlist.append(feat0, feat1, feat2, feat3, feat4);
    proj.pushContents(featuresHeading, featlist);

    const archheading = createElementText("h3", 'Architecture');
    const arch0 = createElementText('p', 'The code for the paper was implemented as a Grasshopper plug-in library. The core library is written in C# and care was taken to maintain a hexagonal architecture for future adaptability. Functionality for point clouds and machine learning is added with the adapter pattern so it can be replaced with updated modules. A controller library named HiveMindGH establishes a connection between the core library and Grasshopper’s visual interface.')
    
    const classDiagram = new Image();
    classDiagram.src = diagram_classes;

    proj.pushContents(archheading, arch0, classDiagram);

    // //level 1 home
    // const unitHead = createElementText('h3', 
    //     "Level 1 Home");
    // const unitSubHead = createElementText('h4', 
    //     'Home Is What You Do')
    // const unit0 = createElementText('p', 
    //     'On the next scale down, a customisation system for the individual home allows the architecture to respond to the daily patterns of each member of the community.');
    // const unit1 = createElementText('p', 
    //     'The actual units on site are a negotiated result where site constraints, unit requirements and shared activities come together. Using a relational model allows the unit to adapt to the site while still maintaining its important connections.');
    // const unit2 = createElementText('p', 
    //     'Level of details (LOD) are gradually added to the raw space distribution from the growth algorithm, turning abstract space into concrete architecture.');

    // const img_unitExample = createImage(unit00);
    // const img_unitLayout = createImage(unitlayout);
    // const vid_graphToArch = createImage(anim_graphToArch);

    // proj.pushContents(unitHead, unitSubHead, img_unitExample, unit0, img_unitLayout, unit1, unit2, vid_graphToArch);

    // //level 2 tectonics
    // const tectoHead = createElementText('h3', "Level 2 Tectonics");
    // const tectoSubHead = createElementText('h4', 'Home Is What You Do')
    // const tecto0 = createElementText('p', 
    //     'Additive Manufacturing was identified as the primary candidate for the construction system, as it offers the ability to manufacture free-form geometries while providing cost and time savings, and increased onsite safety for automated systems. A robotics-first approach was needed for the construction system to integrate into the overall framework.');

    // const tecto1 = createElementText('p', 
    //     'An onsite, segmented approach with multi-material printing was envisioned, as mono-material, continuous printing is argued to be impractical and undesirable for architectural applications, because it does not account for the multi-systemic nature of buildings. Autonomous, robotic units are deployed onsite ');


    // const tecto2 = createElementText('p', 
    //     'Clay is used as a proxy material for visco-elastic, cementitious materials (most relevantly concrete) to prototype design iterations and understand the limitations in real terms. A pneumatically-operated extrusion-end-effector was developed from scratch for the research and deployed with various industrial robotic arms for prototyping. Through rigorous testing, critical parameters were defined and informed the possible geometric design expressions.');

    // const vid_graphToConstruction = document.createElement('div');
    // vid_graphToConstruction.classList.add('projectVideoContainer');
    // vid_graphToConstruction.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative"><iframe src="https://player.vimeo.com/video/790832820?h=9845e92337&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From Graph to Construction"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
    // const vid_constructionSeq = document.createElement('div');
    // vid_constructionSeq.classList.add('projectVideoContainer');
    // vid_constructionSeq.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790839868?h=6b331f8a4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Construction Sequence"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
    // const vid_fabHighlights = document.createElement('div');
    // vid_fabHighlights.classList.add('projectVideoContainer');
    // vid_fabHighlights.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790880002?h=14aa7723cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Material Networks - Fabrication Highlights"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
    // const vid_experiments = document.createElement('div');
    // vid_experiments.classList.add('projectVideoContainer');
    // vid_experiments.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790912552?h=995c678eef&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="MatNet - Experiment Evaluation"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';

    // proj.pushContents(tectoHead, tectoSubHead, tecto0, vid_graphToConstruction, tecto1, vid_constructionSeq, tecto2, vid_fabHighlights, vid_experiments);


    // const featureList = document.createElement('ul');
    // const p1 = document.createElement('li');
    // p1.textContent = "Blending, boolean and plane trimming operations to manipulate field functions";
    // const p2 = document.createElement('li');
    // p2.textContent = "Multi-threading for calculation-intensive components";
    // const p3 = document.createElement('li');
    // p3.textContent = "Display components to visualize geometric output";
    // featureList.append(p1,p2,p3);
    // proj.pushContent(featureList);

    return proj;
};


export default drones;