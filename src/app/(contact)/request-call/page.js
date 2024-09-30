import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import contactImg from '../../../../public/images/about/contact.svg';
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
                            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                            ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                            <h1 className="text-blue text-lg-start text-center font-48 fw-bold mb-1">
                                Request a Call
                            </h1>
                            <p className="font-18 lh-base text-dark text-lg-start text-center">
                                Request a call from GUI Solutions Lanka (Pvt) Ltd to discuss agile software solutions tailored
                                to your enterprise needs.
                            </p>
                            <Link href="/"
                                className="btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding">
                                Back to Home
                            </Link>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center">
                            <Image
                                src={contactImg}
                                className="w-lg-auto w-75 mt-3 mt-lg-0"
                                alt="GUI Solutions Lanka (Pvt) Ltd"
                                width={450}
                                height={280}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ContactPageForm />
        </>
    );
}

export default Page;
