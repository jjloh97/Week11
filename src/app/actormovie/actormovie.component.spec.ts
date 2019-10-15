import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActormovieComponent } from './actormovie.component';

describe('ActormovieComponent', () => {
  let component: ActormovieComponent;
  let fixture: ComponentFixture<ActormovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActormovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActormovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
