import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Expand } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '../components/ui/carousel';

const HECPortalApply = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

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

  const slides = [
    {
      step: "Step 01",
      title: "Creating Account",
      description: "Visit the HEC portal and create your account using a valid email address and mobile number. Make sure to verify your email before proceeding.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      step: "Step 02",
      title: "Profile Setup",
      description: "Fill in your personal information, contact details, and nationality information accurately.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
    },
    {
      step: "Step 03",
      title: "Educational Background",
      description: "Add all your educational qualifications starting from matriculation to the highest degree completed.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=500&fit=crop"
    },
    {
      step: "Step 04",
      title: "Employment Details",
      description: "If you have any work experience, add your employment history with job descriptions and duration.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=500&fit=crop"
    },
    {
      step: "Step 05",
      title: "Document Checklist",
      description: "Review all required documents and ensure they are uploaded in the correct format and size.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop"
    },
    {
      step: "Step 06",
      title: "University Selection",
      description: "Select your preferred Hungarian universities and programs in order of preference.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop"
    },
    {
      step: "Step 07",
      title: "Upload Documents",
      description: "Upload all required documents including certificates, transcripts, and supporting documents.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    }
  ];

  const handleImageExpand = (imageUrl: string) => {
    setExpandedImage(imageUrl);
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
            <Link to="/apply" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Apply
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">HEC Portal</span>
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
                HEC Portal Guide
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
    </div>
  );
};

export default HECPortalApply;