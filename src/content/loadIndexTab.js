const loadIndexTab = (parent) => {
    const indexTab = document.createElement('div');
    indexTab.classList.add('projectIndex');

    const topedge = document.createElement('div');
    topedge.classList.add('topEdge');

    const filterContainer = document.createElement('div');
    filterContainer.classList.add('projectFilter');

    const tableContainer = document.createElement('div');
    tableContainer.classList.add('indexTableContainer');
    const indexTable = document.createElement("table");
    indexTable.classList.add('projectIndexTable');

    tableContainer.appendChild(indexTable);

    indexTab.append(topedge, filterContainer, tableContainer);
    
    parent.appendChild(indexTab);
    
    return indexTab;
};


export default loadIndexTab;