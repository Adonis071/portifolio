import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Adonis Pantoja",
  role: "Desenvolvedor de Software",
  bio: "Especialista em construir soluções digitais robustas, escaláveis e seguras. Focado na entrega de código limpo e experiências de usuário excepcionais com as melhores práticas de segurança da informação.",
  email: "adonisruis07@gmail.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Adonis071/AdonisPantoja",
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
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Plataforma de E-commerce",
    description: "E-commerce completo com carrinho de compras, integração de pagamentos e painel administrativo protegido por RBAC.",
    technologies: ["TypeScript", "Tailwind", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Dashboard de Monitoramento",
    description: "Painel em tempo real para visualização de métricas do sistema com sanitização rigorosa de inputs.",
    technologies: ["React", "WebSockets", "D3.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];
