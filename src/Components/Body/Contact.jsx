import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setSuccessMsg("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setErrors({});
        },
        (error) => {
          setSuccessMsg("Failed to send message. Please try again.");
        }
      );
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 py-20">
      {/* Gradient blobs (same as before) */}
      {/* ... same blob divs ... */}

      <div className="relative z-10 max-w-3xl w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
          Let's connect.
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white p-4 rounded-md w-full"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white p-4 rounded-md w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white w-full p-4 rounded-md"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          <div>
            <textarea
              rows="6"
              name="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white w-full p-4 rounded-md"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="group mt-4 px-10 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none transition-all duration-300 hover:shadow-lg"
            >
              <span className="inline-flex items-center transform transition-all duration-300 group-hover:-translate-y-1">
                Let's talk →
              </span>
            </button>
          </div>

          {successMsg && (
            <p className="text-center text-green-500 mt-4">{successMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
