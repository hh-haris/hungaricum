import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { X } from 'lucide-react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';

const CityDetail = () => {
  const { citySlug } = useParams();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const getCityName = (slug: string) => {
    const cityNames: { [key: string]: string } = {
      'budapest': 'Budapest',
      'debrecen': 'Debrecen',
      'pecs': 'Pécs',
      'gyor': 'Győr',
      'baja': 'Baja',
      'dunaujvaros': 'Dunaújváros',
      'eger': 'Eger',
      'godollo': 'Gödöllő',
      'kecskemet': 'Kecskemét',
      'miskolc': 'Miskolc',
      'nyiregyhaza': 'Nyíregyháza',
      'sopron': 'Sopron',
      'szeged': 'Szeged',
      'veszprem': 'Veszprém'
    };
    return cityNames[slug] || 'Unknown City';
  };

  const getCityUniversities = (slug: string) => {
    const cityUniversities: { [key: string]: string[] } = {
      'budapest': [
        'Budapest Metropolitan University',
        'Budapest University of Economics and Business',
        'Budapest University of Technology and Economics',
        'Corvinus University of Budapest',
        'Dennis Gabor University of Applied Sciences',
        'Eötvös Loránd University',
        'Ludovika University of Public Service',
        'Obuda University',
        'Semmelweis University'
      ],
      'debrecen': ['University of Debrecen'],
      'pecs': ['University of Pécs'],
      'gyor': ['Széchenyi István University'],
      'baja': ['Eötvös József College'],
      'dunaujvaros': ['University of Dunaújváros'],
      'eger': ['Eszterházy Károly Catholic University'],
      'godollo': ['Hungarian University of Agriculture and Life Sciences, MATE'],
      'kecskemet': ['John von Neumann University'],
      'miskolc': ['University of Miskolc'],
      'nyiregyhaza': ['University of Nyíregyháza'],
      'sopron': ['University of Sopron'],
      'szeged': ['University of Szeged'],
      'veszprem': ['University of Pannonia']
    };
    return cityUniversities[slug] || [];
  };
  const cityName = getCityName(citySlug || '');
  const universities = getCityUniversities(citySlug || '');


  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-14">
        <div className="mobile-container py-6">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">{'>'}</span>
            <Link to="/cities" className="hover:text-foreground">Cities</Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-brand-orange">{cityName}</span>
          </div>

          {/* City Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-secondary text-3xl font-bold text-brand-orange mb-8"
          >
            {cityName}
          </motion.h1>

          {/* Large Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=300&fit=crop"
                  alt={cityName}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Three Sub Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer hover:shadow-lg smooth-transition"
                onClick={() => setActiveModal('universities')}
              >
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=200&h=120&fit=crop"
                    alt="Universities"
                    className="w-full h-20 object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer hover:shadow-lg smooth-transition"
                onClick={() => setActiveModal('students')}
              >
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=200&h=120&fit=crop"
                    alt="Pakistani Students"
                    className="w-full h-20 object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer hover:shadow-lg smooth-transition"
                onClick={() => setActiveModal('life')}
              >
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200&h=120&fit=crop"
                    alt="Life in City"
                    className="w-full h-20 object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Brief Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-sm leading-relaxed mb-8"
          >
            A mobile first, minimalist guide to simplify your scholarship application process for Pakistani students.
          </motion.p>

          {/* Living Cost Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-4">Living Cost</h2>
            <Card 
              className="overflow-hidden cursor-pointer hover:shadow-lg smooth-transition"
              onClick={() => setActiveModal('livingCost')}
            >
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=200&fit=crop"
                  alt="Living Cost"
                  className="w-full h-32 object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Job Situation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-6"
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-4">Job Situation</h2>
            <Card 
              className="overflow-hidden cursor-pointer hover:shadow-lg smooth-transition"
              onClick={() => setActiveModal('jobSituation')}
            >
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=200&fit=crop"
                  alt="Job Situation"
                  className="w-full h-32 object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Fun Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-6"
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-4">Fun</h2>
            <Card 
              className="overflow-hidden cursor-pointer hover:shadow-lg smooth-transition"
              onClick={() => setActiveModal('fun')}
            >
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=200&fit=crop"
                  alt="Fun"
                  className="w-full h-32 object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-sm w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Universities Modal */}
              {activeModal === 'universities' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-secondary text-xl font-bold text-brand-orange">
                      Universities in {cityName}
                    </h2>
                    <button onClick={closeModal} className="p-1 hover:bg-brand-light-gray rounded">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {universities.map((university, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Avatar className="w-full h-full">
                            <AvatarFallback className="bg-brand-light-green text-brand-blue font-semibold">
                              {university.split(' ').map(word => word.charAt(0)).join('').slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-secondary text-base font-bold text-brand-blue mb-2">
                            {university}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Excellent academic programs with modern facilities and experienced faculty members.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pakistani Students Modal */}
              {activeModal === 'students' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-secondary text-xl font-bold text-brand-orange">
                      Pakistani Students in {cityName}
                    </h2>
                    <button onClick={closeModal} className="p-1 hover:bg-brand-light-gray rounded">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      There are many Pakistani students currently studying in {cityName}. They form a vibrant community and are always ready to help newcomers with their transition to Hungarian academic life.
                    </p>
                    
                    <div>
                      <h3 className="font-medium text-foreground mb-3">Connect with Seniors:</h3>
                      <div className="flex gap-2 items-center mb-4">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Senior" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="Senior" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" alt="Senior" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&fit=crop&crop=face" alt="Senior" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face" alt="Senior" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=32&h=32&fit=crop&crop=face" alt="Senior" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <Link
                        to="/seniors"
                        className="inline-block bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 smooth-transition"
                      >
                        View All Seniors
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Life Modal */}
              {activeModal === 'life' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-secondary text-xl font-bold text-brand-orange">
                      Life in {cityName}
                    </h2>
                    <button onClick={closeModal} className="p-1 hover:bg-brand-light-gray rounded">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Life in {cityName} offers a perfect blend of academic excellence and cultural richness. The city provides excellent public transportation, affordable living costs, and a welcoming atmosphere for international students. You'll find numerous cultural events, historical sites, and recreational activities to enjoy during your studies.
                  </p>
                </div>
              )}

              {/* Living Cost Modal */}
              {activeModal === 'livingCost' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-secondary text-xl font-bold text-brand-orange">
                      Living Cost
                    </h2>
                    <button onClick={closeModal} className="p-1 hover:bg-brand-light-gray rounded">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The average monthly living cost in {cityName} ranges from 400-600 EUR, including accommodation, food, transportation, and entertainment. Dormitory accommodation costs around 100-200 EUR per month, while private apartments range from 250-400 EUR. Food and daily expenses typically cost 150-250 EUR monthly.
                  </p>
                </div>
              )}

              {/* Job Situation Modal */}
              {activeModal === 'jobSituation' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-secondary text-xl font-bold text-brand-orange">
                      Job Situation
                    </h2>
                    <button onClick={closeModal} className="p-1 hover:bg-brand-light-gray rounded">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    International students in {cityName} can work up to 24 hours per week during studies. Part-time opportunities include tutoring, restaurant work, and administrative roles. The minimum wage is around 5-8 EUR per hour. Many students find work in multinational companies, especially those with English or technical skills.
                  </p>
                </div>
              )}

              {/* Fun Modal */}
              {activeModal === 'fun' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-secondary text-xl font-bold text-brand-orange">
                      Fun
                    </h2>
                    <button onClick={closeModal} className="p-1 hover:bg-brand-light-gray rounded">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cityName} offers amazing recreational activities including historical tours, thermal baths, cultural festivals, and vibrant nightlife. The city hosts numerous events throughout the year perfect for international students.
                    </p>
                    
                    <a
                      href="https://www.youtube.com/@hungaricumguide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 smooth-transition"
                    >
                      Watch City Tours on YouTube
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CityDetail;
