import React from 'react';
import pspk from './pspk.jpg';
import './index.css';

export const Pspk = () =>{
    return (
        <div className='bg-black text-white w-full px-4 md:px-6 lg:px-8 flex flex-row justify-center items-center flex-wrap'>
            <h1 className='flex-[100%] text-center text-4xl font-[800]'>Inaugural Ceremony</h1>
            <div className='img-cont relative'>
                <div className='overlay absolute top-0 left-0 h-full w-full z-10' ></div>
                <img className='min-w-[200px] max-w-[450px] w-full h-auto' src={pspk} alt='pspk'/>
            </div>
            <div className='min-w-[45%] flex flex-col justify-center items-center p-6'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-[700] my-3'>Chief Guest</h2>
                <h2 className='text-lg md:text-xl lg:text-2xl font-[600] mb-[-6px]'>Power Star</h2>
                <h2 className='text-lg md:text-xl lg:text-2xl font-[600]'>Sri <span className='text-3xl md:text-5xl lg:text-6xl font-[900] text-[#F7CA17]'>Pawan Kalyan</span> Garu</h2>
                <div className='flex flex-row flex-wrap justify-around gap-2 mt-4 md:mt-7'>
                    <h2><i className="fa-solid fa-calendar text-[#e2e5e9]"></i> Date : <span className='font-[500]'>6th April, 2023</span></h2>
                    <h2><i className="fa-solid fa-clock text-[#e7eaee]"></i> Time : <span className='font-[500]'>6PM Onwards</span></h2>
                    <h2><i className="fa-solid fa-location-dot text-[#d6dae0]"></i> Venue : <span className='font-[500]'>NITW Stadium</span></h2>
                </div>
            </div>
        </div>
    )
}