const loadIndexTab = (parent) => {
    const indexTab = document.createElement('div');
    indexTab.classList.add('projectIndex');

    const filterContainer = document.createElement('div');
    filterContainer.classList.add('projectFilter');
    indexTab.appendChild(filterContainer);

    const indexTable = document.createElement("table");
    indexTable.classList.add('projectIndexTable');
    indexTab.appendChild(indexTable);
    
    parent.appendChild(indexTab);
    
    return indexTab;
};


export default loadIndexTab;