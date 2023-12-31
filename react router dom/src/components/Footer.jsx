import react from 'react';

function Footer(){
    return (
        <>
            <span className='w-full h-20 bg-yellow-400 text-4xl flex items-center justify-center'>
                <h1 className=''>
                    JOIN ADIDAS AND GET 15% OFF
                </h1>
            </span>
            <div className='flex justify-end' >
                <ul className='flex flex-row'>
                    <li  className='transition duration-150 ease-in-out hover:underline hover:scale-110 p-2'>
                        <a href="">
                            Home
                        </a>
                    </li>
                    
                    <li  className='transition duration-150 ease-in-out hover:underline hover:scale-110 p-2'>
                        <a href="">
                            About
                        </a>
                    </li>
                    <li  className='transition duration-150 ease-in-out hover:underline hover:scale-110 p-2'>
                        <a href="">
                            Contact
                        </a>
                    </li>
                    <li  className='transition duration-150 ease-in-out hover:underline hover:scale-110 p-2'>
                        <a href="">
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Footer;