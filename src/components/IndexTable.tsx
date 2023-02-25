import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectInfo } from '../types/interfaces';

type IndexTableProps = {
    projectInfo: ProjectInfo[];
    propagateCallPreview: (id:string) => void;
    propagateDismissPreview: () => void;
}


/**
 * Contains table of projects sorted by year descending. clicking on row will call associated project. 
 */
const ProjectIndexTable : FC<IndexTableProps> = ( {projectInfo, propagateCallPreview, propagateDismissPreview}):ReactElement => {

    const navigate = useNavigate();

    function handleSelectProject(e:any, id:string) {
        window.sessionStorage.setItem('indexState', 'on');
        navigate('../' + id);
    }

    function handleCallProjectPreview(e:any, id:string) {
        propagateCallPreview(id);
    }

    function handleDismissProjectPreview(e:any, id:string) {
        propagateDismissPreview()
    }

    return (
        <div className="indexTableContainer">
            <table className="projectIndexTable">
                <thead>
                    <tr>
                        <th>Year</th><th>Title</th><th>Location</th><th>Categories</th> 
                    </tr>
                </thead>
                <tbody>
                    {projectInfo.map(p => {
                        return (
                            <tr id={p.id} key={p.id} 
                                onClick={(e) => handleSelectProject(e, p.id)} 
                                onMouseEnter={(e) => handleCallProjectPreview(e, p.id)}
                                onMouseLeave={(e) => handleDismissProjectPreview(e, p.id)}>
                                <td>{p.year}</td>
                                <td>{p.title}</td>
                                <td>{p.location}</td>
                                <td>{p.categories}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};
export default ProjectIndexTable;