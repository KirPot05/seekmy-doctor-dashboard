import select from "../assets/Select.png";
import qr from '../assets/QP.png';
import {motion, useAnimation} from 'framer-motion';
import {container, descVariant, headingVariant, imgVariant, leftImgVariant} from '../animations';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function KnowMore() {

    const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {

		if(inView){
			control.start('animate');
		} else{
			control.start('initial');
		}

	}, [control, inView]);
    


    return (

        <motion.div variants={container} ref={ref} initial="initial" animate={control} className="relative">
            <div className="flex items-center justify-center">
                <div className="absolute top-44 -z-10 rounded-full bg-gray-100" style={{height: "500px", width: "500px"}}>
                    <div className="absolute top-12 left-12 -z-10 rounded-full bg-green-200 opacity-40" style={{height: "400px", width: "400px"}}>
                        <div className="absolute top-12 left-12 -z-10 rounded-full bg-green-300 opacity-75" style={{height: "300px", width: "300px"}}>

                        </div>
                    </div>
                </div>
            </div>

            <div className='p-20 mt-10'> 
                <motion.h2 variants={headingVariant} className='text-center text-4xl font-bold'> Patients no longer have to wait in queue </motion.h2>
                <motion.p variants={descVariant} className="text-center text-2xl">Hassle free checking</motion.p>

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
                    
                    <motion.img variants={imgVariant} src={select} className="absolute h-3/4 top-4 right-32" alt="" />
                    <motion.img src={qr} variants={leftImgVariant} className="object-contain h-3/4 absolute bottom-2 left-44" alt="" />
                </div> 


            </div>
        </motion.div>
    )
}

export default KnowMore