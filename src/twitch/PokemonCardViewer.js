import Template from '../Template.js';
import "./PokemonCardViewer.css"

export default function PokemonCardViewer()
{
    return (
        <div class = "pokemonCardViewerBackground">
            <Template
                name={"Pokemon Card Viewer"}
                techstack={"HTML / JS / CSS"}
                details={"This was my second big project I started after Card Buddy. It was like Card Buddy, but for Twitch streams. It allows users to look cards up right on Twitch while watching their favourite streamer. It used to have a Setting for users to choose what language they wanted to see the cards in, but after some issues with cost I had to remove it. It's essentially just an iFrame that houses some HTML/JS/CSS. Was pretty fun to work on and got me into more Javascript! This is also available as a Browser Extension!"}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/PCV_Component.png", name: "Pokemon Card Viewer"}}
                />
        </div>
    );
}