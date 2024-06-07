import Template from '../Template.js';
import "./NetNaviEXE.css"

export default function NetNaviEXE()
{
    return (
        <div class = "netNaviBackground">
            <Template
                name={"NetNavi.EXE"}
                techstack={"Python"}
                details={"I started on this project when I heard the announcement of a re-release of the Megaman Battle Network games for Switch and PC. I was a huge fan of these as a kid so I was very excited for them, but didn't remember too much about the details. I worked with a group of users who had all this information to create a bot that could give you information about each Battle Chip in the game, where to find it, and what it did. It's in just around 100 servers right now, which I think is good for such a niche bot."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/chip%20detail.png", name: "NetNaviEXE"}}
                />
        </div>
    );
}