import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCreationComponent } from './posts-creation.component';

describe('PostsCreationComponent', () => {
  let component: PostsCreationComponent;
  let fixture: ComponentFixture<PostsCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
