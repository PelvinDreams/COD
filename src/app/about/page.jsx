import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
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
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-foreground">
                Welcome to <span className="font-bold text-primary">SubSwap</span>, the leading
                marketplace for gamers worldwide. We provide a secure and seamless platform for
                gamers to trade, connect, and grow their gaming experience.
              </p>
              <p className="text-lg text-foreground">
                Our mission is to create a global community where gamers can exchange in-game items,
                accounts, and more, all while ensuring safety and transparency.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <motion.img
                src="/images/about.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}