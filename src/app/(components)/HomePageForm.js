// components/HomePageForm.js
"use client";
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import contactImg from '../../../public/images/app/contact.svg';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';

export default function HomePageForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        inquiry_type_id: '',
        message: '',
        request_method: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }

        if (!formData.phone_number.trim()) {
            errors.phone_number = "Phone number is required";
        } else if (!/^\d+$/.test(formData.phone_number)) {
            errors.phone_number = "Phone number should be numeric";
        } else if (formData.phone_number.length !== 10) {
            errors.phone_number = "Phone number should be 10 digits long";
        }

        if (!formData.request_method) {
            errors.request_method = "Please select an inquiry type";
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
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

        // Perform form validation
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

        const inquiryData = {
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone_number,
            inquiry_type_id: formData.request_method,
            message: formData.message,
            'g-recaptcha-response': token,
            request_method: 'Inquiry'
        };

        try {
            const response = await axios.post('https://admin.guisrilanka.com/api/inquiry', inquiryData, {
                headers: { 'Content-Type': 'application/json' }
            });

            Swal.close();

            if (response.data.status === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Form submitted successfully!',
                });
                setFormData({ name: '', email: '', phone_number: '', message: '', request_method: '' });
            } else {

                let errorHtml = '<ul class="text-danger fw-bold">';

                $.each(response.data.message, function (index, message) {
                    errorHtml += '<li>' + message + '</li>';
                });

                errorHtml += '</ul>';

                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: errorHtml,
                });
            }
        } catch (err) {
            Swal.close();
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was a problem submitting the form.',
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="container-fluid mines-mt-3 mt-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-sm-12 py-5">
                        <h2 className="text-blue font-36 fw-bold pt-5 pb-2">Request a Call Back</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="request_method" value="Inquiry" />
                            <div className="row pt-3">
                                <div className="col-lg-6">
                                    <select
                                        className="form-select py-3 text-dark fw-bolder font-14 rounded-3 border-muted"
                                        name="request_method"
                                        value={formData.request_method}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>How can we help:*</option>
                                        <option value="1">Mobile App Development</option>
                                        <option value="2">ERP Consultancy</option>
                                        <option value="3">eCommerce and Web Development</option>
                                        <option value="4">Business Software Solution</option>
                                        <option value="5">Become A Partner</option>
                                        <option value="6">General</option>
                                    </select>
                                    {formErrors.request_method && <p className="text-danger font-15">{formErrors.request_method}</p>}
                                </div>
                                <div className="col-lg-6 pt-lg-0 pt-3">
                                    <input
                                        className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-3 border-muted"
                                        type="email"
                                        placeholder="Email:*"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {formErrors.email && <p className="text-danger font-15">{formErrors.email}</p>}
                                </div>
                                <div className="col-lg-6 pt-3">
                                    <input
                                        className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-3 border-muted"
                                        type="text"
                                        placeholder="Phone Number:*"
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                    />
                                    {formErrors.phone_number && <p className="text-danger font-15">{formErrors.phone_number}</p>}
                                </div>
                                <div className="col-lg-6 pt-3">
                                    <input
                                        className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-3 border-muted"
                                        type="text"
                                        placeholder="Your Name:*"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {formErrors.name && <p className="text-danger font-15">{formErrors.name}</p>}
                                </div>
                                <div className="col-12 pt-4">
                                    <textarea
                                        className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-3 border-muted"
                                        placeholder="Message:*"
                                        rows="3"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {formErrors.message && <p className="text-danger font-15">{formErrors.message}</p>}
                                </div>
                                <ReCAPTCHA sitekey="6Le0fA4qAAAAAEEmtZbWRJDaoRcKcp9HJWkGN_hU" className='mt-3' onChange={onCaptchaChange} />
                                <div className="col-12 px-lg-3 pt-3">
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
                    <div className="col-lg-5 col-12 text-sm-center d-block mb-5 mb-lg-0">
                        <Image src={contactImg} className="d-block w-100" alt="GUI Solutions Lanka (Pvt) Ltd" />
                    </div>
                </div>
            </div>
        </div>
    );
}
