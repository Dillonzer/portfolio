import { useCollapse } from 'react-collapsed';
import './Collapse.css'
import CardBuddy from './discord/CardBuddy.js';
import PokemonUniteLicenseMachine from './discord/PokemonUniteLicenseMachine.js';
import NetNaviEXE from './discord/NetNaviEXE.js';
import WarcraftLookup from './discord/WarcraftLookup.js';

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Check out my Discord Projects! 🔽'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">    
                <CardBuddy/>
                <PokemonUniteLicenseMachine/>
                <NetNaviEXE/>
                <WarcraftLookup/>
            </div>
        </div>
    </div>
    );
}

function DiscordCollapse() {
    return (
    <Collapsible/>
    );
}
export default DiscordCollapse;