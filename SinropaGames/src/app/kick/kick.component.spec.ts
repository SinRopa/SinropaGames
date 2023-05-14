import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickComponent } from './kick.component';

describe('KickComponent', () => {
  let component: KickComponent;
  let fixture: ComponentFixture<KickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KickComponent]
    });
    fixture = TestBed.createComponent(KickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
