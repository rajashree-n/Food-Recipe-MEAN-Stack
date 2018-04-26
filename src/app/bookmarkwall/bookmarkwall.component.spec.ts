import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkwallComponent } from './bookmarkwall.component';

describe('BookmarkwallComponent', () => {
  let component: BookmarkwallComponent;
  let fixture: ComponentFixture<BookmarkwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
