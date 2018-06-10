import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRecommendComponent } from './article-recommend.component';

describe('ArticleRecommendComponent', () => {
  let component: ArticleRecommendComponent;
  let fixture: ComponentFixture<ArticleRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
