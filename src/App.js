import './App.css';
import AboutMe from './AboutMe.js'
import CardBuddy from './discord/CardBuddy.js';
import PokemonUniteLicenseMachine from './discord/PokemonUniteLicenseMachine.js';
import PersonalRESTAPI from './PersonalRESTAPI.js';
import NetNaviEXE from './discord/NetNaviEXE.js';

function App() {
  return (
    <div>
      <AboutMe/>
      <PersonalRESTAPI/>
      <CardBuddy/>
      <PokemonUniteLicenseMachine/>
      <NetNaviEXE/>
    </div>
  );
}

export default App;
