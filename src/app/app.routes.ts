import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { Studies } from './pages/studies/studies';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'sobre-mi', component: About },
    { path: 'estudios', component: Studies },
    { path: 'proyectos', component: Portfolio },
    { path: 'contacto', component: Contact },
    { path: '**', redirectTo: '' } // Redirección por si escriben mal la URL
];