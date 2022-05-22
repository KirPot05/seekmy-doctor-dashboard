import swipe from '../assets/swipe.png';
import { downUpImg, headingVariant, container } from '../animations';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function MeetPatient() {

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
        <motion.div ref={ref} variants={container} initial="initial" animate={control} className='m-5 flex flex-col'>
            <motion.h2 variants={headingVariant} className='text-center text-3xl md:text-5xl font-semibold mb-10 md:mb-24'>Meet Your Next Patient</motion.h2>
            <motion.img variants={downUpImg} className='object-contain mb-24' src={swipe} alt="" style={{ height: "27rem" }} />
        </motion.div>
    )
}

export default MeetPatient