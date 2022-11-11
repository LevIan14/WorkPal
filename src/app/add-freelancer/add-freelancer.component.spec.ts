import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreelancerComponent } from './add-freelancer.component';

describe('AddFreelancerComponent', () => {
  let component: AddFreelancerComponent;
  let fixture: ComponentFixture<AddFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
