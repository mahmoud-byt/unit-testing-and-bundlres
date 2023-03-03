



import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CounterComponentForLab } from './counter.component';


describe('Counter Component for lab', () => {
  let component: CounterComponentForLab;
  let fixture: ComponentFixture<CounterComponentForLab>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponentForLab ]
    })
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponentForLab);
    component = fixture.componentInstance;
   
  });

  it('should create', () => {
    expect(component.counter).toBe(0)
  });
  it("when click btn fires increse fun",()=>{
    // btn
    let btn= fixture.debugElement.queryAll(By.css("button"))[0]
    // act
    btn.triggerEventHandler("click")
    // assert
    expect(component.counter).toBe(1)
  })
  it('should create', () => {
    expect(component.counter).toBe(0)
  });
  it("when click btn fires decrese fun",()=>{
    // btn
    let btn= fixture.debugElement.queryAll(By.css("button"))[1]
    // act
    btn.triggerEventHandler("click")
    // assert
    expect(component.counter).toBe(-1)
  })
  
});
