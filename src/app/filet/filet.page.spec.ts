import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiletPage } from './filet.page';

describe('FiletPage', () => {
  let component: FiletPage;
  let fixture: ComponentFixture<FiletPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FiletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
