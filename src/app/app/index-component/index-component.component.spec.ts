import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentComponent } from './index-component.component';

describe('IndexComponentComponent', () => {
  let component: IndexComponentComponent;
  let fixture: ComponentFixture<IndexComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponentComponent]
    });
    fixture = TestBed.createComponent(IndexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
