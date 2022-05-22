import calendar from '../assets/calendar.png';
import cal1 from '../assets/cal1.png';
import cal2 from '../assets/cal2.png';
import calHelp from '../assets/cal-help.png';
import {motion, useAnimation} from 'framer-motion';
import {container, descVariant, downUpImg, headingVariant} from '../animations';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function DocCalendar() {

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
    <motion.div ref={ref} variants={container} initial="initial" animate={control} className='flex flex-col space-y-28 md:space-y-2 md:flex-row justify-center mt-10 px-20 pt-20 pb-44 md:space-x-20 bg-gray-300'>

        <div>
            <div className='text-center'>
                <motion.h2 variants={headingVariant} className='text-2xl md:text-4xl font-bold'>Need to change your plan?</motion.h2>
                <motion.p variants={descVariant} className='text-lg'>Edit time sets easily and organize your work</motion.p>
            </div>

            <motion.div variants={downUpImg} className='flex flex-col items-center mt-5'>
                <img src={calendar} alt="" />
                <img src={cal1} className="-m-20 md:-m-24" alt="" />
                <img src={calHelp} className="-mt-20" alt="" />
            </motion.div>
        </div>

        <div>
            <div className='text-center'>
                <motion.h2 variants={headingVariant} className='text-2xl md:text-4xl font-bold'>Every doctor deserves a holiday</motion.h2>
            </div>

            <motion.div variants={downUpImg} className='flex flex-col items-center mt-5 md:mt-10'>
                <img src={calendar} alt="" />
                <img src={cal2}   className="-m-28" alt="" />
            </motion.div>
        </div>

    </motion.div>
  )
}

export default DocCalendar