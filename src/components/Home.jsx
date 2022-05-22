import logo from '../assets/home.png';
import { motion, useAnimation } from 'framer-motion'
import {container, headingVariant, imgVariant, descVariant, smallTextVariant} from '../animations';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function Home() {

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
        <motion.div ref={ref} variants={container} initial="initial" animate={control} className='m-8 relative' style={{height: "75vh"}}>
            
            <motion.div variants={container} className='mx-10 mt-32'>
                <motion.p variants={smallTextVariant} className='text-xl font-semibold text-green-500'>SeekMy</motion.p>
                <motion.h2 variants={headingVariant} className='text-5xl font-bold text-green-500'>To Shape a Better World</motion.h2>
                <motion.p variants={descVariant} className='mt-5 text-2xl w-72'>To Have Positive Impact on People's Lives</motion.p>
            </motion.div>

            <motion.div variants={imgVariant} className='absolute -top-24 right-32 -z-10'>
                <img className='object-contain' style={{height: "35rem"}} src={logo} alt="" />
            </motion.div>
        </motion.div>

    );
}

export default Home;