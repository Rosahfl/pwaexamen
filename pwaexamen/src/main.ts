import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';

import { routes } from './app/app.routes';
import { Layout } from './app/layout/layout';
 // 👈 componente raíz

bootstrapApplication(Layout, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(), // solo en producción
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
}).catch((err) => console.error(err));