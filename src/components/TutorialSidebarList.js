"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import YoutubePlayer from './YoutubePlayer';
function TutorialSidebarList({ data }) {
    const domain = "https://learn.artfactory.org.in/"

    const [activeStep, setActiveStep] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const steps = document.querySelectorAll('.step-title');
            steps.forEach(step => {
                const rect = step.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
                    setActiveStep(step.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>

            <div className='lg:sticky top-8 lg:text-right h-fit flex flex-col pb-10  '>
                <h2 className='text-xl'>Steps to draw a {data.object}</h2>
                <div className='bg-black h-1 mt-2 mb-2'></div>
                <ol>
                    {JSON.parse(data.steps).steps.map((item, index) => (
                        <li key={item.title}>
                            <Link href={`#${item.title}`} className={`text-gray-600 hover:text-gray-900 transition-colors ${activeStep === item.title ? 'font-bold text-lg' : ''}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ol>

            </div>

        </>
    );
}

export default TutorialSidebarList;
