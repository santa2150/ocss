import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulComponent } from './jul.component';

describe('JulComponent', () => {
  let component: JulComponent;
  let fixture: ComponentFixture<JulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JulComponent]
    });
    fixture = TestBed.createComponent(JulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
