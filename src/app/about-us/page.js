import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import headImage from '../../../public/images/about/head.svg'
import slasscom from '../../../public/images/slasscom-logo 1.png'
import eccsl from '../../../public/images/eccsl.png'
import bni from '../../../public/images/BNI_logo_Red_refresh_RGB_final-1.png'

export const metadata = {
    title: "About Us | Software & Website Development company - GUI Solutions Sri Lanka",
    description: "GUI Sri Lanka offers wide range of professional software, web and digital services to clients around the world. Visit our website to find out more about GUI Sri Lanka.",
    keywords: "",
    canonical: "https://guisrilanka.com/about-us/",
};

function page() {
    return (
        <>
            <div className="container-fluid my-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex d-lg-block flex-column align-items-center justify-content-center"
                            data-aos="fade-up" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
                            data-aos-duration="1400">
                            <h1 className="text-blue text-lg-start text-center font-48 fw-bold mb-1">
                                GUI Solutions Lanka
                            </h1>
                            <p className="font-18 lh-base text-dark text-lg-start text-center">
                                GUI Solutions Lanka (Pvt) Ltd, a Global Software Company since 2011, provides agile software solutions
                                to enterprises worldwide.
                            </p>
                            <Link href='/'
                                className="btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding px-5">
                                Back to Home
                            </Link>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end">
                            <Image src={headImage}
                                className="w-50 pt-3"
                                alt="GUI Solutions Lanka (Pvt) Ltd" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                <div className="container  ">
                    <div className="row align-items-center">
                        <div className="col-lg-1 col-12"></div>
                        <div className="col-lg-10 col-12">
                            <h2 className="font-36 text-blue fw-bold mb-5 text-center">A<span
                                className="border-blue-cus border-2">bout U</span>s
                            </h2>
                            <p className='font-18 text-center'>
                                GUI Solutions Lanka (Pvt) Ltd is a global Software Development company in Sri Lanka, providing
                                software solutions to enterprises worldwide since 2011. We believe that building a powerful corporation
                                in this globally competitive business environment means being able to anticipate current industry
                                characteristics and react quickly to changing the business conditions to achieve maximum
                                benefits to every entity in the industry.
                            </p>
                            <br></br>
                            <p className="font-18 text-center">
                                GUI Solutions Lanka entered the international software industry as a partner company of GUI Solutions
                                Pte Ltd Singapore, which was established in Singapore in 2001. As they have offered the best software
                                solutions to move their customers to the highest level of their business for the past 17 years by
                                accommodating a variety of industries in Singapore, we could also be a part of it and develop our
                                business abilities to an advanced level.
                            </p>
                        </div>
                        <div className="col-lg-1 col-12"></div>
                    </div>
                </div>
            </div>

            <div className="about-us-bg-custom pt-lg-5">

                <div className="container-fluid memberships py-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                    ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                    <div className="container">
                        <h2 className="font-36 text-blue fw-bold text-center mb-5 underline-margin-m d-none d-lg-block">O<span
                            className="border-blue-cus border-2">ur Memberships and Associate</span>s</h2>
                        <h2 className="font-36 text-blue fw-bold text-center mb-5 underline-margin-m d-block d-lg-none">Our Memberships
                            and Associates</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                                <div className="p-2 bg-transparent shadow second-bg-cus min-h-100">
                                    <div className="text-center">
                                        <Image src={slasscom} className="w-75" alt="GUI Solutions Lanka (Pvt) Ltd" />
                                    </div>
                                    <p className="font-16 text-center mb-4">We have been members of the Sri Lanka Association for Software
                                        and
                                        Service Companies (SLASSCOM) since 2013. SLASSCOM provides opportunities for the company to be
                                        exposed to
                                        the Global IT and BPO industry.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                                <div className="p-2 bg-transparent shadow second-bg-cus min-h-100">
                                    <div className="text-center">
                                        <Image src={eccsl} className="w-75" alt="GUI Solutions Lanka (Pvt) Ltd" />
                                    </div>
                                    <p className="font-16 text-center mb-4">
                                        The European Chamber of Commerce of Sri Lanka (ECCSL) was founded in 1996 and operates with a
                                        counsel of expertise, along with the chamber secretariat, to promote and strengthen trade and
                                        investment between Sri Lanka and European member states.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="p-2 bg-transparent shadow second-bg-cus min-h-100">
                                    <div className="text-center">
                                        <Image src={bni}
                                        className="w-75"
                                        alt="GUI Solutions Lanka (Pvt) Ltd" />
                                    </div>
                                    <p className="font-16 text-center mb-4">
                                        BNI Sri Lanka is one of the largest and most successful business networking organizations. We
                                        offer our members the opportunity to share ideas, contacts, and most importantly, business
                                        referrals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-1 pb-5 become-a" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                    ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                    <div className="container">
                        <div className="row">
                            <div className="align-items-center justify-content-center second-bg-cus py-lg-5 px-3 shadow py-3">
                                <h2 className="font-36 text-blue fw-bold text-center mb-4 underline-margin-m d-lg-block d-none">B<span
                                    className="border-blue-cus border-2">ecome Our Partne</span>r </h2>
                                    <h2 className="font-36 text-blue fw-bold text-center mb-4 underline-margin-m d-lg-none d-block">Become Our Partner</h2>
                                <p className="font-16 text-center lh-base">
                                    Become a valued partner with GUI Solutions Lanka and unlock unparalleled opportunities for growth
                                    and
                                    innovation. Collaborate with us to leverage cutting-edge technology solutions tailored to your
                                    business
                                    needs. Benefit from our extensive industry experience, global presence, and dedicated support to
                                    drive
                                    success and achieve strategic goals together. Join us in shaping the future of enterprise solutions
                                    with
                                    confidence and expertise.
                                </p>
                                <div className="row justify-content-center pt-2">
                                    <div className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-center">
                                        <Link href="/partners" className="btn text-center hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding text-white font-16 fw-bold w-75">
                                                Click Here
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default page
