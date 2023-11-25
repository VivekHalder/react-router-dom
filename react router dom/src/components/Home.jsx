import react from 'react'
import { home_bg_url } from '../assets/link';

function Home(){

    const divStyle = {
        backgroundImage: `url(${home_bg_url})`,
        backgroundPosition: 'center-bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
    };

    return (
        <>
            <div style={divStyle} className='h-full w-full relative flex items-center'>
                <div className='w-1/2 h-full flex flex-col justify-center items-center text-white'>
                    <h2 className='text-3xl'>
                        Extra 20% off auto applied on checkout
                    </h2>
                </div>
                <div  className='w-1/2 flex flex-col'>
                    <h2 className='flex justify-center text-4xl text-white font-bold p-1'>
                        BLACK FRIDAY
                    </h2>
                    <h1 className='flex justify-center text-7xl text-white font-extrabold p-2'>
                        UP TO 60% OFF
                    </h1>
                    <h2 className='flex justify-center text-4xl text-white font-bold  p-1'>
                        EXTRA 20% OFF ABOVE $100
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Home;