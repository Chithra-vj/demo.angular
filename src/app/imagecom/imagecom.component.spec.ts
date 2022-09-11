import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecomComponent } from './imagecom.component';

describe('ImagecomComponent', () => {
  let component: ImagecomComponent;
  let fixture: ComponentFixture<ImagecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
