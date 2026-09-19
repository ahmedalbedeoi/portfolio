import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiMail, HiCheckCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // Simulate sending — replace with real API / email service later
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Contact form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white">Get In Touch</h1>
        <p className="text-[#A3A3A3] mt-2">
          Have a project in mind, or want to work together? Send me a message.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form */}
       

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-2">
              <HiMail className="text-[#FF6B35] text-xl" />
              <h3 className="font-semibold text-white">Email</h3>
            </div>
            <p className="text-sm text-[#A3A3A3]"><a href="mailto:ahmedalbedeoi@gmail.com" className="hover:text-[#FF6B35]">ahmedalbedeoi@gmail.com</a></p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-white mb-4">Find Me Online</h3>
            <div className="flex gap-4 text-2xl text-[#A3A3A3]">
              <a href="https://github.com/ahmedalbedeoi" aria-label="GitHub" className="hover:text-[#FF6B35]"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ahmedalbedeoi" aria-label="LinkedIn" className="hover:text-[#FF6B35]"><FaLinkedin /></a>
              <a href="https://wa.me/966539634469" aria-label="WhatsApp" className="hover:text-[#FF6B35]"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-56 bg-[#141414] flex items-center justify-center text-[#787878] text-sm">
            Google Map (optional)
          </div>
        </div>
      </div>
    </section>
  );
}
