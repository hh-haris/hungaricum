
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbList, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';

const Seniors = () => {
  const seniors = [
    {
      name: 'Muneeb',
      subject: 'Computer Science',
      batch: '2025',
      university: 'ELTE University',
      city: 'Budapest',
      usatMarks: 81,
      fscMarks: '92%',
      bio: 'Muneeb is from Lahore, Punjab. He is studying at ELTE University in Budapest. He is in the admin of group and will guide you guys. He is available in the on chat to you guys you can tag him in group freely and ask him any question you have.',
    },
    {
      name: 'Huzaifa',
      subject: 'Computer Science',
      batch: '2025',
      university: 'ELTE University',
      city: 'Budapest',
      usatMarks: 81,
      fscMarks: '92%',
      bio: 'Huzaifa is from Lahore, Punjab. He is studying at ELTE University in Budapest. He will guide you guys after the nomination till your arrival in Hungary. Any of you guys after nomination will added to the group where Huzaifa will guide to guys at every step in every matter.',
    },
    {
      name: 'Haseeb',
      subject: 'Computer Science',
      batch: '2025',
      university: 'ELTE University',
      city: 'Budapest',
      usatMarks: 81,
      fscMarks: '92%',
      bio: 'Haseeb is from Lahore, Punjab. He is studying at ELTE University in Budapest. He will guide you guys at any stage, feel free to tag him in group for any question you have.',
    },
    {
      name: 'Abdullah',
      subject: 'Computer Science',
      batch: 'In Pakistan Now',
      university: 'ELTE University',
      city: 'Budapest',
      usatMarks: 81,
      fscMarks: '92%',
      bio: 'Abdullah is from Lahore, Punjab. He is one of most best guider you have ever had in case of USAT.',
    },
    {
      name: 'Ahmed',
      subject: 'Engineering',
      batch: '2024',
      university: 'BME University',
      city: 'Budapest',
      usatMarks: 85,
      fscMarks: '89%',
      bio: 'Ahmed is from Karachi, Sindh. He is studying Mechanical Engineering at BME University in Budapest. He is always ready to help newcomers with technical subjects and university procedures.',
    },
    {
      name: 'Fatima',
      subject: 'Medicine',
      batch: '2023',
      university: 'University of Debrecen',
      city: 'Debrecen',
      usatMarks: 88,
      fscMarks: '94%',
      bio: 'Fatima is from Islamabad. She is studying Medicine at University of Debrecen. She can guide you through the medical admission process and life in Debrecen.',
    },
    {
      name: 'Ali',
      subject: 'Business Administration',
      batch: '2024',
      university: 'University of Pécs',
      city: 'Pécs',
      usatMarks: 79,
      fscMarks: '87%',
      bio: 'Ali is from Lahore, Punjab. He is studying Business Administration at University of Pécs. He can help with business program applications and living in smaller Hungarian cities.',
    }
  ];

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
                  <BreadcrumbPage>Seniors</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-secondary text-3xl font-bold text-brand-orange mb-8"
          >
            Seniors
          </motion.h1>

          {/* Seniors List */}
          <div className="space-y-6">
            {seniors.map((senior, index) => (
              <motion.div
                key={senior.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1472099645785-5658abf4ff4e' : '1507003211169-0a1dd7228f2d'}?w=64&h=64&fit=crop&crop=face`} 
                      alt={senior.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-secondary text-xl font-bold text-brand-blue mb-1">
                    {senior.name}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-1">{senior.subject}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-brand-light-green text-xs px-2 py-1 rounded">
                      {senior.university}
                    </span>
                    <span className="bg-brand-light-green text-xs px-2 py-1 rounded">
                      Living in {senior.city}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-3">
                    <span className="bg-brand-orange text-white text-xs px-2 py-1 rounded">
                      USAT Marks: {senior.usatMarks}
                    </span>
                    <span className="bg-brand-orange text-white text-xs px-2 py-1 rounded">
                      Fsc Marks: {senior.fscMarks}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {senior.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Seniors;
