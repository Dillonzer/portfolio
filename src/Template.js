import './Template.css'

export default function Template({name, techstack, details, img})
{
    return (
        <div class="projectSection rounded">
            <div class="projectText">
                <h1 class="projectName">{name}</h1>
                <p class="projectTechstack">Language(s): {techstack}</p>
                <p class="projectDetails">{details}</p>
            </div>
            <div class="projectImg">
            <img 
                src={img.src}
                alt={img.name}
                width={img.width}
                height={img.height}
            />                
            </div>
        </div>
    );
}