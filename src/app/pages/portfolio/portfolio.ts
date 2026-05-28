import { Component, computed, signal } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  currentImage: number;
}


@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects: Project[] = [
    {
      title: 'Sistema de Gestión de Almacén',
      description: 'Desarrollo de una aplicación web para la gestión y control de inventario, diseñada para optimizar las operaciones del almacén. Permite visualizar el stock disponible en tiempo real, gestionar la ubicación de los productos, y llevar un seguimiento detallado de las ventas y movimientos de mercancía.',
      technologies: ['Angular', 'Node.js', 'SQL', 'TypeScript', 'Express'],
      images: [
        'assets/img/1.jpg',
        'assets/img/2.jpg',
        'assets/img/3.jpg',
      ],
      currentImage: 0
    },
    {
      title: 'Plataforma E-learning.',
      description: 'Plataforma educativa interactiva que permite la gestión de cursos, lecciones y evaluaciones en línea. Incluye sistema de progreso, certificaciones automáticas y panel de administración para instructores.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      images: [
        'assets/img/elearning-1.jpg',
        'assets/img/elearning-2.jpg',
        'assets/img/elearning-3.jpg'
      ],
      currentImage: 0
    },
    {
      title: 'App de Delivery',
      description: 'Aplicación completa para servicio de delivery con versiones web y móvil. Incluye seguimiento en tiempo real de pedidos, sistema de pagos integrado, panel de gestión para restaurantes y administradores.',
      technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Firebase', 'Socket.io'],
      images: [
        'assets/img/delivery-1.jpg',
        'assets/img/delivery-2.jpg',
        'assets/img/delivery-3.jpg',
        'assets/img/delivery-4.jpg',
        'assets/img/delivery-5.jpg'
      ],
      currentImage: 0
    }
  ];

  // Lightbox properties
  lightboxVisible = false;
  lightboxImage = '';
  lightboxProjectIndex: number | null = null;
  lightboxImageIndex: number | null = null;

  // Navigation methods for gallery
  prevImage(projectIndex: number): void {
    const project = this.projects[projectIndex];
    if (project.images.length > 0) {
      project.currentImage = (project.currentImage - 1 + project.images.length) % project.images.length;
    }
  }

  nextImage(projectIndex: number): void {
    const project = this.projects[projectIndex];
    if (project.images.length > 0) {
      project.currentImage = (project.currentImage + 1) % project.images.length;
    }
  }

  setCurrentImage(projectIndex: number, imageIndex: number): void {
    this.projects[projectIndex].currentImage = imageIndex;
  }

  // Lightbox methods
  openLightbox(projectIndex: number, imageIndex: number): void {
    this.lightboxVisible = true;
    this.lightboxProjectIndex = projectIndex;
    this.lightboxImageIndex = imageIndex;
    this.lightboxImage = this.projects[projectIndex].images[imageIndex];
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  closeLightbox(): void {
    this.lightboxVisible = false;
    this.lightboxProjectIndex = null;
    this.lightboxImageIndex = null;
    this.lightboxImage = '';
    document.body.style.overflow = ''; // Restore scroll
  }

  lightboxPrev(): void {
    if (this.lightboxProjectIndex !== null && this.lightboxImageIndex !== null) {
      const project = this.projects[this.lightboxProjectIndex];
      this.lightboxImageIndex = (this.lightboxImageIndex - 1 + project.images.length) % project.images.length;
      this.lightboxImage = project.images[this.lightboxImageIndex];
    }
  }

  lightboxNext(): void {
    if (this.lightboxProjectIndex !== null && this.lightboxImageIndex !== null) {
      const project = this.projects[this.lightboxProjectIndex];
      this.lightboxImageIndex = (this.lightboxImageIndex + 1) % project.images.length;
      this.lightboxImage = project.images[this.lightboxImageIndex];
    }
  }
}