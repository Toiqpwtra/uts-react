import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home!: string;

  // Pada komponen Anda
  appTabs = [
    { tab: 'tab1', url: '/home', icon: 'storefront', label: 'Tab 1' },
    { tab: 'tab2', url: '/transaksi', icon: 'cart', label: 'Tab 2' },
    { tab: 'tab3', url: '/resep', icon: 'reader', label: 'Tab 3' },
    { tab: 'tab4', url: '/profil', icon: 'person', label: 'Tab 4' }
  ];

  appMenu = [
    {title: 'ikan segar', icon: 'fish', url: ''},
    {title: 'fillet ikan', icon: 'restaurant', url: '/filet'}
  ];


  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}

