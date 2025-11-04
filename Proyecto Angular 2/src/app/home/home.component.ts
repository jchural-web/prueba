import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface NavLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: { label: string; href: string; }[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Estado del menú móvil
  isMobileMenuOpen = false;

  // Enlaces de navegación
  navLinks: NavLink[] = [
    { label: 'Inicio', href: '#' },
    { label: 'Características', href: '#features' },
    { label: 'Acerca de', href: '#about' },
    { label: 'Contacto', href: '#contact' }
  ];

  // Características principales
  features: Feature[] = [
    {
      icon: '🚀',
      title: 'Rápido y Moderno',
      description: 'Construido con Angular 20 y las últimas tecnologías web para un rendimiento óptimo',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎨',
      title: 'Diseño Elegante',
      description: 'Interfaz hermosa con Tailwind CSS y diseño completamente responsivo',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '⚡',
      title: 'Alto Rendimiento',
      description: 'Optimizado para velocidad y experiencia de usuario excepcional',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🔒',
      title: 'Seguro',
      description: 'Construido con las mejores prácticas de seguridad y TypeScript',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  // Secciones del footer
  footerSections: FooterSection[] = [
    {
      title: 'Producto',
      links: [
        { label: 'Características', href: '#features' },
        { label: 'Precios', href: '#pricing' },
        { label: 'Documentación', href: '#docs' },
        { label: 'Guías', href: '#guides' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Acerca de', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Carreras', href: '#careers' },
        { label: 'Prensa', href: '#press' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '#privacy' },
        { label: 'Términos', href: '#terms' },
        { label: 'Cookies', href: '#cookies' },
        { label: 'Contacto', href: '#contact' }
      ]
    }
  ];

  // Año actual para el footer
  currentYear: number = new Date().getFullYear();

  // Métodos
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(event: Event, href: string): void {
    if (href.startsWith('#')) {
      event.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.isMobileMenuOpen = false;
      }
    }
  }
}