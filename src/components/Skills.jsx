import { FiTerminal, FiLayout, FiDatabase, FiPenTool } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FiTerminal size={24} />,
      skills: [
        { name: 'Java' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'PHP' },
      ]
    },
    {
      title: 'Frontend & Design',
      icon: <FiLayout size={24} />,
      skills: [
        { name: 'React.js' },
        { name: 'Next.js' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Tailwind CSS' },
      ]
    },
    {
      title: 'Backend & Tools',
      icon: <FiDatabase size={24} />,
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'Spring Boot' },
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Postman' },
        { name: 'Docker' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-space-800/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent-secondary tracking-widest uppercase mb-2">My Toolbox</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold">Skills & Technologies</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 group">
              <h4 className="text-xl text-white font-bold mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="flex items-center gap-3">
                  <span className="text-accent-primary">{category.icon}</span>
                  {category.title}
                </span>
                <span className="w-8 h-1 bg-gradient-to-r from-accent-primary to-transparent rounded-full group-hover:w-16 transition-all duration-300"></span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-space-700/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary"></div>
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
