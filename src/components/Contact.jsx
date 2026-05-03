import { useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiXCircle, FiLoader } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: 'New Submission from Portfolio' });
  const [status, setStatus] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', subject: 'New Submission from Portfolio' });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const inputClass = "w-full bg-space-900 border border-white/10 rounded-lg px-4 py-3 text-white text-base focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors";

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-space-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-bold text-accent-primary tracking-widest uppercase mb-2">Get in touch</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold">Let's Work Together</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-stretch">

          {/* Contact Info */}
          <div className="pb-2 md:pb-0">
            <h4 className="text-2xl font-display font-bold text-white mb-4">Have an idea?</h4>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you have a question, want to start a project, or simply want to connect, feel free to send me a message. I am currently open to exciting opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 glass-card rounded-full flex items-center justify-center text-accent-primary">
                  <FiMail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-white font-medium break-all">ravindunirman3@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 glass-card rounded-full flex items-center justify-center text-accent-secondary">
                  <FiMapPin size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-white font-medium">Remote / Galle, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-6 sm:p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <input type="hidden" name="subject" value="New Submission from Portfolio"></input>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full btn-primary flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                {status === 'submitting' ? <FiLoader className="animate-spin" /> : <FiSend />}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-green-400 text-sm mt-4 p-3 bg-green-400/10 rounded-lg border border-green-400/20">
                  <FiCheckCircle className="shrink-0" /> Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-red-400 text-sm mt-4 p-3 bg-red-400/10 rounded-lg border border-red-400/20">
                  <FiXCircle className="shrink-0" /> Something went wrong. Please try again!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;