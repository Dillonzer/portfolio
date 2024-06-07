import Template from '../Template.js';
import "./GLCEventFinder.css"

export default function GLCEventFinder()
{
    return (
        <div class = "glcEVBackground">
            <Template
                name={"GLC Event Finder"}
                techstack={"HTML / JS / CSS, Postgres"}
                details={"This project was also requested by a friend of mine for his community website he created for the Pokemon Trading Card Game community. It allows users to search my database for events that they have submitted to my friend (which they load via Postman requests). It utilizes Bing's Map API to calculate the distances based on their inputs. This one was a cool challenge and was really fun to work on."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/finalevent.gif", name: "EF", height: 350, width: 650}}
                />
        </div>
    );
}