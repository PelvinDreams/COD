"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Search, Menu, X, Mail, Phone, MapPin, Loader } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2-second loader
    return () => clearTimeout(timer);
  }, []);

  // Framer Motion variants for animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      {/* Page Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-background z-50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Loader className="h-12 w-12 text-primary" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="fixed top-0 left-0 w-full p-4 bg-background/80 backdrop-blur-md border-b z-40"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div variants={slideIn} className="text-2xl font-bold text-primary">
            SubSwap
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <motion.a
              href="#home"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              variants={slideIn}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              variants={slideIn}
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              variants={slideIn}
            >
              Contact
            </motion.a>
            <Link
              href="/signup"
              className="text-sm font-medium text-primary hover:underline transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Search Bar and Call-to-Action Button */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-background/90 border"
              />
            </div>
            <Button size="sm" className="rounded-full">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
                <Link
                  href="/signup"
                  className="text-sm font-medium text-primary hover:underline transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Home Section */}
      <motion.section
        id="home"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="h-screen bg-cover bg-center relative flex items-center justify-center text-white pt-16"
        style={{ backgroundImage: "url('/images/bg.jpeg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
          <motion.h1
            variants={stagger}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            LEADING MARKETPLACE <br /> FOR GAMERS
          </motion.h1>
          <motion.p
            variants={stagger}
            className="text-lg md:text-xl mb-8 text-gray-300"
          >
            Trade securely with gamers throughout the world.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          >
            Start Trading
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-20 bg-background/90"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
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

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-20 bg-background/80"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>We'd love to hear from you!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>We'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" rows={5} />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-10 bg-background/90 border-t"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">SubSwap</h3>
              <p className="text-foreground">
                The leading marketplace for gamers. Trade securely and connect with gamers worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-foreground hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-foreground hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-foreground hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="text-foreground hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="text-foreground hover:text-primary">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-foreground">
            &copy; {new Date().getFullYear()} SubSwap. All rights reserved.
          </div>
        </div>
      </motion.footer>
    </>
  );
}