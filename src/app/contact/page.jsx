import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <p className="text-lg text-foreground">support@subswap.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <p className="text-lg text-foreground">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-lg text-foreground">123 Gaming Street, Virtual World</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded-lg border bg-background/90"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-lg border bg-background/90"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 rounded-lg border bg-background/90"
                rows={5}
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}