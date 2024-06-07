import Template from '../Template.js';
import "./PokemonUniteBuildViewer.css"

export default function PokemonUniteBuildViewer()
{
    return (
        <div class = "pokemonUniteBuildViewerBackground">
            <Template
                name={"Pokemon Unite Build Viewer"}
                techstack={"HTML / JS / CSS, Postgres"}
                details={"This project was a fun one that tested my Postgres knowledge. It would allow users to create builds for their characters and then save them to the database. Viewers could then pick and choose what builds to display and see information about them. If never took off due to streamers using chat commands instead, so after a while I turned this one off as well. It was one of my favourites to work on at the time though."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/%21Logos/PULM_ExampleBuild.gif", name: "Pokemon Unite Build Viewer"}}
                />
        </div>
    );
}