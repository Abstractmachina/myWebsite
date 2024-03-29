import Project from "../types/Project";
import {ContentElement as ce} from "../types/ContentElement";

//media
import diagram_classes from '../assets/lbd/HiveMindClasses.jpg';

const drones = () : Project => {
    let proj = new Project("Learning-Based Design", 2022, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("additive manufacturing");
    proj.addCategory("code");
    proj.addCategory("AI");

    proj.Subtitle = "Implementing a Learning-Based Change Detection Framework for a Self-Corrective Behavioural Model in Aerial Additive Manufacturing | Imperial College Master Thesis";


    //HEADIN|G
    proj.pushContents(
        ce.H1(proj.Title),
        ce.H2(proj.Subtitle),
        ce.H5('Project Year: ' + proj.Year),
        ce.H5('Project Location: ' + proj.Location),
    );

    //INTRO
    proj.pushContents(
        ce.H3("Introduction"),
        ce.P('Learning-Based Design was my master thesis for the MSc in Computing at Imperial College London. Due to the confidential nature of the project, I am not able to publish any concrete results, however, I will include here some general information and technologies used. If there is interest, please feel free to contact me for further discussion while avoiding any sensitive topics :).'),
        new ce('div', '<strong>Team:</strong> Taole Chen, Yusuf Kaya, Lachlan Orr<br><strong>Advisor:</strong>Dr.   Basaran Bahadir Kocer<br>In collaboration with the <a href = "https://www.imperial.ac.uk/aeronautics/about/">Imperial Aeronautics Department</a> and <a href="https://www.empa.ch/web/empa/research-areas">EMPA</a>', true),

    );

    //SUMMARY
    proj.pushContents(
        ce.H3("Summary"),
        ce.P('The project situates design in the context of Industry 4.0 and the radically new discipline of <a href="http://www.aerial-abm.com/">Aerial Additive Building Manufacturing</a>. With the proliferation of digital technologies in the AEC industry, the future trajectory of the industry is pointing towards autonomous, closed-loop robotic systems, creating the need to develop design methodologies that can engage with machine-centric processes.', true),
        ce.P('Aerial Additive Manufacturing (AAM) is an early-stage research that is developing a pioneering framework for multi-agent additive manufacturing with Unmanned Aerial vehicles (UAV). Currently, AAM does not have a design-to-fabrication workflow nor a dedicated design framework to interface with due to its infancy. To address this gap, my research aimed to develop the first stages of a design interface for multi-agent AAM. More specifically, a realtime, in-situ change detection and correction framework with a machine learning approach based on point clouds was developed and subsequently validated through physical experiments.'),

    );

    //FEATURES
    proj.pushContents(
        ce.H3('Features'),
        ce.UL([
            new ce('li', 
            'Behavioural Model for AAM using point clouds as a data medium. Point clouds have the advantage of being an integral part of drone vision, so no additional translation is required between design and fabrication.'),
            new ce('li', 'C# Wrapper for the popular C++ <a href="https://pointclouds.org/">Point Cloud Library</a> (pcl), a 2D/3D processing library that is popular among robotic development communities and integrates with the ROS framework.', true),
            new ce('li', 
            'Machine Learning model implementing a custom random forest classifier with JSON export for ease of distribution. Other classifiers, such as a neural network, were also implemented, though not used for the final experiment.'),
            new ce('li', 
            'Tensor data object implementation in Grasshopper using Tensorflow.NET\'s Numpy, allowing multidimensional matrix operations in the GH environment.'),
            new ce('li', 
            'Stand-alone core C# library with testing that can be ported to other applications.'),
            ]
        )
    );

    //ARCHITECTURE
    proj.pushContents(
        ce.H3('Architecture'),
        ce.P('The code for the paper was implemented as a Grasshopper plug-in library. The core library is written in C# and care was taken to maintain a hexagonal architecture for future adaptability. Functionality for point clouds and machine learning is added with the adapter pattern so it can be replaced with updated modules. A controller library named HiveMindGH establishes a connection between the core library and Grasshopper’s visual interface.'),
        ce.Image(diagram_classes),
    );
    return proj;
};


export default drones;