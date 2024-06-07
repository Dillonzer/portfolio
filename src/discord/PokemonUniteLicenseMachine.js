import Template from '../Template.js';
import "./PokemonUniteLicenseMachine.css"

export default function PokemonUniteLicenseMachine()
{
    return (
        <div class = "pulcBackground">
            <Template
                name={"Pokemon Unite License Machine"}
                techstack={"Python, Postgres"}
                details={"This Discord Bot was a project I started as soon as Pokemon Unite came out so I could get a hold on the players quickly to utilize it. It would display each playable characters movesets and descriptions about them, each item, and way more. It grew over time into more of an info dump then a useful bot, and since Pokemon Unite kept pumping out characters I decided to shut down the bot. The descriptions just got too long for Discord's embed system."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/PULM_License.png", name: "PULC License"}}
                />
        </div>
    );
}