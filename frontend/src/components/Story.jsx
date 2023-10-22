import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

const Story = () => {
  return (
    
    <p className=' w-full max-w-screen-lg h-full flex flex-col items-center shadow-md bg-white'>
    <h1 className='text-2xl m-8 font-normal'>The Story</h1>
    <p className=' mx-20 text-left font-sans md:text-xl lg:mx-44 md:leading-10'>
Doug DeMuro is a prominent figure in the world of automotive journalism and entertainment, renowned for his captivating storytelling and unique approach to car reviews. His rise to fame can be attributed to his engaging YouTube channel and website, where he offers detailed evaluations of various vehicles, from the most exotic supercars to everyday cars, capturing the hearts of car enthusiasts and casual viewers alike.

One of Doug DeMuro's trademark features is his distinct and often humorous presentation style. He doesn't merely provide standard car reviews; he delves into the quirks and features of each vehicle, uncovering the unique and unusual aspects that set them apart from the competition. His humorous commentary, quirky discoveries, and witty observations add a delightful layer of entertainment to his reviews, making them accessible to a broad audience.

Another defining element of Doug's content is his proprietary "Doug Score" rating system. This system evaluates cars across a range of categories, including quirks and features, acceleration, handling, and more. It provides a quantitative measure of a car's strengths and weaknesses, allowing viewers to quickly gauge its overall appeal. The Doug Score has become a popular and easily understandable metric for assessing different vehicles.

Beyond his traditional car reviews, Doug DeMuro has also ventured into writing books and articles. His writing style, much like his video content, is characterized by humor and personal anecdotes, creating a unique connection with his readers. These publications offer a glimpse into his personal experiences with cars and the automotive industry, providing a more intimate and relatable perspective on the world of automobiles.

Doug DeMuro's ability to make the complex and technical aspects of automobiles accessible and entertaining has endeared him to a wide audience. His engaging and relatable approach to car reviews, coupled with his unique storytelling style, has made him a beloved figure in the automotive media landscape. As a result, Doug has garnered a large following of fans who eagerly await his latest content, whether in video, written, or other forms, as he continues to share his passion for cars and the experiences they offer.</p>
        <div className=' w-full flex flex-row justify-center'>
        <FaInstagram size={40} color="#bc2a8d" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' />
        <FaYoutube size={40} color="red" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' />
        <FaGlobe size={40} color="blue" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' />
        <img className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'
        src="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small/tiktok-icon-free-png.png"
        alt="TikTok Icon"
        width="40"
        height="40"
      />
        </div>
        <iframe className='w-full sm:h-96 md:h-500 md:w-3/4 h-60 m-20' src="https://www.youtube.com/embed/V_fYfdXpkx4?si=FN3YtYjpCrQ9hAYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </p>
  )
}

export default Story