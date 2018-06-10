import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTitleComponent } from './m-title.component';

describe('MTitleComponent', () => {
  let component: MTitleComponent;
  let fixture: ComponentFixture<MTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
