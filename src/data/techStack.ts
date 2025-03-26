import { SiTypescript, SiTailwindcss, SiVim, SiDocker, SiPostman } from 'react-icons/si';
import { FaReact, FaBootstrap, FaLinux, FaLaravel, FaAngular, FaNodeJs } from 'react-icons/fa';
import { MdHtml, MdCss } from 'react-icons/md';
import { FaNode, FaSass, FaGitAlt, FaPhp, FaPython } from 'react-icons/fa6';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import {
  SiStyledcomponents,
  SiNextdotjs,
  SiInsomnia,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si';

export const techStack = [
  { icon: FaReact, color: 'text-blue-500', name: 'React' },
  { icon: SiNextdotjs, color: 'text-slate-600', name: 'Next.js' },
  { icon: SiTypescript, color: 'text-blue-500', name: 'TypeScript' },
  { icon: SiTailwindcss, color: 'text-cyan-400', name: 'TailWind CSS' },
  { icon: MdHtml, color: 'text-orange-400', name: 'HTML' },
  { icon: MdCss, color: 'text-blue-400', name: 'CSS' },
  { icon: FaBootstrap, color: 'text-purple-400', name: 'Bootstrap' },

  { icon: FaAngular, color: 'text-red-600', name: 'Angular' },
  { icon: FaNodeJs, color: 'text-blue-600', name: 'Node' },

  { icon: SiPostgresql, color: 'text-blue-700', name: 'PostgreSQL' },
  { icon: SiMysql, color: 'text-blue-600', name: 'MySQL' },
  { icon: AiOutlineConsoleSql, color: 'text-orange-400', name: 'SQL' },

  { icon: FaGitAlt, color: 'text-orange-500', name: 'Git' },
  { icon: SiDocker, color: 'text-cyan-600', name: 'Docker' },

  { icon: SiPostman, color: 'text-purple-500', name: 'Postman' },
  { icon: FaLinux, color: 'text-gray-700', name: 'Linux' },

  { icon: FaPython, color: 'text-pink-400', name: 'Python' },
];
