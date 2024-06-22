import './App.css';
import AboutMe from './AboutMe.js'
import PersonalRESTAPI from './PersonalRESTAPI.js';
import DiscordCollapse  from './DiscordCollapse.js';
import TwitchCollapse from './TwitchCollapse.js';
import WebappCollapse from './WebappCollapse.js';
import ProjectCollapse from './ProjectCollapse.js';

function App() {
  return (
    <div>
      <AboutMe/>
      <PersonalRESTAPI/>
      <DiscordCollapse/>
      <TwitchCollapse/>
      <WebappCollapse/>
      <ProjectCollapse/>
    </div>
  );
}

export default App;
