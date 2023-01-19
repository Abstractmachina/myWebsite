import { Project } from "../Project"
import { createElementText, createImage } from "../util";

//media
import render_facade from '../assets/matnet/render_facade.jpg';
import anim_zoomScales_00 from '../assets/matnet/anim_zoomScales_00.gif';
import anim_growth_all from '../assets/matnet/anim_growth_all.gif';
import anim_growth_turntable from '../assets/matnet/anim_growth_turntable.gif';
import unit00 from '../assets/matnet/unit_00.jpg';
import unitlayout from '../assets/matnet/unit_layout.jpg'
import anim_graphToArch from '../assets/matnet/anim_graphToArch.gif'

const matnet = () => {
    let proj = new Project("Material Networks", 2018, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");

    proj.Subtitle = "Mass-Customized Housing for Cohesive Communities. AADRL Master Thesis"


    const title = createElementText('h1', proj.Title);
    const subtitle = createElementText('h2', proj.Subtitle);
    const year = createElementText('h5', 'Project Year: ' + proj.Year);
    const location = createElementText('h5', 'Project Location: ' + proj.Location);

    const cover = new Image();
    cover.src = render_facade;

    const introHeading = createElementText('h3', 
        "Introduction");
    const intro = createElementText('p', 
        'Material Networks is the culmination of my research at the Architectural Association - Design Research Lab. The project engages with the rapid digitization of the built environment and looks at how design agency can adapt to a fully automated, computer-driven world while bringing the human element to the forefront of the discourse. Material Networks proposes a negotiated communal housing system that provides custom-tailored neighborhoods to cohesive communities tied by their shared cultures, economies and governance. Building-scale additive manufacturing is investigated as an automated fabrication technology that can deliver mass-customized, integrated dwellings through a generative AI framework.');

    const team = document.createElement('p');
    team.innerHTML = 'Design Team: Taole Chen, Suchart (Bon) Ouypornchaisakul, Jeffrey Widjaja<br>Tutors: Shajay Bhooshan, Alicia Nahmad<br><a href="https://drl.aaschool.ac.uk/">AADRL</a>';

    proj.pushContents(title, subtitle, year, location, cover, introHeading, intro, team);

    //level 0 neighborhood
    const neighHead = createElementText('h3', "Level 0 Neighborhood");
    const neighsubHead = createElementText('h4', 'The Building as a Network')
    const neigh0 = createElementText('p', 
        "Co-opting techniques from complex network analysis, at the neighborhood level, the research looks into developing an operational tool for extracting meaningful spatial relationship from the social network of a community.");
    const neigh1 = createElementText('p', 
        'The social relationships of a given community are captured in a relational roster in the form of an encoded data matrix, allowing computers to easily read and process the information. The data matrix is subsequently used to construct a network graph. The graph is useful because it captures multi-scalar information in a single, cohesive data structure, opening up computational ways of engaging with the information.');
    const neigh2 = createElementText('p', 
        'The graph is given agency by deploying a rule-based growth algorithm on the project site. A path-finding logic is used to generate schemes, with specific rule determining the resulting character of the neighborhood while ensuring the computed spatial relationships are maintained. The decoupling of formal agency from the hands of the human designer signifies a crucial step towards a fully autonomous construction framework. Yet, with the rule-based system, designers are still given control without the possibility to resort to the sculpting of form, thus prioritizing a logic-driven approach, rather than aesthetics.');

    const vid_zoomScales = createImage(anim_zoomScales_00);
    const vid_growth_all = createImage(anim_growth_all);
    const vid_growth_turntable = createImage(anim_growth_turntable);

    proj.pushContents(neighHead, neighsubHead, neigh0, neigh1, vid_zoomScales, neigh2, vid_growth_all, vid_growth_turntable);

    //level 1 home
    const unitHead = createElementText('h3', 
        "Level 1 Home");
    const unitSubHead = createElementText('h4', 
        'Home Is What You Do')
    const unit0 = createElementText('p', 
        'On the next scale down, a customisation system for the individual home allows the architecture to respond to the daily patterns of each member of the community.');
    const unit1 = createElementText('p', 
        'The actual units on site are a negotiated result where site constraints, unit requirements and shared activities come together. Using a relational model allows the unit to adapt to the site while still maintaining its important connections.');
    const unit2 = createElementText('p', 
        'Level of details (LOD) are gradually added to the raw space distribution from the growth algorithm, turning abstract space into concrete architecture.');

    const img_unitExample = createImage(unit00);
    const img_unitLayout = createImage(unitlayout);
    const vid_graphToArch = createImage(anim_graphToArch);

    proj.pushContents(unitHead, unitSubHead, img_unitExample, unit0, img_unitLayout, unit1, unit2, vid_graphToArch);

    //level 2 tectonics
    const tectoHead = createElementText('h3', "Level 2 Tectonics");
    const tectoSubHead = createElementText('h4', 'Home Is What You Do')
    const tecto0 = createElementText('p', 
        'Additive Manufacturing was identified as the primary candidate for the construction system, as it offers the ability to manufacture free-form geometries while providing cost and time savings, and increased onsite safety for automated systems. A robotics-first approach was needed for the construction system to integrate into the overall framework.');

    const tecto1 = createElementText('p', 
        'An onsite, segmented approach with multi-material printing was envisioned, as mono-material, continuous printing is argued to be impractical and undesirable for architectural applications, because it does not account for the multi-systemic nature of buildings. Autonomous, robotic units are deployed onsite ');


    const tecto2 = createElementText('p', 
        'Clay is used as a proxy material for visco-elastic, cementitious materials (most relevantly concrete) to prototype design iterations and understand the limitations in real terms. A pneumatically-operated extrusion-end-effector was developed from scratch for the research and deployed with various industrial robotic arms for prototyping. Through rigorous testing, critical parameters were defined and informed the possible geometric design expressions.');

    const vid_graphToConstruction = document.createElement('div');
    vid_graphToConstruction.classList.add('projectVideoContainer');
    vid_graphToConstruction.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative"><iframe src="https://player.vimeo.com/video/790832820?h=9845e92337&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From Graph to Construction"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
    const vid_constructionSeq = document.createElement('div');
    vid_constructionSeq.classList.add('projectVideoContainer');
    vid_constructionSeq.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790839868?h=6b331f8a4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Construction Sequence"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
    const vid_fabHighlights = document.createElement('div');
    vid_fabHighlights.classList.add('projectVideoContainer');
    vid_fabHighlights.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790880002?h=14aa7723cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Material Networks - Fabrication Highlights"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
    const vid_experiments = document.createElement('div');
    vid_experiments.classList.add('projectVideoContainer');
    vid_experiments.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790912552?h=995c678eef&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="MatNet - Experiment Evaluation"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';

    proj.pushContents(tectoHead, tectoSubHead, tecto0, vid_graphToConstruction, tecto1, vid_constructionSeq, tecto2, vid_fabHighlights, vid_experiments);


    const featureList = document.createElement('ul');
    const p1 = document.createElement('li');
    p1.textContent = "Blending, boolean and plane trimming operations to manipulate field functions";
    const p2 = document.createElement('li');
    p2.textContent = "Multi-threading for calculation-intensive components";
    const p3 = document.createElement('li');
    p3.textContent = "Display components to visualize geometric output";
    featureList.append(p1,p2,p3);
    proj.pushContent(featureList);

    return proj;
};


export default matnet;