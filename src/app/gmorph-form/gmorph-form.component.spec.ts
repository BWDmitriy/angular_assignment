import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmorphFormComponent } from './gmorph-form.component';

describe('GmorphFormComponent', () => {
  let component: GmorphFormComponent;
  let fixture: ComponentFixture<GmorphFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmorphFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GmorphFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
