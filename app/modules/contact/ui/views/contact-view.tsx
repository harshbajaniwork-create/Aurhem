"use client";

import PageBanner from "~/components/PageBanner";
import { Button } from "~/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export const ContactView = () => {
  return (
    <main>
      <PageBanner
        title="Contact Us"
        description="We’d love to hear from you. Whether you have a question about our projects, investment opportunities, or just want to say hello, our team is ready to answer all your questions."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-plum mb-6">Get in Touch</h2>
            <p className="text-[#4A3A4A] mb-12 leading-relaxed">
              Have an inquiry or want to learn more about Aurhem? Fill out the
              form, or reach out to us directly through the channels below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-tertiary/20 p-3 rounded-lg text-plum">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-plum mb-1">Our Location</h3>
                  <p className="text-[#4A3A4A] leading-relaxed">
                    123 Investment Plaza, <br />
                    Financial District, Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-tertiary/20 p-3 rounded-lg text-plum">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-plum mb-1">Email Us</h3>
                  <p className="text-[#4A3A4A]">info@aurhem.com</p>
                  <p className="text-[#4A3A4A]">invest@aurhem.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-tertiary/20 p-3 rounded-lg text-plum">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-plum mb-1">Call Us</h3>
                  <p className="text-[#4A3A4A]">+971 4 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-tertiary/20 p-3 rounded-lg text-plum">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-plum mb-1">
                    Working Hours
                  </h3>
                  <p className="text-[#4A3A4A]">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-plum mb-6">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <Input id="subject" placeholder="Investment Inquiry" />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-plum hover:bg-plum/90 text-white font-semibold py-3 h-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
