const loadProjectTab = (parent) => {
    const projectTab = document.createElement('div');
    projectTab.classList.add('projectTab');

    const leftEdge = document.createElement('div');
    leftEdge.classList.add('leftEdge');

    const projectContentContainer = document.createElement('div');
    projectContentContainer.classList.add('projectContentContainer');

    projectTab.append(leftEdge, projectContentContainer);

    parent.appendChild(projectTab);
    return projectTab;
};

export default loadProjectTab;