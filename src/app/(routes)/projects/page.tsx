import Content from "@/app/_components/content";

export default function Projects() {
    return (
    <Content
      name={"Sitekick Remastered"}
      languages={"C#"}
      frameworks={"MySQL, Unity"}
      details={"I recently joined a team of developers to bring back YTV's old 2000s web game called Sitekicks. I've been mainly working on back-end routes for the game, but have dabbled a bit with the actual Unity side as well. You can find out more on the offical website."}
      img={{src: "https://sitekickremastered.com/images/misc/appicon.png", alt: "Sitekick", width: 300, height: 300}}
      githubUrl="https://sitekickremastered.com/"
      />
    );
  }
  