import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverviewItemComponent } from './post-overview-item.component';

describe('PostOverviewItemComponent', () => {
  let component: PostOverviewItemComponent;
  let fixture: ComponentFixture<PostOverviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostOverviewItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
