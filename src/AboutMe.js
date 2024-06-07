import Template from './Template.js';
import './AboutMe.css'

export default function AboutMe()
{
    return (
        <div class="aboutMeBackground">
            <Template
                name={"About Me"}
                techstack={".NET, Python, JavaScript, HTML, CSS - Learning: Go, Ruby, React"}
                details={"Hey! I'm Dillon. I've been a software developer for almost 10 years now. Here is my portfolio of projects dating all the way back to 2019 when I started making them. More details can be found on my github /Dillonzer. I haven't open sourced many of my projects because as a single developer I just don't have the time and energy to manage many open source repos, even if the amount of people using them would be small. Hope you enjoy :)"}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/AnimeHeadshot.png", name: "Anime Headshot", width: 300, height: 300}}
                />
        </div>
    );
}