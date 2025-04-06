import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane, FaMapMarked } from "react-icons/fa";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();


    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                serviceID,
                templateID,
                data,
                publicKey,
            );
            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            toast.error("Failed to send message. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-6 md:p-10 lg:p-14">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0071c0] mb-4 font-serif">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
                        Have a question or need assistance? Fill out the form below and our team will
                        get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071c0] focus:border-transparent transition-all duration-200 outline-none"
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1 ml-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    placeholder="john@example.com"
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071c0] focus:border-transparent transition-all duration-200 outline-none"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1 ml-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Phone Input */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Phone Number (Optional)
                            </label>
                            <div className="relative">
                                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type="tel"
                                    {...register("phone")}
                                    placeholder="+1 234 567 890"
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071c0] focus:border-transparent transition-all duration-200 outline-none"
                                />
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Your Message
                            </label>
                            <textarea
                                {...register("message", {
                                    required: "Message is required",
                                    minLength: {
                                        value: 10,
                                        message: "Message must be at least 10 characters"
                                    }
                                })}
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071c0] focus:border-transparent transition-all duration-200 outline-none"
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1 ml-1">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#0071c0] hover:bg-[#005a9b] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <FaPaperPlane className="text-lg" />
                            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                        </button>
                    </form>

                    {/* Contact Information */}
                    <div className="bg-gray-50 rounded-xl p-6 lg:p-8 h-full flex flex-col justify-center">
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="bg-[#0071c0] p-3 rounded-lg shadow-sm">
                                    <FaMapMarked className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                                        Our Office
                                    </h3>
                                    <p className="text-gray-600">
                                        Near Sati Kund, Kankhal, Haridwar, Uttarakhand
                                        <br />
                                        249408
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#0071c0] p-3 rounded-lg shadow-sm">
                                    <FaEnvelope className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                                        Email Us
                                    </h3>
                                    <p className="text-gray-600">
                                        <a href="mailto:info@aumtourism.com" className="hover:text-[#0071c0] transition-colors">
                                            info@aumtourism.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#0071c0] p-3 rounded-lg shadow-sm">
                                    <FaPhone className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                                        Call Us
                                    </h3>
                                    <p className="text-gray-600">
                                        <a href="tel:+919119058603" className="hover:text-[#0071c0] transition-colors">
                                            +91 9119058603
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default ContactUs;