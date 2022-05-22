import pat1 from '../assets/pat1.png';
import pat2 from '../assets/pat2.png';
import { motion, useAnimation } from 'framer-motion';
import { container, descVariant, downUpImg, headingVariant, imgVariant, leftInText } from '../animations';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function MedicalHistory() {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {

        if (inView) {
            control.start('animate');
        } else {
            control.start('initial');
        }

    }, [control, inView]);

    const dimensions = {
        height: window.outerWidth > "576px" ? "30rem" : "27rem"
    }

    return (

        <motion.div ref={ref} variants={container} initial="initial" animate={control}>
            <div className="bg-green-100 p-5 md:p-10">

                <div>
                    <motion.h2 variants={headingVariant} className="text-center text-2xl md:text-4xl font-bold md:w-6/12 m-2 md:m-auto">A better and safer way to  manage patient medical history</motion.h2>
                    <motion.p variants={descVariant} className="text-center text-green-500 mt-10 text-2xl md:text-4xl">EMR based medical records</motion.p>
                </div>

                <motion.div variants={downUpImg} className='mt-12 flex items-center justify-center'>
                    <img className='object-contain' src={pat1} alt="" style={{ height: dimensions.height }} />
                </motion.div>

                <div className='mt-12 flex flex-col md:flex-row items-center justify-center md:space-x-24'>
                    <div className='flex flex-col sm:mb-10 items-center'>
                        <motion.p variants={leftInText} className='text-xl text-center md:text-3xl'>Faster digital prescriptions</motion.p>
                        <motion.p variants={leftInText} className='text-xl text-center md:text-3xl font-bold'>No pen. No paper</motion.p>
                    </div>
                    <motion.img variants={imgVariant} className='object-contain mt-5' src={pat2} alt="" style={{ height: dimensions.height }} />
                </div>
            </div>
        </motion.div>

    )
}

export default MedicalHistory