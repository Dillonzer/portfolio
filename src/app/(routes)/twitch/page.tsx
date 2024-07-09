import Content from "@/app/_components/content";

export default function Twitch() {
    return (
    <span>
        <Content
            name={"Pokemon Card Viewer"}
            languages="HTML, JavaScript, CSS"
            details={"This was my second big project I started after Card Buddy. It was like Card Buddy, but for Twitch streams. It allows users to look cards up right on Twitch while watching their favourite streamer. It used to have a Setting for users to choose what language they wanted to see the cards in, but after some issues with cost I had to remove it. It's essentially just an iFrame that houses some HTML/JS/CSS. Was pretty fun to work on and got me into more Javascript! This is also available as a Browser Extension!"}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/PCV_Component.png", alt: "Pokemon Card Viewer", height: 700, width: 900}}
            githubUrl="https://github.com/Dillonzer/PokemonCardViewerTwitchExtension"
        />
        <Content
            name={"Pokemon TCG Tool"}
            languages="HTML, JavaScript, CSS"
            frameworks="PostgreSQL"
            details={"This app is one that is was a big step for me as a developer. I took an existing web app I have (the Prize Tracker) and adapted it in a way where if users log into Twitch on the website and have this extension installed, the data from the Prize Tracker will flow from the website to their extension. This allows users to see what cards the streamer has prized, and what current deck they are playing."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/TCGToolsScreenshot1.png", alt: "TCGTools", height: 700, width: 900}}
            githubUrl="https://github.com/Dillonzer/Pokemon-TCG-Tools"
        />
        <Content
            name={"PTCGBot"}
            languages="HTML, JavaScript, CSS"
            details={"This was the first time working with a Twitch chat bot and it was major fun. I created it so users can look up card text right in the chat to share with other chatters and even the streamer. The trouble with this one was that there could be many cards named a certain name, so I had to do some special tinkering to allow some searching paramters on an essentially command line input. I got it working and it's one of the projects I'm most proud of. With the help of an existing browser extension, you can even have the energy symbols show up. Otherwise they are just text like [R] for Fire."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/ffzMode.png", alt: "PTCGBot", height: 700, width: 1800}}
            githubUrl="https://github.com/Dillonzer/PTCGBot"
        />
        <Content
            name={"Play.LimitlessTCG Tournament Viewer"}
            languages="HTML, JavaScript, CSS"
            frameworks="PostgreSQL"
            details={"LimitlessTCG released a new Tournament Website during the Corona Virus pandemic in 2020 and it was a major success! I reached out to see if they would want to collaborate to create a Twitch Extension and they said yes! The creator created an API for me to feed the data to and from.This allowed the Broadcaster to choose which tournament they want to track during their stream and show the information to their users. I've discontinued this one as well since in person events have come back and this isn't used much anymore. It was a great project to collobrate with some people on though."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/PLTCG_OnTwitchScreenshot__MatchInformation.png", alt: "PLTV", height: 900, width: 1800}}
            githubUrl="https://github.com/Dillonzer/Play.LimitlessTwitchExtension"
        />
        <Content
            name={"Pokemon Unite Build Viewer"}
            languages="HTML, JavaScript, CSS"
            frameworks="PostgreSQL"
            details={"This project was a fun one that tested my Postgres knowledge. It would allow users to create builds for their characters and then save them to the database. Viewers could then pick and choose what builds to display and see information about them. If never took off due to streamers using chat commands instead, so after a while I turned this one off as well. It was one of my favourites to work on at the time though."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/%21Logos/PULM_ExampleBuild.gif", alt: "Pokemon Unite Build Viewer", height: 700, width: 900}}
            githubUrl="https://github.com/Dillonzer/PokemonUniteBuildViewer"
        />
    </span>
        
    );
  }
  