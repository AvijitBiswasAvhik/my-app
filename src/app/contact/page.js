/* app/contact/page.jsx */
import React from "react";
import Form from "./form";
export const metadata = {
  title: "Contact Us | Lipika",
  description:
    "Get in touch with us. Email, phone, and location information included.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        {/* Info Section */}
        <div className="bg-indigo-600 text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Talk</h2>
            <p className="text-lg">
              Have questions, suggestions, or just want to say hello? We&apos;d
              love to hear from you.
            </p>
          </div>
          <div className="mt-8">
            <p className="mb-2">📧 Email: support@example.com</p>
            <p className="mb-2">📞 Phone: +880 123 456 789</p>
            <p>📍 Location: Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
          <Form />
        </div>
      </div>
    </section>
  );
}
