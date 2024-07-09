import Content from "@/app/_components/content";

export default function Discord() {
    return (
    <span>
        <Content
            name={"Card Buddy"}
            languages="Python"
            frameworks="PostgreSQL, discord-py-interactions"
            details={"Card Buddy is a Discord Bot I created in 2019 because I couldn't find an easy way to display cards in Discord when talking with friends. It's went through many interations over the years but I've since found this to be my current favourite. I've even worked with TCGPlayer.com to create an affliate link so users can be sent directly to the card they want to buy from the bot. Currently in over 1900 servers."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/CardBuddy_Card.png", alt: "Card Buddy", height: 700, width: 600}}
            githubUrl="https://github.com/Dillonzer/CardBuddy"
        />
        <Content
            name={"NetNavi.EXE"}
            languages="Python"
            frameworks="PostgreSQL, discord-py-interactions"
            details={"I started on this project when I heard the announcement of a re-release of the Megaman Battle Network games for Switch and PC. I was a huge fan of these as a kid so I was very excited for them, but didn't remember too much about the details. I worked with a group of users who had all this information to create a bot that could give you information about each Battle Chip in the game, where to find it, and what it did. It's in just around 100 servers right now, which I think is good for such a niche bot."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/chip%20detail.png", alt: "NetNaviEXE", height: 700, width: 600}}
            githubUrl="https://github.com/Dillonzer/NetNavi.exe"
        />
        <Content
            name={"Pokemon Unite License Machine"}
            languages="Python"
            frameworks="PostgreSQL, discord-py-interactions"
            details={"This Discord Bot was a project I started as soon as Pokemon Unite came out so I could get a hold on the players quickly to utilize it. It would display each playable characters movesets and descriptions about them, each item, and way more. It grew over time into more of an info dump then a useful bot, and since Pokemon Unite kept pumping out characters I decided to shut down the bot. The descriptions just got too long for Discord's embed system."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/PULM_License.png", alt: "PULC License", height: 700, width: 600}}
            githubUrl="https://github.com/Dillonzer/PokemonUniteLicenseMachine"
        />
        <Content
            name={"Warcraft Lookup"}
            languages="Python"
            frameworks="PostgreSQL, discord-py-interactions"
            details={"I started this project mainly because of one of my sources uses GraphQL and I wanted to learn more about it. It allows players to look up data from the main competitive tracking sites. I'm an avid Warcraft player and this one was a fun challenege to utilize mutiple data sources to get the data about a game I am passionate about. I'm looking to expand the functionality as well but need to build out more complex GraphQL queries."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/%21Logos/WL_MPRating.png", alt: "WL", height: 700, width: 400}}
            githubUrl="https://github.com/Dillonzer/WarcraftLookup"
        />
        <Content
            name={"Pokemon Decklist Automations"}
            languages="C#"
            frameworks="Discord Webhooks"
            details={"I integrated Discord Webhooks into my Prize Tracker application as well, so specific users who have asked to be included can import their decks, white authenticated on the Prize Tracker site, and it will automatically post to their specific Discord Channel along with a generated image."}
            img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/decklistAutomation.png", alt: "DLA", height: 700, width: 600}}
        />
    </span>
        
    );
  }
  