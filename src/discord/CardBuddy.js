import Template from '../Template.js';
import "./CardBuddy.css"

export default function CardBuddy()
{
    return (
        <div class = "cardBuddyBackground">
            <Template
                name={"Card Buddy"}
                techstack={"Python"}
                details={"Card Buddy is a Discord Bot I created in 2019 because I couldn't find an easy way to display cards in Discord when talking with friends. It's went through many interations over the years but I've since found this to be my current favourite. I've even worked with TCGPlayer.com to create an affliate link so users can be sent directly to the card they want to buy from the bot."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/CardBuddy_Card.png", name: "Card Buddy"}}
                />
        </div>
    );
}