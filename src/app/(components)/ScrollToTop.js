"use client";
import React, { useEffect } from "react";

function ScrollToTop() {

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const scrollButton = document.getElementById("scroll-to-top-btn");

            if (window.scrollY > 100) {
                scrollButton.style.display = "block";
            } else {
                scrollButton.style.display = "none";
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const scrollButton = document.getElementById("scroll-to-top-btn");
            scrollButton.style.display = "none";

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return (
        <>
            <button
                id="scroll-to-top-btn"
                className="border-0"
                onClick={scrollToTop}
            >
                <i className="fa fa-angle-up fs-5 icon-bottom"></i>
            </button>
        </>
    );
}

export default ScrollToTop;
