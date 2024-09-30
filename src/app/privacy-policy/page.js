import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import privacyPolicyImg from '../../../public/images/about/privacy-policy.svg'

export const metadata = {
    title: "Privacy Policy - GUI Solutions Lanka",
    description: "",
    keywords: "",
    canonical: "https://guisrilanka.com/privacy-policy/",
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
                                Privacy Policy
                            </h1>
                            <p className="font-18 lh-base text-dark text-lg-start text-center">
                                At GUI Solutions Lanka (Pvt) Ltd, we prioritize your data security. Our Privacy Policy details
                                how we protect your information and uphold your privacy.
                            </p>
                            <Link href="/"
                                className="btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding">
                                Back to Home
                            </Link>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center">
                            <Image src={privacyPolicyImg} className="w-lg-75 pt-3"
                                alt="GUI Solutions Lanka (Pvt) Ltd" />
                        </div>
                    </div>
                </div>
            </div >

            <div className="container-fluid pb-5">
                <div className="container">
                    <div className="pb-3">
                        <h4 className="fw-bold text-blue mb-2">01. Information We Collect</h4>

                        <p className="mb-2 font-18 fw-semibold">We collect data through specific forms on our website:</p>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent lh-base fw-500">Inquiry Form: Collects your name, email address, phone number, and details related to your
                                inquiry.
                            </li>

                            <li className="list-group-item bg-transparent lh-base fw-500">Become a Partner Form: Gathers your name, email address, phone number, company name, and details
                                about the
                                proposed
                                partnership.</li>

                            <li className="list-group-item bg-transparent lh-base fw-500">Careers Form: Includes your name, email address, phone number, resume, and other relevant
                                information for
                                job
                                applications.</li>
                        </ul>
                    </div>

                    <div className="pb-3">
                        <h4 className="fw-bold text-blue mb-2">02. How We Use Your Information</h4>

                        <p className="mb-2 font-18 fw-semibold">The information collected is utilized for:</p>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent lh-base fw-500">
                                Responding to Inquiries: Addressing and managing inquiries submitted through the Inquiry Form.
                            </li>
                            <li className="list-group-item bg-transparent lh-base fw-500">
                                Evaluating Partnership Opportunities: Assessing and responding to partnership requests received
                                via
                                the
                                Become a
                                Partner Form.
                            </li>
                            <li className="list-group-item bg-transparent lh-base fw-500">
                                Processing Job Applications: Reviewing and processing applications submitted through the Careers
                                Form.
                            </li>
                        </ul>
                    </div>

                    <div className="pb-3">
                        <h4 className="fw-bold text-blue mb-2">03. Data Sharing and Security</h4>
                        <p className="mb-2 font-18 fw-semibold">We do not share your information with external parties. Your data is used solely for the purposes
                            outlined
                            above and
                            is protected by appropriate security measures to prevent unauthorized access, use, or disclosure.
                        </p>
                    </div>

                    <div className="pb-3">
                        <h4 className="fw-bold text-blue mb-2">04. Cookies and Tracking Technologies</h4>

                        <p className="mb-2 font-18 fw-semibold">Our use of cookies is limited to managing session information and enhancing your experience on our
                            website.
                            These
                            cookies are temporary and are deleted when you close your browser.</p>
                    </div>

                    <div className="pb-3">
                        <h4 className="fw-bold text-blue mb-2">
                            05. Your Data Protection Rights
                        </h4>

                        <p className="mb-2 font-18 fw-semibold">You have the following rights regarding your personal information:</p>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent lh-base fw-500">Access: Request a copy of the personal data we hold about you.</li>
                            <li className="list-group-item bg-transparent lh-base fw-500">Rectification: Request correction of any inaccuracies in your data.</li>
                            <li className="list-group-item bg-transparent lh-base fw-500">Erasure: Request deletion of your data, subject to legal or contractual obligations.</li>
                            <li className="list-group-item bg-transparent lh-base fw-500">Restriction: Request restriction on the processing of your data, where applicable.</li>
                        </ul>
                    </div>

                    <div className="pb-3">
                        <h4 className="fw-bold text-blue mb-2">06. Changes to This Privacy Policy</h4>

                        <p className="mb-2 font-18 fw-semibold">
                            We may update this Privacy Policy periodically to reflect changes in our practices or legal
                            requirements. Updates
                            will be posted on this page, with the &quot;Last Updated&quot; date revised accordingly.
                        </p>

                    </div>

                    <div className="pb-3">
                        <h4 className="fw-bold text-blue mb-2">
                            07. Contact Us
                        </h4>

                        <p className="mb-2 font-18 fw-semibold">
                            For questions or concerns regarding this Privacy Policy or how we handle your information, please
                            contact us
                            at:
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent lh-base fw-500 text-blue fw-bold">
                                Email: info@guisrilanka.com
                            </li>
                            <li className="list-group-item bg-transparent lh-base fw-500 text-blue fw-bold">
                                Website: guisrilanka.com
                            </li>
                            <li className="list-group-item bg-transparent lh-base fw-500 text-blue fw-bold">
                                <Link href="tel:+94112922420" className="text-blue">Phone: +94 112922420</Link></li>
                        </ul>
                    </div>


                </div>
            </div>
        </>
    )
}

export default page