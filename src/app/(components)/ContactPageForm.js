// components/ContactPageForm.js
"use client";
import { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';

export default function ContactPageForm() {
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

        if (!formData.inquiry_type_id) {
            errors.inquiry_type_id = "Please select an inquiry type";
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

        const inquiryData = {
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone_number,
            inquiry_type_id: formData.inquiry_type_id,
            message: formData.message,
            'g-recaptcha-response': formData['g-recaptcha-response'],
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
        <div className="container-fluid my-4" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
            data-aos-duration="1400">
            <div className="container">
                <h2 className="font-36 text-blue fw-bold mb-5 text-center" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">Contact
                    <span className="border-blue-cus border-bottom border-2">Us&nbsp;</span>
                </h2>
                <div className="row align-items-center justify-content-center pb-5">
                    <div className="col-lg-8 col-sm-12 col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="row" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                                <div className="col-lg-6">
                                    <input className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted"
                                        type="text" placeholder="Your Name:*" aria-label="default input example" name="name"
                                        onChange={handleChange}
                                        value={formData.name} />
                                    {formErrors.name && <p className="text-danger font-15">{formErrors.name}</p>}
                                </div>
                                <div className="col-lg-6 pt-lg-0 pt-3">
                                    <input className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted"
                                        type="email" placeholder="Your Email:*" aria-label="default input example"
                                        name="email"
                                        onChange={handleChange}
                                        value={formData.email} />
                                    {formErrors.email && <p className="text-danger font-15">{formErrors.email}</p>}
                                </div>
                                <div className="col-lg-6 pt-3">
                                    <input className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted"
                                        type="text" placeholder="Your Phone:*" aria-label="default input example" name="phone_number"
                                        onChange={handleChange}
                                        value={formData.phone_number} />
                                    {formErrors.phone_number && <p className="text-danger font-15">{formErrors.phone_number}</p>}
                                </div>
                                <div className="col-lg-6 pt-3">
                                    <select className="form-select py-3 text-dark fw-bolder font-14 rounded-2 border-muted "
                                        name="inquiry_type_id" aria-label="Default select example"
                                        onChange={handleChange}
                                        value={formData.inquiry_type_id}
                                        required>
                                        <option value="" disabled>Inquiry:*</option>
                                        <option value="1">Mobile App Development</option>
                                        <option value="2">ERP Consultancy</option>
                                        <option value="3">eCommerce and Web Development</option>
                                        <option value="4">Business Software Solution</option>
                                        <option value="5">Become A Partner</option>
                                        <option value="6">General</option>
                                    </select>
                                </div>

                                <div className="col-12 pt-3">
                                    <textarea
                                        className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted"
                                        type="text" placeholder="Message:*" aria-label="default input example" rows="3"
                                        name="message"
                                        onChange={handleChange}
                                        value={formData.message}
                                    ></textarea>
                                    {formErrors.message && <p className="text-danger font-15">{formErrors.message}</p>}
                                </div>

                                <div className="col-12 px-lg-3 pt-3">
                                    <ReCAPTCHA sitekey="6Le0fA4qAAAAAEEmtZbWRJDaoRcKcp9HJWkGN_hU" onChange={onCaptchaChange} />
                                </div>
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
                    </div >
                </div >
            </div >
        </div >
    );
}
