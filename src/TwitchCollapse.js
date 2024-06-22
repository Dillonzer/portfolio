import { useCollapse } from 'react-collapsed';
import './Collapse.css'
import PokemonCardViewer from './twitch/PokemonCardViewer.js';
import PokemonUniteBuildViewer from './twitch/PokemonUniteBuildViewer.js';
import PlayLimitlessTCGTournamentViewer from './twitch/PlayLimitlessTCGTournamentViewer.js';
import PokemonTCGTools from './twitch/PokemonTCGTools.js';
import Ptcgbot from './twitch/Ptcgbot.js';

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Check out my Twitch Projects! 🔽'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">    
                <PokemonCardViewer/>
                <PokemonUniteBuildViewer/>
                <PlayLimitlessTCGTournamentViewer/>
                <PokemonTCGTools/>
                <Ptcgbot/>
            </div>
        </div>
    </div>
    );
}

function TwitchCollapse() {
    return (
    <Collapsible/>
    );
}
export default TwitchCollapse;