
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronUp, X, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../components/ui/carousel';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const USAT = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const scheduleData = [
    {
      session: "Test 01",
      registration: "October 15, 2024",
      rollNoSlip: "October 15, 2024",
      testDate: "October 15, 2024",
      keyPublish: "October 15, 2024",
      resultDate: "October 15, 2024"
    },
    {
      session: "Test 02",
      registration: "November 15, 2024",
      rollNoSlip: "November 15, 2024",
      testDate: "November 15, 2024",
      keyPublish: "November 15, 2024",
      resultDate: "November 15, 2024"
    },
    {
      session: "Test 03",
      registration: "December 15, 2024",
      rollNoSlip: "December 15, 2024",
      testDate: "December 15, 2024",
      keyPublish: "December 15, 2024",
      resultDate: "December 15, 2024"
    },
    {
      session: "Test 04",
      registration: "January 15, 2025",
      rollNoSlip: "January 15, 2025",
      testDate: "January 15, 2025",
      keyPublish: "January 15, 2025",
      resultDate: "January 15, 2025"
    }
  ];

  const usatCategories = [
    {
      title: "USAT Engineering",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      link: "/usat/engineering"
    },
    {
      title: "USAT Medical",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      link: "/usat/medical"
    },
    {
      title: "USAT Computer Science",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      link: "/usat/computer-science"
    },
    {
      title: "USAT Commerce",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      link: "/usat/commerce"
    },
    {
      title: "USAT Arts",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop",
      link: "/usat/arts"
    },
    {
      title: "USAT General Science",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop",
      link: "/usat/general-science"
    }
  ];

  const faqs = [
    {
      question: 'What is the duration of USAT?',
      answer: 'The USAT exam duration is 100 minutes for MCQs and 40 minutes for essay writing, totaling 140 minutes.'
    },
    {
      question: 'How many attempts are allowed?',
      answer: 'You can attempt USAT multiple times throughout the year as there are several test sessions available.'
    },
    {
      question: 'What is the passing criteria?',
      answer: 'There is no specific passing criteria, but securing 75+ marks out of 100 is considered safe for nomination.'
    },
    {
      question: 'Can I change my USAT category?',
      answer: 'You can take any USAT category except if you are a medical student, but it\'s advised to take the same USAT that you studied in your FSc.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

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
            <span className="text-brand-orange font-medium">USAT</span>
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
                USAT GUIDE
              </h1>
              <p className="font-primary text-muted-foreground text-sm">
                The Undergraduate Studies Admission/Aptitude Test (USAT) is the first and most important step in the SHS process. It is the key criterion on which HEC nominates candidates, making it the most critical phase of the entire selection journey.
              </p>
              
           <div className="relative mt-6 overflow-hidden rounded-xl border border-brand-orange/30 bg-gradient-to-br from-brand-light-gray to-white p-5">
  <div className="absolute left-0 top-0 h-full w-1 bg-brand-orange rounded-r-md"></div>
  <div className="flex items-start space-x-4 relative">
    <AlertTriangle className="h-6 w-6 text-brand-orange mt-0.5 flex-shrink-0" />
    <div className="space-y-2">
      <h3 className="font-secondary font-semibold text-brand-orange text-base">
        Important Advisory
      </h3>
      <ul className="space-y-2 text-sm text-muted-foreground font-primary leading-relaxed">
        <li className="flex items-start space-x-2">
          <span className="mt-2 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0"></span>
          <span>Choose the same USAT category you studied in your F.Sc. or equivalent background.</span>
        </li>
        <li className="flex items-start space-x-2">
          <span className="mt-2 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0"></span>
          <span>You may pick a different category (except medical), but it is not advisable.</span>
        </li>
        <li className="flex items-start space-x-2">
          <span className="mt-2 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0"></span>
          <span>Do not contact HEC repeatedly about this, or they may impose stricter rules.</span>
        </li>
      </ul>
    </div>
  </div>
</div>


            {/* Overview Section */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Overview
              </h2>
              
              <Card className="cursor-pointer hover:shadow-lg smooth-transition" onClick={() => setShowModal(true)}>
                <CardContent className="p-0">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=200&fit=crop" 
                      alt="USAT Overview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* USAT Schedule */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                USAT Schedule
              </h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-brand-light-green">
                      <TableHead className="font-secondary font-semibold text-foreground">Session</TableHead>
                      <TableHead className="font-secondary font-semibold text-foreground">Registration</TableHead>
                      <TableHead className="font-secondary font-semibold text-foreground">Roll No Slip</TableHead>
                      <TableHead className="font-secondary font-semibold text-foreground">Test Date</TableHead>
                      <TableHead className="font-secondary font-semibold text-foreground">Key Publish</TableHead>
                      <TableHead className="font-secondary font-semibold text-foreground">Result Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.session}</TableCell>
                        <TableCell>{row.registration}</TableCell>
                        <TableCell>{row.rollNoSlip}</TableCell>
                        <TableCell>{row.testDate}</TableCell>
                        <TableCell>{row.keyPublish}</TableCell>
                        <TableCell>{row.resultDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Registration Guide */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Registration Guide
              </h2>
              
              <Link to="/usat/registration-guide">
                <Card className="cursor-pointer hover:shadow-lg smooth-transition">
                  <CardContent className="p-0">
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=200&fit=crop" 
                        alt="Registration Guide" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* USAT Categories */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                USAT Categories
              </h2>
              <p className="font-primary text-muted-foreground text-sm">
                There are 6 categories of USAT, you can take any except if you are medical student, but it advised to take the same USAT that you studied in your FSc.
              </p>
              
              <Carousel
                opts={{
                  align: "start",
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {usatCategories.map((category, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Link to={category.link}>
                          <Card className="hover:shadow-lg smooth-transition">
                            <CardContent className="p-0">
                              <div className="relative w-full h-32 rounded-lg overflow-hidden">
                                <img 
                                  src={category.image} 
                                  alt={category.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* FAQs */}
            <div className="space-y-4">
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
            </div>
          </motion.div>
        </div>
      </main>

      {/* Modal for Overview Details */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-orange">
                  Details
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96">
                <div className="space-y-4">
                  <p className="font-primary text-muted-foreground text-sm">
                   The Undergraduate Studies Admission/Aptitude Test (USAT) is the first and most important step in the SHS process. It is the key criterion on which HEC nominates candidates, making it the most critical phase of the entire selection journey.
                  </p>
                  
                  {/* Marks Table */}
                  <div className="space-y-2">
                    <h4 className="font-secondary font-semibold text-brand-blue">Test Structure</h4>
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-brand-light-green">
                          <TableHead className="font-secondary font-semibold text-foreground">Component</TableHead>
                          <TableHead className="font-secondary font-semibold text-foreground">Marks</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Total Marks</TableCell>
                          <TableCell>100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">MCQs</TableCell>
                          <TableCell>75</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Argumentative Essay</TableCell>
                          <TableCell>15</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Narrative Essay</TableCell>
                          <TableCell>10</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="font-secondary font-semibold text-brand-blue mb-1">Safe Marks</h4>
                      <p className="text-muted-foreground">75+</p>
                    </div>
                    <div>
                      <h4 className="font-secondary font-semibold text-brand-blue mb-1">Duration</h4>
                      <p className="text-muted-foreground">100+40 Min</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-6">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">
                        Detailed Structure of each USAT type is given with each Individual guide of each USAT.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">
                        Go to related USAT you have decided to take for detailed guide, with all resources you need.
                      </p>
                    </div>
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

export default USAT;
