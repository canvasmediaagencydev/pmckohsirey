"use client";

import Image from "next/image";
import Link from "next/link";
import { useBranch } from "@/lib/useBranch";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              {branch.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our medical services.
            </p>
            <p className="mt-4">
              <strong>Business Information:</strong><br />
              {branch.name}<br />
              {branch.addressFull}<br />
              Phone: {branch.phoneDisplay}<br />
              Email: info@pmcsirey.net
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name and contact information (phone number, email address)</li>
              <li>Medical history and health information (when you use our clinic services)</li>
              <li>Appointment details and service preferences</li>
              <li>Payment and billing information</li>
              <li>Communications with our staff</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Click patterns and interaction data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Improve website functionality and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Measure advertising effectiveness</li>
              <li>Provide personalized content</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.1 Third-Party Services</h3>
            <p>We use the following third-party services that may collect data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior. <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              <li><strong>Google Ads:</strong> To measure advertising effectiveness and provide relevant ads. <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Policy</a></li>
              <li><strong>LINE:</strong> For customer communication. <a href="https://line.me/en/terms/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LINE Terms</a></li>
              <li><strong>WhatsApp:</strong> For customer communication. <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp Privacy Policy</a></li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.2 Managing Cookies</h3>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies may affect website functionality. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>View and delete cookies</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies</li>
              <li>Clear cookies when you close your browser</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide and improve our medical services</li>
              <li>Schedule and manage appointments</li>
              <li>Communicate with you about your healthcare</li>
              <li>Process payments and billing</li>
              <li>Send appointment reminders and health information</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Analyze and improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Measure advertising effectiveness</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Healthcare providers:</strong> When necessary for your medical care</li>
              <li><strong>Service providers:</strong> Who assist in our operations (payment processors, IT services)</li>
              <li><strong>Legal authorities:</strong> When required by law or to protect rights and safety</li>
              <li><strong>Analytics partners:</strong> In aggregated, anonymized form</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Secure Socket Layer (SSL) encryption</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at {branch.phoneDisplay} or visit our clinic.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to provide our services and comply with legal obligations. Medical records are retained according to Thai healthcare regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 18. We do not knowingly collect personal information from children without parental consent. Medical services for minors require guardian consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <p><strong>{branch.name}</strong></p>
              <p>{branch.addressFull}</p>
              <p>Phone: <a href={branch.phoneHref} className="text-blue-600 hover:underline">{branch.phoneDisplay}</a></p>
              <p>LINE: <a href={`https://line.me/R/ti/p/${branch.line}`} className="text-blue-600 hover:underline">{branch.line}</a></p>
              <p>WhatsApp: <a href={`https://wa.me/${branch.whatsapp}`} className="text-blue-600 hover:underline">+{branch.whatsapp}</a></p>
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
