import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePivotComponent } from './table-pivot.component';

describe('TablePivotComponent', () => {
  let component: TablePivotComponent;
  let fixture: ComponentFixture<TablePivotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePivotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePivotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
