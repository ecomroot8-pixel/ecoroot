import React from 'react';
import { motion } from 'framer-motion'; 
import { 
  CheckCircle, 
  DollarSign, 
  TrendingUp, 
  Users,
  Mail,
  BarChart,
  Target
} from 'lucide-react';

const DemoCallPage = () => {
  const benefits = [
    {
      icon: <BarChart className="h-6 w-6 text-orange-500" />,
      title: 'Complete audit of your email flows & campaigns',
      description: 'We\'ll analyze every aspect of your current email strategy'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-orange-500" />,
      title: 'Revenue opportunity breakdown & growth plan',
      description: 'Identify exactly where you\'re leaving money on the table'
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      title: 'Deliverability health check to improve inbox rate',
      description: 'Ensure your emails actually reach your customers'
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: 'Segmentation strategy tailored to your list',
      description: 'Send the right message to the right person at the right time'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
      title: 'List growth and lead capture recommendations',
      description: 'Strategies to grow your email list with high-quality subscribers'
    },
    {
      icon: <Target className="h-6 w-6 text-orange-500" />,
      title: 'Top performing competitor breakdown',
      description: 'See what your competitors are doing and how to beat them'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
      title: 'Optimization roadmap built for your brand',
      description: 'Step-by-step plan to transform your email marketing'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get Your Free
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Email Audit</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Let's look at what's working, what's missing, and where you could be making 
              more money with your emails all in one short call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Embed (before "What You'll Get") */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 border border-orange-500/40 rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Book Your Free Audit Call
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Pick a time that works best for you — no credit card required, no strings attached.
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <iframe
                src="https://calendly.com/ecomroot8/30min"
                width="100%" 
                height="650" 
                frameBorder="0"
                className="w-full"
                style={{ minHeight: '650px' }}
                title="Book a free audit call"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Here's What You'll Get
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A comprehensive analysis of your email marketing with actionable insights 
              to start growing your revenue immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoCallPage;
