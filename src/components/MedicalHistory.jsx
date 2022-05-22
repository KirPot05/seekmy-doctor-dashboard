import pat1 from '../assets/pat1.png';
import pat2 from '../assets/pat2.png';
import { motion, useAnimation } from 'framer-motion';
import { container, descVariant, downUpImg, headingVariant, leftImgVariant, leftInText } from '../animations';
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

    return (

        <motion.div ref={ref} variants={container} initial="initial" animate={control}>
            <div className="bg-green-100 p-10">

                <div>
                    <motion.h2 variants={headingVariant} className="text-center text-4xl font-bold w-6/12 m-auto">A better and safer way to  manage patient medical history</motion.h2>
                    <motion.p variants={descVariant} className="text-center text-green-500 mt-10 text-4xl">EMR based medical records</motion.p>
                </div>

                <motion.div variants={downUpImg} className='mt-12 flex items-center justify-center'>
                    <img className='object-contain' src={pat1} alt="" style={{ height: "30rem" }} />
                </motion.div>

                <div className='mt-12 flex items-center justify-center space-x-24'>
                    <div className='flex flex-col items-center'>
                        <motion.p variants={leftInText} className='text-3xl'>Faster digital prescriptions</motion.p>
                        <motion.p variants={leftInText} className='text-3xl font-bold'>No pen. No paper</motion.p>
                    </div>
                    <motion.img variants={leftImgVariant} className='object-contain' src={pat2} alt="" style={{ height: "30rem" }} />
                </div>
            </div>
        </motion.div>

    )
}

export default MedicalHistory