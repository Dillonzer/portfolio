import Template from '../Template.js';
import "./SitekickRemastered.css"

export default function SitekickRemastered()
{
    return (
        <div class = "sitekickBackground">
            <Template
                name={"Sitekick Remastered"}
                techstack={"C#, MySQL, Unity"}
                details={"I recently joined a team of developers to bring back YTV's old 2000s web game called Sitekicks. You can find out more on the offical website https://sitekickremastered.com/"}
                img={{src: "https://sitekickremastered.com/images/misc/appicon.png", name: "Sitekick", height: 350, width: 350}}
                />
        </div>
    );
}