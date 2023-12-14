import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  public profil!: string;

  // Pada komponen Anda
appTabs = [
  { tab: 'tab1', url: '/home', icon: 'storefront', label: 'Tab 1' },
  { tab: 'tab2', url: '/transaksi', icon: 'cart', label: 'Tab 2' },
  { tab: 'tab3', url: '/resep', icon: 'reader', label: 'Tab 3' },
  { tab: 'tab4', url: '/profil', icon: 'person', label: 'Tab 4' }
];


  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.profil = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
