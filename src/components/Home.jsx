import logo from '../assets/home.png';

function Home() {

    return (
        <div className='m-8 relative' style={{height: "75vh"}}>
            
            <div className='mx-10 mt-32'>
                <p className='text-xl font-semibold text-green-500'>SeekMy</p>
                <h2 className='text-5xl font-bold text-green-500'>To Shape a Better World</h2>
                <p className='mt-5 text-2xl w-72'>To Have Positive Impact on People's Lives</p>
            </div>

            <div className='absolute -top-24 right-32 -z-10'>
                <img className='object-contain' style={{height: "35rem"}} src={logo} alt="" />
            </div>
        </div>

    );
}

export default Home