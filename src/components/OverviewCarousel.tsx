import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
interface CurrencyAmount {
  huf: number;
  pkr: number;
}
interface CoverageItem {
  name: string;
  description: string;
  amount: CurrencyAmount;
}
const OverviewCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);
  const [showProsCons, setShowProsCons] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const coverageData: CoverageItem[] = [{
    name: 'Full Tuition Fee',
    description: 'Complete coverage of university tuition costs.',
    amount: {
      huf: 0,
      pkr: 0
    }
  }, {
    name: 'Accommodation',
    description: 'University dormitory or housing expenses covered.',
    amount: {
      huf: 0,
      pkr: 0
    }
  }, {
    name: 'Medical Insurance',
    description: 'Comprehensive healthcare coverage during studies.',
    amount: {
      huf: 0,
      pkr: 0
    }
  }, {
    name: 'Stipend',
    description: 'Monthly allowance for living and personal expenses.',
    amount: {
      huf: 0,
      pkr: 0
    }
  }, {
    name: 'Ticket',
    description: 'Round-trip airfare between Pakistan and Hungary.',
    amount: {
      huf: 100000,
      pkr: 87000
    }
  }];
  const faqData = [{
    question: 'How much do we need to earn?',
    answer: 'The scholarship covers all major expenses including tuition, accommodation, and living stipend.'
  }, {
    question: 'What are the eligibility criteria?',
    answer: 'You must have completed FSC, meet academic requirements, and be above 18 years old.'
  }, {
    question: 'When is the application deadline?',
    answer: 'Applications typically open in January and close in February each year.'
  }, {
    question: 'How long does the selection process take?',
    answer: 'The entire process from application to final selection takes about 6-8 months.'
  }, {
    question: 'Can I work while studying?',
    answer: 'Yes, students are allowed to work part-time during their studies with proper permits.'
  }];
  const slides = [{
    description: 'The Stipendium Hungaricum is a prestigious, fully funded opportunity that allows Pakistani students including bachelors, to study in Hungary in the heart of Europe.',
    image: 'hu 1.jpg',
    hasDetails: false,
    hasProsCons: true
  }, {
    description: 'Pakistani citizens with no dual nationality, who are above 18 years of age, have completed FSc or an equivalent qualification, and possess valid USAT scores are eligible to apply.',
    image: 'hu 3.jpg',
    hasDetails: true
  }, {
    description: 'The scholarship covers tuition, accommodation, medical insurance, monthly stipend, and travel tickets.',
    image: 'hu 2.jpg',
    hasDetails: false,
    hasCoverage: true
  }];
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return <div className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => <CarouselItem key={index} className="basis-full">
              <motion.div initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }} animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }} exit={{
            opacity: 0,
            scale: 0.95,
            y: -20
          }} transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}>
                <Card className="border-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="space-y-6">
                      {/* Banner Image - Using correct images */}
                      <motion.div className="relative w-full h-32 rounded-2xl overflow-hidden" whileTap={{
                    scale: 0.98
                  }} transition={{
                    duration: 0.2
                  }}>
                        <img src={slide.image} alt="Stipendium Hungaricum" className="w-full h-full object-cover" />
                      </motion.div>

                      {/* Content */}
                      <div className="text-center space-y-4 mx-[13px] my-[19px] px-px">
                        <motion.p className="font-primary text-muted-foreground text-sm leading-relaxed" initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.3
                    }}>
                          {slide.description}
                        </motion.p>

                        {/* Coverage Details */}
                        {slide.hasCoverage && <motion.div className="space-y-4 mt-6" initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.4
                    }}>
                            {coverageData.map((item, idx) => <motion.div key={idx} initial={{
                        opacity: 0,
                        y: 30
                      }} animate={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        delay: 0.5 + idx * 0.15,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }} whileTap={{
                        scale: 0.98,
                        transition: {
                          duration: 0.1
                        }
                      }} className="my-[5px] py-0 px-px mx-[10px]">
                                <div className="text-left">
                                  <div className="font-primary font-medium text-brand-blue text-base mb-1">
                                    {item.name}
                                  </div>
                                  <div className="font-primary text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                  </div>
                                </div>
                              </motion.div>)}
                            
                            <div className="mt-6 space-y-4 mx-[20px] my-[30px]">
                              <motion.button onClick={() => setShowFAQs(true)} className="text-brand-blue font-primary font-medium active:text-brand-orange smooth-transition" whileTap={{
                          scale: 0.95
                        }}>
                                FAQs
                              </motion.button>
                            </div>
                          </motion.div>}

                        {/* Details Button */}
                        {slide.hasDetails && <motion.button onClick={() => setShowDetails(true)} whileTap={{
                      scale: 0.95
                    }} className="text-brand-blue font-primary font-medium active:text-brand-orange smooth-transition mx-[20px] my-[24px]">
                            Details
                          </motion.button>}

                        {/* Pros/Cons Button */}
                        {slide.hasProsCons && <motion.button onClick={() => setShowProsCons(true)} whileTap={{
                      scale: 0.95
                    }} className="text-brand-blue font-primary font-medium active:text-brand-orange smooth-transition mx-[20px] my-[24px]">
                            Insights
                          </motion.button>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>)}
        </CarouselContent>
      </Carousel>

      {/* Slide Indicators - Enhanced with animations */}
<div
  className={`flex justify-center space-x-2 transition-all duration-300 ${
    current === 1 || current === 2
      ? 'mt-[-135px] mb-[0px]' // push them up by ~5 inches, add bottom space equal to ~5 inches
      : 'mt-6 mb-1'             // default for 3rd slide
  }`}
>
  {Array.from({ length: count }).map((_, index) => (
    <motion.button
      key={index}
      onClick={() => api?.scrollTo(index)}
      className={`w-2 h-2 rounded-full smooth-transition ${
        index === current - 1 ? 'bg-brand-blue' : 'bg-brand-gray'
      }`}
      whileTap={{ scale: 0.8 }}
      animate={{ scale: index === current - 1 ? 1.2 : 1 }}
      transition={{ duration: 0.4 }}
    />
  ))}
</div>




      {/* Details Modal - Using same UI as original */}
      <AnimatePresence>
        {showDetails && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setShowDetails(false)}>
            <motion.div initial={{
          scale: 0.8,
          opacity: 0,
          y: 50
        }} animate={{
          scale: 1,
          opacity: 1,
          y: 0
        }} exit={{
          scale: 0.8,
          opacity: 0,
          y: 50
        }} transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.5
        }} className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Details</h3>
                <button onClick={() => setShowDetails(false)} className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Requirements</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Must have completed the FSC</li>
                      <li>• Meet the requirements</li>
                      <li>• Above the age of 18, no max limit.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Others</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Must have 75 USAT marks</li>
                      <li>• Meet the requirements</li>
                      <li>• Above the age of 18, no max limit.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Others</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Must have 75 USAT marks</li>
                      <li>• Meet the requirements</li>
                      <li>• Above the age of 18, no max limit.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
        {showProsCons && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setShowProsCons(false)}>
            <motion.div initial={{
          scale: 0.8,
          opacity: 0,
          y: 50
        }} animate={{
          scale: 1,
          opacity: 1,
          y: 0
        }} exit={{
          scale: 0.8,
          opacity: 0,
          y: 50
        }} transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.5
        }} className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Insights</h3>
                <button onClick={() => setShowProsCons(false)} className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
             <div className="p-4 overflow-y-auto max-h-96">
  <div className="space-y-6">
    {/* Pros Section */}
    <div>
      <h4 className="font-secondary font-semibold text-brand-blue mb-2 text-lg">
        Pros
      </h4>
      <ul className="space-y-1.5">
        {[
          "Fully funded scholarships for undergraduates are extremely rare, and SHS stands out as one of the finest opportunities available.",
          "The scholarship provides a Schengen visa, enabling travel across Europe.",
          "Living abroad builds independence, confidence, and lifelong skills.",
          "You study in a diverse, multicultural environment with global peers.",
          "The Pakistani student community in Hungary is supportive and close‑knit.",
          "The Pakistani student community in Hungary is supportive and close‑knit.",
          "IELTS is often not required, making it easier to apply."
        ].map((point, idx) => (
          <li
            key={idx}
            className="flex items-start space-x-2 p-1 rounded-md hover:bg-brand-light-gray transition-colors duration-200"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0" />
            <span className="font-primary text-sm leading-snug text-muted-foreground">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Why Hungary Section */}
    <div>
      <h4 className="font-secondary font-semibold text-brand-blue mb-2 text-lg">
        Why you should come to Hungary?
      </h4>
      <ul className="space-y-1.5">
        {[
          "High quality European education.",
          "Full scholarship coverage.",
          "Beautiful and safe country.",
          "Gateway to Europe.",
          "Rich cultural heritage.",
          "Excellent job opportunities."
        ].map((point, idx) => (
          <li
            key={idx}
            className="flex items-start space-x-2 p-1 rounded-md hover:bg-brand-light-gray transition-colors duration-200"
          >
            <span className="mt-1 h-1 w-1 rounded-full bg-brand-orange flex-shrink-0" />
            <span className="font-primary text-sm leading-snug text-muted-foreground">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

            </motion.div>
          </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
        {showFAQs && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setShowFAQs(false)}>
            <motion.div initial={{
          scale: 0.8,
          opacity: 0,
          y: 50
        }} animate={{
          scale: 1,
          opacity: 1,
          y: 0
        }} exit={{
          scale: 0.8,
          opacity: 0,
          y: 50
        }} transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.5
        }} className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">FAQs</h3>
                <button onClick={() => setShowFAQs(false)} className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="overflow-y-auto" style={{
            maxHeight: 'calc(80vh - 80px)'
          }}>
                <div className="p-4 space-y-1">
                  {faqData.map((faq, index) => <div key={index} className="border-b border-brand-gray last:border-b-0">
                      <motion.button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center py-4 text-left hover:bg-brand-light-gray px-3 rounded-lg smooth-transition" whileHover={{
                  backgroundColor: "hsl(var(--brand-light-gray))"
                }}>
                        <span className="font-primary text-muted-foreground text-sm">
                          {faq.question}
                        </span>
                        <motion.div animate={{
                    rotate: openFAQ === index ? 180 : 0
                  }} transition={{
                    duration: 0.2
                  }}>
                          <ChevronUp className="h-4 w-4 text-muted-foreground" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {openFAQ === index && <motion.div initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: 'auto',
                    opacity: 1
                  }} exit={{
                    height: 0,
                    opacity: 0
                  }} transition={{
                    duration: 0.3
                  }} className="overflow-hidden">
                            <div className="pb-4 px-3 text-sm text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>}
                      </AnimatePresence>
                    </div>)}
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default OverviewCarousel;