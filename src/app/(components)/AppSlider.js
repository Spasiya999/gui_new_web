"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel as BootstrapCarousel } from "bootstrap";

const AppSlider = ({ categoriesData = { payload: [] } }) => {
    const categories = categoriesData.payload || [];
    const [activeCategoryId, setActiveCategoryId] = useState(1);

    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== "undefined") {
            // Initialize Bootstrap Carousel
            const carouselElement = document.getElementById("carouselExampleAutoplaying");
            if (carouselElement) {
                new BootstrapCarousel(carouselElement, {
                    interval: 5000,
                    ride: "carousel",
                });
            }

            const interval = setInterval(() => {
                const items = document.getElementsByClassName("carousel-item");
                for (let i = 0; i < items.length; i++) {
                    if (items[i].classList.contains("active")) {
                        let j = i + 1;
                        if (j >= items.length) {
                            j = 0;
                        }
                        let idVal = items[j].id;
                        document.getElementById(idVal + "icon")?.click();
                    }
                }
            }, 5000);

            return () => clearInterval(interval);
        }
    }, []);

    const handleCategoryClick = (categoryId) => {
        setActiveCategoryId(categoryId);
    };

    return (
        <div>
            <div className="container-fluid">
                {/* Carousel Start */}
                <div className="container-fluid">
                    <div
                        id="carouselExampleAutoplaying"
                        className="carousel slide carousel-dark custom-height"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner d-lg-flex d-block align-items-center">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className={`carousel-item ${category.id === activeCategoryId ? "active" : ""}`}
                                    id={category.id}
                                >
                                    <div className="container w-100 pt-3">
                                        <div className="row align-items-center col-12 custome-position justify-content-center">
                                            <div className="col-lg-8 col-12 py-3 mt-lg-3 mt-0 mobile-position-cus">
                                                <h5 className="text-blue text-lg-start text-center ms-lg-5 font-48 fw-bold mb-1 mt-lg-0 mt-3">
                                                    {category.name}
                                                </h5>
                                                <p className="font-18 lh-base text-dark pe-lg-5 pe-0 text-lg-start text-center ms-lg-5">
                                                    {category.short_description}
                                                </p>
                                                <div className="d-flex d-lg-block justify-content-center align-items-center flex-column">
                                                    <Image
                                                        src={category.images[0]}
                                                        className="slider-img-cus d-lg-none d-md-block d-none"
                                                        alt={category.name}
                                                        width={450}
                                                        height={450}
                                                    />
                                                    <Link href={'/' + category.slug} className="btn hvr-shrink btn-cus-gradient rounded-pill text-start ms-lg-5 mt-2 text-white font-14 fw-bold float-lg-start rounded-padding px-5">
                                                        Discover More
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-12 py-3 mt-3 d-lg-block d-none d-flex justify-content-center align-items-center">
                                                <Image
                                                    src={category.images[0]}
                                                    className="slider-img-cus d-lg-block d-none"
                                                    alt={category.name}
                                                    width={450}
                                                    height={450}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Carousel End */}
            </div>

            {/* Service Section */}
            <div className="container-fluid py-2 custome-position-services d-none d-lg-block">
                <div className="container">
                    <div className="row px-0 px-lg-5">
                        {categories.map((category) => (
                            <div className="col-lg-3 col-md-3 col-3 p-lg-3 p-md-1 my-lg-0 my-2" key={category.id}>
                                <div
                                    role="button"
                                    id={`${category.id}icon`}
                                    className={`d-flex align-items-center flex-column gap-2 iconTransition`}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    <Image
                                        src={category.images[0]}
                                        className={`services-img iconTransition ${category.id === activeCategoryId ? "border-20" : ""}`}
                                        alt={category.name}
                                        style={{
                                            border: category.id === activeCategoryId ? "10px solid #340A6A" : "2px solid #340A6A",
                                            padding: "1rem"
                                        }}
                                        width={170}
                                        height={170}
                                    />
                                    <h5 className="font-18 text-center text-dark fw-bold w-lg-75 w-100">{category.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-fluid py-2 custome-position-services d-block d-lg-none">
                <div className="container">
                    <div className="row px-0 px-lg-5">
                        {categories.map((category) => (
                            <div className="col-lg-3 col-md-3 col-3 p-lg-3 p-md-1 my-lg-0 my-2" key={category.id}>
                                <div
                                    role="button"
                                    id={`${category.id}icon`}
                                    className={`d-flex align-items-center flex-column gap-2 iconTransition`}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    <Image
                                        src={category.images[0]}
                                        className={`services-img iconTransition ${category.id === activeCategoryId ? "" : ""}`}
                                        alt={category.name}
                                        style={{
                                            border: category.id === activeCategoryId ? "5px solid #340A6A" : "1px solid #340A6A",
                                            padding: "0.5rem"
                                        }}
                                        width={170}
                                        height={170}
                                    />
                                    <h5 className="font-18 text-center text-dark fw-bold w-lg-75 w-100">{category.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSlider;
