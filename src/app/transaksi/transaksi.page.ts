import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
})
export class TransaksiPage implements OnInit {
  public transaksi!: string;

  // Pada komponen Anda
  appTabs = [
    { tab: 'tab1', url: '/home', icon: 'storefront', label: 'Tab 1' },
    { tab: 'tab2', url: '/transaksi', icon: 'cart', label: 'Tab 2' },
    { tab: 'tab3', url: '/resep', icon: 'reader', label: 'Tab 3' },
    { tab: 'tab4', url: '/profil', icon: 'person', label: 'Tab 4' }
  ];


  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.transaksi = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
