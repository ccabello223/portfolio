import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');

  user = {
    name: 'Carlos Cabello',
    role: 'Full-stack Developer',
    image: 'assets/img/default-user.jpg',
    cv: 'assets/CV_Carlos_Cabello.pdf'
  };

  menuItems = [
    {
      route: '/',
      icon: 'fa-solid fa-house',
      text: 'Home',
      exact: true
    },
    {
      route: '/sobre-mi',
      icon: 'fa-solid fa-user',
      text: 'Sobre mí'
    },
    {
      route: '/estudios',
      icon: 'fa-solid fa-graduation-cap',
      text: 'Estudios'
    },
    {
      route: '/proyectos',
      icon: 'fa-solid fa-code',
      text: 'Proyectos'
    },
    {
      route: '/contacto',
      icon: 'fa-solid fa-envelope',
      text: 'Contacto'
    }
  ];

  socialLinks = [
    {
      url: 'https://www.linkedin.com/in/carlos-cabello-fernandez/',
      icon: 'fa-brands fa-linkedin',
      name: 'LinkedIn'
    },
    {
      url: 'https://github.com/carlos-cabello-fernandez',
      icon: 'fa-brands fa-github',
      name: 'GitHub'
    },
    {
      url: 'https://www.instagram.com/carlos-cabello-fernandez/',
      icon: 'fa-brands fa-instagram',
      name: 'Instagram'
    }
  ];

  currentYear = new Date().getFullYear();
}