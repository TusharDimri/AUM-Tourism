import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane, FaMapMarked } from "react-icons/fa";

const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
            .then(() => {
                toast.success("Message sent successfully!");
                reset();
            })
            .catch(() => {
                toast.error("Failed to send message. Try again later.");
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 md:p-12">
            <div className="w-[80vw] w-full bg-white shadow-2xl rounded-2xl p-10 md:p-16">
                <h2 className="text-4xl font-bold text-[#0071c0] text-center mb-6">Contact Us</h2>
                <p className="text-center text-gray-600 mb-10 text-lg">We would love to hear from you!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                placeholder="Your Name"
                                className="w-full pl-12 p-4 border border-gray-300 rounded-lg text-lg focus:ring focus:ring-[#0071c0] focus:border-transparent outline-none"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Your Email"
                                className="w-full pl-12 p-4 border border-gray-300 rounded-lg text-lg focus:ring focus:ring-[#0071c0] focus:border-transparent outline-none"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="relative">
                            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                            <input
                                type="text"
                                {...register("phone")}
                                placeholder="Your Phone (Optional)"
                                className="w-full pl-12 p-4 border border-gray-300 rounded-lg text-lg focus:ring focus:ring-[#0071c0]  focus:border-transparent outline-none"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                placeholder="Your Message"
                                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring focus:ring-[#0071c0] focus:border-transparent outline-none"
                                rows="5"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0071c0] text-white p-4 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:bg-[#005a9b] transition duration-300 text-lg"
                        >
                            <FaPaperPlane /> <span>Send Message</span>
                        </button>
                    </form>

                    <div className="h-[100%] w-[100%] space-y-6 flex flex-col items-center justify-center">
                        <div className="flex  space-x-4 text-gray-700">
                            <FaEnvelope className="text-[#0071c0] text-2xl" />
                            <p className="text-lg">support@example.com</p>
                        </div>
                        <div className="flex  space-x-4 text-gray-700">
                            <FaPhone className="text-[#0071c0] text-2xl" />
                            <p className="text-lg">+1 234 567 890</p>
                        </div>
                        <div className="flex  space-x-4 text-gray-700">
                            <FaMapMarked className="text-[#0071c0] text-2xl" />
                            <p className="text-lg">1234 Street Name, City, Country</p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />
        </div>
    );
};

export default ContactUs;
