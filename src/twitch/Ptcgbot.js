import Template from '../Template.js';
import "./Ptcgbot.css"

export default function Ptcgbot()
{
    return (
        <div class = "ptcgBotBackground">
            <Template
                name={"PTCGBot"}
                techstack={"HTML / JS / CSS"}
                details={"This was the first time working with a Twitch chat bot and it was major fun. I created it so users can look up card text right in the chat to share with other chatters and even the streamer. The trouble with this one was that there could be many cards named a certain name, so I had to do some special tinkering to allow some searching paramters on an essentially command line input. I got it working and it's one of the projects I'm most proud of. With the help of an existing browser extension, you can even have the energy symbols show up. Otherwise they are just text like [R] for Fire."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/ffzMode.png", name: "PTCGBot"}}
                />
        </div>
    );
}