import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpcollectionComponent } from './grpcollection.component';

describe('GrpcollectionComponent', () => {
  let component: GrpcollectionComponent;
  let fixture: ComponentFixture<GrpcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpcollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
