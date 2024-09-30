// components/PartnerPageForm.js
"use client";

import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';

export default function PartnerPageForm() {

    const [formData, setFormData] = useState({
        name: '',
        title: '',
        email: '',
        phone_number: '',
        company: '',
        website: '',
        details: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = "Please provide a valid name.";
        }

        if (!formData.title.trim()) {
            errors.title = "Please provide a valid title.";
        }

        if (!formData.email.trim()) {
            errors.email = "Please provide a valid email.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Please provide a valid email.";
        }

        if (!formData.phone_number.trim()) {
            errors.phone_number = "Please provide a valid phone";
        } else if (!/^\d+$/.test(formData.phone_number)) {
            errors.phone_number = "Phone number should be numeric";
        } else if (formData.phone_number.length !== 10) {
            errors.phone_number = "Phone number should be 10 digits long";
        }

        if (!formData.company.trim()) {
            errors.company = "Please provide a valid company.";
        }

        if (!formData.website.trim()) {
            errors.website = "Please provide a valid website.";
        }

        if (!formData.details.trim()) {
            errors.details = "Please provide a valid details.";
        }

        return errors;

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onCaptchaChange = (value) => {
        setFormData({ ...formData, 'g-recaptcha-response': value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Check for captcha response
        if (!formData['g-recaptcha-response']) {
            Swal.fire({
                icon: 'error',
                title: 'CAPTCHA Required',
                text: 'Please complete the CAPTCHA before submitting.',
            });
            setLoading(false);
            return;
        }

        // form validation
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setLoading(true);

        // Show SweetAlert2 loader
        Swal.fire({
            title: 'Submitting...',
            text: 'Please wait while we submit your request.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        const token = formData['g-recaptcha-response'];
        const partnerData = {
            'name': formData.name,
            'title': formData.title,
            'email': formData.email,
            'phone_number': formData.phone_number,
            'company': formData.company,
            'website': formData.website,
            'details': formData.details,
            'g-recaptcha-response': token,
        };

        try {

            const response = await axios.post('https://admin.guisrilanka.com/api/partner', partnerData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            Swal.close();

            if (response.data.status === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Form submitted successfully!',
                });
                setFormData({ name: '', title: '', email: '', phone_number: '', company: '', website: '', details: '' });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed!',
                    text: response.data.message,
                });
                setError(response.data.message);
            }

        } catch (error) {
            Swal.close();
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="container-fluid my-4 pb-5" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
            data-aos-duration="1400">
            <div className="container">
                <h2 className="font-36 text-blue fw-bold mb-5 text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                    ata-aos-easing="ease-out-cubic" data-aos-duration="1400">Become <span
                        className="border-blue-cus border-bottom border-2">Our Partner&nbsp;</span></h2>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8 col-sm-12 col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="row" data-aos="fade-up" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
                                data-aos-duration="1400">
                                <div className="col-lg-6">
                                    <input className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                                        placeholder="Full Name:*" aria-label="default input example" name="name"
                                        onChange={handleChange}
                                        value={formData.name} />
                                    {formErrors.name && <p className="text-danger font-15">{formErrors.name}</p>}
                                </div>
                                <div className="col-lg-6 pt-lg-0 pt-3">
                                    <input className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                                        placeholder="Tiitle:*" aria-label="default input example" name="title"
                                        onChange={handleChange}
                                        value={formData.title} />
                                    {formErrors.title && <p className="text-danger font-15">{formErrors.title}</p>}
                                </div>
                                <div className="col-lg-6 pt-3">
                                    <input className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                                        placeholder="Company:*" aria-label="default input example" name="company"
                                        onChange={handleChange}
                                        value={formData.company}
                                    />
                                    {formErrors.company && <p className="text-danger font-15">{formErrors.company}</p>}
                                </div>
                                <div className="col-lg-6 pt-3">
                                    <input className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                                        placeholder="Work Email:*" aria-label="default input example" name="email"
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                    {formErrors.email && <p className="text-danger font-15">{formErrors.email}</p>}
                                </div>
                                <div className="col-lg-6 pt-3">
                                    <input className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                                        placeholder="Work Phone:*" aria-label="default input example" name="phone_number"
                                        onChange={handleChange}
                                        value={formData.phone_number}
                                    />
                                    {formErrors.phone_number && <p className="text-danger font-15">{formErrors.phone_number}</p>}
                                </div>
                                <div className="col-lg-6 pt-3">
                                    <input className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                                        placeholder="Website:*" aria-label="default input example" name="website"
                                        onChange={handleChange}
                                        value={formData.website}
                                    />
                                    {formErrors.website && <p className="text-danger font-15">{formErrors.website}</p>}
                                </div>
                                <div className="col-12 pt-3">
                                    <textarea className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                                        placeholder="Details:*" aria-label="default input example" rows="3" name="details"
                                        onChange={handleChange}
                                        value={formData.details}
                                    ></textarea>
                                    {formErrors.details && <p className="text-danger font-15">{formErrors.details}</p>}
                                </div>

                                <div className="col-12 pt-3">
                                    <ReCAPTCHA sitekey="6Le0fA4qAAAAAEEmtZbWRJDaoRcKcp9HJWkGN_hU" onChange={onCaptchaChange} />
                                </div>

                                <div className="col-12 pt-3">
                                    <button
                                        className="btn hvr-shrink btn-cus-gradient rounded-pill px-5 text-white font-16 fw-bold float-lg-start rounded-padding"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );

}