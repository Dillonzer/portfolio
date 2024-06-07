import Template from './Template.js';
import './PersonalRESTAPI.css'

export default function PersonalRESTAPI()
{
    return (
        <div class = "restAPIBackground">
            <Template
                name={"Personal REST API"}
                techstack={"C#, Postgres"}
                details={"I was on the lookout for some open source Pokemon TCG APIs so I could create Card Buddy, and the only one I found was a very slow moving one. It didn't have any caching, very slow updating new cards, and just a bit tough to work with. After trying to talk to the owner to let me contribue to the actual codebase and not just the data sets, nothing every came of it. I then in turn created my own API to solve the problem for me. It started on Heroku but has since moved to Railways. It has also expanded to more than just Pokemon Cards. I use it for all my personal projects now. I utilize a Postgres DB on the backend to store a lot of my user specific data as well. This is the API that powers all my applications and I've learned a lot from it. I've also worked with many other groups of people to import the data they've collected into the API for use in my projects."}
                img={{src: null}}
                />
        </div>
    );
}