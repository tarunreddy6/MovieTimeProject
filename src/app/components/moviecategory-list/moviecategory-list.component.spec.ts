import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecategoryListComponent } from './moviecategory-list.component';

describe('MoviecategoryListComponent', () => {
  let component: MoviecategoryListComponent;
  let fixture: ComponentFixture<MoviecategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviecategoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviecategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
