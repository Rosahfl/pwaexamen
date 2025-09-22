import { Component } from '@angular/core';

@Component({
  selector: 'app-homecomponet',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Pedir permiso
  requestPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('✅ Permiso concedido');
        } else {
          console.log('❌ Permiso denegado');
        }
      });
    } else {
      console.log('⚠️ Este navegador no soporta notificaciones.');
    }
  }

  // Mostrar notificación (SW preferido, fallback Notification)
  async showNotification() {
    if (!('Notification' in window)) {
      console.log('⚠️ Este navegador no soporta notificaciones.');
      return;
    }

    if (Notification.permission !== 'granted') {
      console.log('⚠️ Primero debes permitir las notificaciones.');
      return;
    }

    // Verificar si hay un Service Worker activo
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        registration.showNotification('📢 Notificación de prueba', {
          body: 'Mostrada a través del Service Worker',
          icon: 'assets/icons/icon-192.png'
        });
        return;
      }
    }

    // Respaldo: notificación directa
    new Notification('📢 Notificación de prueba', {
      body: 'Mostrada con new Notification()',
      icon: 'assets/icons/icon-192.png'
    });
  }
}
