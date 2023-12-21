import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner/banner (2).png'
import useAuth from '../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div className="bg-[#fcefe7] pt-14">
            <div className="w-11/12 mx-auto">
                <div className='md:flex items-center justify-between text-center md:text-start'>
                <div>
                    <p>Book your task</p>
                    <h1 className='lg:text-6xl font-semibold py-2'>MANAGE YOUR TASK QUICKLY</h1>
                    <p className='lg:w-[50%] pt-3'>A best and chepest way of getting know learning to make a better tomorrow</p>
                    {
                        user? <button className="bg-[#3b2b79ec] py-3 px-5 text-white font-semibold rounded-lg hover:bg-transparent hover:border hover:text-black hover:border-[#3b2b79ec] mt-4 transition-all">Explore More</button> :
                        <Link to='/login'>
                        <button className="bg-[#3b2b79ec] py-3 px-5 text-white font-semibold rounded-lg hover:bg-transparent hover:border hover:text-black hover:border-[#3b2b79ec] mt-4 transition-all">Explore More</button>
                        </Link>
                    }
                  
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
                </div>
            </div> 
        </div>
    );
};

export default Home;