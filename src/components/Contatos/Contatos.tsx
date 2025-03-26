import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "@/context/ThemeContext";

export function ContactForm() {
  const { theme } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        "service_gx5cubm",
        "template_44yi8nf",
        form.current,
        "UsQ-WuCE5wKysJQ7h"
      );
      console.log("Email enviado!", result.text);
      setMessage("Mensagem enviada com sucesso!");
      form.current.reset();
    } catch (error) {
      console.error("Erro ao enviar Email: ", error);
      setMessage("Erro ao enviar a mensagem. Tente novamente ");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-5 max-w-7xl mx-auto text-white pt-24 font-poppins"
      data-aos="fade-up"
    >
    <section
      className={`flex flex-col items-center justify-center p-5 max-w-4xl mx-auto ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
      data-aos="fade-up"
    ></section>
    
      <h2 className="text-2xl font-bold text-green-600 sm:text-3xl mb-5">
        Entre em Contato
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className={`w-full flex flex-col gap-4 p-6 rounded-2xl shadow-md max-w-md ${
          theme === "dark" ? "bg-gray-800 text-black" : "bg-white text-gray-900"
        }`}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Seu Nome"
          required
          className={`border-2 p-3 rounded-lg w-full focus:outline-none focus:border-green-500 ${
            theme === "dark" ? "border-gray-600 bg-gray-800 text-black" : "border-gray-300 bg-white text-gray-900"
          }`}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Seu E-mail"
          required
          className={`border-2 p-3 rounded-lg w-full focus:outline-none focus:border-green-500 ${
            theme === "dark" ? "border-gray-600 bg-gray-800 text-black" : "border-gray-300 bg-white text-gray-900"
          }`}
        />
        <textarea
          name="message"
          placeholder="Sua Mensagem"
          required
          rows={4}
          className={`border-2 p-3 rounded-lg w-full focus:outline-none focus:border-green-500 ${
            theme === "dark" ? "border-gray-600 bg-gray-800 text-black" : "border-gray-300 bg-white text-gray-900"
          }`}
        ></textarea>
        <button
          type="submit"
          disabled={isSending}
          className={`bg-green-500 text-white font-bold py-2 rounded-lg transition-transform ${
            isSending ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
        >
          {isSending ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
    </section>
  );
}
