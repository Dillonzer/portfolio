import * as React from 'react';
import Link from "next/link";

export default function Header() {
    const title = "Dillon's Portfolio"
    return (
        <div>
            <div className = "text-center text-6xl p-10">
                <h1>{title}</h1>
            </div>
            <div className="bg-green-700 overflow-hidden">
                <Link href="/" className ="float-left text-center px-6 py-2 bg-green-700 text-white block hover:bg-green-200 hover:text-black">Home</Link>
                <Link href="/about-me" className ="float-left text-center px-6 py-2 bg-green-700 text-white block hover:bg-green-200 hover:text-black">About Me</Link>
                <Link href="/personal-api" className ="float-left text-center px-6 py-2 bg-green-700 text-white block hover:bg-green-200 hover:text-black">Personal REST API</Link>
                <Link href="/discord" className ="float-left text-center px-6 py-2 bg-green-700 text-white block hover:bg-green-200 hover:text-black">Discord</Link>            
                <Link href="/twitch" className ="float-left text-center px-6 py-2 bg-green-700 text-white block hover:bg-green-200 hover:text-black">Twitch</Link>
                <Link href="/webapp" className ="float-left text-center px-6 py-2 bg-green-700 text-white block hover:bg-green-200 hover:text-black">Web Apps</Link>
                <Link href="/projects" className ="float-left text-center px-6 py-2 bg-green-700 text-white block hover:bg-green-200 hover:text-black">Bigger Projects</Link>
            </div>
        </div>
    );
  }