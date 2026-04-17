import { FiTerminal, FiLayout, FiDatabase } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FiTerminal size={24} />,
      skills: ['Java', 'JavaScript', 'Python', 'PHP'],
    },
    {
      title: 'Frontend & Design',
      icon: <FiLayout size={24} />,
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend & Tools',
      icon: <FiDatabase size={24} />,
      skills: ['Node.js', 'Express', 'Spring Boot', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Postman', 'Docker'],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-space-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-bold text-accent-secondary tracking-widest uppercase mb-2">
            My Toolbox
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold">Skills & Technologies</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 sm:p-8 group ${
                idx === skillCategories.length - 1 && skillCategories.length % 2 !== 0
                  ? 'sm:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              <h4 className="text-xl text-white font-bold mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="flex items-center gap-3">
                  <span className="text-accent-primary">{category.icon}</span>
                  {category.title}
                </span>
                <span className="w-8 h-1 bg-gradient-to-r from-accent-primary to-transparent rounded-full group-hover:w-16 transition-all duration-300"></span>
              </h4>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-700/50 hover:bg-space-700 transition-colors text-sm font-medium text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary shrink-0"></span>
                    {skill}
                  </span>
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