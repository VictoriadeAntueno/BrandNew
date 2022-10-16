import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoryComponent } from './pory.component';

describe('PoryComponent', () => {
  let component: PoryComponent;
  let fixture: ComponentFixture<PoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
