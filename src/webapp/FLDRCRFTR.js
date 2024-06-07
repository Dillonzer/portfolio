import Template from '../Template.js';
import "./FLDRCRFTR.css"

export default function FLDRCRFTR()
{
    return (
        <div class = "fldrcrftrBackground">
            <Template
                name={"FLDRCRFTR"}
                techstack={"HTML / JS / CSS"}
                details={"FLDRCRFTR aka Folder Crafter is a little app I built so users could theory craft for the Megaman Battle Network games. You can pick and choose how you want your folders and even share them via exports! It also allows you to import them to change them as well. It allows you to pick each version and has validation for each version's specific ruleset."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/folder%20builder%20final.gif", name: "FLDRCRFTR", height: 350, width: 650}}
                />
        </div>
    );
}