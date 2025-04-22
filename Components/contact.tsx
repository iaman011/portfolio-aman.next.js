export default function Contact() {
  return (
    <section id="contact" className="py-24 mt-10 flex items-center justify-center px-6">
      <div className="text-center text-white max-w-3xl space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Let’s connect and bring your ideas to life!
        </h1>
        <p className="text-xl text-gray-300">
          Got a project in mind or just want to say hi? I’m always excited to hear about new ideas,
          collaborations, or opportunities.
        </p>

        <div className="bg-purple-500/90 text-white py-3 px-6 rounded-lg inline-block text-base font-medium shadow-lg">
          🚀 I’m currently open to new opportunities — freelance projects, part-time roles, or full-time positions.  
          If you're hiring or know someone who is, let’s talk!
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            // onClick={() => navigator.clipboard.writeText('youremail@example.com')}
            className="w-64 bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-200"
          >
            Copy my email address 📋
          </button>

          <a
            href="tel:+919310063238"
            className="w-64 bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-200 text-center"
          >
            +91 9310063238
          </a>
        </div>

        {/* This button is now separate and placed below */}
        <a
          href="mailto:youremail@example.com"
          className="w-64 mt-6 inline-block bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-200 text-center"
        >
          Let’s get in touch ✈️
        </a>
      </div>
    </section>
  );
}
