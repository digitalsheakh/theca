'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.3, ease: "easeIn" }
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

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqData = {
    carService: [
      {
        id: 'cs1',
        question: 'What is included in a car service?',
        answer: 'A standard car service typically includes a comprehensive inspection of vital components like the engine, fluids, brakes, and tires. Our professional mechanics follow manufacturer guidelines to ensure optimal vehicle performance. Specialised offerings, such as Carbon Clean, Walnut Blasting, and Gearbox Flush, are available to enhance longevity and efficiency.'
      },
      {
        id: 'cs2',
        question: 'How much is a full service on a car?',
        answer: 'The cost of a full car service can vary based on factors such as the make and model of the vehicle, its age, and the service provider. At The Car Edition in Huntingdon, our competitive pricing ensures you receive value for your investment. For an accurate quote, feel free to contact us.'
      },
      {
        id: 'cs3',
        question: 'How often should a car be full serviced?',
        answer: 'As a general guideline, most manufacturers recommend a full car service every 12,000 miles or 12 months, whichever comes first. However, specific intervals may vary based on your vehicle\'s make and model.'
      },
      {
        id: 'cs4',
        question: 'How do I know if my car needs a full service?',
        answer: 'Signs that your car may need a full service include unusual noises, changes in performance, warning lights, or reaching the recommended mileage or time interval for service. Regular inspections by a qualified mechanic can identify service needs.'
      },
      {
        id: 'cs5',
        question: 'Do you legally have to service your car?',
        answer: 'While there is no legal requirement to service your car, regular servicing is essential for maintaining its performance, reliability, and safety. It also helps preserve the manufacturer\'s warranty. Check your warranty agreement for specific terms.'
      },
      {
        id: 'cs6',
        question: 'Does a full service include an MOT?',
        answer: 'No, a full service and MOT are separate procedures. A full service involves a comprehensive check of your car\'s components, while an MOT is a mandatory annual test to ensure your vehicle meets safety and environmental standards.'
      },
      {
        id: 'cs7',
        question: 'What happens if you miss a car service?',
        answer: 'Missing a car service can lead to decreased performance, potential safety issues, and increased risk of more significant and costly repairs in the long run. Regular servicing is crucial for maintaining your vehicle\'s health and longevity.'
      },
      {
        id: 'cs8',
        question: 'Why is it important to rotate tires?',
        answer: 'Rotating tires is crucial for maintaining even tread wear across all four tires. This helps maximize tire life, improve fuel efficiency, enhance vehicle handling, and ensures a smoother and safer driving experience. Regular tire rotation is a cost-effective preventive measure that contributes to overall road safety and extends the longevity of your tires.'
      }
    ],
    mot: [
      {
        id: 'mot1',
        question: 'What does MOT stand for?',
        answer: 'MOT stands for"Ministry of Transport," although the test is now officially known as the"MOT Test." It is an annual examination of a vehicle\'s safety, emissions, and roadworthiness, ensuring it meets the necessary standards.'
      },
      {
        id: 'mot2',
        question: 'How long do you have to drive without MOT?',
        answer: 'Driving without a valid MOT is illegal, and there is no grace period. It is an offence that can result in fines, points on your license, and even the impounding of your vehicle.'
      },
      {
        id: 'mot3',
        question: 'Can you drive without MOT if you have one booked?',
        answer: 'No, you cannot legally drive without a valid MOT, even if you have one booked. Your vehicle must have a current MOT to be on the road.'
      },
      {
        id: 'mot4',
        question: 'How far can I drive a car to an MOT?',
        answer: 'You are allowed to drive your car to a pre-booked MOT appointment even if your current MOT has expired. However, it\'s advisable to take the shortest and safest route to the testing center.'
      },
      {
        id: 'mot5',
        question: 'What happens if I get caught with no MOT?',
        answer: 'Driving without a valid MOT is a serious offense and can result in fines, points on your license, and the possibility of your vehicle being impounded. It\'s essential to ensure your MOT is up-to-date to comply with legal requirements.'
      },
      {
        id: 'mot6',
        question: 'How much does an MOT cost for a car?',
        answer: 'The cost of an MOT can vary, and it depends on factors such as the type of vehicle and the service provider.'
      }
    ],
    battery: [
      {
        id: 'bat1',
        question: 'Is it easy to replace a car battery by yourself?',
        answer: 'Replacing a car battery can be a manageable DIY task for those with some basic automotive skills. However, it\'s crucial to prioritise safety and follow proper procedures. If you\'re unsure or uncomfortable, seeking assistance from a mechanic or a reputable garage is a wise choice.'
      },
      {
        id: 'bat2',
        question: 'Should I replace my car battery before it dies?',
        answer: 'Proactively replacing a car battery before it dies can prevent unexpected breakdowns. Regular battery checks and replacements based on manufacturer recommendations, rather than waiting for signs of failure, ensure your car stays reliable. Consult your mechanic for personalised advice.'
      },
      {
        id: 'bat3',
        question: 'How can you tell if a car battery needs replacing?',
        answer: 'Signs that your car battery may need replacing include slow engine cranking, dimming headlights, and issues starting the car. If you notice these symptoms, it\'s advisable to have your battery tested by a mechanic or at a garage service.'
      },
      {
        id: 'bat4',
        question: 'How long does a car battery last?',
        answer: 'The lifespan of a car battery varies, typically lasting between three to six years. However, factors like driving conditions, climate, and vehicle usage can influence its longevity. Regular maintenance checks by a mechanic can help assess the health of your battery.'
      },
      {
        id: 'bat5',
        question: 'What shortens a car battery\'s life?',
        answer: 'Several factors can shorten a car battery\'s life, including extreme temperatures, frequent short trips, and overcharging. Regular servicing and check-ups at your local garage or with a trusted mechanic can help identify issues and preserve battery health.'
      },
      {
        id: 'bat6',
        question: 'What can drain a car battery when the car is off?',
        answer: 'Even when the car is off, certain components like the clock, alarm systems, or electrical issues can contribute to battery drainage. If you experience repeated issues, seeking the expertise of a mechanic for a thorough inspection is recommended.'
      }
    ],
    coldWeather: [
      {
        id: 'cw1',
        question: 'How can I unfreeze my car fast?',
        answer: 'To quickly unfreeze your car, start by using an ice scraper to remove ice from the windows and mirrors. Additionally, warming up the engine and using a de-icer spray on locks and door seals can expedite the process. If you\'re facing persistent issues, consult with a mechanic for advice on winter car care.'
      },
      {
        id: 'cw2',
        question: 'How do you start a car in frozen weather?',
        answer: 'Starting a car in frozen weather requires some preparation. Ensure the battery is charged, use a winter-grade oil, and consider a block heater if available. Turn off all electrical accessories before starting the car. If you encounter difficulties, seek assistance from a mechanic for a thorough inspection.'
      },
      {
        id: 'cw3',
        question: 'Can you throw hot water to defrost a car?',
        answer: 'It\'s not advisable to use hot water to defrost a car, as the rapid temperature change can damage the glass. Instead, opt for lukewarm water or use de-icing products specifically designed for cars. Consulting with a mechanic about winter car care can provide additional insights.'
      },
      {
        id: 'cw4',
        question: 'How do you warm up a frozen car that won\'t start?',
        answer: 'If your car won\'t start in freezing temperatures, start by checking the battery, connections, and ensuring the fuel system is functioning. If the issue persists, seeking help from a mechanic or garage service is recommended for a comprehensive diagnosis and resolution.'
      },
      {
        id: 'cw5',
        question: 'Can you jump-start a frozen car?',
        answer: 'Yes, you can jump-start a frozen car, but take precautions. Ensure both cars are off before connecting the jumper cables. Follow the correct procedure outlined in your car\'s manual. If difficulties persist, it\'s advisable to consult with a mechanic for assistance.'
      },
      {
        id: 'cw6',
        question: 'How do you start a car with a frozen battery?',
        answer: 'If your car battery is frozen, attempting to start the vehicle could cause damage. Instead, remove the battery and let it thaw in a warmer place. Once thawed, reinstall it, and if the issue persists, seek advice from a mechanic to assess the battery\'s condition and overall health.'
      }
    ],
    engineRebuild: [
      {
        id: 'er1',
        question: 'Is it worth getting an engine rebuild?',
        answer: 'Absolutely. Opting for an engine rebuild can be a wise investment, especially when considering the cost-effectiveness compared to purchasing a new vehicle. It breathes new life into your car, allowing you to enjoy many more miles on the road.'
      },
      {
        id: 'er2',
        question: 'Can an average person rebuild an engine?',
        answer: 'While rebuilding an engine requires technical expertise, an average person with a good understanding of automotive mechanics can embark on the journey with the right guidance, tools, and patience. However, seeking professional help ensures the job is done accurately and efficiently.'
      },
      {
        id: 'er3',
        question: 'What is the average life of a rebuilt engine?',
        answer: 'A properly rebuilt engine can last for a substantial period, often rivalling or surpassing the lifespan of the original factory-installed engine. Regular maintenance and adherence to recommended service schedules play a crucial role in maximising the engine\'s longevity.'
      },
      {
        id: 'er4',
        question: 'Does mileage reset after engine rebuild?',
        answer: 'No, the mileage does not reset after an engine rebuild. The odometer retains the total mileage accumulated by the vehicle. However, a rebuilt engine ensures a rejuvenated and reliable performance, offering a fresh start for your car\'s continued journey.'
      },
      {
        id: 'er5',
        question: 'Is engine swapping legal in the UK?',
        answer: 'Yes, engine swapping is legal in the UK, but it must adhere to specific regulations. The new engine should meet emissions standards and be properly documented. It\'s advisable to consult with relevant authorities or professionals to ensure compliance with legal requirements.'
      },
      {
        id: 'er6',
        question: 'Do rebuilt engines need a break-in period?',
        answer: 'Yes, rebuilt engines typically require a break-in period. This involves driving the vehicle gently for the first few hundred miles to allow components to settle and ensure proper seating of piston rings. Following manufacturer or mechanic recommendations during this period is crucial for long-term engine health.'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white pt-20 md:pt-32 pb-20">
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
                HELP CENTER
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-lg text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, MOT testing, car maintenance, and more
            </p>
          </motion.div>

          {/* Car Service FAQ */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-orange-500 uppercase font-orbitron tracking-wider mb-8">
              Car Service FAQ
            </motion.h2>
            <div className="space-y-4">
              {faqData.carService.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-black/40 border border-orange-600/50  hover:border-orange-600 overflow-hidden backdrop-blur-sm transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center transition-colors duration-300"
                  >
                    <h3 className="text-lg font-bold text-white hover:text-orange-400 font-rajdhani pr-4 transition-colors duration-300">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-all duration-300 ${openFAQ === faq.id ? 'rotate-180 text-orange-400' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 font-rajdhani leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* MOT FAQ */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-orange-500 uppercase font-orbitron tracking-wider mb-8">
              MOT FAQ
            </motion.h2>
            <div className="space-y-4">
              {faqData.mot.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-black/40 border border-orange-600/50  hover:border-orange-600 overflow-hidden backdrop-blur-sm transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center transition-colors duration-300"
                  >
                    <h3 className="text-lg font-bold text-white hover:text-orange-400 font-rajdhani pr-4 transition-colors duration-300">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-all duration-300 ${openFAQ === faq.id ? 'rotate-180 text-orange-400' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 font-rajdhani leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Car Battery Replacement FAQ */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-orange-500 uppercase font-orbitron tracking-wider mb-8">
              Car Battery Replacement FAQ
            </motion.h2>
            <div className="space-y-4">
              {faqData.battery.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-black/40 border border-orange-600/50 hover:border-orange-600 overflow-hidden backdrop-blur-sm transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center transition-colors duration-300"
                  >
                    <h3 className="text-lg font-bold text-white hover:text-orange-400 font-rajdhani pr-4 transition-colors duration-300">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-all duration-300 ${openFAQ === faq.id ? 'rotate-180 text-orange-400' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 font-rajdhani leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Cold Weather FAQ */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-orange-500 uppercase font-orbitron tracking-wider mb-8">
              Cold Weather FAQ
            </motion.h2>
            <div className="space-y-4">
              {faqData.coldWeather.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-black/40 border border-orange-600/50 hover:border-orange-600 overflow-hidden backdrop-blur-sm transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center transition-colors duration-300"
                  >
                    <h3 className="text-lg font-bold text-white hover:text-orange-400 font-rajdhani pr-4 transition-colors duration-300">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-all duration-300 ${openFAQ === faq.id ? 'rotate-180 text-orange-400' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 font-rajdhani leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Engine Rebuild FAQ */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-orange-500 uppercase font-orbitron tracking-wider mb-8">
              Engine Rebuild FAQ
            </motion.h2>
            <div className="space-y-4">
              {faqData.engineRebuild.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-black/40 border border-orange-600/50 hover:border-orange-600 overflow-hidden backdrop-blur-sm transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center transition-colors duration-300"
                  >
                    <h3 className="text-lg font-bold text-white hover:text-orange-400 font-rajdhani pr-4 transition-colors duration-300">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-all duration-300 ${openFAQ === faq.id ? 'rotate-180 text-orange-400' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 font-rajdhani leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center bg-black border border-orange-600/20 p-12"
          >
            <h2 className="text-3xl font-bold text-white uppercase font-orbitron tracking-wider mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-300 font-rajdhani mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly team is here to help you with any questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold uppercase font-orbitron tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="inline-block border-2 border-white bg-white text-black hover:bg-[#f97316] hover:text-white hover:border-orange-600 px-8 py-4 font-bold uppercase font-orbitron tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

