import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumRecommendComponent } from './album-recommend.component';

describe('AlbumRecommendComponent', () => {
  let component: AlbumRecommendComponent;
  let fixture: ComponentFixture<AlbumRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
