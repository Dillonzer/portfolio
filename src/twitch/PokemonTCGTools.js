import Template from '../Template.js';
import "./PokemonTCGTools.css"

export default function PokemonTCGTools()
{
    return (
        <div class = "tcgToolsBackground">
            <Template
                name={"Pokemon TCG Tools"}
                techstack={"HTML / JS / CSS, Postgres"}
                details={"This app is one that is was a big step for me as a developer. I took an existing web app I have (the Prize Tracker) and adapted it in a way where if users log into Twitch on the website and have this extension installed, the data from the Prize Tracker will flow from the website to their extension. This allows users to see what cards the streamer has prized, and what current deck they are playing."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/TCGToolsScreenshot1.png", name: "TCGTools"}}
                />
        </div>
    );
}