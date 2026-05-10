import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  // Estado para el filtro actual
  filter = signal<'all' | 'web' | 'video'>('all');

  // Lista de proyectos (esto podría venir de un servicio)
  allProjects = signal([
    { title: 'Red social tipo Twitter', category: 'web', image: '...' },
    { title: 'Producción de video', category: 'video', image: '...' },
  ]);

  // Proyectos filtrados de forma reactiva (como un computed en Riverpod)
  filteredProjects = computed(() => {
    if (this.filter() === 'all') return this.allProjects();
    return this.allProjects().filter(p => p.category === this.filter());
  });
}