import React from 'react'

function Footer() {
  return (
    <div className='px-5 md:px-10 py-8 bg-slate-700 flex flex-col md:flex-row md:space-x-14 justify-around text-white'>
        <div className='basis-1/5 mb-10'>
            <img className='cursor-pointer' src="https://seekmy.health/Images/logo.svg" alt=""/>
        </div>
        
        <div className='md:basis-4/5'>

            <div className='flex justify-evenly pb-10 border-b-2 border-solid border-white' >
                <div>
                    <h2 className='font-bold text-lg mb-5'>Products</h2>
                    <div className='flex flex-col space-y-3'>
                        <span className="cursor-pointer">SeekMy Doctor</span>
                        <span className="cursor-pointer">SeekMy Patient</span>
                        <span className="cursor-pointer">Pricing</span>
                    </div>
                </div>

                <div>
                    <h2 className='font-bold text-lg mb-5'>Company</h2>
                    <div className='flex flex-col space-y-3'>
                        <span className="cursor-pointer">About Us</span>
                        <span className="cursor-pointer">Careers</span>
                        <span className="cursor-pointer">Contact Us</span>
                    </div>
                </div>

                <div>
                    <h2 className='font-bold text-lg mb-5'>Socials</h2>
                    <div className='flex flex-col space-y-3'>
                        <span className="cursor-pointer">Instagram</span>
                        <span className="cursor-pointer">WhatsApp</span>
                        <span className="cursor-pointer">Twitter</span>
                        <span className="cursor-pointer">FaceBook</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-between m-2'>
                <span className='cursor-pointer'>Address</span>
                <span className='cursor-pointer'>Privacy Policy | Terms and Conditions</span>
            </div>

            <div className='mt-14'>
                <p>Contact Us at +91__________</p>
            </div>
        </div>

    </div>
  )
}

export default Footer