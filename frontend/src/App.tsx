import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGithub, FaLinkedin, FaGitAlt,
  FaWhatsapp, FaArrowUp, FaInstagram, FaBars, FaTimes
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiMysql, SiPostgresql
} from "react-icons/si";

import ImageProjectCafeteria from "./components/imgs/Foto-Site-Cafeteria.png";
import ImageProjectSiteIphone from "./components/imgs/Clone_IPhone_13.png";
import ImageProjectToDoList from "./components/imgs/ToDo_List.png";
import ImageProjectLandingPageFilmaker from "./components/imgs/LandingPageFilmaker.png";
import ImagePerfil from "./components/imgs/foto-perfil.jpg";
import Cv from "./components/cv/Currículo - Dev Rafael Silva.pdf";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollToSectionId, setScrollToSectionId] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavLinkClick = (sectionId: string) => {
    if (!isMenuOpen) {
      // Se o menu não está aberto (desktop), faz scroll imediatamente
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setScrollToSectionId(null);
    } else {
      // Se está no mobile, fecha o menu e scrolla no onMenuExitComplete
      setScrollToSectionId(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Função chamada após o menu mobile sumir
  const onMenuExitComplete = () => {
    if (scrollToSectionId) {
      setTimeout(() => {
        const element = document.getElementById(scrollToSectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (scrollToSectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setScrollToSectionId(null);
      }, 50); // Pequeno delay para garantir que o DOM atualizou
    }
  };

  const projects = [
    {
      id: 1,
      title: "Cafeteria Online",
      image: ImageProjectCafeteria,
      description: "Plataforma de pedidos online para uma cafeteria fictícia.",
      techs: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      demoUrl: "https://rafaeldevelloper.github.io/cafeteria-para-devs/",
      codeUrl: "https://github.com/rafaeldevelloper/cafeteria-para-devs",
    },
    {
      id: 2,
      title: "Clone iPhone 13",
      image: ImageProjectSiteIphone,
      description: "Clone do site do iPhone 13 da Apple com animações modernas.",
      techs: ["React", "Framer Motion", "Tailwind"],
      demoUrl: "https://landing-page-iphone13-dd0u2rqtf.vercel.app/",
      codeUrl: "https://github.com/rafaeldevelloper/landing-page-iphone13",
    },
    {
      id: 3,
      title: "ToDo List",
      image: ImageProjectToDoList,
      description: "App de lista de tarefas com autenticação e persistência local.",
      techs: ["React", "LocalStorage", "Tailwind"],
      demoUrl: "https://rafaeldevelloper.github.io/ToDo-List-com-JavaScript/",
      codeUrl: "https://github.com/rafaeldevelloper/ToDo-List-com-JavaScript",
    },
    {
      id: 4,
      title: "Landing Page para Filmakers",
      image: ImageProjectLandingPageFilmaker,
      description: "Landing Page para filmmakers e social mídia.",
      techs: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://rafaeldevelloper.github.io/landing-page-social-midia/",
      codeUrl: "https://github.com/rafaeldevelloper/landing-page-social-midia",
    },
  ];

  const stacks = [
    "React", "Node.js", "Tailwind CSS", "TypeScript",
    "MySQL Workbench", "PostgreSQL", "Git", "GitHub"
  ];

  const stackIcons = {
    React: <FaReact className="text-cyan-500 text-4xl mx-auto" />,
    "Node.js": <FaNodeJs className="text-green-600 text-4xl mx-auto" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-4xl mx-auto" />,
    TypeScript: <SiTypescript className="text-blue-600 text-4xl mx-auto" />,
    "MySQL Workbench": <SiMysql className="text-orange-500 text-4xl mx-auto" />,
    PostgreSQL: <SiPostgresql className="text-blue-700 text-4xl mx-auto" />,
    Git: <FaGitAlt className="text-red-500 text-4xl mx-auto" />,
    GitHub: <FaGithub className="text-gray-800 text-4xl mx-auto" />,
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen scroll-smooth">
      <header className="shadow-sm border-gray-200 sticky top-0 bg-black z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center">
          <span className="text-lg sm:text-xl font-bold">
            Rafael Silva | <span className="text-blue-500" id="logo">Dev FullStack Web</span>
          </span>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl focus:outline-none cursor-pointer transition-transform duration-300 text-white"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <FaBars />
            </button>
          </div>

          <div className="hidden md:flex space-x-6 mt-4 md:mt-0">
            <a href="#about" className="hover:text-blue-500 transition" onClick={e => { e.preventDefault(); handleNavLinkClick("about"); }}>Sobre</a>
            <a href="#projects" className="hover:text-blue-500 transition" onClick={e => { e.preventDefault(); handleNavLinkClick("projects"); }}>Projetos</a>
            <a href="#skills" className="hover:text-blue-500 transition" onClick={e => { e.preventDefault(); handleNavLinkClick("skills"); }}>Habilidades</a>
            <a href="#contact" className="hover:text-blue-500 transition" onClick={e => { e.preventDefault(); handleNavLinkClick("contact"); }}>Contato</a>
          </div>
        </nav>

        <AnimatePresence
          onExitComplete={() => {
            if (scrollToSectionId) {
              const element = document.getElementById(scrollToSectionId);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              } else if (scrollToSectionId === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setScrollToSectionId(null);
            }
          }}
        >
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-2/3 h-full bg-black text-white z-50 shadow-lg p-6 md:hidden flex flex-col space-y-6"
            >
              <button
                onClick={toggleMenu}
                className="cursor-pointer absolute top-4 right-4 text-3xl focus:outline-none text-white"
                aria-label="Fechar menu"
              >
                <FaTimes />
              </button>

              {["Home", "Sobre", "Projetos", "Habilidades", "Contato"].map((section, idx) => {
                const sectionMap: Record<string, string> = {
                  home: "home",
                  sobre: "about",
                  projetos: "projects",
                  habilidades: "skills",
                  contato: "contact",
                };

                const sectionId = sectionMap[section.toLowerCase()] ?? section.toLowerCase();
                return (
                  <a
                    key={idx}
                    href={`#${sectionId}`}
                    className="text-lg hover:text-blue-500 transition"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(sectionId);
                    }}
                  >
                    {section}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <motion.section id="about" className="py-16 px-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img src={ImagePerfil} alt="Perfil" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-blue-600" loading="lazy" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Olá, meu nome é Rafael Silva</h2>
            <p className="mb-4 max-w-xl">Sou um desenvolvedor apaixonado por tecnologia, especializado em ReactJs, TypeScript, NodeJs e soluções modernas. Foco em Metodologias Ágeis (Scrum e Kanbam)</p>
            <a href={Cv} download className="inline-block bg-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-500 transition">Baixar CV</a>
          </div>
        </div>
      </motion.section>

      <motion.section id="skills" className="py-16 px-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-center mb-10">Minhas Habilidades/Stacks:</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {stacks.map((stack) => (
            <div key={stack} className="cursor-pointer bg-gray rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              {stackIcons[stack] ?? <span className="text-4xl text-red-500">?</span>}
              <p className="font-semibold text-white mt-4">{stack}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" className="py-16 px-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-center mb-10">Meus Projetos:</h2>
        <div className="grid gap-10 max-w-6xl mx-auto md:grid-cols-3">
          {projects.map(({ id, title, image, description, techs, demoUrl, codeUrl }) => (
            <div key={id} className="bg-gray-900 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
              <img src={image} alt={title} className="rounded-lg mb-4 w-full h-40 object-cover" loading="lazy" />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="mb-3 flex-grow">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {techs.map((tech, index) => (
                  <span key={index} className="text-blue-100 bg-blue-800 text-sm px-2 py-1 rounded-md">{tech}</span>
                ))}
              </div>
              <div className="mt-auto flex justify-between">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visitar site</a>
                <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ver código</a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <footer className="bg-gray-950 text-white py-12 px-6 border-t border-gray-800" id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Vamos nos conectar!</h3>
            <p className="text-gray-400 mb-4">Estou sempre aberto a novas oportunidades ou freelas.</p>
            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <a
                href="https://github.com/rafaeldevelloper"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6e5494]"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/dev-rafaelsilva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0A66C2]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/dev.rsilva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E1306C]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition">Sobre Mim</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition">Stacks</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projetos</a></li>
              <li><a href={Cv} download className="hover:text-blue-400 transition">Baixar Currículo</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Rafael Silva. Todos os direitos reservados.
        </div>
      </footer>

      <a href="https://wa.me/+5514996172842" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition" aria-label="Whatsapp">
        <FaWhatsapp className="text-xl" />
      </a>

      {showScrollTop && (
        <button onClick={scrollToTop} className="cursor-pointer fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition" aria-label="Scroll to top">
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
}

export default App;