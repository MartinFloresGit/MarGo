import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroIndexComponent } from './maestro-index.component';

describe('MaestroIndexComponent', () => {
  let component: MaestroIndexComponent;
  let fixture: ComponentFixture<MaestroIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
