export const container = {
    initial: {opacity: 0},
    animate:{
        opacity: 1, 
        transition: {
            staggerChildren: 0.5
        }
    }
}

export const smallTextVariant = {
    initial: {x: -50, opacity: 0 },
    animate: {x:0, opacity: 1, transition: {type:'spring', duration: 1.5}}
}

export const headingVariant = {
    initial: {opacity: 0},
    animate: {opacity: 1, transition: {duration: 0.7}}
}

export const descVariant = {
    initial: {opacity: 0, y: 50},
    animate: {opacity: 1, y: 0, transition: {duration: 0.5}}
}

export const imgVariant = {
    initial: {opacity: 0, x: 0},
    animate: {opacity: 1, x: -40, transition: {duration: 1}}
}

export const leftImgVariant = {
    initial: {opacity: 0, x: -50},
    animate: {opacity: 1, x: 0, transition: {duration: 1}}
}

export const rightInText = {
    initial: {opacity: 0, x: -80},
    animate: {opacity: 1, x: 0, transition: {duration: 0.5}}
}

export const leftInText = {
    initial: {opacity: 0, x: -50},
    animate: {opacity: 1, x: 0, transition: {duration: 0.5}}
}

export const downUpImg = {
    initial: {opacity: 0, y: 80},
    animate: {opacity: 1, y: 0, transition: {duration: 1}}
}