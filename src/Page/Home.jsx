import bannerImg from '../assets/banner/banner (2).png'

const Home = () => {
    return (
        <div className="bg-[#fcefe7] pt-14">
            <div className="w-11/12 mx-auto">
                <div className='md:flex items-center justify-between text-center md:text-start'>
                <div>
                    <p>Book your task</p>
                    <h1>MANAGE YOUR TASK QUICKLY</h1>
                    <p>A best and chepest way of getting know learning to make a better tomorrow</p>
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