import { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); 
    alert("Form submitted successfully!");
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black">Feedback...</h2>
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-black">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-black border-purple-500 outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-black border-purple-500 outline-none"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-4">
            <label className="block text-">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-black resize-none h-56 border-purple-500 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-900"
          >
            Send Message
          </button>
        </form>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
