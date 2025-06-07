import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

type FormValues = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const Section10:React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>();

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async () => {
    if (!formRef.current) return;
    setIsSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SECRET_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center px-6 lg:px-44 py-14 gap-14">
      <Toaster/>
      {/* Contact info */}
      <div className="flex flex-col w-full space-y-10">
        <div className="text-black text-[24px] lg:text-[64px] font-semibold leading-tight tracking-tighter">
          Contact Us
        </div>
        <div className="text-[#656565] text-[14px] lg:text-[20px]">
          Whether you’re a growing firm exploring automation or an established practice ready to scale, our team is here to help. We’d love to hear from you.
        </div>
        <div className="flex flex-col space-y-7">
          <div className="flex items-center gap-5">
            <img src="/assets/section10img1.png" alt="" className="h-12 lg:h-[56px]" />
            <div className="text-[#363434] text-[16px] lg:text-[20px]">info@casepilot.com</div>
          </div>
          <div className="flex items-center gap-5">
            <img src="/assets/section10img2.png" alt="" className="h-12 lg:h-[56px]" />
            <div className="text-[#363434] text-[16px] lg:text-[20px]">(+123) - 40190289</div>
          </div>
          <div className="flex items-center gap-5">
            <img src="/assets/section10img3.png" alt="" className="h-12 lg:h-[56px]" />
            <div className="text-[#363434] text-[16px] lg:text-[20px]">Los Angeles, California</div>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full lg:p-10 space-y-6 sm:border-2 sm:border-[#CDCDCD] rounded-3xl"
      >
        <div className="hidden sm:block text-[#05011F] text-[28px] lg:text-[32px] font-semibold leading-tight tracking-tighter">
          Let's get in touch
        </div>

        {/* Name + Company */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="fullName" className="text-[#363434] text-[13px] sm:text-[16px] mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Name"
              {...register("fullName", { required: "Name is required" })}
              className="bg-[#F5F1FF] border border-[#E2E2E2] text-[13px] sm:text-[16px] py-[11px] px-[21px] rounded-xl w-full"
              name="fullName"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="company" className="text-[#363434] text-[13px] sm:text-[16px] mb-1">Company</label>
            <input
              type="text"
              id="company"
              placeholder="Enter Company Name"
              {...register("company")}
              className="bg-[#F5F1FF] border border-[#E2E2E2] text-[13px] sm:text-[16px] py-[11px] px-[21px] rounded-xl w-full"
              name="company"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-[#363434] text-[13px] sm:text-[16px] mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format"
                }
              })}
              className="bg-[#F5F1FF] border border-[#E2E2E2] text-[13px] sm:text-[16px] py-[11px] px-[21px] rounded-xl w-full"
              name="email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="phone" className="text-[#363434] text-[13px] sm:text-[16px] mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Phone Number"
              {...register("phone")}
              className="bg-[#F5F1FF] border border-[#E2E2E2] text-[13px] sm:text-[16px] py-[11px] px-[21px] rounded-xl w-full"
              name="phone"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-[#363434] text-[13px] sm:text-[16px] mb-1">Your Message</label>
          <textarea
            id="message"
            placeholder="Add your text here"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Message should be at least 10 characters" }
            })}
            className="bg-[#F5F1FF] border border-[#E2E2E2] text-[13px] sm:text-[16px] py-[11px] px-[21px] rounded-xl w-full min-h-[135px]"
            name="message"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="bg-[#834CFF] py-[16px] px-[80px] rounded-full sm:rounded-2xl text-white text-[13px] sm:text-[16px] w-fit self-start"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Section10;
