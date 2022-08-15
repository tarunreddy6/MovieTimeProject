import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListUserComponent } from './emp-list-user.component';

describe('EmpListUserComponent', () => {
  let component: EmpListUserComponent;
  let fixture: ComponentFixture<EmpListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpListUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
