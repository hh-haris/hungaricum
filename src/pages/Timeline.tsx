import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle } from '../components/ui/timeline';

const TimelinePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-09-01T09:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timelineItems = [
    {
      id: 1,
      date: "January - November",
      title: "USAT",
      description: "The Undergraduate Studies Admission/Aptitude Test is the first and most crucial step in the SHS journey. It is conducted four times a year and based on USAT scores, HEC nominates candidates for SHS. For a detailed guide, visit the USAT page."
    },
    {
      id: 2,
      date: "November - January",
      title: "Apply",
      description: (
      <>
        To apply for SHS, applicants are required to submit their applications at two separate portals. These are the {" "}
        <a
          href="https://apply.stipendiumhungaricum.hu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange font-medium hover:underline"
        >
          Tempus Public Foundation portal
        </a>{" "}
        on the Hungarian side and the  {" "}
        <a
          href="http://scholarship.hec.gov.pk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange font-medium hover:underline"
        >
         HEC portal {" "}
        </a>
         on the Pakistan side. The application period typically opens in mid November and closes on 15 January. For complete details, visit the Apply page.
      </>
    )
    },
    {
      id: 3,
      date: "February - March",
      title: "Deadline",
      description: "Final deadline for application submission. No extensions granted. Critical: Submit all applications before this date."
    },
    {
      id: 4,
      date: "February",
      title: "Nomination",
      description: "HEC nomination process based on USAT scores and application quality. Wait for HEC notification and check status regularly."
    },
    {
      id: 5,
      date: "March",
      title: "Medical Certificate",
      description: "Complete health examination and obtain medical fitness certificate. Visit approved medical centers and complete all required tests."
    },
    {
      id: 6,
      date: "April-May",
      title: "Entrance Exams",
      description: "University-specific entrance tests and interviews if required. Prepare for tests and attend online/offline interviews."
    },
    {
      id: 7,
      date: "June",
      title: "Acceptance",
      description: "Receive official acceptance letter from Hungarian universities. Congratulations! Your scholarship journey begins."
    },
    {
      id: 8,
      date: "July",
      title: "Visa",
      description: "Apply for student visa at Hungarian embassy or consulate. Gather required documents and schedule embassy appointment."
    },
    {
      id: 9,
      date: "September",
      title: "In Hungary 🎉",
      description: "Arrival in Hungary and start of your academic journey! Welcome to Hungary! Your dream becomes reality."
    }
  ];

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
            <span className="text-brand-orange font-medium">Timeline</span>
          </div>
        </div>
      </div>

      <main className="pb-8">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3.5"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">
                Application Timeline
              </h1>
            </div>

            {/* Countdown - Removed box styling */}
            <div className="text-center space-y-2">
              <div className="space-y-1">
                <h2 className="font-secondary font-semibold text-lg text-foreground">
                  Time Left for Hungary Journey
                </h2>
                <p className="text-sm text-muted-foreground">
                  Flight to Hungary - Sep 01, 2026 at 12:00 PM
                </p>
              </div>
              
              <div className="grid grid-cols-4 gap-8">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-brand-orange">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs text-muted-foreground">days</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-brand-orange">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs text-muted-foreground">hours</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-brand-orange">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs text-muted-foreground">min</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-brand-orange">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs text-muted-foreground">sec</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12">
              <Timeline defaultValue={3}>
                {timelineItems.map((item) => (
                  <TimelineItem key={item.id} step={item.id}>
                    <TimelineHeader>
                      <TimelineSeparator />
                      <TimelineIndicator />
                      <div className="flex-1">
                        <TimelineTitle>{item.title}</TimelineTitle>
                        <TimelineDate>{item.date}</TimelineDate>
                      </div>
                    </TimelineHeader>
                    <TimelineContent>{item.description}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TimelinePage;
