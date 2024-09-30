import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import careerImg from '../(assets)/about/careers.svg';
import CareerLayout from '../(content)/(careerLayout)/CareerLayout';

export const metadata = {
    title: "Career Archive - GUI Solutions Lanka",
    description: "",
    keywords: "",
    canonical: "https://guisrilanka.com/career/",
};

const CareerPage = () => {

    return (
        <div className="container-fluid my-5 pb-4">
            <div className="container">
                <div className="row align-items-center">
                    <div
                        className="col-lg-6 d-flex d-lg-block flex-column align-items-center justify-content-center"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1400"
                    >
                        <h1 className="text-blue text-lg-start text-center font-48 fw-bold mb-1">
                            Careers
                        </h1>
                        <p className="font-18 lh-base text-dark text-lg-start text-center">
                            Join GUI Solutions Lanka and grow with us! We offer dynamic opportunities for tech enthusiasts ready to innovate and excel.
                        </p>
                        <Link href="/" className="btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding">
                            Back to Home
                        </Link>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end">
                        <Image
                            src={careerImg}
                            className="w-75 pt-3"
                            alt="GUI Solutions Lanka (Pvt) Ltd"
                            width={477}
                            height={287}
                        />
                    </div>
                </div>
            </div>

            <CareerLayout />
        </div>
    );
};

export default CareerPage;
