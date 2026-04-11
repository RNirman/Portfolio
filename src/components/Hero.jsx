import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-primary/20 rounded-full blur-[90px] -z-10"></div>

      {/* Starry layer simulation */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+Cjwvc3ZnPg==')] -z-20 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            Available for Internships
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-glow to-accent-secondary animate-gradient">
              Ravindu Nirman
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-6 max-w-lg leading-relaxed">
            A Computer Science Undergraduate with a focus on Software Engineering.
          </h2>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 group">
              Resume
              <FiDownload className="group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-5 text-gray-400">
            <a href="https://github.com/RNirman" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ravindu-nirman-6635731b4" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] hover:-translate-y-1 transition-all">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:ravindunirman3@gmail.com" className="hover:text-accent-primary hover:-translate-y-1 transition-all">
              <FiMail size={24} />
            </a>
          </div>
        </div>

        {/* Right Image/Visual */}
        <div className="relative animate-float hidden md:block">
          <div className="glass-card aspect-square rounded-full flex items-center justify-center p-8 relative z-10 w-4/5 mx-auto 
before:content-[''] 
before:absolute 
before:inset-0 
before:rounded-full 
before:border-2 
before:border-transparent 
before:bg-gradient-to-tr 
before:from-violet-600/50 
before:via-slate-950/20 
before:to-transparent 
before:[-webkit-mask-image:linear-gradient(white,white)] 
before:[-webkit-mask-composite:xor] 
before:[mask-image:linear-gradient(white,white)] 
before:[mask-composite:exclude]">
            {/* Placeholder for image */}
            <div className="w-full h-full rounded-full bg-space-700/50 flex items-center justify-center border border-white/5 overflow-hidden">
              <img src={profileImg} alt="Ravindu Nirman" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Floating tech stack icons decoration */}
          <div className="absolute top-10 right-10 w-12 h-12 glass-card rounded-xl flex items-center justify-center rotate-12 delay-100">
            <span className="text-accent-primary font-bold text-xl">{'</>'}</span>
          </div>
          <div className="absolute bottom-10 left-10 w-14 h-14 glass-card rounded-xl flex items-center justify-center -rotate-6 delay-300">
            <span className="text-accent-secondary font-bold text-xl">{'{ }'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
