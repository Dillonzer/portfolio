import Content from "@/app/_components/content";

export default function AboutMe() {
    return (
    <Content
      name={"About Me"}
      languages={".NET, SQL, Python, JavaScript, Typescript, HTML, CSS"}
      frameworks={"React, Next.JS, Tailwind CSS, Heroku, Railways, DigitalOcean, Twitch API, Discord API, Postman"}
      exploring={"Go, Ruby"}
      details={"Hey! I'm Dillon. I've been a software developer for almost 10 years now. Here is my portfolio of projects dating all the way back to 2019 when I started started making personal projects for communities I am a part of. More details can be found on my Github page. Feel free to take a look around! Hope you enjoy :)"}
      img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/AnimeHeadshot.png", alt: "Anime Headshot", width: 300, height: 300}}
      />
    );
  }
  