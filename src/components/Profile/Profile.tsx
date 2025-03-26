import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export function Profile() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <>
      <main
        className="flex flex-col items-center justify-around gap-5 font-poppins p-5 max-w-7xl mx-auto md:flex-row md:gap-0"
        data-aos="zoom-in"
      >
        <section className="flex flex-col items-center md:items-start">
          <div className="relative p-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
            <Image
              className="rounded-full w-56 md:w-72 lg:w-96 transform transition-transform duration-500 hover:scale-110 hover:rotate-2"
              src="/Avatar.jpg"
              alt="José Robério"
              width={1000}
              height={100}
            />
          </div>
        </section>

        <section className="flex flex-col items-center space-y-3 md:items-start md:ml-10">
          <h1 className="font-extrabold text-xl text-center text-green-600 sm:text-3xl lg:text-4xl">
            Olá, sou José Robério 🙂
          </h1>

          <div className="font-semibold text-lg md:text-2xl lg:text-3xl">
            <TypeAnimation
              sequence={[
                '<-- Desenvolvedor Web -->',
                1500,
                () => {},
                1000,
                '',
                500,
                '<-- Fullstack -->',
                1500,
                () => {},
                1000,
                '',
                500,
                '<-- Linux User -->',
                1500,
                () => {},
                1000,
                '',
                500,
              ]}
              speed={30}
              deletionSpeed={30}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/roberio-jose/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <FaLinkedin
                className="text-blue-500"
                size={40}
                data-testid="linkedin-icon"
              />
            </a>
            <a
              href="https://www.github.com/roberio5641"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
              data-testid="github-icon"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
