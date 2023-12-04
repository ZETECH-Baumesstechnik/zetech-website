"use client";

import { motion } from "framer-motion";

const variants = {
    initial: { opacity: 0, x: "5%" },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export default function ViewContainerRtl(props) {
    return (
        <motion.div variants={variants} initial={"initial"} whileInView={"animate"} viewport={{ amount: 1, once: true }} className={props.classes}>
            {props.children}
        </motion.div>
    );
}
