import { useCollapse } from 'react-collapsed';
import './Collapse.css'
import SitekickRemastered from './projects/SitekickRemastered.js';

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Check out my Bigger Projects! 🔽'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">    
                <SitekickRemastered/>
            </div>
        </div>
    </div>
    );
}

function ProjectCollapse() {
    return (
    <Collapsible/>
    );
}
export default ProjectCollapse;