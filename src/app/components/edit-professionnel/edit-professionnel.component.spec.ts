import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfessionnelComponent } from './edit-professionnel.component';

describe('EditProfessionnelComponent', () => {
  let component: EditProfessionnelComponent;
  let fixture: ComponentFixture<EditProfessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
