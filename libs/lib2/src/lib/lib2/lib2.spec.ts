import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2 } from './lib2';

describe('Lib2', () => {
  let component: Lib2;
  let fixture: ComponentFixture<Lib2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib2],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
