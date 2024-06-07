import './App.css';
import AboutMe from './AboutMe.js'
import CardBuddy from './discord/CardBuddy.js';
import PokemonUniteLicenseMachine from './discord/PokemonUniteLicenseMachine.js';
import PersonalRESTAPI from './PersonalRESTAPI.js';
import NetNaviEXE from './discord/NetNaviEXE.js';
import PokemonCardViewer from './twitch/PokemonCardViewer.js';
import PokemonUniteBuildViewer from './twitch/PokemonUniteBuildViewer.js';
import PlayLimitlessTCGTournamentViewer from './twitch/PlayLimitlessTCGTournamentViewer.js';
import PokemonTCGTools from './twitch/PokemonTCGTools.js';
import Ptcgbot from './twitch/Ptcgbot.js';
import FLDRCRFTR from './webapp/FLDRCRFTR.js';
import GLCDecklistViewer from './webapp/GLCDecklistViewer.js';
import GLCEventFinder from './webapp/GLCEventFinder.js';
import PrizeTracker from './webapp/PrizeTracker.js';
import StreamCardViewer from './webapp/StreamCardViewer.js';
import SitekickRemastered from './projects/SitekickRemastered.js';

function App() {
  return (
    <div>
      <AboutMe/>
      <PersonalRESTAPI/>
      <CardBuddy/>
      <PokemonUniteLicenseMachine/>
      <NetNaviEXE/>
      <PokemonCardViewer/>
      <PokemonUniteBuildViewer/>
      <PlayLimitlessTCGTournamentViewer/>
      <PokemonTCGTools/>
      <Ptcgbot/>
      <FLDRCRFTR/>
      <GLCDecklistViewer/>
      <GLCEventFinder/>
      <PrizeTracker/>
      <StreamCardViewer/>
      <SitekickRemastered/>
    </div>
  );
}

export default App;
