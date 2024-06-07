import Template from '../Template.js';
import "./StreamCardViewer.css"

export default function StreamCardViewer()
{
    return (
        <div class = "scvBackground">
            <Template
                name={"Stream Card Viewer"}
                techstack={"HTML / JS / CSS, Postgres"}
                details={"This tool was created so streamers had an easy way to display cards being played on streams when they were using real cards. It does require a bit of setup with OBS and a StreamDeck but it's pretty cool. Each user will have their own GUID url that the card they select will be sent too, and they just need to refresh that page each time they change the card via my selection picker."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/CardViewerTwitch2.gif", name: "CardTwitchViewer", height: 350, width: 650}}
                />
        </div>
    );
}