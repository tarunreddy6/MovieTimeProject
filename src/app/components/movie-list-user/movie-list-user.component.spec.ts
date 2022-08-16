import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListUserComponent } from './movie-list-user.component';

describe('MovieListUserComponent', () => {
  let component: MovieListUserComponent;
  let fixture: ComponentFixture<MovieListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
