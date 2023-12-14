import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;

  // Pada komponen Anda
appTabs = [
  { tab: 'tab1', url: '/home', icon: 'storefront', label: 'Tab 1' },
  { tab: 'tab2', url: '/folder/outbox', icon: 'cart', label: 'Tab 2' },
  { tab: 'tab3', url: '/folder/favorites', icon: 'reader', label: 'Tab 3' },
  { tab: 'tab4', url: '/folder/archived', icon: 'person', label: 'Tab 4' }
];


  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
