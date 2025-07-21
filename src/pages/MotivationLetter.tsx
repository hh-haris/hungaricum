
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';

const MotivationLetter = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showToolsModal, setShowToolsModal] = useState(false);

  const faqs = [
    {
      question: 'What should be the ideal length of a motivation letter?',
      answer: 'A motivation letter should typically be between 500-1000 words, which is about 1-2 pages. Make sure it\'s concise yet comprehensive.'
    },
    {
      question: 'How should I structure my motivation letter?',
      answer: 'Structure it with a strong introduction, body paragraphs covering your background, goals, and why you chose the program, and a compelling conclusion.'
    },
    {
      question: 'What common mistakes should I avoid?',
      answer: 'Avoid generic templates, grammatical errors, being too lengthy, not researching the university/program, and focusing only on what you want rather than what you can contribute.'
    },
    {
      question: 'Should I mention specific professors or research areas?',
      answer: 'Yes, mentioning specific professors, research areas, or programs shows you\'ve done your homework and are genuinely interested in that particular university.'
    },
    {
      question: 'How important is the motivation letter in the selection process?',
      answer: 'The motivation letter is extremely important as it\'s often the first impression you make. It can make or break your application regardless of your academic scores.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <motion.div 
        className="pt-14 bg-brand-light-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <Link to="/documents" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Documents
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Motivation Letter</span>
          </div>
        </div>
      </motion.div>

      <main className="pb-8">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">
                Motivation Letter
              </h1>
              <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                The first and most important thing you need to make is your motivation letter. It is the first thing you are judged by, so make it very carefully. The detailed guide for motivation letter is available below.
              </p>
            </motion.div>

            {/* How to make Motivation letter Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                How to make Motivation letter?
              </h2>
              <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              
              <div className="space-y-6">
                {/* Paragraph sections */}
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="font-secondary font-medium text-brand-blue flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    Paragraph 01
                  </h3>
                  <p className="font-primary text-muted-foreground text-sm leading-relaxed ml-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-secondary font-medium text-brand-blue flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    Paragraph 02
                  </h3>
                  <p className="font-primary text-muted-foreground text-sm leading-relaxed ml-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="font-secondary font-medium text-brand-blue flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    Paragraph 03
                  </h3>
                  <p className="font-primary text-muted-foreground text-sm leading-relaxed ml-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="font-secondary font-medium text-brand-blue flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    Paragraph 04
                  </h3>
                  <p className="font-primary text-muted-foreground text-sm leading-relaxed ml-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </motion.div>
              </div>
              
              {/* Sample Downloads */}
              <motion.div 
                className="flex flex-wrap gap-3 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  className="px-4 py-2 bg-brand-light-green text-foreground rounded-lg font-primary text-sm hover:bg-opacity-80 smooth-transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Medical Sample
                </motion.button>
                <motion.button
                  className="px-4 py-2 bg-brand-light-green text-foreground rounded-lg font-primary text-sm hover:bg-opacity-80 smooth-transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CS Sample 2
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Tools Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Tools
              </h2>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowToolsModal(true)}
                className="cursor-pointer"
              >
                <Card className="hover:shadow-lg smooth-transition">
                  <CardContent className="p-0">
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=200&fit=crop" 
                        alt="Tools" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* FAQs Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="font-secondary font-semibold text-xl text-brand-orange">
                FAQs
              </h2>
              
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-brand-gray last:border-b-0">
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center py-4 text-left hover:bg-brand-light-gray px-3 rounded-lg smooth-transition"
                      whileHover={{ backgroundColor: "hsl(var(--brand-light-gray))" }}
                    >
                      <span className="font-primary text-muted-foreground text-sm">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      </motion.div>
                    </motion.button>
                    
                    <AnimatePresence>
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 px-3 text-sm text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Tools Modal */}
      <AnimatePresence>
        {showToolsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowToolsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-secondary text-xl font-bold text-brand-orange">
                    Tools for Motivation Letter
                  </h2>
                  <button 
                    onClick={() => setShowToolsModal(false)} 
                    className="p-1 hover:bg-brand-light-gray rounded"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-brand-light-green rounded-lg">
                    <h3 className="font-secondary font-semibold text-brand-blue mb-2">
                      Grammar Checker
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use Grammarly or similar tools to check your grammar and spelling.
                    </p>
                    <button className="text-brand-orange hover:underline text-sm">
                      Open Grammarly →
                    </button>
                  </div>
                  
                  <div className="p-4 bg-brand-light-green rounded-lg">
                    <h3 className="font-secondary font-semibold text-brand-blue mb-2">
                      Word Counter
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Keep track of your word count to maintain optimal letter length.
                    </p>
                    <button className="text-brand-orange hover:underline text-sm">
                      Word Counter Tool →
                    </button>
                  </div>
                  
                  <div className="p-4 bg-brand-light-green rounded-lg">
                    <h3 className="font-secondary font-semibold text-brand-blue mb-2">
                      Templates
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Download sample motivation letter templates for reference.
                    </p>
                    <button className="text-brand-orange hover:underline text-sm">
                      Download Templates →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MotivationLetter;
