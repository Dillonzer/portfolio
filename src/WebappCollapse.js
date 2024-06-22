import { useCollapse } from 'react-collapsed';
import './Collapse.css'
import FLDRCRFTR from './webapp/FLDRCRFTR.js';
import GLCDecklistViewer from './webapp/GLCDecklistViewer.js';
import GLCEventFinder from './webapp/GLCEventFinder.js';
import PrizeTracker from './webapp/PrizeTracker.js';
import StreamCardViewer from './webapp/StreamCardViewer.js';

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Check out my Web App Projects! 🔽'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content"> 
                <FLDRCRFTR/>
                <GLCDecklistViewer/>
                <GLCEventFinder/>
                <PrizeTracker/>
                <StreamCardViewer/>
            </div>
        </div>
    </div>
    );
}

function WebappCollapse() {
    return (
    <Collapsible/>
    );
}
export default WebappCollapse;