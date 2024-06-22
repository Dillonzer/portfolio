import Template from './Template.js';
import './AboutMe.css'

export default function AboutMe()
{
    return (
        <div class="aboutMeBackground">
            <Template
                name={"About Me"}
                techstack={".NET, SQL, Python, JavaScript, HTML, CSS - Learning: Go, Ruby, React"}
                details={"Hey! I'm Dillon. I've been a software developer for almost 10 years now. Here is my portfolio of projects dating all the way back to 2019 when I started making them. More details can be found on my github /Dillonzer. Most of my apps below are open sourced or planning on being open sourced. Check out my repos to see them. As for this portfolio, it has been written in React. Hope you enjoy :)"}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/AnimeHeadshot.png", name: "Anime Headshot", width: 300, height: 300}}
                />
        </div>
    );
}