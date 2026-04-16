import { FiExternalLink, FiGithub } from 'react-icons/fi';
import woodwiseImg from '../assets/woodwise.png';
import rentitImg from '../assets/rentit.png';
import moviesphereImg from '../assets/moviesphere.png';
import flixfinderImg from '../assets/flixfinder.png';
import snapvaultImg from '../assets/snapvault.png';
import auracastImg from '../assets/auracast.png';

const Projects = () => {
  const projects = [
    {
      title: 'WoodWise - Furniture Store Management',
      description: 'Designed a MERN stack furniture management system with inventory control, sales analytics, and an integrated AI-based 3D furniture visualization tool.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Supabase', 'Dall-E 3'],
      github: 'https://github.com/kalinduhimasara07/WoodWise-BackEnd.git',
      demo: 'https://wood-wise-xi.vercel.app/',
      image: woodwiseImg
    },
    {
      title: 'RentIt - Renting Platform',
      description: 'A responsive PHP and MySQL web application enabling secure peer-to-peer item renting. Features detailed user dashboards and dynamic transaction tracking.',
      tags: ['React', 'PHP', 'MySQL'],
      github: 'https://github.com/Thinuj01/RenItNew.git',
      demo: '#',
      image: rentitImg
    },
    {
      title: 'MovieSphere - Movie Discovery',
      description: 'A full-stack Spring Boot and React movie discovery platform. Integrates the TMDB API with real-time data, JWT authentication, and administrative CRUD operations.',
      tags: ['React', 'Spring Boot', 'MySQL', 'TMDB API'],
      github: 'https://github.com/RNirman/MovieSphere-backend.git',
      demo: '#',
      image: moviesphereImg
    },
    {
      title: 'FlixFinder - Movie Discovery App',
      description: 'An Android application fetching real-time movie data via the TMDB API. Enables users to browse the latest releases, explore posters, and watch official trailers.',
      tags: ['Android', 'Kotlin', 'TMDB API'],
      github: 'https://github.com/Lahirulakshan129/Flix-finder.git',
      demo: '#',
      image: flixfinderImg
    },
    {
      title: 'SnapVault - Photo Sharing',
      description: 'A full-stack photo-sharing application built with FastAPI and React. Includes a rich community gallery, detailed insights, and real-time social interactions.',
      tags: ['React', 'FastAPI', 'MongoDB'],
      github: 'https://github.com/RNirman/SnapVault-frontend.git',
      demo: '#',
      image: snapvaultImg
    },
    {
      title: 'AuraCast - Weather Dashboard',
      description: 'A responsive weather dashboard built with Next.js and React Server Components. Securely fetches current conditions and 5-day forecasts via the OpenWeatherMap API.',
      tags: ['React', 'Next.js', 'OpenWeatherMap API'],
      github: 'https://github.com/RNirman/AuraCast.git',
      demo: '#',
      image: auracastImg
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-glow/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent-primary tracking-widest uppercase mb-2">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold">Featured Projects</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card flex flex-col h-full overflow-hidden group">
              {/* Image Container */}
              <div className="h-56 sm:h-48 bg-space-700 w-full relative overflow-hidden border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-accent-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-space-900 border border-white/10 rounded text-xs text-accent-primary font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <FiGithub /> Code
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-primary transition-colors ml-auto">
                      Live Demo <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
