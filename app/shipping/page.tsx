export default function ShippingPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">Shipping & Returns Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2024
            <br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Shipping Information</h2>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Shipping Destinations</h3>
            <p className="text-slate-600 mb-4">
              Anteres Unlimited Clothing LLC currently ships exclusively to Singapore. We import products directly from
              the United States and distribute them through our Singapore operations.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Processing Time</h3>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>
                <strong>Standard Orders:</strong> 2-3 business days
              </li>
              <li>
                <strong>Custom Orders:</strong> 5-7 business days
              </li>
              <li>
                <strong>Bulk Orders:</strong> 7-10 business days
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Shipping Methods & Timeframes</h3>
            <div className="bg-slate-50 p-4 rounded-lg mb-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Standard Shipping</h4>
                  <p className="text-slate-600 text-sm mb-2">7-14 business days</p>
                  <p className="text-slate-600 text-sm">S$15 - S$25 (based on weight)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Express Shipping</h4>
                  <p className="text-slate-600 text-sm mb-2">3-7 business days</p>
                  <p className="text-slate-600 text-sm">S$35 - S$50 (based on weight)</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Free Shipping</h3>
            <p className="text-slate-600 mb-4">
              Free standard shipping is available for orders over S$200. Express shipping discounts may apply for orders
              over S$500.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Import Duties & Taxes</h2>
            <p className="text-slate-600 mb-4">
              As products are imported from the United States, customers may be responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Singapore Goods and Services Tax (GST)</li>
              <li>Import duties (if applicable)</li>
              <li>Customs processing fees</li>
            </ul>
            <p className="text-slate-600 mb-4">
              <strong>Note:</strong> These charges are determined by Singapore Customs and are not included in our
              product prices. We will provide guidance on estimated duties when possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Order Tracking</h2>
            <p className="text-slate-600 mb-4">Once your order ships, you will receive:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Shipping confirmation email with tracking number</li>
              <li>Real-time tracking updates</li>
              <li>Delivery notifications</li>
              <li>SMS updates for express shipments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Returns Policy</h2>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Return Eligibility</h3>
            <p className="text-slate-600 mb-4">Items are eligible for return if they meet the following criteria:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Returned within 30 days of delivery</li>
              <li>Items in original, unworn condition</li>
              <li>Original tags and packaging included</li>
              <li>No signs of wear, damage, or alteration</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Non-Returnable Items</h3>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Underwear and intimate apparel</li>
              <li>Customized or personalized items</li>
              <li>Items damaged by misuse</li>
              <li>Items returned after 30 days</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Return Process</h3>
            <ol className="list-decimal pl-6 text-slate-600 mb-4">
              <li>Contact our customer service team at returns@anteresclothing.com</li>
              <li>Provide your order number and reason for return</li>
              <li>Receive return authorization and shipping instructions</li>
              <li>Package items securely with original packaging</li>
              <li>Ship items using provided return label</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Exchanges</h2>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Size Exchanges</h3>
            <p className="text-slate-600 mb-4">
              We offer free size exchanges within Singapore for the same item in a different size, subject to
              availability. Exchange requests must be made within 30 days of delivery.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Color/Style Exchanges</h3>
            <p className="text-slate-600 mb-4">
              Color or style changes are processed as returns and new orders. The original item must be returned, and a
              new order placed for the desired item.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Refunds</h2>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Refund Processing</h3>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Refunds processed within 5-10 business days after receiving returned items</li>
              <li>Refunds issued to original payment method</li>
              <li>Original shipping costs are non-refundable</li>
              <li>Return shipping costs are customer's responsibility</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-900">Partial Refunds</h3>
            <p className="text-slate-600 mb-4">Partial refunds may be issued for:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Items with minor defects or damage</li>
              <li>Items returned without original packaging</li>
              <li>Items showing signs of use beyond trying on</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Damaged or Defective Items</h2>
            <p className="text-slate-600 mb-4">If you receive damaged or defective items:</p>
            <ol className="list-decimal pl-6 text-slate-600 mb-4">
              <li>Contact us immediately at support@anteresclothing.com</li>
              <li>Provide photos of the damaged item</li>
              <li>Include your order number and description of the issue</li>
              <li>We will arrange for replacement or full refund</li>
              <li>Return shipping will be covered by us</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Lost or Stolen Packages</h2>
            <p className="text-slate-600 mb-4">For packages marked as delivered but not received:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Check with neighbors and building management</li>
              <li>Verify delivery address was correct</li>
              <li>Contact us within 48 hours of delivery confirmation</li>
              <li>We will investigate with shipping carrier</li>
              <li>Replacement or refund provided based on investigation results</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Contact Information</h2>
            <p className="text-slate-600 mb-4">For shipping and returns inquiries:</p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600">
                <strong>Customer Service:</strong> support@anteresclothing.com
                <br />
                <strong>Returns Department:</strong> returns@anteresclothing.com
                <br />
                <strong>Phone:</strong> +65 6555 0123 (Singapore)
                <br />
                <strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM (SGT)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
