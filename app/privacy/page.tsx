export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">
          Privacy Policy
        </h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2024
            <br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              1. Introduction
            </h2>
            <p className="text-slate-600 mb-4">
              Anteres Unlimited Clothing LLC ("we," "our," or "us") respects
              your privacy and is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or make a purchase from us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Personal Information
            </h3>
            <p className="text-slate-600 mb-4">
              We may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Name and contact information (email, phone, address)</li>
              <li>
                Payment information (processed securely through third-party
                providers)
              </li>
              <li>Shipping and billing addresses</li>
              <li>Order history and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Non-Personal Information
            </h3>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address and location data</li>
              <li>Website usage patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              4. Information Sharing
            </h2>
            <p className="text-slate-600 mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Shipping companies for order fulfillment</li>
              <li>Payment processors for transaction processing</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              5. Data Security
            </h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              6. Your Rights
            </h2>
            <p className="text-slate-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability (where applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              7. Cookies
            </h2>
            <p className="text-slate-600 mb-4">
              We use cookies and similar technologies to enhance your browsing
              experience, analyze website traffic, and personalize content. You
              can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              8. International Transfers
            </h2>
            <p className="text-slate-600 mb-4">
              As we operate between the USA and Singapore, your information may
              be transferred and processed in different countries. We ensure
              appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              9. Changes to This Policy
            </h2>
            <p className="text-slate-600 mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              10. Contact Us
            </h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600">
                <strong>Anteres Unlimited Clothing LLC</strong>
                <br />
                100 E Broad St Ste 1350
                <br />
                Columbus, OH 43215, USA
                {/* <br />
                Email: privacy@anteresclothing.com
                <br />
                Phone: +1 (614) 555-0123 */}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
