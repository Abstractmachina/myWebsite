import Project from "../types/Project"
import {ContentElement as ce} from "../types/ContentElement";
// import { createElementText, createImage } from "../scripts/util";

//media
import render_facade from '../assets/matnet/render_facade.jpg';
import render_interior from '../assets/matnet/render_interior.jpg';
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
    proj.addCategory("fabrication");

    proj.Subtitle = "Mass-Customized Housing for Cohesive Communities. AADRL Master Thesis"

    proj.pushContents(
        new ce('h1', proj.Title, false),
        new ce('h2', proj.Subtitle, false),
        new ce('h5', 'Project Year: ' + proj.Year, false),
        new ce('h5', 'Project Location: ' + proj.Location, false),
        ce.Image(render_facade),
        new ce('h3', "Introduction", false),
        new ce('p', 
            'Material Networks is the culmination of my research at the Architectural Association - Design Research Lab. The project engages with the rapid digitization of the built environment and looks at how design agency can adapt to a fully automated, computer-driven world while bringing the human element to the forefront of the discourse. Material Networks proposes a negotiated communal housing system that provides custom-tailored neighborhoods to cohesive communities tied by their shared cultures, economies and governance. Building-scale additive manufacturing is investigated as an automated fabrication technology that can deliver mass-customized, integrated dwellings through a generative AI framework.', 
            false
        ),
        new ce('p', 
            'Design Team: Taole Chen, Suchart (Bon) Ouypornchaisakul, Jeffrey Widjaja<br>Tutors: Shajay Bhooshan, Alicia Nahmad<br><a href="https://drl.aaschool.ac.uk/">AADRL</a>', 
            true),
        ce.Image(render_interior)
    )

    //level 0 neighborhood
    proj.pushContents(
        new ce('h3', "Level 0 Neighborhood", false),
        new ce('h4', 'The Building as a Network', false),
        new ce('p', 
            "Co-opting techniques from complex network analysis, at the neighborhood level, the research looks into developing an operational tool for extracting meaningful spatial relationship from the social network of a community.", false),
            new ce('p', 
            'The social relationships of a given community are captured in a relational roster in the form of an encoded data matrix, allowing computers to easily read and process the information. The data matrix is subsequently used to construct a network graph. The graph is useful because it captures multi-scalar information in a single, cohesive data structure, opening up computational ways of engaging with the information.', false),
            new ce('p', 
            'The graph is given agency by deploying a rule-based growth algorithm on the project site. A path-finding logic is used to generate schemes, with specific rule determining the resulting character of the neighborhood while ensuring the computed spatial relationships are maintained. The decoupling of formal agency from the hands of the human designer signifies a crucial step towards a fully autonomous construction framework. Yet, with the rule-based system, designers are still given control without the possibility to resort to the sculpting of form, thus prioritizing a logic-driven approach, rather than aesthetics.',false),
        ce.Image(anim_zoomScales_00),
        ce.Image(anim_growth_all),
        ce.Image(anim_growth_turntable)
    );

    //level 1 home
    proj.pushContents(
        ce.H3("Level 1 Home"),
        ce.H4('Home Is What You Do'),
        ce.P('On the next scale down, a customisation system for the individual home allows the architecture to respond to the daily patterns of each member of the community.'),
        ce.P(
            'The actual units on site are a negotiated result where site constraints, unit requirements and shared activities come together. Using a relational model allows the unit to adapt to the site while still maintaining its important connections.'),
        ce.P(
            'Level of details (LOD) are gradually added to the raw space distribution from the growth algorithm, turning abstract space into concrete architecture.'),
        ce.Image(unit00),
        ce.Image(unitlayout),
        ce.Image(anim_graphToArch),
    );

    //level 2 tectonics
    proj.pushContents(
        ce.H3("Level 2 Tectonics"),
        ce.H4('Home Is What You Do'),
        ce.P(
            "Additive Manufacturing was identified as the primary candidate for the construction system, as it offers the ability to manufacture free-form geometries while providing cost and time savings, and increased onsite safety for automated systems. A robotics-first approach was needed for the construction system to integrate into the overall framework."),
        ce.P(
            'An onsite, segmented approach with multi-material printing was envisioned, as mono-material, continuous printing is argued to be impractical and undesirable for architectural applications, because it does not account for the multi-systemic nature of buildings. Autonomous, robotic units are deployed onsite '),
        ce.P(
            'Clay is used as a proxy material for visco-elastic, cementitious materials (most relevantly concrete) to prototype design iterations and understand the limitations in real terms. A pneumatically-operated extrusion-end-effector was developed from scratch for the research and deployed with various industrial robotic arms for prototyping. Through rigorous testing, critical parameters were defined and informed the possible geometric design expressions.'),
        ce.VimeoClip("https://player.vimeo.com/video/790832820?h=9845e92337&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", "projectVideoContainer"),
        ce.VimeoClip("https://player.vimeo.com/video/790839868?h=6b331f8a4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 'projectVideoContainer'),
        ce.VimeoClip("https://player.vimeo.com/video/790880002?h=14aa7723cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 'projectVideoContainer'),
        ce.VimeoClip("https://player.vimeo.com/video/790912552?h=995c678eef&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 'projectVideoContainer'),
        
    );

    return proj;
};


export default matnet;