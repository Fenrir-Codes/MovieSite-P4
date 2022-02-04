import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofprofilesComponent } from './tableofprofiles.component';

describe('TableofprofilesComponent', () => {
  let component: TableofprofilesComponent;
  let fixture: ComponentFixture<TableofprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableofprofilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableofprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
