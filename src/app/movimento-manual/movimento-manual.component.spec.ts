import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoManualComponent } from './movimento-manual.component';

describe('MovimentoManualComponent', () => {
  let component: MovimentoManualComponent;
  let fixture: ComponentFixture<MovimentoManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentoManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentoManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
