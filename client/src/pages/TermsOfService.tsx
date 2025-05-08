import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const TermsOfService = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead">
              These Terms of Service ("Terms") govern your use of the WebDevPro website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2>Services</h2>
            <p>
              WebDevPro provides rapid website design and development services. We offer both same-day delivery and 3-hour delivery options for websites based on the requirements provided by clients.
            </p>
            <p>
              Our services may include, but are not limited to:
            </p>
            <ul>
              <li>Website design and development</li>
              <li>Landing page creation</li>
              <li>Business website development</li>
              <li>E-commerce websites</li>
              <li>Portfolio websites</li>
              <li>Custom web development</li>
            </ul>

            <h2>Service Delivery</h2>
            <p>
              We strive to deliver all projects within the timeframe specified (same-day or 3-hour turnaround). However, complex requirements or changes requested during the development process may extend delivery times. We will communicate any anticipated delays promptly.
            </p>
            <p>
              Project timelines begin after:
            </p>
            <ul>
              <li>All project requirements are clearly defined and agreed upon</li>
              <li>Payment has been received and confirmed</li>
              <li>All necessary assets (logos, content, etc.) have been provided</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              We accept various payment methods including credit/debit cards, PayPal, cryptocurrencies, and bank transfers. All payments must be made in advance before work commences.
            </p>
            <p>
              By making a payment, you agree to our refund policy as outlined below. All prices are in USD unless otherwise specified.
            </p>

            <h2>Refund Policy</h2>
            <p>
              We are committed to delivering high-quality websites that meet your requirements. If you are not satisfied with our services, our refund policy is as follows:
            </p>
            <ul>
              <li>If we fail to deliver within the agreed timeframe (subject to the client providing all required information and assets), a full refund may be issued.</li>
              <li>If the delivered website differs substantially from the agreed requirements, we will first attempt to rectify the issues. If we cannot resolve the issues to your satisfaction, a partial or full refund may be issued at our discretion.</li>
              <li>No refunds will be issued for changes in project requirements after work has commenced or for subjective design preferences.</li>
              <li>Refund requests must be submitted within 7 days of project delivery.</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              Upon full payment, you will receive ownership rights to the final website design and content created specifically for your project. However, WebDevPro retains ownership of:
            </p>
            <ul>
              <li>Any proprietary tools, frameworks, or systems used to create your website</li>
              <li>Non-exclusive design elements or templates that may be used in other projects</li>
              <li>The right to display your website in our portfolio (unless otherwise negotiated)</li>
            </ul>
            <p>
              You are responsible for ensuring that any content, images, or materials you provide do not infringe on any third-party intellectual property rights.
            </p>

            <h2>Client Responsibilities</h2>
            <p>
              To ensure timely delivery, clients are responsible for:
            </p>
            <ul>
              <li>Providing clear project requirements</li>
              <li>Supplying necessary content, images, and brand assets</li>
              <li>Timely communication and feedback</li>
              <li>Making payment as per the agreed terms</li>
              <li>Ensuring they have the right to use any materials provided to us</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              WebDevPro is not liable for:
            </p>
            <ul>
              <li>Any losses or damages resulting from your use of our services</li>
              <li>Downtime, errors, or security issues related to third-party hosting services</li>
              <li>Content inaccuracies or errors in materials provided by the client</li>
              <li>Business losses or damages resulting from website functionality issues</li>
            </ul>
            <p>
              Our total liability shall not exceed the amount paid for the services.
            </p>

            <h2>Website Maintenance and Updates</h2>
            <p>
              Unless specified in a separate agreement, our service does not include ongoing website maintenance or updates after project delivery. We offer separate maintenance packages for clients who require ongoing support.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate the service agreement if:
            </p>
            <ul>
              <li>The other party breaches these Terms and fails to remedy the breach within 7 days</li>
              <li>By mutual agreement in writing</li>
            </ul>
            <p>
              Upon termination, you will be responsible for any fees incurred for work completed.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Your continued use of our services after any changes indicates your acceptance of the updated Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at:
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

export default TermsOfService;