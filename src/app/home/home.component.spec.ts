import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add numbers up', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;

    let result = app.addNumbers(1, 2);
    expect(result).toBe(3);
    result = app.addNumbers(2, 3);
    expect(result).toBe(5);
    result = app.addNumbers(17, 18);
    expect(result).toBe(35);
    result = app.addNumbers(-17, 18);
    expect(result).toBe(1);
    result = app.addNumbers(17, -18);
    expect(result).toBe(-1);
    result = app.addNumbers(17, Infinity);
    expect(result).toBe(Infinity);
    expect(() => app.addNumbers(NaN, Infinity)).toThrowError('Both parameters should be different from NaN');
  });

  it('should add numbers up', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const comp = fixture.componentInstance;

    let result = comp.addInputNumbers();
    expect(result).toBe(0);

    comp.x = 1;
    comp.y = 2;
    result = comp.addInputNumbers();
    expect(result).toBe(3);
  });

  it('should add numbers correctly in the template', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const comp = fixture.componentInstance;
    const debugElement = fixture.debugElement.nativeElement;

    const span = debugElement.querySelector('span');
    expect(span.textContent).toBe('0');

    comp.x = 1;
    comp.y = 2;
    fixture.detectChanges();
    expect(span.textContent).toBe('3');
  });
});
