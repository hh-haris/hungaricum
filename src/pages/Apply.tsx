
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Apply = () => {
  const [showChecklist, setShowChecklist] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<'hec' | 'tempus'>('hec');

  const checklistItems = [
    {
      title: "Motivation Letter",
      description: "The first and most thing you need to make is the your motivation letter. It is first thing you are judged by so make it very carefully. The detailed guide motivation letter is available in documents page."
    },
    {
      title: "Certificates",
      description: "You need to attach the high schools certificates, also called 'Sanad' of both FSc/Matric (equivalent). If you are waiting for FSc final year result, you need to upload Matric certificate with the decleration."
    },
    {
      title: "Transcripts",
      description: "You need to attach the high schools transcripts, also called 'DMC' of both FSc/Matric (equivalent)."
    },
    {
      title: "Passport",
      description: "You must need to attach your passport. In case if you have no passport (or under process) you will need to attach you ID card with the decleration."
    },
    {
      title: "English Proficiency",
      description: "You need to provide the proof of English proficiency In most cases the English Proficiency certificate from high school is enough but it may vary be conscious. Must check the related website either required professional certificate or not for any specific university or its specific program."
    }
  ];

  const hecFAQs = [
    {
      question: "How to create HEC account?",
      answer: "Visit HEC portal and click on 'Register' to create your account with valid email and phone number."
    },
    {
      question: "What documents are required for HEC application?",
      answer: "You need academic transcripts, certificates, passport copy, and USAT result for HEC application."
    },
    {
      question: "When is the HEC application deadline?",
      answer: "HEC application deadline is usually in January. Check the official website for exact dates."
    },
    {
      question: "Can I edit my HEC application after submission?",
      answer: "No, you cannot edit your application after final submission. Review carefully before submitting."
    }
  ];

  const tempusFAQs = [
    {
      question: "How to register on Tempus Foundation portal?",
      answer: "Go to the official Tempus Foundation website and create an account using your email address."
    },
    {
      question: "How many universities can I select in Tempus portal?",
      answer: "You can select up to 5 university programs in order of preference."
    },
    {
      question: "What is the Tempus application deadline?",
      answer: "Tempus application deadline is typically in February. Check the official portal for current deadlines."
    },
    {
      question: "Do I need IELTS for Tempus application?",
      answer: "IELTS is not mandatory for all programs. Check specific university requirements on their websites."
    }
  ];

  const currentFAQs = activeFAQ === 'hec' ? hecFAQs : tempusFAQs;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-14 bg-brand-light-gray">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Apply</span>
          </div>
        </div>
      </div>

      <main className="pb-8">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">
                Apply for Stipendium Hungaricum
              </h1>
              <p className="font-primary text-muted-foreground text-sm">
                This is complete step by step guide to submitting your scholarship application. For this you need to submit your applications at two portals. The detailed guides with the helping screen shots are given. Follow each step.
              </p>
              
              {/* Deadline Alert */}
              <div className="bg-brand-orange bg-opacity-10 border border-brand-orange rounded-lg p-4 bg-transparent">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-extrabold">!</span>
                  </div>
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-orange mb-1">Deadlines</h4>
                    <p className="font-primary text-muted-foreground text-sm">
                      All applications must be submitted by January 31st. Late submissions are not accepted under any circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Checklist */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Documents Checklist
              </h2>
              
              <Card 
                className="cursor-pointer hover:shadow-lg smooth-transition" 
                onClick={() => setShowChecklist(true)}
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=200&fit=crop" 
                      alt="Documents Checklist" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Apply Section */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-orange">
                Apply
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <Link to="/apply/hec-portal">
                  <Card className="cursor-pointer hover:shadow-lg smooth-transition">
                    <CardContent className="p-0">
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=200&fit=crop" 
                          alt="HEC Portal" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/apply/tempus-portal">
                  <Card className="cursor-pointer hover:shadow-lg smooth-transition">
                    <CardContent className="p-0">
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=200&fit=crop" 
                          alt="Tempus Foundation Portal" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-orange">
                FAQs
              </h2>
              
              {/* FAQ Toggle Buttons */}
              <div className="flex bg-brand-light-gray rounded-lg p-1 w-full">
                <button
                  onClick={() => setActiveFAQ('hec')}
                  className={`flex-1 py-2 px-4 rounded-md font-primary text-sm font-medium smooth-transition ${
                    activeFAQ === 'hec' 
                      ? 'bg-brand-orange text-white shadow-sm' 
                      : 'text-muted-foreground hover:text-brand-orange'
                  }`}
                >
                  HEC Portal
                </button>
                <button
                  onClick={() => setActiveFAQ('tempus')}
                  className={`flex-1 py-2 px-4 rounded-md font-primary text-sm font-medium smooth-transition ${
                    activeFAQ === 'tempus' 
                      ? 'bg-brand-orange text-white shadow-sm' 
                      : 'text-muted-foreground hover:text-brand-orange'
                  }`}
                >
                  Tempus Portal
                </button>
              </div>

              {/* FAQ Content */}
              <Accordion type="single" collapsible className="w-full">
                {currentFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-primary text-sm font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Documents Checklist Modal */}
      <AnimatePresence>
        {showChecklist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowChecklist(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-orange">Checklist</h3>
                <button
                  onClick={() => setShowChecklist(false)}
                  className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96">
                <p className="font-primary text-muted-foreground text-sm mb-4">
                  Before applying at any portal, please prepare all the given documents before applying. The general requirements are listed, please also check the University specific website also, like ILETS, CV requirements.
                </p>
                
                <div className="space-y-4">
                  {checklistItems.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-secondary font-semibold text-brand-blue mb-2">
                        {item.title}
                      </h4>
                      <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Apply;
