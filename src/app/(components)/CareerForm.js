"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';

function CareerForm({ careerData = {}, slug }) {
    const [careerInputData, setCareerInputData] = useState({
        first_name: careerData.first_name || "",
        last_name: careerData.last_name || "",
        email: careerData.email || "",
        phone_number: careerData.phone_number || "",
        resume: null,
    });

    const [invalidFields, setInvalidFields] = useState([]);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
    const [token, setReToken] = useState("");

    // Handle form submission
    const submitForm = async (event) => {
        event.preventDefault();

        // Validate fields before submission
        const invalidFields = validateForm();
        if (invalidFields.length > 0) {
            setInvalidFields(invalidFields);
            return;
        }

        if (!token) {
            Swal.fire({
                icon: 'error',
                title: 'CAPTCHA Required',
                text: 'Please complete the CAPTCHA before submitting.',
            });
            return;
        }

        // Prepare data for submission
        const formData = new FormData();
        formData.append("first_name", careerInputData.first_name);
        formData.append("last_name", careerInputData.last_name);
        formData.append("email", careerInputData.email);
        formData.append("phone_number", careerInputData.phone_number);
        formData.append("resume", careerInputData.resume);
        formData.append("g-recaptcha-response", token);

        Swal.fire({
            title: 'Submitting...',
            text: 'Please wait while we submit your request.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            // Make the API call (use your actual API endpoint here)
            const response = await fetch(`https://admin.guisrilanka.com/api/careers/${slug}`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            const responseData = await response.json();
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Form submitted successfully!',
            });

            setCareerInputData({
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                resume: null,
            });
            setReToken("");
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: "Error submitting the form:" + error,
            });
        }
    };

    // Handle file change for resume upload
    const handleFileChange = (event) => {
        setCareerInputData({
            ...careerInputData,
            resume: event.target.files[0],
        });
    };

    const onCaptchaChange = (value) => {
        setReToken(value); // Capture the reCAPTCHA token
    };

    // Form validation logic
    const validateForm = () => {
        const invalid = [];

        if (!careerInputData.first_name) invalid.push("first_name");
        if (!careerInputData.last_name) invalid.push("last_name");
        if (!careerInputData.email || !validateEmail(careerInputData.email)) invalid.push("email");
        if (!careerInputData.phone_number || !validatePhoneNumber(careerInputData.phone_number))
            invalid.push("phone_number");

        return invalid;
    };

    // Email validation function
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    // Phone number validation function
    const validatePhoneNumber = (phone) => {
        const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (!phonePattern.test(phone)) {
            setPhoneNumberError(true);
            setPhoneNumberErrorMessage("Phone number must be 10 digits");
            return false;
        }
        setPhoneNumberError(false);
        return true;
    };

    return (
        <>
            <div className="row align-items-center pb-5">
                <div className="col-lg-8">
                    <form onSubmit={submitForm}>
                        <div className="row">
                            <input type="hidden" value="Inquiry" name="request_method" />
                            <input type="hidden" name="id" value={careerData.id} />

                            <div className="col-lg-6 pt-3">
                                <input
                                    className={`form-control py-3 text-dark fw-bolder ${invalidFields.includes("first_name") ? "is-invalid" : ""
                                        }`}
                                    type="text"
                                    placeholder="Your First Name:*"
                                    name="first_name"
                                    value={careerInputData.first_name}
                                    onChange={(e) =>
                                        setCareerInputData({
                                            ...careerInputData,
                                            first_name: e.target.value,
                                        })
                                    }
                                />
                                {invalidFields.includes("first_name") && (
                                    <div className="invalid-feedback">Please enter your first name</div>
                                )}
                            </div>

                            <div className="col-lg-6 pt-3">
                                <input
                                    className={`form-control py-3 text-dark fw-bolder ${invalidFields.includes("last_name") ? "is-invalid" : ""
                                        }`}
                                    type="text"
                                    placeholder="Your Last Name:*"
                                    name="last_name"
                                    value={careerInputData.last_name}
                                    onChange={(e) =>
                                        setCareerInputData({
                                            ...careerInputData,
                                            last_name: e.target.value,
                                        })
                                    }
                                />
                                {invalidFields.includes("last_name") && (
                                    <div className="invalid-feedback">Please enter your last name</div>
                                )}
                            </div>

                            <div className="col-lg-6 pt-3">
                                <input
                                    className={`form-control py-3 text-dark fw-bolder ${invalidFields.includes("email") ? "is-invalid" : ""
                                        }`}
                                    type="email"
                                    placeholder="Your Email:*"
                                    name="email"
                                    value={careerInputData.email}
                                    onChange={(e) =>
                                        setCareerInputData({
                                            ...careerInputData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                                {invalidFields.includes("email") && (
                                    <div className="invalid-feedback">Please enter a valid email</div>
                                )}
                            </div>

                            <div className="col-lg-6 pt-3">
                                <input
                                    className={`form-control py-3 text-dark fw-bolder ${phoneNumberError || invalidFields.includes("phone_number")
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                    type="text"
                                    placeholder="Your Phone:*"
                                    name="phone_number"
                                    value={careerInputData.phone_number}
                                    onChange={(e) =>
                                        setCareerInputData({
                                            ...careerInputData,
                                            phone_number: e.target.value,
                                        })
                                    }
                                />
                                {phoneNumberError && (
                                    <div className="invalid-feedback">{phoneNumberErrorMessage}</div>
                                )}
                                {invalidFields.includes("phone_number") && (
                                    <div className="invalid-feedback">Please enter your phone number</div>
                                )}
                            </div>

                            <div className="col-6 pt-3">
                                <div>
                                    <input
                                        type="file"
                                        className="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted"
                                        id="resume"
                                        placeholder="Your Resume:*"
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="resume mt-2">Upload your resume (PDF preferred)</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 pt-3">
                            <ReCAPTCHA sitekey="6Le0fA4qAAAAAEEmtZbWRJDaoRcKcp9HJWkGN_hU" onChange={onCaptchaChange} />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CareerForm;
