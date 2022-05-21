import select from "../assets/Select.png";
import qr from '../assets/QP.png'

function KnowMore() {
    return (

        <div className="relative">
            <div className="flex items-center justify-center">
                <div className="absolute top-44 -z-10 rounded-full bg-gray-100" style={{height: "500px", width: "500px"}}>
                    <div className="absolute top-12 left-12 -z-10 rounded-full bg-green-200 opacity-40" style={{height: "400px", width: "400px"}}>
                        <div className="absolute top-12 left-12 -z-10 rounded-full bg-green-300 opacity-75" style={{height: "300px", width: "300px"}}>

                        </div>
                    </div>
                </div>
            </div>

            <div className='p-20 mt-10'> 
                <h2 className='text-center text-4xl font-bold'> Patients no longer have to wait in queue </h2>
                <p className="text-center text-2xl">Hassle free checking</p>

                <div className="relative">
                    <div className='mt-20 w-1/2 h-96 rounded-lg mx-auto my-10 border-solid border-2 border-green-400'>
                        <div className='rounded-lg m-2 p-2 border-solid border-2 border-green-400'> </div>
                        <div className='flex'>
                            <div className='w-full rounded-lg h-80 m-2 p-2 border-solid border-2 border-green-400'>
                                <div className='w-full my-2 p-2 border-solid border-2 border-green-400'></div>
                                <div className='w-full my-2 p-2 border-solid border-2 border-green-400'></div>
                                <div className='w-full my-2 p-2 border-solid border-2 border-green-400'></div>
                                <div className='w-full h-1/2 p-2 border-solid border-2 border-green-400'></div>
                            </div>
                            <div className='w-full rounded-lg h-80 m-2 p-2 border-solid border-2 border-green-400'>
                                <div className='w-full my-2 p-2 border-solid border-2 border-green-400'></div>
                                <div className='w-full my-2 p-2 border-solid border-2 border-green-400'></div>
                                <div className='w-full my-2 p-2 border-solid border-2 border-green-400'></div>
                                <div className='w-full h-1/2 p-2 border-solid border-2 border-green-400'></div>
                            </div>
                        </div>
                    </div> 
                    
                    <img src={select} className="absolute h-3/4 top-4 right-32" alt="" />
                    <img src={qr} className="object-contain h-3/4 absolute bottom-2 left-48" alt="" />
                </div> 


            </div>
        </div>
    )
}

export default KnowMore