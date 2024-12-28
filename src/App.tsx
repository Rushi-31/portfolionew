import React from 'react';
import { Terminal, Award, Briefcase, GraduationCap, Code, Database, Wrench } from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen cyber-container text-white font-mono matrix-bg">
      <div className="cyber-grid fixed inset-0 pointer-events-none" />
      
      <div className="relative">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <HeroSection />

          <Section title="Experience" icon={<Briefcase className="text-white" />}>
            <ExperienceCard
              title="Application Developer Intern"
              company="Agumentik Group of Companies"
              period="June 2024 – Dec 2024"
              location="Bengaluru, India (Remote)"
              responsibilities={[
                'Collaborated with cross-functional teams to design and develop mobile and web applications using React Native, Flutter, and Dart',
                'Developed backend services and APIs with Node.js to support application functionality',
                'Utilized Figma for wireframing and prototyping, ensuring seamless user experience'
              ]}
              achievements={[
                'Successfully delivered applications, meeting project deadlines and client expectations',
                'Awarded "Intern of the Month" for two consecutive months (August and September)'
              ]}
            />
          </Section>

          <Section title="Projects" icon={<Code className="text-white" />}>
            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="Prakriti: Disease Predictor"
                description="A Kotlin-based application that predicts diseases based on symptoms using ML"
                tech={["Kotlin", "Jetpack Compose", "Flask", "ML"]}
                points={[
                  "98% prediction accuracy using decision tree classifier",
                  "Web scraping from NHP India for symptom data",
                  "User-friendly symptom input interface"
                ]}
              />
              <ProjectCard
                title="SewaQueue"
                description="Queue Management App for service-based businesses"
                tech={["Kotlin", "Python Flask", "WebSockets"]}
                points={[
                  "Real-time crowd level monitoring",
                  "Seamless appointment booking system",
                  "Google Maps API integration"
                ]}
              />
            </div>
          </Section>

          <Section title="Technical Skills" icon={<Wrench className="text-white" />}>
            <div className="grid md:grid-cols-3 gap-6">
              <SkillCard
                title="Languages"
                skills={["Python", "Kotlin", "Java", "SQL"]}
              />
              <SkillCard
                title="Technologies"
                skills={["MySQL", "Scikit-learn", "Jetpack Compose", "Rest APIs", "Data Science"]}
              />
              <SkillCard
                title="Tools"
                skills={["VS Code", "Git", "Android Studio", "Firebase", "Power BI"]}
              />
            </div>
          </Section>

          <Section title="Education" icon={<GraduationCap className="text-white" />}>
            <div className="cyber-card p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white neon-text">BTech. in Artificial Intelligence</h3>
              <p className="text-white">G H Raisoni College of Engineering and Management, Pune</p>
              <p className="text-white">Dec 2021 – June 2025 (Pursuing)</p>
              <p className="text-white mt-2">CGPA: 8.41</p>
            </div>
          </Section>

          <Section title="Leadership" icon={<Award className="text-white" />}>
            <div className="cyber-card p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white neon-text">Technical Team Lead</h3>
              <p className="text-white">Eureka Innovation and Incubation Club</p>
              <p className="text-white">Oct 2023 – Present</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-white">
                <li>Ranked in the top 100 in the ISRO Space India Hackathon</li>
                <li>Attained top 10 position in the AIT Innerve 8 Hackathon</li>
                <li>Achieved the highest score in the internal hackathon round of SIH 2023</li>
              </ul>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}

export default App;
