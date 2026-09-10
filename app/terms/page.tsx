"use client";

import Image from "next/image";
import Link from "next/link";
import { useBranch } from "@/lib/useBranch";

export default function Terms() {
  const branch = useBranch();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/phuket-medical-clinic-1-1024x228.webp"
              alt="PMC Koh Sirey"
              width={150}
              height={33}
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to {branch.name}. These Terms and Conditions govern your use of our website (pmcsirey.net) and our medical clinic services. By accessing our website or using our services, you agree to be bound by these terms.
            </p>
            <p className="mt-4">
              <strong>Business Information:</strong><br />
              {branch.name}<br />
              {branch.addressFull}<br />
              Phone: {branch.phoneDisplay}<br />
              Operating Hours: {branch.hoursDisplay}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p>
              {branch.name} provides medical clinic services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>General medical consultations and check-ups</li>
              <li>Blood tests and laboratory services</li>
              <li>Vaccinations and immunizations</li>
              <li>Wound care services</li>
              <li>Respiratory and allergy treatment</li>
              <li>Urology care services</li>
              <li>Annual health check-up programmes</li>
              <li>International medical services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Medical Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
              <p className="font-semibold">Important Medical Notice:</p>
              <p className="mt-2">
                The information provided on this website is for general informational purposes only and should not be considered as medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
              </p>
            </div>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li>Never disregard professional medical advice or delay seeking it because of information on this website</li>
              <li>In case of a medical emergency, call emergency services immediately</li>
              <li>The website does not provide emergency medical services</li>
              <li>Test results and medical information are not a substitute for professional consultation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Appointments and Services</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">4.1 Booking Appointments</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Appointments can be made via phone, LINE, WhatsApp, or in-person</li>
              <li>We recommend booking in advance but also accept walk-in patients</li>
              <li>Please arrive 15 minutes before your scheduled appointment</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">4.2 Cancellation Policy</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Please notify us at least 2 hours in advance if you need to cancel or reschedule</li>
              <li>Repeated no-shows may affect future booking privileges</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">4.3 Payment</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Payment is due at the time of service</li>
              <li>We accept cash, credit cards, and mobile payments</li>
              <li>Insurance claims are the patient&apos;s responsibility to process</li>
              <li>Prices are subject to change without notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Patient Responsibilities</h2>
            <p>As a patient, you agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide accurate and complete medical history and personal information</li>
              <li>Inform us of any allergies, medications, or relevant health conditions</li>
              <li>Follow prescribed treatment plans and medical advice</li>
              <li>Attend scheduled appointments or provide timely cancellation notice</li>
              <li>Treat our staff and other patients with respect</li>
              <li>Settle all fees and charges promptly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Website Use</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">6.1 Acceptable Use</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the website&apos;s operation</li>
              <li>Copy, reproduce, or distribute website content without permission</li>
              <li>Submit false or misleading information</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">6.2 Intellectual Property</h3>
            <p>
              All content on this website, including text, images, logos, and design, is the property of {branch.name} or its licensors and is protected by copyright and trademark laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>We are not liable for any indirect, incidental, or consequential damages arising from website use</li>
              <li>Our liability for medical services is limited to the scope of professional medical practice standards</li>
              <li>We are not responsible for third-party website content linked from our site</li>
              <li>Website availability is not guaranteed and may be interrupted for maintenance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy</h2>
            <p>
              Your use of our website and services is also governed by our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>, which explains how we collect, use, and protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as LINE, WhatsApp, Google Maps). We are not responsible for the content, privacy practices, or terms of these external sites. We encourage you to review their policies before use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of the Kingdom of Thailand. Any disputes shall be subject to the exclusive jurisdiction of the Thai courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <p>If you have questions about these Terms and Conditions, please contact us:</p>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <p><strong>{branch.name}</strong></p>
              <p>{branch.addressFull}</p>
              <p>Phone: <a href={branch.phoneHref} className="text-blue-600 hover:underline">{branch.phoneDisplay}</a></p>
              <p>LINE: <a href={`https://line.me/R/ti/p/${branch.line}`} className="text-blue-600 hover:underline">{branch.line}</a></p>
              <p>WhatsApp: <a href={`https://wa.me/${branch.whatsapp}`} className="text-blue-600 hover:underline">+{branch.whatsapp}</a></p>
              <p>Operating Hours: {branch.hoursDisplay}</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {branch.name}. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
