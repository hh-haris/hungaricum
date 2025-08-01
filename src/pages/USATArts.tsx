import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
const USATArts = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showPastPapers, setShowPastPapers] = useState(false);
  const [showStudyResources, setShowStudyResources] = useState(false);
  const [showProsCons, setShowProsCons] = useState(false);
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const pastPapersData = [{
    subject: "Verbal Reasoning",
    link: "#"
  }, {
    subject: "Quantitative Reasoning",
    link: "#"
  }, {
    subject: "Islamiat/Ethics",
    link: "#"
  }, {
    subject: "Pakistan Studies",
    link: "#"
  }, {
    subject: "General Knowledge",
    link: "#"
  }, {
    subject: "Essays",
    link: "#"
  }];
  const studyResourcesData = [{
    name: "USAT Arts Prep Course",
    type: "YouTube",
    link: "#"
  }, {
    name: "Arts & Humanities USAT Guide",
    type: "Website",
    link: "#"
  }, {
    name: "Pakistan Studies Guide",
    type: "YouTube",
    link: "#"
  }, {
    name: "General Knowledge Tests",
    type: "Website",
    link: "#"
  }];
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-14 bg-brand-light-gray">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <Link to="/usat" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              USAT
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Arts & Humanities</span>
          </div>
        </div>
      </div>

      <main className="pb-8">
        <div className="mobile-container pt-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-8">
           

            {/* Header */}
            <div className="space-y-4">
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">USAT Arts & Humanities</h1>
              <p className="font-primary text-muted-foreground text-sm">
                Undergraduate Studies Aptitude Test for Arts & Humanities, is the basic requirement for applying this scholarship.
              </p>
            </div>

            {/* Test Format */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Test Format
              </h2>
              
              <div className="space-y-4">
                <h3 className="font-secondary font-semibold text-lg text-brand-orange">MCQs</h3>
                
                {/* Verbal Reasoning - Expandable */}
                <div className="space-y-2">
                  <div className="bg-brand-light-green rounded-lg p-3 cursor-pointer" onClick={() => toggleSection('verbal')}>
                    <div className="flex justify-between items-center">
                      <span className="font-primary font-medium">Verbal Reasoning</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-primary font-medium">20 MCQs</span>
                        <ChevronUp className={`h-4 w-4 transition-transform ${expandedSection === 'verbal' ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedSection === 'verbal' && <motion.div initial={{
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
                  }} className="overflow-hidden ml-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Analogy</span>
                            <span className="font-primary text-muted-foreground text-sm">05 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Synonym/Antonym</span>
                            <span className="font-primary text-muted-foreground text-sm">04 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Sentence Completion</span>
                            <span className="font-primary text-muted-foreground text-sm">06 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Comprehension</span>
                            <span className="font-primary text-muted-foreground text-sm">05 MCQs</span>
                          </div>
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </div>

                {/* Quantitative Reasoning - Expandable */}
                <div className="space-y-2">
                  <div className="bg-brand-light-green rounded-lg p-3 cursor-pointer" onClick={() => toggleSection('quantitative')}>
                    <div className="flex justify-between items-center">
                      <span className="font-primary font-medium">Quantitative Reasoning</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-primary font-medium">25 MCQs</span>
                        <ChevronUp className={`h-4 w-4 transition-transform ${expandedSection === 'quantitative' ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedSection === 'quantitative' && <motion.div initial={{
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
                  }} className="overflow-hidden ml-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Arithmetic</span>
                            <span className="font-primary text-muted-foreground text-sm">06 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Algebra and Functions</span>
                            <span className="font-primary text-muted-foreground text-sm">04 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Geometry</span>
                            <span className="font-primary text-muted-foreground text-sm">03 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Equations</span>
                            <span className="font-primary text-muted-foreground text-sm">03 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Statistics</span>
                            <span className="font-primary text-muted-foreground text-sm">03 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Scenario Based/Mental Mathematics</span>
                            <span className="font-primary text-muted-foreground text-sm">06 MCQs</span>
                          </div>
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </div>

                {/* Subject-specific sections - Non-expandable */}
                <div className="space-y-2">
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">Islamiat/Ethics</span>
                      <span className="font-primary font-medium">10 MCQs</span>
                    </div>
                  </div>
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">Pakistan Studies</span>
                      <span className="font-primary font-medium">10 MCQs</span>
                    </div>
                  </div>
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">General Knowledge</span>
                      <span className="font-primary font-medium">10 MCQs</span>
                    </div>
                  </div>
                </div>

                {/* Essays */}
                <h3 className="font-secondary font-semibold text-lg text-brand-orange mt-6">Essays</h3>
                <div className="space-y-2">
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">Argument Based Essay</span>
                      <span className="font-primary font-medium">15 Marks</span>
                    </div>
                  </div>
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">Narrative Based Essay</span>
                      <span className="font-primary font-medium">10 Marks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Tips */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Preparation Tips
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Review Pakistan Studies history, geography, and current affairs thoroughly.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Stay updated with current affairs and general knowledge topics.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Practice essay writing with focus on argumentation and narrative skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Study Resources & Pros/Cons */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Study Resources
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="cursor-pointer hover:shadow-lg smooth-transition" onClick={() => setShowPastPapers(true)}>
                  <CardContent className="p-0">
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                     <img src="/Past Papers.jpg" alt="Past Papers" className="w-full h-full object-cover" />
                  </div>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-lg smooth-transition" onClick={() => setShowStudyResources(true)}>
                  <CardContent className="p-0">
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <img src="/Other.jpg" alt="Study Resources" className="w-full h-full object-cover" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Modals - keeping same structure but with Arts-specific content */}
      <AnimatePresence>
        {showProsCons && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setShowProsCons(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          type: "spring",
          damping: 20
        }} className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Arts & Humanities Studies in Hungary</h3>
                <button onClick={() => setShowProsCons(false)} className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96">
                <div className="space-y-6">
                  {/* Cons Section */}
                  <div className="space-y-3">
                    <h4 className="font-secondary font-semibold text-red-600">Cons</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">Limited immediate job market compared to STEM fields</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">Language barrier for literature and cultural studies</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">Subjective evaluation in many subjects</p>
                      </div>
                    </div>
                  </div>

                  {/* Pros Section */}
                  <div className="space-y-3">
                    <h4 className="font-secondary font-semibold text-brand-orange">Why you should come to Hungary?</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">Rich cultural heritage and historical studies opportunities</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">Excellent universities with strong humanities programs</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">Gateway to European arts and cultural scene</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">Critical thinking and communication skills development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      {/* Past Papers and Study Resources modals - similar structure */}
      <AnimatePresence>
        {showPastPapers && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setShowPastPapers(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          type: "spring",
          damping: 20
        }} className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Past Papers</h3>
                <button onClick={() => setShowPastPapers(false)} className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96">
                <div className="space-y-4">
                  {pastPapersData.map((paper, index) => <div key={index} className="flex justify-between items-center py-2 border-b border-brand-gray last:border-b-0">
                      <span className="font-primary text-brand-orange font-medium">
                        {paper.subject}
                      </span>
                      <button className="text-muted-foreground hover:text-brand-blue smooth-transition text-sm">
                        Download
                      </button>
                    </div>)}
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Arts & Humanities USAT past papers to help you prepare effectively for the exam.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
        {showStudyResources && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setShowStudyResources(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          type: "spring",
          damping: 20
        }} className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Study Resources</h3>
                <button onClick={() => setShowStudyResources(false)} className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96">
                <div className="space-y-4">
                  {studyResourcesData.map((resource, index) => <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-primary text-muted-foreground text-sm">
                          {resource.name}
                        </span>
                        <span className="text-xs bg-brand-light-green px-2 py-1 rounded-full text-muted-foreground">
                          {resource.type}
                        </span>
                      </div>
                      <button className="w-full bg-brand-blue text-white py-2 rounded-lg hover:bg-brand-blue/90 smooth-transition text-sm">
                        Open {resource.type}
                      </button>
                    </div>)}
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default USATArts;