
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbList, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';

const Official = () => {
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: 'Pakistan',
    usatMarks: '',
    message: ''
  });

  const creators = [
    {
      name: 'Haris',
      bio: 'Haris is the creator and maintainer of Hungaricum. He is passionate about helping Pakistani students achieve their dreams of studying in Hungary through the Stipendium Hungaricum scholarship program.',
    },
    {
      name: 'Abdullah',
      bio: 'Abdullah is a co-creator of Hungaricum. He brings extensive experience in student guidance and has helped numerous students successfully navigate the scholarship application process.',
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = encodeURIComponent(`*Hungaricum Suggestion*

*Name:* ${formData.name}
*Location:* ${formData.location}
*USAT Marks:* ${formData.usatMarks || 'Not provided'}

*Message:*
${formData.message}

---
Sent from Hungaricum Guide`);
    
    // WhatsApp number updated to +923200505154
    const whatsappLink = `https://wa.me/923200505154?text=${message}`;
    
    window.open(whatsappLink, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      location: 'Pakistan',
      usatMarks: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-14">
        <div className="mobile-container py-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Official</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-secondary text-3xl font-bold text-brand-orange mb-8"
          >
            Official
          </motion.h1>

          {/* Who Created It Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-6">
              Who create it?
            </h2>
            
            <div className="space-y-6">
              {creators.map((creator, index) => (
                <div key={creator.name} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1472099645785-5658abf4ff4e' : '1507003211169-0a1dd7228f2d'}?w=64&h=64&fit=crop&crop=face`} 
                        alt={creator.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-secondary text-lg font-bold text-brand-blue mb-2">
                      {creator.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {creator.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What Next Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-4">
              What next?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are continuously working to improve Hungaricum and add more features to help Pakistani students. 
              Your feedback and suggestions are valuable to us. We plan to add more detailed guides, video tutorials, 
              and interactive features to make the scholarship application process even easier.
            </p>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-4">
              Legal
            </h2>
            <Card 
              className="cursor-pointer hover:shadow-lg smooth-transition"
              onClick={() => setShowLegalModal(true)}
            >
              <CardContent className="p-4">
                <p className="text-foreground text-sm">
                  Privacy Policy & Terms and Conditions
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Suggestions Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-4">
              Submit Your Suggestions
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-brand-gray rounded-lg focus:outline-none focus:ring-0 focus:border-brand-orange"
                  required
                />
              </div>
              
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="location"
                    value="Hungary"
                    checked={formData.location === 'Hungary'}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="mr-2"
                  />
                  In Hungary
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="location"
                    value="Pakistan"
                    checked={formData.location === 'Pakistan'}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="mr-2"
                  />
                  Pakistan
                </label>
              </div>
              
              <div>
                <input
                  type="number"
                  placeholder="USAT Marks"
                  value={formData.usatMarks}
                  onChange={(e) => setFormData({...formData, usatMarks: e.target.value})}
                  className="w-full px-4 py-2 border border-brand-gray rounded-lg focus:outline-none focus:ring-0 focus:border-brand-orange"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message/Suggestion"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-brand-gray rounded-lg focus:outline-none focus:ring-0 focus:border-brand-orange resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-orange text-white py-2 rounded-lg font-medium hover:bg-opacity-90 smooth-transition"
              >
                Submit Suggestion
              </button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Your suggestion will be sent via WhatsApp
            </p>
          </motion.div>
        </div>
      </main>

      {/* Legal Modal */}
      <AnimatePresence>
        {showLegalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowLegalModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-sm w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-secondary text-xl font-bold text-brand-orange">
                    Privacy & Terms and Conditions
                  </h2>
                  <button onClick={() => setShowLegalModal(false)} className="p-1 hover:bg-brand-light-gray rounded">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Privacy Policy</h3>
                    <p>
                      We respect your privacy and are committed to protecting your personal information. 
                      Any data you submit through our suggestion form is used solely for improving our services 
                      and will not be shared with third parties.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Terms and Conditions</h3>
                    <p>
                      By using Hungaricum, you agree to use the information provided for educational purposes only. 
                      While we strive to provide accurate information, we recommend verifying all details with 
                      official sources before making any decisions.
                    </p>
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

export default Official;
