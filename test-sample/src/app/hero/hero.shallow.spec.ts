import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component";





describe("hero component:",()=>{
    let fixture:ComponentFixture<HeroComponent>,componentInstance:HeroComponent
    beforeEach((() => {
        // arrange
        TestBed.configureTestingModule({
            declarations:[HeroComponent],
            schemas:[NO_ERRORS_SCHEMA]
        })
        fixture= TestBed.createComponent(HeroComponent)
        componentInstance=fixture.componentInstance
      }));
    it("hero interpulation detect changes",()=>{
        // act
        componentInstance.hero={ id: 11, name: 'Mr. Nice', strength: 10 }
        fixture.detectChanges()
        // templete
        // let span=fixture.nativeElement.querySelector(".badge")
        // or
        let span=fixture.debugElement.query(By.css(".badge")).nativeElement
        expect(span.textContent).toBe("11")
    })
})