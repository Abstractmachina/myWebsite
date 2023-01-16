const loadProjectTab = (parent) => {
    const projectTab = document.createElement('div');
    projectTab.classList.add('projectTab');
    parent.appendChild(projectTab);
    return projectTab;
};

export default loadProjectTab;