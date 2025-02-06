<div id="contact" className="py-16 bg-background/90 text-white">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-6">Contact Us</h2>
    <p className="text-lg md:text-xl mb-8 text-gray-300">
      Have questions or need assistance? Reach out to us, and we’ll be happy to help.
    </p>
    <div className="max-w-xl mx-auto">
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-background/90 border text-white focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-background/90 border text-white focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-lg bg-background/90 border text-white focus:outline-none"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>
