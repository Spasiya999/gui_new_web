import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import contactImg from '../../../../public/images/about/contact.svg';
import locationImg from '../../../../public/images/icons/location.svg';
import envelopeImg from '../../../../public/images/icons/envelope.svg';
import callImg from '../../../../public/images/icons/call.svg';
import clockImg from '../../../../public/images/icons/clock.svg';
import ContactPageForm from '@/app/(components)/ContactPageForm';

export const metadata = {
    title: "Professional software solutions - GUI Solutions Sri Lanka",
    description: "GUI Sri Lanka offers wide range of professional software, web and digital services to clients around the world. Call us on +94 112922420 or visit our website to request a free quote!",
    keywords: "",
    canonical: "https://guisrilanka.com/contact-us/",
};


function Page() {
    return (
        <>
            <div className="container-fluid my-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex d-lg-block flex-column align-items-center justify-content-center"
                            data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic"
                            data-aos-duration="1400">
                            <h1 className="text-blue text-lg-start text-center font-48 fw-bold mb-1">
                                Contact Us
                            </h1>
                            <p className="font-18 lh-base text-dark text-lg-start text-center">
                                At GUI Solutions Lanka (Pvt) Ltd, we deliver innovative software solutions tailored to your
                                needs. Our global team of experts is dedicated to providing exceptional support and assistance
                                for any inquiries.
                            </p>
                            <Link href="/"
                                className="btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding px-5">
                                Back to Home
                            </Link>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center">
                            <Image
                                src={contactImg}
                                className="w-lg-auto w-75 mt-3 mt-lg-0"
                                alt="GUI Solutions Lanka (Pvt) Ltd"
                                width={450}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                data-aos-easing="ease-out-cubic" data-aos-duration="1400">
                <div className="container mt-lg-5 mt-3">
                    <h2 className="font-36 text-blue fw-bold mb-3">Tell us What <span className="border-blue-cus border-bottom border-2">
                        You need&nbsp; &nbsp; &nbsp;</span></h2>
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-6 col-sm-12 col-12">
                            <p className="font-16 mb-5">
                                Looking for cutting-edge software solutions, top-notch technical support, or exciting
                                partnership opportunities? At GUI Solutions Lanka, we’re dedicated to helping your business
                                thrive with customized technology solutions and exceptional service. Our team of experts is ready
                                to collaborate with you to propel your business forward. Whether you need innovative software,
                                reliable support, or strategic partnerships, we’re here to assist you every step of the way.
                                <br /><br />
                                Reach out to us today and let’s start building your future together!
                            </p>
                            <div className="row mb-sm-4">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="model p-3 h-100 rounded-3 bg-transparent shadow d-flex flex-column ">
                                        <h5 className="text-blue font-20 fw-bold mb-4">
                                            Sri Lanka Office
                                        </h5>
                                        <div className="row">
                                            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mb-4">
                                                <Image src={locationImg} className="contact-list-image" alt="No. 5E/67, Level-4, Kandy Road, Kadawatha, Sri Lanka." />
                                                <p className="fw-bold text-black-cus font-16 mt-1 text-center text-lg-start">No. 5E/67, Level-4, Kandy
                                                    Road, Kadawatha, Sri Lanka</p>
                                            </div>
                                            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mb-4">
                                                <Image src={envelopeImg} className="contact-list-image" alt="info@guisrilanka.com" />
                                                <p className="fw-bold text-black-cus font-16 mt-1 text-center text-lg-start">info@guisrilanka.com</p>
                                            </div>
                                            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mb-4">
                                                <Image src={callImg} className="contact-list-image" alt="+94 112922420" />
                                                <Link href="tel:+94112922420" className="fw-bold text-black-cus font-16 mt-1 text-center text-lg-start">+94 112922420 <br />
                                                    <span className="fw-bold text-black-cus font-16 mt-1 text-center text-lg-start">+94 767079290 (Hotline)</span></Link>
                                            </div>
                                            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mb-4">
                                                <Image src={clockImg} className="contact-list-image" alt="Monday - Friday 8:30 am - 5:30 pm" />
                                                <p className="fw-bold text-black-cus font-16 mt-1 text-center text-lg-start">Monday - Friday <br /> 8:30 am -
                                                    5:30 pm
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6 pt-sm-0 pt-5">
                                    <div className="model p-3 h-100 rounded-3 bg-transparent shadow d-flex flex-column ">
                                        <h5 className="text-blue font-20 fw-bold mb-4">
                                            Singapore Office
                                        </h5>
                                        <div className="row">
                                            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mb-4">
                                                <Image src={locationImg} className="contact-list-image" alt="1 Enterprise Road #03-00, Singapore 629813" />
                                                <p className="fw-bold text-black-cus font-16 mt-2 text-center text-lg-start">1 Enterprise Road #03-00,
                                                    Singapore 629813</p>
                                            </div>
                                            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mb-4">
                                                <Image src={envelopeImg} className="contact-list-image" alt="sales@gui-solutions.com" />
                                                <p className="fw-bold text-black-cus font-16 mt-2 text-center text-lg-start">sales@gui-solutions.com</p>
                                            </div>
                                            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mb-4">
                                                <Image src={callImg} className="contact-list-image" alt="+65 6481 7796" />
                                                <p className="fw-bold text-black-cus font-16 mt-3 text-center text-lg-start">+65 6481 7796</p>
                                            </div>
                                            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mb-4">
                                                <Image src={clockImg} className="contact-list-image" alt="Monday - Friday 8:30 am - 5:30 pm" />
                                                <p className="fw-bold text-black-cus font-16 mt-2 text-center text-lg-start">Monday - Friday <br /> 8:30 am -
                                                    5:30 pm
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-12 rounded" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                            data-aos-easing="ease-out-cubic" data-aos-duration="1400">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15840.303098385695!2d79.9529234!3d7.0003588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f868986c3ceb%3A0xb1ec9ec37dfcc20d!2sGUI%20Solutions%20Lanka%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1712575692517!5m2!1sen!2slk"
                                width="650" height="605" style={{ border: 0 }} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <ContactPageForm />
        </>
    );
}

export default Page;
