import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumeListRecommendComponent } from './albume-list-recommend.component';

describe('AlbumeListRecommendComponent', () => {
  let component: AlbumeListRecommendComponent;
  let fixture: ComponentFixture<AlbumeListRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumeListRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumeListRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
