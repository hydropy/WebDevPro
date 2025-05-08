import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead">
              At WebDevPro, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you:
            </p>
            <ul>
              <li>Fill out forms on our website (including contact or inquiry forms)</li>
              <li>Correspond with us (via email, WhatsApp, or other channels)</li>
              <li>Subscribe to our newsletters or updates</li>
              <li>Request information about our services</li>
              <li>Provide feedback or respond to surveys</li>
            </ul>

            <p>
              The types of information we may collect include:
            </p>
            <ul>
              <li>Personal identifiers (name, email address, phone number)</li>
              <li>Business information (company name, job title)</li>
              <li>Communication preferences</li>
              <li>Project requirements and specifications</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Provide customer support and address technical issues</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety or property</li>
              <li>In connection with a business transfer (such as a merger or acquisition)</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>Access to your personal data</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal data</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>

            <h2>Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our website, analyze usage patterns, and tailor content to your interests. You can control cookie settings through your browser preferences.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to children under 16. We do not knowingly collect personal information from children. If we discover that a child has provided us with personal information, we will delete it.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this privacy policy or our data practices, please contact us at:
            </p>
            <ul>
              <li>WhatsApp: <a href="https://wa.me/919347455431">+91 93474 55431</a></li>
              <li>Email: support@webdevpro.com</li>
            </ul>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: May 8, 2025
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PrivacyPolicy;