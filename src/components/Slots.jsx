import { motion, useAnimation } from 'framer-motion';
import slots from '../assets/slots.png';
import timer from '../assets/timer.png';
import {container, headingVariant, imgVariant, leftImgVariant, rightInText} from '../animations';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function Slots() {

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
		<div className='relative overflow-hidden'>

			<span className="bg-white border-solid border-gray-500 rounded-full m-8 text-white absolute top-40 -left-56 -z-10 opacity-20"
				style={{ width: "500px", height: "500px", padding: "200px", borderWidth: "4rem" }}
			> 10</span>


			<span className="bg-white border-solid border-8 border-gray-500 rounded-full m-8 text-white absolute -top-1/3 -right-32 -z-10 opacity-25"
				style={{ width: "400px", height: "400px", padding: "100px", borderWidth: "50px" }}
			> 10</span>

			<span className="bg-white border-solid border-8 border-gray-500 rounded-full m-8 text-white absolute -top-1/3 -right-32 opacity-25"
				style={{ width: "400px", height: "400px", padding: "100px", borderWidth: "50px" }}
			> 10</span>

			<span className="bg-white border-solid border-8 border-gray-500 rounded-full m-8 text-white absolute -bottom-40 -right-48 -z-10 opacity-25"
				style={{ width: "400px", height: "400px", padding: "100px", borderWidth: "50px" }}
			> 10</span>

			<motion.div ref={ref} variants={container} initial="initial" animate={control} className='relative'>
				<motion.h2 variants={headingVariant} className='text-5xl font-bold text-center mb-5'>Plan your slots</motion.h2>

				<div className='flex items-center justify-around space-x-3 my-14 mx-10'>
					<motion.div variants={leftImgVariant}>
						<img className='shadow-lg object-contain h-96 rounded-3xl' src={slots} alt="" />
					</motion.div>
					<motion.div className='space-y-10'>
						<motion.p variants={rightInText} className='w-96 text-3xl'> Increase the <span className='font-bold text-green-500'>Operational Efficiency</span> of your practice </motion.p>
						<motion.p variants={rightInText} className='w-96 text-3xl'> Make your professional <span className='font-bold text-green-500'> Life Easier </span> </motion.p>
					</motion.div>

				</div>
				<motion.div variants={imgVariant} className='flex justify-center'>
					<img className='object-contain h-64' src={timer} alt="" />
				</motion.div>
			</motion.div>


		</div>
	)
}

export default Slots