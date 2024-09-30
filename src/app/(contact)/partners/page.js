import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import partnerImg from '../../../../public/images/about/partner.svg'
import ourPartnerImg3 from '../../../../public/images/icons/our-partner (3).png'
import ourPartnerImg2 from '../../../../public/images/icons/our-partner (2).png'
import ourPartnerImg1 from '../../../../public/images/icons/our-partner (1).png'
import PartnerPageForm from '@/app/(components)/PartnerPageForm'

export const metadata = {
    title: "Partners - GUI Solutions Lanka",
    description: "",
    keywords: "",
    canonical: "https://guisrilanka.com/partners/",
};

function page() {
    return (
        <>
            <div className="container-fluid my-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex d-lg-block flex-column align-items-center justify-content-center" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                            <h1 className="text-blue text-lg-start text-center font-48 fw-bold mb-1">
                                Become Our Partner
                            </h1>
                            <p className="font-18 lh-base text-dark text-lg-start text-center">
                                Partner with GUI Solutions Lanka (Pvt) Ltd, a global leader since 2011, delivering agile software solutions
                                worldwide.
                            </p>
                            <Link href="/"
                                className="btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding">
                                Back to Home
                            </Link>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center">
                            <Image src={partnerImg} className="w-lg-75 pt-3" alt="GUI Solutions Lanka (Pvt) Ltd" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid pt-lg-0 pt-4">
                <div className="container">
                    <div className="row justify-content-center align-items-center" data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className="col-lg-1 col-12"></div>
                        <div className="col-lg-10 col-sm-12 col-12 mb-cus-m">
                            <h1 className="font-36 fw-bold text-blue text-center mb-3" data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                                Partner <span className="border-blue-cus border-bottom border-2">Benefits &nbsp;
                                    &nbsp;</span>
                            </h1>
                            <p className="font-18 text-center text-black mb-4 line-hight-p">
                                Discover the exclusive benefits of partnering with GUI Solutions Lanka. As our partner, you gain access to
                                innovative technology solutions tailored to your business needs, enhancing operational efficiency and
                                accelerating growth. Benefit from our industry expertise and global network, leveraging strategic insights
                                and support to drive competitive advantage.
                                <br />
                                <br />
                                Enjoy collaborative opportunities, training programs, and dedicated resources designed to foster mutual
                                success. Whether you `$apos` re looking to expand your market reach, streamline operations, or innovate your
                                offerings, partnering with GUI Solutions Lanka empowers you to achieve your business goals with confidence.
                            </p>
                        </div>
                        <div className="col-lg-1 col-12"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-5">
                <div className="container">
                    <div className="row gap-20">
                        <div className="col-lg-4 col-sm-12 col-12 mb-cus-m" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                            ata-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="module shadow rounded d-flex align-items-center flex-column p-3 h-100">
                                <div className="min-h-partner-logo">
                                    <Image src={ourPartnerImg3} className="d-block partners-logo w-auto mb-3" alt="GUI Solutions Lanka (Pvt) Ltd" />
                                </div>
                                <h5 className="text-blue font-20 text-center mb-2 fw-bold">
                                    Reach New Audiences
                                </h5>
                                <p className="font-16 text-black line-hight-p text-center">
                                    Partnering with GUI Solutions Lanka expands your reach to new audiences globally. Benefit from our
                                    established presence and expertise to amplify visibility, attract diverse clientele, and accelerate
                                    business growth across international markets. Access new opportunities and enhance your market influence
                                    with our strategic partnership.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-12 mb-cus-m" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                            ata-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="module shadow rounded d-flex align-items-center flex-column p-3 h-100">
                                <div className="min-h-partner-logo">
                                    <Image src={ourPartnerImg2} className="d-block partners-logo w-auto mb-3" alt="GUI Solutions Lanka (Pvt) Ltd" />
                                </div>
                                <h5 className="text-blue font-20 text-center mb-2 fw-bold">
                                    Drive Revenue
                                </h5>
                                <p className="font-16 text-black line-hight-p text-center">
                                    Become a partner with GUI Solutions Lanka and drive revenue with our innovative software solutions
                                    tailored for enterprises worldwide. Benefit from industry-leading technology, expert support, and
                                    opportunities to expand your market reach, ensuring mutual growth and success in the digital landscape.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-12 mb-cus-m" data-aos="fade-left" data-aos-anchor-placement="top-bottom"
                            ata-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="module shadow rounded d-flex align-items-center flex-column p-3 h-100">
                                <div className="min-h-partner-logo">
                                    <Image src={ourPartnerImg1} className="d-block partners-logo w-auto mb-3" alt="GUI Solutions Lanka (Pvt) Ltd" />
                                </div>
                                <h5 className="text-blue font-20 text-center mb-2 fw-bold">
                                    Advance Your Business
                                </h5>
                                <p className="font-16 text-black line-hight-p text-center">
                                    Become a partner with GUI Solutions Lanka and advance your business with access to cutting-edge technology
                                    solutions tailored to enhance efficiency, scalability, and innovation. Benefit from our industry expertise
                                    and global reach to accelerate growth and achieve unparalleled success in your market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PartnerPageForm />
        </>
    )
}

export default page