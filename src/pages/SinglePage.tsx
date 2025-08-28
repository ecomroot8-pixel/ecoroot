import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import orange from '../components/images/orange.jpg'
import painter from '../components/images/painter.jpg'
import first from '../components/images/first.jpg'
import second from '../components/images/second.jpg'
import third from '../components/images/third.jpg'
import front1 from '../components/images/casefront1.jpg'
import modal1 from '../components/images/casemodal1.jpg'
import front2 from '../components/images/casefront2.jpg'
import modal2 from '../components/images/casemodal2.jpg'
import front3 from '../components/images/casefront3.jpg'
import modal3 from '../components/images/casemodal3.jpg'
import ceo from '../components/images/ceo.jpeg'
import cmo from '../components/images/CMO.jpg'
import director from '../components/images/director.jpg'
import { 

  TrendingUp, 
  Mail, 
  Target, 
  Users, 
  ChevronDown, 
  CheckCircle, 
  ArrowRight,
  Star,
  BarChart,
  Zap,
  Award
} from 'lucide-react';


const SinglePage = () => {
  const [activeProcess, setActiveProcess] = useState('3-days');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const processData = {
    '3-days': {
      title: 'First 3 Days - Foundation',
      items: [
        'Complete email account audit',
        'Deliverability assessment',
        'Competitor analysis setup',
        'Initial strategy consultation'
      ]
    },
    '7-days': {
      title: 'First 7 Days - Implementation', 
      items: [
        'Email flow optimization',
        'Template design & setup',
        'Segmentation strategy deployment',
        'A/B testing framework'
      ]
    },
    '30-days': {
      title: 'First 30 Days - Growth',
      items: [
        'Performance monitoring & optimization',
        'Advanced automation sequences',
        'Revenue tracking & reporting',
        'Strategy refinement & scaling'
      ]
    }
  };

  const team = [
    {
      name: "Kamoliddin",
      role: "CEO",
      image: ceo,
      description: "2+ years leading ecommerce transformations",
    },
    {
      name: "Sarah Chen",
      role: "CMO",
      image: cmo,
      description: "Email marketing expert with $50M+ revenue generated",
    },
    {
      name: "Michael Torres",
      role: "Director of Strategy",
      image: director,
      description: "Data-driven strategist specializing in growth optimization",
    },
  ];



  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients see initial improvements within the first 30 days, with significant revenue growth typically occurring within 60-90 days of implementation.'
    },
    {
      question: 'What email platforms do you work with?',
      answer: 'We work with all major email platforms including Klaviyo, Mailchimp, Constant Contact, and more. We\'ll recommend the best platform for your specific needs.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive ongoing support including monthly strategy calls, performance monitoring, and continuous optimization of your email campaigns.'
    },
    {
      question: 'What makes your approach different?',
      answer: 'Our data-driven approach focuses on revenue generation, not just open rates. We create personalized customer journeys that turn subscribers into loyal, high-value customers.'
    }
  ];

  const services = [
    {
      icon: <Mail className="h-12 w-12 text-orange-500" />,
      title: 'Email Campaign Strategy',
      description: 'Custom campaign strategies designed to maximize engagement and drive revenue for your specific industry and audience.',
      features: [
        'Audience segmentation & targeting',
        'A/B testing framework',
        'Campaign calendar planning',
        'Performance optimization'
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      title: 'Marketing Automation',
      description: 'Sophisticated automation flows that nurture leads and convert prospects into loyal customers on autopilot.',
      features: [
        'Welcome series setup',
        'Abandoned cart recovery',
        'Post-purchase sequences',
        'Re-engagement campaigns'
      ]
    },
    {
      icon: <BarChart className="h-12 w-12 text-orange-500" />,
      title: 'Revenue Analytics & Optimization',
      description: 'Deep-dive analytics and continuous optimization to ensure every email contributes to your bottom line.',
      features: [
        'Revenue attribution tracking',
        'ROI measurement & reporting',
        'Conversion rate optimization',
        'Performance benchmarking'
      ]
    }
  ];

  const stats = [
    { number: '20+', label: 'Clients Served', icon: <Users className="h-6 w-6" /> },
    { number: '$2M+', label: 'Revenue Generated', icon: <TrendingUp className="h-6 w-6" /> },
    { number: '284%', label: 'Average ROI Increase', icon: <Target className="h-6 w-6" /> },
    { number: '2+', label: 'Years Experience', icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-16">
{/* ================= HERO SECTION ================= */}
<section
  id="home"
  className="relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 overflow-hidden py-20 md:py-32"
>
  {/* Background image with overlay */}
  <div className="absolute inset-0">
    <img
      src={orange} // imported image
      alt="Hero Background"
      className="w-full h-full object-cover opacity-30"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-black/80"></div>
  </div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
        Transform Your
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          {" "}
          Email Revenue
        </span>
      </h1>
      <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        We help ecommerce brands generate 30-40% of their revenue through
        strategic email marketing. Stop leaving money on the table with
        generic campaigns.
      </p>

      {/* Buttons (side by side always) */}
      <div className="flex flex-row gap-4 justify-center mt-2">
        <Link
          to="/demo-call"
          onClick={scrollToTop}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
        >
          Get Free Audit
          <ArrowRight className="ml-2" size={20} />
        </Link>
        <button
          onClick={() => {
            const element = document.querySelector("#case-studies");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="border-2 border-orange-500 text-orange-500 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
        >
          See Our Results
        </button>
      </div>
    </motion.div>
  </div>
</section>

     
    
{/* ================= END HERO SECTION ================= */}

{/* About Section - Our Story */}
<section id="about" className="py-20 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            EcomRoot was founded with a simple mission: to help ecommerce businesses 
            unlock the full potential of their email marketing. We saw too many brands 
            struggling with generic campaigns that failed to drive real revenue.
          </p>
          <p>
            Our founders, with decades of combined experience in ecommerce and digital 
            marketing, decided to create an agency that focuses exclusively on what 
            matters most your bottom line.
          </p>
          <p>
            Today, we've helped over 20 brands generate more than $2 million in 
            additional revenue through strategic email marketing. Our data-driven 
            approach and personalized strategies set us apart from the competition.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-3xl mx-auto aspect-[16/9]"
      >
        <img
          src={painter}
          alt="Team collaboration"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
      </motion.div>
    </div>
  </div>
</section>

{/* Our Impact Section */}
<section id="impact" className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
      <p className="text-gray-400 text-lg">Numbers that speak for themselves</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300">
            <div className="text-orange-500 mb-4 flex justify-center">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Services Overview */}
   {/* Services Overview */}
{/* Services Overview */}
<section id="services" className="py-20 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Our Email Marketing Services
      </h2>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Focused, impactful services that drive measurable ecommerce growth
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {[
        {
          image: first,
          title: 'Email Campaign Strategy',
          description: 'Engaging campaigns built for your audience.',
          features: ['Smart segmentation', 'A/B testing', 'Optimized planning'],
        },
        {
          image: second,
          title: 'Marketing Automation',
          description: 'Flows that convert leads into loyal customers.',
          features: ['Welcome series', 'Cart recovery', 'Re-engagement'],
        },
        {
          image: third,
          title: 'Revenue Analytics',
          description: 'Clear insights that maximize performance.',
          features: ['Revenue tracking', 'ROI reports', 'Conversion insights'],
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full"
        >
          {/* Bigger Top Image */}
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </div>

          {/* Card Content */}
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 text-base mb-6">{service.description}</p>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-300 text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Learn More button aligned bottom */}
            <div className="mt-auto">
              <Link
                to="/demo-call"
                onClick={scrollToTop}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 inline-flex items-center w-full justify-center"
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    {/* SERVICES */}




      {/* Case Studies */}
      {/* Case Studies */}
<section id="case-studies" className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Case Studies</h2>
      <p className="text-gray-400 text-lg">Real results from real clients</p>
    </div>

    {(() => {
      const cases = [
        {
          id: "fashion",
          brand: "Fashion Retailer",
          cover: front1,
          modalImage: modal1,
          headline: "284% Revenue Increase",
          short: "Lifecycle rebuild: strategy + flows.",
          whatWeDid: [
            "Audit & deliverability fixes (SPF/DKIM/DMARC, warm-up)",
            "Segmentation rework + zero-party data capture",
            "New creative system + weekly campaign calendar",
            "Flows: welcome, browse/cart abandon, post-purchase, winback",
          ],
          results: [
            "Email share of revenue grew from 9% → 34%",
            "Monthly revenue +$175k (90 days)",
            "Spam complaints ↓ 63%, placed-in-inbox ↑",
          ],
          timeline: "8 weeks to full rollout; 90 days to peak lift",
          stack: "Klaviyo, Gatsby forms, Figma, GA4",
        },
        {
          id: "wellness",
          brand: "Health & Wellness",
          cover: front2,
          modalImage: modal2,
          headline: "156% Open Rate Improvement",
          short: "Deliverability + segmentation fix.",
          whatWeDid: [
            "List hygiene & sunsetting policies",
            "Preference center + engagement tiers",
            "Subject line testing framework",
          ],
          results: [
            "Open rate 12% → 31%",
            "CTR +88%, revenue +$420k/quarter",
          ],
          timeline: "4 weeks core, 6 weeks optimization",
          stack: "Klaviyo, Cloudflare, Postmaster Tools",
        },
        {
          id: "tech",
          brand: "Tech Accessories",
          cover: front3,
          modalImage: modal3,
          headline: "67% More Customers",
          short: "Automation-led growth.",
          whatWeDid: [
            "Multi-step onboarding & education",
            "Browse/cart/bundle recommendations",
            "RFM-based promos and VIP tiers",
          ],
          results: [
            "New customers +67% YoY via email",
            "Repeat purchase rate +22%",
          ],
          timeline: "10 weeks to maturity",
          stack: "Klaviyo, Stripe, GA4, Metafields",
        },
      ];

      const [selected, setSelected] = React.useState<null | typeof cases[number]>(null);
      const close = () => setSelected(null);

      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {cases.map((cs, i) => (
              <motion.article
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full"
              >
                <img
                  src={cs.cover}
                  alt={`${cs.brand} case study`}
                  className="w-full h-56 object-cover rounded-t-lg"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-orange-500 font-semibold">{cs.brand}</h4>
                  <h3 className="text-2xl font-bold text-white mt-1">{cs.headline}</h3>
                  <p className="text-gray-400 mt-3 line-clamp-2">{cs.short}</p>
                  <div className="mt-auto pt-6">
                    <button
                      onClick={() => setSelected(cs)}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
                    >
                      See More <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
              aria-modal="true"
              role="dialog"
              onClick={close}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="relative z-10 max-w-3xl w-full mx-4 bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden max-h-[85vh] md:max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected.modalImage}
                  alt={`${selected.brand} detailed view`}
                  className="w-full h-56 md:h-72 object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div className="p-6 md:p-8 overflow-y-auto">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {selected.brand}
                      </h3>
                      <p className="text-orange-400 font-semibold mt-1">{selected.headline}</p>
                    </div>
                    <button
                      onClick={close}
                      aria-label="Close"
                      className="text-gray-400 hover:text-white transition"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="md:col-span-2 space-y-6">
                      <section>
                        <h4 className="text-white font-semibold mb-2">What We Did</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {selected.whatWeDid.map((w, idx) => (
                            <li key={idx}>{w}</li>
                          ))}
                        </ul>
                      </section>
                      <section>
                        <h4 className="text-white font-semibold mb-2">Results</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {selected.results.map((r, idx) => (
                            <li key={idx}>{r}</li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <div className="space-y-4">
                      <section>
                        <h4 className="text-white font-semibold mb-2">Timeline</h4>
                        <p className="text-gray-300">{selected.timeline}</p>
                      </section>
                      <section>
                        <h4 className="text-white font-semibold mb-2">Tools/Stack</h4>
                        <p className="text-gray-300">{selected.stack}</p>
                      </section>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/services"
                      onClick={() => {
                        close();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition inline-flex items-center justify-center"
                    >
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Link>
                    <button
                      onClick={close}
                      className="w-full border border-gray-600 text-gray-200 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>

              <div tabIndex={0} onKeyDown={(e) => e.key === "Escape" && close()} />
            </motion.div>
          )}
        </>
      );
    })()}
  </div>
</section>

     {/* Case Study */}





      {/* Traditional vs EcomRoot Comparison */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Your Average Agency
            </h2>
            <p className="text-gray-400 text-lg">See the difference in our approach</p>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-r border-gray-700">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Traditional Agencies</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">×</span>
                    <span className="text-gray-400">Focus on vanity metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">×</span>
                    <span className="text-gray-400">Generic templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">×</span>
                    <span className="text-gray-400">Slow response times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">×</span>
                    <span className="text-gray-400">One-size-fits-all approach</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gradient-to-br from-orange-500/10 to-transparent">
                <h3 className="text-2xl font-bold text-orange-500 mb-6">EcomRoot</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-3 mt-0.5" size={16} />
                    <span className="text-gray-300">Revenue-focused strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-3 mt-0.5" size={16} />
                    <span className="text-gray-300">Custom-built campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-3 mt-0.5" size={16} />
                    <span className="text-gray-300">24/7 support & monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-3 mt-0.5" size={16} />
                    <span className="text-gray-300">Personalized for your brand</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/demo-call"
              onClick={scrollToTop}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
            >
              Experience the Difference
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-400 text-lg">How we transform your email marketing</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-800 rounded-lg p-1">
              {Object.keys(processData).map((period) => (
                <button
                  key={period}
                  onClick={() => setActiveProcess(period)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeProcess === period
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {period === '3-days' ? '3 Days' : period === '7-days' ? '7 Days' : '30 Days'}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              key={activeProcess}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-6">
                {processData[activeProcess as keyof typeof processData].title}
              </h3>
              <ul className="space-y-4">
                {processData[activeProcess as keyof typeof processData].items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-3 mt-0.5" size={16} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Meet Our People */}
      <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our People
          </h2>
          <p className="text-gray-400 text-lg">The experts behind your success</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Clean rounded picture */}
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              {/* Name */}
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              {/* Role */}
              <p className="text-orange-500 font-medium mt-1">{member.role}</p>
              {/* Description */}
              <p className="text-gray-400 text-sm mt-3 max-w-xs mx-auto">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
{/* Meet Our People */}

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">About our free demo call</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-gray-700">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left p-6 focus:outline-none"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <ChevronDown
                      className={`text-orange-500 transform transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Still have questions?</p>
            <Link
              to="/demo-call"
              onClick={scrollToTop}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Email Revenue?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Get your free email audit and discover how much revenue you're leaving on the table.
          </p>
          <Link
            to="/demo-call"
            onClick={scrollToTop}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 inline-flex items-center"
          >
            Get Your Free Audit
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
