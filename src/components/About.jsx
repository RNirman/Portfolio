import { FiCode, FiCpu, FiGlobe } from 'react-icons/fi';

const About = () => {
  const cards = [
    {
      icon: <FiCode size={24} className="text-accent-primary" />,
      title: 'Problem Solver',
      desc: 'Passionate about algorithms and writing optimal code.'
    },
    {
      icon: <FiCpu size={24} className="text-accent-secondary" />,
      title: 'Tech Enthusiast',
      desc: 'Constantly exploring new frameworks and technologies.'
    },
    {
      icon: <FiGlobe size={24} className="text-accent-glow" />,
      title: 'Web Developer',
      desc: 'Building responsive and accessible web applications.'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent-primary tracking-widest uppercase mb-2">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold">Who I Am</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              I am a <strong>Computer Science</strong> undergraduate with a deep 
              passion for solving complex problems through elegant code. I specialize in the 
              full-stack development lifecycle, from designing robust database schemas to deploying 
              intuitive user interfaces. My core strength lies in quickly adapting to new technologies 
              and transforming theoretical concepts into functional, scalable applications.
            </p>
            <p>
              I specialize in building beautifully designed, highly functional web applications.
              Currently, I'm focused on deepening my knowledge of full-stack development.
            </p>

            <div className="pt-4">
              <div className="glass-card p-6 border-l-4 border-l-accent-primary">
                <h4 className="text-white font-bold text-lg mb-1">BSc. (Hons) in Computer Science and Technology</h4>
                <p className="text-sm text-accent-primary mb-2">Uva Wellassa University • 2022 - Present</p>
                <p className="text-sm">Relevant coursework: Object-Oriented Programming, Web Development, Database Systems.</p>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <div key={idx} className={`glass-card p-6 ${idx === 2 ? 'sm:col-span-2' : ''} hover:-translate-y-1 transition-transform`}>
                <div className="w-12 h-12 rounded-lg bg-space-900 border border-white/5 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{card.title}</h4>
                <p className="text-sm text-gray-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
