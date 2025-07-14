import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Mail, Phone, MapPin, Calendar, Award, Code, Database, Brain, Cloud, Zap, Book, Trophy, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/mockData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <motion.div 
            className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p 
            className="text-white text-xl font-light"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Portfolio...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-lg z-50 border-b border-teal-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="font-bold text-2xl bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              HV
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Publications', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 hover:bg-teal-600/20 ${
                    activeSection === item.toLowerCase() ? 'bg-teal-600/30 text-teal-300' : 'text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ y: y1 }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              x: [0, -100, 0],
              y: [0, 50, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ y: y2 }}
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div 
            className="mb-8 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="w-48 h-48 mx-auto rounded-full border-4 border-teal-500 p-2 bg-gradient-to-r from-teal-600 to-cyan-600 shadow-2xl shadow-teal-500/50"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">HV</span>
                </div>
              )}
            </motion.div>
            <motion.label 
              className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full cursor-pointer transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              Upload Photo
            </motion.label>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {portfolioData.personalInfo.name}
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-8 text-teal-300 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {portfolioData.personalInfo.title}
          </motion.p>
          
          <motion.p 
            className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {portfolioData.personalInfo.summary}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { href: `mailto:${portfolioData.personalInfo.email}`, icon: Mail, text: portfolioData.personalInfo.email },
              { href: portfolioData.personalInfo.github, icon: Github, text: "GitHub" },
              { href: `tel:${portfolioData.personalInfo.phone}`, icon: Phone, text: portfolioData.personalInfo.phone }
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.href}
                className="flex items-center gap-2 bg-teal-600/20 hover:bg-teal-600/40 px-6 py-3 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Code className="w-8 h-8" />}
              title="Programming & Tools"
              skills={portfolioData.skills.programming}
              color="purple"
              index={0}
            />
            <SkillCard 
              icon={<Database className="w-8 h-8" />}
              title="Data Science"
              skills={portfolioData.skills.dataScience}
              color="pink"
              index={1}
            />
            <SkillCard 
              icon={<Cloud className="w-8 h-8" />}
              title="DevOps & Cloud"
              skills={portfolioData.skills.devops}
              color="blue"
              index={2}
            />
            <SkillCard 
              icon={<Brain className="w-8 h-8" />}
              title="GenAI & LLMs"
              skills={portfolioData.skills.genAI}
              color="green"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {portfolioData.workExperience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Publications
          </h2>
          
          <div className="space-y-8">
            {portfolioData.publications.map((pub, index) => (
              <PublicationCard key={index} publication={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <h3 className="text-xl font-bold text-purple-300 mb-2">{edu.institution}</h3>
                    <p className="text-lg text-white mb-2">{edu.degree}</p>
                    <p className="text-purple-400 mb-2">{edu.cgpa || edu.percentage}</p>
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Certifications
              </h2>
              <div className="space-y-4">
                {portfolioData.certifications.map((cert, index) => (
                  <div key={index} className="bg-purple-900/20 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-purple-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">{cert.name}</h3>
                        <p className="text-purple-400">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 {portfolioData.personalInfo.name}. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href={portfolioData.personalInfo.github} className="text-purple-400 hover:text-purple-300 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SkillCard = ({ icon, title, skills, color, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colorClasses = {
    purple: 'from-purple-600 to-purple-800',
    pink: 'from-pink-600 to-pink-800',
    blue: 'from-blue-600 to-blue-800',
    green: 'from-green-600 to-green-800'
  };

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-gradient-to-br ${colorClasses[color]} p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300`}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.slice(0, 6).map((skill, skillIndex) => (
          <motion.div 
            key={skillIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
            className="bg-white/10 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </motion.div>
        ))}
        {skills.length > 6 && (
          <motion.div 
            className="text-sm text-gray-300"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: (index * 0.1) + 0.4 }}
          >
            +{skills.length - 6} more
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-purple-900/20 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <motion.h3 
            className="text-2xl font-bold text-purple-300 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
          >
            {experience.position}
          </motion.h3>
          <motion.p 
            className="text-xl text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: (index * 0.1) + 0.3 }}
          >
            {experience.company}
          </motion.p>
        </div>
        <div className="text-right">
          <motion.div 
            className="flex items-center gap-1 text-gray-400 mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: (index * 0.1) + 0.4 }}
          >
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-1 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: (index * 0.1) + 0.5 }}
          >
            <Calendar className="w-4 h-4" />
            <span>{experience.duration}</span>
          </motion.div>
        </div>
      </div>
      <div className="space-y-3">
        {experience.responsibilities.map((resp, respIndex) => (
          <motion.div 
            key={respIndex}
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: (index * 0.1) + (respIndex * 0.1) + 0.3 }}
          >
            <Zap className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300">{resp}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-bold text-purple-300">{project.title}</h3>
      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer" />
    </div>
    <p className="text-gray-400 mb-3 text-sm">{project.duration}</p>
    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, index) => (
        <span key={index} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const PublicationCard = ({ publication }) => (
  <div className="bg-purple-900/20 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
    <div className="flex items-start gap-4">
      <Book className="w-6 h-6 text-purple-400 mt-1" />
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-purple-300 mb-2">{publication.title}</h3>
        <p className="text-lg text-white mb-2">{publication.conference}</p>
        <p className="text-purple-400 mb-3">{publication.date}</p>
        <p className="text-gray-300 leading-relaxed">{publication.description}</p>
      </div>
    </div>
  </div>
);

export default Portfolio;