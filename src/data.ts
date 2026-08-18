import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Adonis Pantoja",
  role: "Desenvolvedor de Software",
  bio: "Especialista em construir soluções digitais robustas, escaláveis e seguras. Focado na entrega de código limpo e experiências de usuário excepcionais com as melhores práticas de segurança da informação.",
  email: "adonisruis07@gmail.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "E-mail",
      url: "mailto:adonisruis07@gmail.com",
      icon: Mail,
    },
  ],
};

export const skills = [
  "React & TypeScript",
  "Node.js",
  "Arquitetura Segura",
  "Tailwind CSS",
  "Prevenção contra XSS/CSRF",
  "APIs RESTful",
  "WordPress"
];

export const projects = [
  {
    id: "1",
    title: "Sistema de Autenticação Segura",
    description: "Implementação de um fluxo completo de autenticação utilizando JWT, refresh tokens e cookies HttpOnly, prevenindo ataques XSS e CSRF.",
    technologies: ["React", "Node.js", "Express", "Segurança"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "Plataforma de E-commerce",
    description: "E-commerce completo com carrinho de compras, integração de pagamentos e painel administrativo protegido por RBAC (Controle de Acesso Baseado em Funções).",
    technologies: ["TypeScript", "Tailwind", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Dashboard de Monitoramento",
    description: "Painel em tempo real para visualização de métricas do sistema com sanitização rigorosa de inputs para evitar injeções de dados maliciosos.",
    technologies: ["React", "WebSockets", "D3.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
