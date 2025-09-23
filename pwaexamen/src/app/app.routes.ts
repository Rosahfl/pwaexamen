// app.routes.ts
import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Ui } from './ui/ui';
import { HomeComponent } from './home.component/home.component';
import { Navba } from './navba/navba';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
        
      {
        path: '',
        component: HomeComponent,
        title: 'Inicio'
      },
      { path: 'ui',
         component: Ui,
         title: "acerca de"
         },
      {
        path: 'about',
        component: About,
        title: 'Acerca de'
      },
      {
        path: 'contact',
        component: Contact,
        title: 'Contacto'
      },
      {
        path: 'Navba',
        component: Navba,
        title: 'acerca de'
      }
      
    ]
  },
  // RUTA WILDCARD (importante en producción)
  {
    path: '**',
    redirectTo: ''
  }
];

