import Template from '../Template.js';
import "./WarcraftLookup.css"

export default function WarcraftLookup()
{
    return (
        <div class = "wlBackground">
            <Template
                name={"Warcraft Lookup"}
                techstack={"Python"}
                details={"I started this project mainly because of one of my sources uses GraphQL and I wanted to learn more about it. It allows players to look up data from the main competitive tracking sites. I'm an avid Warcraft player and this one was a fun challenege to utilize mutiple data sources to get the data about a game I am passionate about. I'm looking to expand the functionality as well but need to build out more complex GraphQL queries."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/%21Logos/WL_MPRating.png", name: "WL"}}
                />
        </div>
    );
}