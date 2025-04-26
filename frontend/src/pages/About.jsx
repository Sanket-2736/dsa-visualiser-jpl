import { motion } from 'framer-motion';
import { 
  Code2, Code, FileText, FileCode2, 
  Github, Cpu, Terminal, 
  Brackets, Database, Wrench, Layers 
} from 'lucide-react';

const team = [
  {
    name: "Sanket Belekar",
    role: "Lead Developer",
    icon: Code2,
    bio: "Architects the core system and oversees technical implementation using modern web technologies.",
  },
  {
    name: "Hrishikesh Gavai",
    role: "Support Developer",
    icon: Code,
    bio: "Implements features, fixes bugs, and ensures code quality across the codebase.",
  },
  {
    name: "Atharva Ghayal",
    role: "Technical Writer",
    icon: FileText,
    bio: "Creates comprehensive documentation and tutorials for the project's features.",
  },
  {
    name: "Yash Gatkal",
    role: "Documentation Engineer",
    icon: FileCode2,
    bio: "Maintains API references and ensures all code is properly documented.",
  },
];

const techStack = [
  { name: "Spring Boot", icon: Brackets },
  { name: "Tailwind CSS", icon: Layers },
  { name: "React", icon: Cpu },
  { name: "Lucide React", icon: Wrench }, // changed from Settings to Wrench
  { name: "Framer Motion", icon: Terminal },
  { name: "MongoDB", icon: Database },
  { name: "GitHub", icon: Github },
];

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-100 to-indigo-100 text-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* Project Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Our Project</h2>
          <p className="text-indigo-800 text-lg max-w-3xl mx-auto leading-relaxed">
            This project is built to make learning Data Structures fun and interactive. 
            From visualizing linked lists to understanding stacks, queues, and maps — 
            we combine code, design, and animation to create an engaging experience for learners of all levels.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl font-semibold mb-2">Meet the Team</h3>
          <p className="text-indigo-700">The minds behind the code and documentation</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-[1px] rounded-xl bg-gradient-to-br from-indigo-300/30 to-blue-300/30 overflow-hidden">
                  <div className="h-full bg-white/70 rounded-xl backdrop-blur-sm p-6 border border-indigo-300/50 group-hover:border-indigo-400/80 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-indigo-200 border-2 border-indigo-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-300 transition-colors">
                      <Icon className="w-8 h-8 text-indigo-700" />
                    </div>
                    <h4 className="text-xl font-semibold text-center">{member.name}</h4>
                    <p className="text-indigo-800 text-sm text-center mb-2">{member.role}</p>
                    <p className="text-indigo-700 text-sm text-center">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-900">Our Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map(({ name, icon: Icon }, index) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-[1px] rounded-xl bg-gradient-to-br from-indigo-300/40 to-blue-200/40 shadow-md"
              >
                <div className="flex flex-col items-center justify-center h-full bg-white/60 backdrop-blur-md p-4 rounded-xl border border-indigo-300 hover:shadow-xl transition-all duration-300">
                  <div className="mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 border-2 border-indigo-300">
                    <Icon className="w-6 h-6 text-indigo-800" />
                  </div>
                  <span className="text-sm font-medium text-indigo-900">{name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;