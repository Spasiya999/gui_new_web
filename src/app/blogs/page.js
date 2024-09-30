import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogLayout from '../(content)/(blogLayout)/BlogLayout';

import blogImg from "../../../public/images/about/blogs.svg"

export const metadata = {
    title: "Professional software solutions - GUI Solutions Sri Lanka",
    description: "GUI Sri Lanka offers wide range of professional software, web and digital services to clients around the world. Call us on +94 112922420 or visit our website to request a free quote!",
    keywords: "",
    canonical: "https://guisrilanka.com/contact-us/",
};

const BlogPage = () => {
    
    return (
        <>
            <div className="container-fluid my-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                            <h1 className="me-lg-auto text-blue text-lg-start text-center font-48 fw-bold mb-1">
                                Blogs
                            </h1>
                            <p className="font-18 lh-base text-dark text-lg-start text-center">
                                Explore insightful articles on software solutions, industry trends, and innovations from GUI Solutions Lanka (Pvt) Ltd, your global tech partner.
                            </p>
                            <Link href="/" className="px-5 me-lg-auto btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding">
                                Back to Home
                            </Link>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end">
                            <Image src={blogImg} className="w-50 pt-3" alt="GUI Solutions Lanka (Pvt) Ltd" width={318} height={332} />
                        </div>
                    </div>
                </div>
            </div>

            <BlogLayout />
        </>
    );
};

export default BlogPage;
