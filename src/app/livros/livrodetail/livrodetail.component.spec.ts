import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrodetailComponent } from './livrodetail.component';

describe('LivrodetailComponent', () => {
  let component: LivrodetailComponent;
  let fixture: ComponentFixture<LivrodetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrodetailComponent]
    });
    fixture = TestBed.createComponent(LivrodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
