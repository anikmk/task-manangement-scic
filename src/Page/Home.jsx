import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner/banner (2).png'
import useAuth from '../hooks/useAuth';
import benifit1 from '../assets/benifit/banker.jpg'
import benifit2 from '../assets/benifit/corporate.jpg'
import benifit3 from '../assets/benifit/developer.jpg'
import benifit4 from '../assets/benifit/student.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Home = () => {
    const {user} = useAuth();
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <>
        <div className="bg-[#fcefe7] pt-20">
            <div className="w-11/12 mx-auto">
                <div className='md:flex items-center justify-between text-center md:text-start'>
                <div data-aos='fade-right'>
                    <p>Book your task</p>
                    <h1 className='lg:text-6xl font-semibold py-2'>MANAGE YOUR TASK QUICKLY</h1>
                    <p className='lg:w-[50%] pt-3'>A best and chepest way of getting know learning to make a better tomorrow</p>
                    {
                        user? <button className="bg-[#3b2b79ec] py-3 px-5 text-white font-semibold rounded-lg hover:bg-transparent hover:border hover:text-black hover:border-[#3b2b79ec] mt-4 transition-all">Explore More</button> :
                        <Link to='/signup'>
                        <button className="bg-[#3b2b79ec] py-3 px-5 text-white font-semibold rounded-lg hover:bg-transparent hover:border hover:text-black hover:border-[#3b2b79ec] mt-4 transition-all">Explore More</button>
                        </Link>
                    }
                  
                </div>
                <div data-aos='fade-left'>
                    <img src={bannerImg} alt="" />
                </div>
                </div>
            </div> 
        </div>

        {/* benifit section */}
        <div className='bg-[#83838369] py-14'>
            <div data-aos='fade-left fade-right' className='text-center w-[90%] mx-auto lg:w-[60%]'>
                <h1 className=' text-lg font-semibold pb-5 lg:text-6xl'>Explore Our Diverse Community</h1>
                <p className='pb-8'>Our platform enriches users experiences by offering specialized resources, networking, and insights relevant to their industries. By fostering connections and knowledge sharing, we empower users to excel in their fields, contributing to our vibrant, thriving community.</p>
            </div>
            <div className='w-11/12 mx-auto' data-aos='slide-up'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className="card bg-base-100 shadow-xl">
                <figure><img src={benifit1} alt="banker" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Banker</h2>
                    <p>Stay updated on finance news, regulations, and connect with peers for career growth in banking and financial sectors.</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                <figure><img src={benifit2} alt="corporate" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Corporate</h2>
                    <p>Access business insights, networking, and growth opportunities through webinars, articles, and connections in corporate spheres.</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                <figure><img src={benifit3} alt="developer" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Developer</h2>
                    <p>Empowering coders with resources, challenges, and a vibrant community to level up coding skills and foster tech growth.</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Get Start</button>
                    </div>
                </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                <figure><img src={benifit4} alt="students" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Students</h2>
                    <p> A hub for students exploring diverse career paths. Access learning materials, industry insights, and connect with professionals to kickstart future careers.</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Get Start</button>
                    </div>
                </div>
                </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default Home;