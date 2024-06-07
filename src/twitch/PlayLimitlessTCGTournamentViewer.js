import Template from '../Template.js';
import "./PlayLimitlessTCGTournamentViewer.css"

export default function PlayLimitlessTCGTournamentViewer()
{
    return (
        <div class = "pltvBackground">
            <Template
                name={"Play.LimitlessTCG Tournament Viewer"}
                techstack={"HTML / JS / CSS, Postgres"}
                details={"LimitlessTCG released a new Tournament Website during the Corona Virus pandemic in 2020 and it was a major success! I reached out to see if they would want to collaborate to create a Twitch Extension and they said yes! The creator created an API for me to feed the data to and from.This allowed the Broadcaster to choose which tournament they want to track during their stream and show the information to their users. I've discontinued this one as well since in person events have come back and this isn't used much anymore. It was a great project to collobrate with some people on though."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/PLTCG_OnTwitchScreenshot__MatchInformation.png", name: "PLTV"}}
                />
        </div>
    );
}