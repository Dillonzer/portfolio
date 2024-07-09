import Content from "@/app/_components/content";

export default function Twitch() {
    return (
    <span>
        <Content
            name={"FLDRCRFTR"}
            languages="HTML, JavaScript, CSS"
            details={"FLDRCRFTR aka Folder Crafter is a little app I built so users could theory craft for the Megaman Battle Network games. You can pick and choose how you want your folders and even share them via exports! It also allows you to import them to change them as well. It allows you to pick each version and has validation for each version's specific ruleset."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/folder%20builder%20final.gif", alt: "FLDRCRFTR", height: 350, width: 1850}}
            githubUrl="https://github.com/Dillonzer/dillonzer.github.io"
        />
        <Content
            name={"GLC Decklist Viewer"}
            languages="HTML, JavaScript, CSS"
            details="This project was requested by a friend of mine for his community website he created for the Pokemon Trading Card Game community. It allows users to create images of their decks to share with friends with his personal branding on it. I already had the logic from some other apps so it was just a pretty quick drag and drop. It was on WordPress though so I had to fanagle a few things to get it working"
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/TrickyGym%20Decklist%20Viewer.gif", alt: "DLV", height: 350, width: 1850}}
        />
        <Content
            name={"GLC Event Finder"}
            languages="HTML, JavaScript, CSS"
            frameworks="PostgreSQL, Bing Maps API"
            details={"This project was also requested by a friend of mine for his community website he created for the Pokemon Trading Card Game community. It allows users to search my database for events that they have submitted to my friend (which they load via Postman requests). It utilizes Bing's Map API to calculate the distances based on their inputs. This one was a cool challenge and was really fun to work on."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/finalevent.gif", alt: "EF", height: 350, width: 1850}}
        />
        <Content
            name={"Prize Tracker"}
            languages="HTML, JavaScript, CSS"
            frameworks="PostgreSQL"
            details={"I created this project due to the PTCG Community asking for something like it. Users can import their decks straight from the Pokemon Trading Card Game Live client export option, or one of the many fan sites. It will save to their browser if they give it a name even. Once in they can then use it to track their prizes by clicking on the cards and they will be sent over to the Prize Table (and if logged into Twitch, this will be mirrored to the Twitch Extension I created as well)."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/PrizeTracker.png", alt: "PrizeTracker", height: 350, width: 1850}}
            githubUrl="https://github.com/Dillonzer/Pokemon_Deck_Utils"
        />
        <Content
            name={"Stream Card Viewer"}
            languages="HTML, JavaScript, CSS"
            frameworks="PostgreSQL"
            details={"This tool was created so streamers had an easy way to display cards being played on streams when they were using real cards. It does require a bit of setup with OBS and a StreamDeck but it's pretty cool. Each user will have their own GUID url that the card they select will be sent too, and they just need to refresh that page each time they change the card via my selection picker."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/CardViewerTwitch2.gif", alt: "CardTwitchViewer", height: 350, width: 1850}}
            githubUrl="https://github.com/Dillonzer/Pokemon_Deck_Utils"
        />
        <Content
            name={"Streamer Decklist Submission"}
            languages="HTML, JavaScript, CSS"
            frameworks="PostgreSQL, Twitch API"
            details={"One of my friends requested a way to have their community send Pokemon decklists to him for a monthly stream he did. I setup two pages, a submission page which requires the user to log into Twitch via OAUTH2, confirm they are a subscriber to the user running the event, and then it submit a valid decklist. This then gets added to a table that the streamer can load on his admin portal which will only work if it has his specific Twitch User ID when he is logged in. It was a very fun project."}
            img={{src: "", alt: "", height: 0, width: 0}}
        />
    </span>
        
    );
  }
  