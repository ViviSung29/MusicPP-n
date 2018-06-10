import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurMusicComponent } from './cur-music.component';

describe('CurMusicComponent', () => {
  let component: CurMusicComponent;
  let fixture: ComponentFixture<CurMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
