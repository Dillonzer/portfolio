import Template from '../Template.js';
import "./GLCDecklistViewer.css"

export default function GLCDecklistViewer()
{
    return (
        <div class = "glcDVBackground">
            <Template
                name={"GLC Decklist Viewer"}
                techstack={"HTML / JS / CSS"}
                details={"This project was requested by a friend of mine for his community website he created for the Pokemon Trading Card Game community. It allows users to create images of their decks to share with friends with his personal branding on it. I already had the logic from some other apps so it was just a pretty quick drag and drop. It was on WordPress though so I had to fanagle a few things to get it working."}
                img={{src: "https://pkmn-tcg-api-images.sfo2.cdn.digitaloceanspaces.com/!Logos/TrickyGym%20Decklist%20Viewer.gif", name: "DLV", height: 350, width: 650}}
                />
        </div>
    );
}