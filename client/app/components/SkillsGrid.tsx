'use client';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', category: 'Frontend', level: 'Expert', color: 'blue' },
    { name: 'Next.js', category: 'Frontend', level: 'Expert', color: 'gray' },
    { name: 'Java', category: 'Backend', level: 'Expert', color: 'red' },
    { name: 'Spring Boot', category: 'Backend', level: 'Expert', color: 'green' },
    { name: 'PostgreSQL', category: 'Database', level: 'Advanced', color: 'blue' },
    { name: 'Docker', category: 'DevOps', level: 'Advanced', color: 'blue' },
    { name: 'Supabase', category: 'Fullstack', level: 'Intermediate', color: 'emerald' },
    { name: 'Tailwind', category: 'Design', level: 'Expert', color: 'cyan' },
    { name: 'Git', category: 'Outils', level: 'Expert', color: 'orange' },
    { name: 'CI/CD', category: 'DevOps', level: 'Intermediate', color: 'purple' },
];

const SkillsGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    data-cursor={skill.level}
                    className="group relative p-6 bg-[#fcfcfc] border border-black/5 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-black/10 cursor-none overflow-hidden"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <span className="font-archivo text-lg font-black text-black group-hover:scale-110 transition-transform duration-300">
                        {skill.name}
                    </span>
                    <span className="font-spacemono text-[9px] uppercase tracking-widest text-black/40">
                        {skill.category}
                    </span>

                    {/* Subtle bottom line glow */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black/5 group-hover:bg-black/20 transition-colors" />
                </motion.div>
            ))}
        </div>
    );
};

export default SkillsGrid;
