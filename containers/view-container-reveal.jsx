"use client";

import { motion } from "framer-motion";

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
};

export default function ViewContainerReveal(props) {
    return (
        <motion.div variants={variants} initial={"initial"} whileInView={"animate"} viewport={{ amount: 0, once: true }} className={props.classes}>
            {props.children}
        </motion.div>
    );
}
