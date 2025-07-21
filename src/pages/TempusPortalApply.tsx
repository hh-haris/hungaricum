import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Expand, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '../components/ui/carousel';

const TempusPortalApply = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [showDownloads, setShowDownloads] = useState(false);

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

  const sampleApplications = [
    {
      name: "Ahmed Hassan",
      university: "University of Debrecen",
      program: "Computer Science",
      details: "Successful applicant from Lahore with excellent academic record."
    },
    {
      name: "Sara Khan",
      university: "Budapest University of Technology", 
      program: "Electrical Engineering",
      details: "Outstanding candidate with strong technical background."
    },
    {
      name: "Ali Raza",
      university: "University of Szeged",
      program: "Medical Studies",
      details: "Top performer with comprehensive application portfolio."
    }
  ];

  const slides = [
    {
      step: "Step 01",
      title: "Account Creation",
      description: "Create your Tempus Foundation account using valid credentials and verify your email address.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      step: "Step 02",
      title: "Selecting the Priorities",
      description: "Choose your preferred universities and programs in order of preference. You can select up to 5 options.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
    },
    {
      step: "Step 03",
      title: "Profile",
      description: "Complete your personal profile with accurate information including family details.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop"
    },
    {
      step: "Step 04",
      title: "Contact Information",
      description: "Provide your current contact information including address and phone numbers.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop"
    },
    {
      step: "Step 05",
      title: "Educational Background",
      description: "Add all your educational qualifications and academic achievements.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=500&fit=crop"
    },
    {
      step: "Step 06",
      title: "Language Skills",
      description: "Declare your language proficiencies and provide supporting documentation if required.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=500&fit=crop"
    },
    {
      step: "Step 07",
      title: "Work Experience",
      description: "Add any relevant work experience or internships you have completed.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop"
    },
    {
      step: "Step 08",
      title: "Extra Activities",
      description: "Include your extracurricular activities, volunteer work, and achievements.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop"
    },
    {
      step: "Step 09",
      title: "Living History",
      description: "Provide details about your current and previous places of residence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      step: "Step 10",
      title: "Accommodation",
      description: "Specify your accommodation preferences and requirements in Hungary.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
    },
    {
      step: "Step 11",
      title: "Character References",
      description: "Provide contact information for academic or professional references.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop"
    },
    {
      step: "Step 12",
      title: "Personal Statement",
      description: "Write your motivation letter explaining your goals and reasons for choosing Hungary.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop"
    },
    {
      step: "Step 13",
      title: "Final Review",
      description: "Review all your information and ensure all required documents are uploaded.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=500&fit=crop"
    },
    {
      step: "Step 14",
      title: "Additional Information",
      description: "Provide any additional information that might support your application.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=500&fit=crop"
    }
  ];

  const handleImageExpand = (imageUrl: string) => {
    setExpandedImage(imageUrl);
  };

  const isLastSlide = current === count;

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
            <Link to="/apply" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Apply
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Tempus Portal</span>
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
            <div className="space-y-4 text-center">
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">
                Tempus Portal Guide
              </h1>
            </div>

            {/* Steps Carousel */}
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="border-0 shadow-none">
                        <CardContent className="p-0">
                          <div className="space-y-6">
                            {/* Screenshot with expand button */}
                            <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                              <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() => handleImageExpand(slide.image)}
                                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white smooth-transition"
                              >
                                <Expand className="h-4 w-4 text-brand-blue" />
                              </button>
                            </div>

                            {/* Step Content */}
                            <div className="space-y-4">
                              <div className="inline-block bg-brand-light-green px-3 py-1 rounded-full">
                                <span className="text-sm font-primary font-medium text-muted-foreground">
                                  {slide.step}
                                </span>
                              </div>
                              
                              <h2 className="font-secondary font-bold text-xl text-brand-blue">
                                {slide.title}
                              </h2>
                              
                              <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                                {slide.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {Array.from({ length: count }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full smooth-transition ${
                    index === current - 1 ? 'bg-brand-blue' : 'bg-brand-gray'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Download Button - Only on last slide */}
            {isLastSlide && (
              <div className="flex flex-col items-center space-y-2 mt-6">
                <button
                  onClick={() => setShowDownloads(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 smooth-transition"
                >
                  <Download className="h-4 w-4" />
                  <span className="font-primary text-sm">Download</span>
                </button>
                <p className="font-primary text-xs text-muted-foreground text-center">
                  Download sample applications of previous successful candidates
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setExpandedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 smooth-transition z-10"
              >
                <X className="h-6 w-6" />
              </button>
              
              <img
                src={expandedImage}
                alt="Expanded screenshot"
                className="w-full h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 rounded-lg p-3">
                <p className="text-white text-sm font-primary">Expanded screenshot</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Downloads Modal */}
      <AnimatePresence>
        {showDownloads && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowDownloads(false)}
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
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Sample Applications</h3>
                <button
                  onClick={() => setShowDownloads(false)}
                  className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96">
                <p className="font-primary text-muted-foreground text-sm mb-4">
                  Download applications from previous successful candidates to understand the application process better.
                </p>
                
                <div className="space-y-4">
                  {sampleApplications.map((application, index) => (
                    <div key={index} className="p-4 hover:bg-brand-light-gray rounded-lg smooth-transition">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-secondary font-semibold text-brand-blue">
                            {application.name}
                          </h4>
                          <p className="font-primary text-sm text-muted-foreground">
                            {application.university}
                          </p>
                          <p className="font-primary text-sm text-brand-orange">
                            {application.program}
                          </p>
                          <p className="font-primary text-xs text-muted-foreground mt-1">
                            {application.details}
                          </p>
                        </div>
                        <button className="p-2 hover:bg-brand-light-gray rounded smooth-transition ml-2">
                          <Download className="h-4 w-4 text-brand-blue" />
                        </button>
                      </div>
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

export default TempusPortalApply;