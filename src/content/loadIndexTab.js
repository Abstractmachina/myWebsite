const loadIndexTab = (parent) => {
    const indexTab = document.createElement('div');
    indexTab.classList.add('projectIndex');

    const topedge = document.createElement('div');
    topedge.classList.add('topEdge');

    const filterContainer = document.createElement('div');
    filterContainer.classList.add('projectFilter');

    const indexTable = document.createElement("table");
    indexTable.classList.add('projectIndexTable');

    indexTab.append(topedge, filterContainer, indexTable);
    
    parent.appendChild(indexTab);
    
    return indexTab;
};


export default loadIndexTab;