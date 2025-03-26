import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '@/context/ThemeContext';

export function AboutMe() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-5 max-w-7xl mx-auto text-white pt-24 font-poppins"
      data-aos="fade-up"
    >
      <h1
        className={`font-bold text-3xl md:text-5xl ${
          theme === 'dark' ? 'text-green-600' : 'text-slate-950'
        }`}
      >
        Sobre mim
      </h1>

      <div
        className={`max-w-5xl p-3 text-center text-sm sm:text-lg space-y-3 ${
          theme === 'dark' ? 'text-gray-opacity' : 'text-slate-700'
        }`}
      >
        <p data-testid="text-about-me">
        💻 Desenvolvedor de Software com experiência em JavaScript, Java e C#, 
        especializado em criar soluções eficientes e escaláveis. Possuo habilidades sólidas em SQL, 
        React, Angular e .NET, com foco na construção de interfaces intuitivas e responsivas, sempre 
        priorizando a performance e a experiência do usuário.
        <br/>
        <br/>
        🚀 Apaixonado por tecnologia e inovação, estou sempre buscando 
        aprimorar meus conhecimentos e acompanhar as melhores práticas do 
        mercado. Além das habilidades técnicas, destaco minha boa comunicação e trabalho em 
        equipe, características essenciais para um ambiente colaborativo e produtivo.

        </p>
        <p>
        No meu tempo livre eu gosto de jogar jogos multiplayer, ler mangás, assistir animes e malhar

        </p>
      </div>
    </section>
  );
}
