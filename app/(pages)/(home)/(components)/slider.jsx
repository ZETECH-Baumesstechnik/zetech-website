"use client";

import { useState, useRef, useCallback, useEffect } from "react";

import { motion } from "framer-motion";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const change = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { ease: "linear", delay: 0.2, duration: 0.2 } },
};

export default function Slider({ products }) {
    const timeout = useRef(null);
    const [slide, setSlide] = useState(0);

    const prev = () => {
        setSlide((slide) => (slide === 0 ? products.length - 1 : slide - 1));
    };

    const next = useCallback(() => {
        setSlide((slide) => (slide === products.length - 1 ? 0 : slide + 1));
    }, [products, slide]);

    const jump = (i) => {
        setSlide(i);
    };

    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            next();
        }, 10000);

        return () => clearTimeout(timeout.current);
    }, [next]);

    return (
        <section className="slider-section">
            <div className="section-container">
                <div className="hero-slider">
                    <div className="title-box">
                        <motion.h1 initial={"initial"} animate={"animate"} variants={change} key={slide} className="title">
                            {products[slide].name}
                        </motion.h1>
                    </div>
                    <div className="image-box">
                        <div className="image-holder">
                            <motion.img src={products[slide].image} alt={products[slide].name} initial={"initial"} animate={"animate"} variants={change} key={slide} loading="lazy" className="image" />
                        </div>
                    </div>
                    <div className="navigation-box">
                        <button aria-label="Previous" className="button-holder" onClick={prev}>
                            <BsArrowLeft className="icon" />
                        </button>
                        <div className="dots">
                            {products.map((_, index) => (
                                <button aria-label="Jump" className={index === slide ? "dot active" : "dot"} key={index} onClick={() => jump(index)}></button>
                            ))}
                        </div>
                        <button aria-label="Next" className="button-holder" onClick={next}>
                            <BsArrowRight className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
