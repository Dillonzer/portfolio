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
    </div>
  );
}

export default App;
