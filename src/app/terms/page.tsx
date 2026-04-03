'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsAndConditions() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0
      }
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="w-full px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <p className="text-orange-500 text-sm font-bold uppercase tracking-wider font-rajdhani mb-2">
                LEGAL INFORMATION
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6">
              TERMS & CONDITIONS
            </h1>
            <p className="text-lg text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services
            </p>
          </motion.div>

          {/* Car Sales Terms */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="bg-black border border-orange-600/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-orange-500 uppercase font-orbitron tracking-wider mb-6">
                Terms and Conditions - Car Sales
              </h2>
              
              {/* Introduction */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">1. Introduction</h3>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  Welcome to The Car Edition Ltd, serving the discerning customers of the UK market. These Terms and Conditions establish a legally binding agreement between you and The Car Edition Ltd. By utilising our services, you agree to abide by these terms. Should you have any reservations about these terms, kindly abstain from using our services.
                </p>
              </motion.div>

              {/* Vehicle Information */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">2. Vehicle Information</h3>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  At The Car Edition Ltd, we are dedicated to providing accurate and comprehensive details about each vehicle within our UK inventory. This includes specifications, features, mileage, and available history reports. It's important to note that all information is subject to change without prior notification. For verification before making a purchase decision, we recommend contacting our customer service.
                </p>
              </motion.div>

              {/* Purchasing Process */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">3. Purchasing Process</h3>
                <div className="space-y-4 text-gray-300 font-rajdhani leading-relaxed">
                  <p><strong className="text-white">Selection:</strong> Feel free to explore our expansive inventory, either in-person at our UK location or through our online platform. When you express interest in a vehicle, our dedicated sales representatives will expertly guide you through the purchasing process.</p>
                  
                  <p><strong className="text-white">Inspection:</strong> To bolster your confidence in your choice, we strongly recommend conducting a comprehensive inspection of the vehicle. On-site inspections can be arranged with our team. If distance poses a challenge, we will provide extensive photographs and videos showcasing the vehicle's exterior, interior, and any discernible defects.</p>
                  
                  <p><strong className="text-white">Negotiation:</strong> While specific vehicle prices are fixed, we remain open to negotiation for select vehicles. Any mutually agreed-upon price will be documented in an official written agreement.</p>
                  
                  <p><strong className="text-white">Payment:</strong> To secure your chosen vehicle, a minimum non-refundable deposit of £250 is required. The full payment, inclusive of all relevant taxes and fees, must be settled before the vehicle is released to you.</p>
                </div>
              </motion.div>

              {/* Consumer Rights */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">4. Consumer Rights</h3>
                <div className="space-y-4 text-gray-300 font-rajdhani leading-relaxed">
                  <p><strong className="text-white">Transparency:</strong> Transparency is integral to The Car Edition Ltd. All information provided about our vehicles, including history, condition, and known defects, is accurate and up-to-date.</p>
                  
                  <p><strong className="text-white">Right to Information:</strong> As a consumer, you retain the right to request additional information about a vehicle, such as service history, accident reports, and ownership records.</p>
                  
                  <p><strong className="text-white">Right to Withdraw:</strong> Adhering to the Consumer Rights Act (2015) and local laws, you have the right to withdraw from the purchase agreement within a specified cooling-off period. We advise you to familiarise yourself with the legal framework in your UK jurisdiction for precise details.</p>
                </div>
              </motion.div>

              {/* Pre-Purchase Inspection */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">5. Pre-Purchase Inspection</h3>
                <div className="space-y-4 text-gray-300 font-rajdhani leading-relaxed">
                  <p><strong className="text-white">Notice:</strong> We highly recommend all customers conduct a pre-purchase inspection. Ideally undertaken by a certified mechanic or inspection service, we are committed to providing all available information to facilitate this process.</p>
                  
                  <p><strong className="text-white">Rectification:</strong> If any defects or damages are identified during the inspection, we will make reasonable efforts to rectify them before finalising the purchase. This may involve repairing or replacing faulty components.</p>
                </div>
              </motion.div>

              {/* Post-Purchase Obligations */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">6. Post-Purchase Obligations</h3>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  <strong className="text-white">Vehicle "As Is":</strong> Once the purchase concludes, the vehicle is sold "as is". Subsequent defects or damages that arise after the purchase are not the responsibility of The Car Edition Ltd. It is crucial to recognise that maintenance and repairs become the owner's responsibility.
                </p>
              </motion.div>

              {/* Warranty */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">7. Warranty</h3>
                <div className="space-y-4 text-gray-300 font-rajdhani leading-relaxed">
                  <p><strong className="text-white">Manufacturer's Warranty:</strong> Certain vehicles may come with an existing manufacturer's warranty. The terms and scope of this warranty vary based on the manufacturer, as well as the vehicle's age and mileage. For specific details, refer to the accompanying warranty documentation.</p>
                  
                  <p><strong className="text-white">Warranty Assist:</strong> We are pleased to offer Warranty Assist, a leading warranty provider. Specific warranty details will be provided separately.</p>
                  
                  <p>At The Car Edition Ltd, we value your satisfaction and confidence in your vehicle purchase. To provide you with added assurance, we include a standard 3 month warranty with every vehicle you purchase from us, unless otherwise indicated in the advert. This warranty is designed to protect you against unexpected mechanical and electrical failures that may occur after your purchase.</p>
                  
                  <p>The standard 3 month warranty covers a comprehensive range of essential components, giving you peace of mind while driving your new vehicle. From engine and transmission components to electrical systems, our warranty aims to minimise any potential inconveniences caused by unforeseen issues.</p>
                  
                  <p>Please note that the standard 3 month warranty is provided by us as part of our commitment to delivering quality vehicles and customer satisfaction. However, for even more comprehensive coverage, we also offer extended warranty options through our partnership with Warranty Wise. This additional coverage can be tailored to suit your specific needs, providing extended protection beyond the initial 3 month period.</p>
                </div>
              </motion.div>

              {/* Limitation of Liability */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">8. Limitation of Liability</h3>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  <strong className="text-white">No Liability:</strong> The Car Edition Ltd bears no liability for any direct, indirect, incidental, or consequential damages arising from the use of the purchased vehicle. This includes financial loss, property damage, and personal injury.
                </p>
              </motion.div>

              {/* Delivery Service */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">9. Delivery Service</h3>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  <strong className="text-white">Vehicle Delivery:</strong> We provide a convenient delivery service. For transported car delivery, the cost is approximately £3 per mile for distances under 50 miles. As the distance increases, the rate may reduce to an average of around £1.50 per mile. Various factors, such as timed deliveries, vehicle size, weight, urgency, or remote postcodes, can affect the cost. If the delivery falls outside standard parameters, we will contact you with an updated rate.
                </p>
              </motion.div>

              {/* Governing Law */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">10. Governing Law</h3>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  <strong className="text-white">Jurisdiction:</strong> These terms and conditions are governed by the laws of the United Kingdom. Any legal disputes arising from these terms fall under the exclusive jurisdiction of the courts in the United Kingdom.
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">11. Contact</h3>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  For inquiries, concerns, or questions regarding these terms and conditions, please don't hesitate to contact our UK customer service team via email: <a href="mailto:info@thecaredition.co.uk" className="text-orange-500 hover:text-orange-400">info@thecaredition.co.uk</a>, or telephone: <a href="tel:07951418118" className="text-orange-500 hover:text-orange-400">07951418118</a> / <a href="tel:07428710465" className="text-orange-500 hover:text-orange-400">07428710465</a>.
                </p>
                <p className="text-gray-300 font-rajdhani leading-relaxed mt-4">
                  By utilising our services and purchasing vehicles from The Car Edition Ltd in the UK, you acknowledge your understanding of and agreement with all the terms and conditions outlined above. These terms establish a legally binding agreement tailored for the UK market between you and The Car Edition Ltd.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Workshop Terms */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <div className="bg-black border border-orange-600/20 rounded-2xl p-8">
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-orange-500 uppercase font-orbitron tracking-wider mb-6">
                Workshop Terms & Conditions of Business
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-gray-300 font-rajdhani leading-relaxed mb-8">
                These Terms & Conditions apply to all services provided by The Car Edition Ltd ("we", "us", "our"). By booking work, delivering a vehicle to us, or accepting an invoice, you ("the customer", "you") agree to be bound by these Terms & Conditions. Nothing in these Terms affects your statutory rights under UK consumer law.
              </motion.p>

              {/* Workshop sections */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">1. Authorisation of Work</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>1.1 By booking work, approving an estimate, or leaving a vehicle with us, you authorise us to carry out inspection, diagnostic, repair, replacement, or related work as agreed.</p>
                    <p>1.2 Estimates are estimates only and not fixed prices unless expressly confirmed in writing.</p>
                    <p>1.3 During inspection or dismantling, additional faults or required work may become apparent.</p>
                    <p>1.4 We will make reasonable efforts to contact you for approval before carrying out additional chargeable work.</p>
                    <p>1.5 If the vehicle is partially dismantled, on a ramp, or cannot reasonably be returned to a safe or operable condition, and we are unable to contact you within a reasonable timeframe (normally 24–48 hours), you authorise us to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Carry out only such work as is reasonably necessary to reassemble, secure, or complete the vehicle;</li>
                      <li>Incur additional costs that are reasonable and proportionate to the original scope of work.</li>
                    </ul>
                    <p>1.6 All work carried out under clause 1.5 is chargeable and payable in full.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">2. Diagnostics & Fault Finding</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>2.1 Diagnostic and investigation charges apply regardless of outcome and are payable even if no repair is undertaken.</p>
                    <p>2.2 Diagnostics identify faults based on symptoms present at the time of testing only. No diagnostic process can guarantee identification of all underlying or future faults.</p>
                    <p>2.3 Diagnostic charges are non-refundable and are not deducted from repair costs unless expressly agreed in writing.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">3. Parts Supplied</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>3.1 Parts supplied may be genuine manufacturer, OEM, aftermarket, reconditioned, or used, as agreed at the time of booking.</p>
                    <p>3.2 Reconditioned or used parts may show cosmetic or performance differences and carry warranties (if any) provided by the supplier.</p>
                    <p>3.3 Customer-supplied parts are fitted entirely at the customer's risk. We accept no responsibility for the quality, compatibility, or failure of customer-supplied parts, and no warranty is provided on such parts.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">4. Warranty</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>4.1 Any warranty provided by us applies only to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Parts supplied and fitted by us; and</li>
                      <li>Labour carried out by us.</li>
                    </ul>
                    <p>4.2 Warranty does not cover:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Recovery, transportation, or delivery costs;</li>
                      <li>Third-party inspections, diagnostics, reports, or dismantling;</li>
                      <li>Loss of earnings, loss of use, business interruption, or consequential loss;</li>
                      <li>Normal wear-and-tear items unless expressly stated;</li>
                      <li>Damage or failure caused by misuse, overheating, continued driving with warning lights, neglect, or failure to maintain the vehicle.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">5. Warranty Void Conditions</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>5.1 Any warranty is void to the extent permitted by law if:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>A warranted component is removed, dismantled, inspected, or interfered with without our prior written consent;</li>
                      <li>The vehicle is repaired, modified, or inspected by a third party without our written approval;</li>
                      <li>Manufacturer service schedules or operating instructions are not followed;</li>
                      <li>The fault arises from unrelated components or pre-existing conditions.</li>
                    </ul>
                    <p>5.2 This clause does not affect your statutory rights.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">6. Consumer Rights</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>6.1 Nothing in these Terms limits or excludes your rights under the Consumer Rights Act 2015.</p>
                    <p>6.2 Where a fault is alleged to relate to our workmanship, we must be given the opportunity to inspect, diagnose, and, where appropriate, rectify the issue before any external repair or claim is pursued.</p>
                    <p>6.3 Where workmanship is confirmed to be defective, we will repair or rectify the issue in accordance with our statutory obligations.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">7. Payment Terms</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>7.1 Payment is due immediately upon completion of the work and prior to vehicle release, unless otherwise agreed in writing.</p>
                    <p>7.2 Late payment may accrue interest at 8% per annum above the Bank of England base rate, calculated daily, in accordance with applicable legislation.</p>
                    <p>7.3 Payment may be made by bank transfer, card, or payment link. Card payments may be subject to a processing fee.</p>
                    <p>7.4 Title to all parts supplied remains with The Car Edition Ltd until payment has been received in full.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">8. Vehicle Collection, Storage & Lien</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>8.1 Vehicles must be collected within three (3) days of completion or notification that the vehicle is ready.</p>
                    <p>8.2 Storage charges of £25 plus VAT per day apply from day four onwards.</p>
                    <p>8.3 We reserve the right to retain the vehicle under a mechanic's lien until all outstanding charges, including storage fees, are paid in full.</p>
                    <p>8.4 Vehicles left unpaid or uncollected for more than 28 days may be sold or disposed of to recover outstanding sums, in accordance with the Torts (Interference with Goods) Act 1977. Any surplus proceeds will be returned to the customer.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">9. Unroadworthy Vehicles</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>9.1 We reserve the right to refuse release of any vehicle deemed unsafe or unroadworthy unless collected by a suitable recovery vehicle.</p>
                    <p>9.2 Responsibility for arranging recovery rests with the customer.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">10. Delays & Force Majeure</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>10.1 Completion dates are estimates only. Delays may occur due to parts availability, supplier delays, or unforeseen issues.</p>
                    <p>10.2 We are not liable for delays caused by circumstances beyond our reasonable control, including but not limited to supplier failures, transport disruptions, fire, flood, power outages, or acts of God.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">11. Test Drives & Mileage</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>11.1 Vehicles may be road tested where necessary for diagnosis or verification of repairs.</p>
                    <p>11.2 Reasonable mileage may be added during testing.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">12. Personal Belongings</h3>
                  <p className="text-gray-300 font-rajdhani leading-relaxed">
                    12.1 We are not responsible for loss or damage to personal items left in vehicles unless declared to us in writing prior to commencement of work.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">13. Media & Filming</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>13.1 You consent to photographs and video recordings of your vehicle for diagnostic, evidential, training, marketing, or social media purposes.</p>
                    <p>13.2 Media will not include personal data capable of identifying you without consent.</p>
                    <p>13.3 Marketing consent may be withdrawn at any time by written request.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">14. Errors & Omissions</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>14.1 We reserve the right to correct clerical, administrative, pricing, or descriptive errors or omissions.</p>
                    <p>14.2 This clause does not affect your statutory rights.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">15. Limitation of Liability</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>15.1 Our liability for loss or damage arising from our work is limited to the value of the work carried out on the vehicle, to the extent permitted by law.</p>
                    <p>15.2 We are not liable for indirect, incidental, or consequential losses.</p>
                    <p>15.3 Nothing in these Terms limits or excludes liability for:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Death or personal injury caused by negligence.</li>
                      <li>Fraud or fraudulent misrepresentation.</li>
                      <li>Any liability that cannot legally be excluded.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">16. Governing Law</h3>
                  <div className="space-y-3 text-gray-300 font-rajdhani leading-relaxed">
                    <p>16.1 These Terms & Conditions are governed by the laws of England and Wales.</p>
                    <p>16.2 Any dispute shall be subject to the exclusive jurisdiction of the English courts.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">17. Acceptance</h3>
                  <p className="text-gray-300 font-rajdhani leading-relaxed">
                    17.1 Instruction of work, delivery of a vehicle, or acceptance of an invoice constitutes acceptance of these Terms & Conditions.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Back to Home Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center"
          >
            <Link 
              href="/" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold uppercase font-orbitron tracking-wider transition-colors duration-300 rounded-lg"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
