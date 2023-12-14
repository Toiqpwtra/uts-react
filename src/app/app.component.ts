import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Belanja', url: '/folder/inbox', icon: 'storefront' },
    { title: 'Transaksi', url: '/folder/outbox', icon: 'cart' },
    { title: 'Resep', url: '/folder/favorites', icon: 'reader' },
    { title: 'Profil', url: '/folder/archived', icon: 'person' },
  ];
  constructor() {}
}
