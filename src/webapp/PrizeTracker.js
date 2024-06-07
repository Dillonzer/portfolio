import Template from '../Template.js';
import "./PrizeTracker.css"

export default function PrizeTracker()
{
    return (
        <div class = "prizeTrackerBackground">
            <Template
                name={"Prize Tracker"}
                techstack={"HTML / JS / CSS, Postgres"}
                details={"I created this project due to the PTCG Community asking for something like it. Users can import their decks straight from the Pokemon Trading Card Game Live client export option, or one of the many fan sites. It will save to their browser if they give it a name even. Once in they can then use it to track their prizes by clicking on the cards and they will be sent over to the Prize Table (and if logged into Twitch, this will be mirrored to the Twitch Extension I created as well)."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/PrizeTracker.png", name: "PrizeTracker", height: 350, width: 650}}
                />
        </div>
    );
}