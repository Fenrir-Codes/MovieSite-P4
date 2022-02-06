import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofmoviesComponent } from './tableofmovies.component';

describe('TableofmoviesComponent', () => {
  let component: TableofmoviesComponent;
  let fixture: ComponentFixture<TableofmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableofmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableofmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
