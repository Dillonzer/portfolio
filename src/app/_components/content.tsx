import * as React from 'react';
import Image from 'next/image'


type ContentProps = {
    name : string,
    languages? : string,
    frameworks? : string,
    exploring? : string,
    details : string,
    img : Img,
    githubUrl? : string
}

type Img = {
    src : string,
    alt : string,
    width : number,
    height : number
}

export default function Content({name, languages, frameworks, exploring, details, img, githubUrl} : ContentProps) {
    return (
        <div className='border-black py-5 border-2 flex hover:bg-green-300 px-3'>
            <div className="float-left">
                { githubUrl != null ?  <a href={githubUrl} target='_blank' className="text-4xl hover:text-green-700 text-white">{name}</a> : <p className="text-4xl">{name}</p>}
                { languages !=  null ? <p>Languages: {languages}</p> : <></> }
                { frameworks != null ? <p>Frameworks: {frameworks}</p> : <></> }
                { exploring != null ? <p>Exploring: {exploring}</p> : <></> }
                <br/>
                <p>{details}</p>
            </div>
            <div className="float-right">
            {
                img.src != "" ?
                <Image className="rounded-2xl"
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                /> 
                :
                <></>    
            }
            </div>
        </div>
    )
}