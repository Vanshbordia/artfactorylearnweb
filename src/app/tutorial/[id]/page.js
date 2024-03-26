import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TutorialSidebarList from '@/components/TutorialSidebarList';
import YoutubePlayer from '@/components/YoutubePlayer';

const domain = "https://learn.artfactory.org.in/";

export default async function page({ params }) {
  const res = await fetch(`https://learn.artfactory.org.in/get_by_id.php?id=${params.id}`);
  const data = await res.json();



  return (
    <>
      <div className='max-w-5xl mx-auto '>
        <div className='max-w-xl'>
          <Image src={domain + data.featured_image} alt={data.title} width={500} height={500} />
        </div>
        <h1 className='text-6xl font-bold '>{data.title}</h1>
      </div>
      <div className='max-w-5xl mx-auto'>
        <p>{data.entry_content}</p>
        <div className=' flex flex-col lg:flex-row-reverse lg:justify-between'>
          <div className='lg:w-1/3 '>
            <TutorialSidebarList data={data} />
          </div>
          <div className='lg:w-2/3'>
            {JSON.parse(data.steps).steps.map((item, index) => (
              <div key={item.step_number} className='max-w-xl'>
                <h3>
                  Step {item.step_number} <br />
                  <span className={`text-3xl font-bold step-title `} id={item.title}>
                    {item.title}
                  </span>
                </h3>
                <p>{item.description}</p>
                <div className='max-w-xl'>
                  <Image src={domain + item.file_location} alt={item.title} width={1000} height={1000} />
                </div>
                {index !== JSON.parse(data.steps).steps.length - 1 && (
                  <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">Next</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <YoutubePlayer link={data.yt_link} />
        <div className='h-svh'></div>
      </div>
    </>
  );
}

export async function generateMetadata({ params}){
  const res = await fetch(`https://learn.artfactory.org.in/get_by_id.php?id=${params.id}`);
  const data = await res.json();
  return {
    title: data.title,
    
  }
}