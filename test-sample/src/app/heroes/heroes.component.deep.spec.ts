import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroComponent } from "../hero/hero.component";
import { HeroService } from "../services/hero service/hero.service";
import { HeroesComponent } from "./heroes.component";




describe("heros component deep:",()=>{
    
    let fixture: ComponentFixture<HeroesComponent>,component:HeroesComponent,mockService: HeroService,heroes:Hero[];
    let FakeData="hello"
    beforeEach(()=>{
        mockService = jasmine.createSpyObj(["deleteHero", "addHero","getHeroes"])
        TestBed.configureTestingModule({
            declarations:[HeroesComponent,HeroComponent],
            providers:[
                { provide: HeroService , useValue: mockService}
            ],schemas:[NO_ERRORS_SCHEMA]
        })
        heroes = [
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 },
            { id: 14, name: 'Celeritas', strength: 15 },
        ]
       fixture= TestBed.createComponent(HeroesComponent)
       component=fixture.componentInstance
        mockService.deleteHero= jasmine.createSpy().and.returnValue(of(true))
        mockService.addHero= jasmine.createSpy().and.returnValue(of({id:2,name:FakeData}))
        mockService.getHeroes= jasmine.createSpy().and.returnValue(of(heroes))
        fixture.detectChanges() //or ngOnInit()
    })
    it("check injection mock service done",()=>{
        expect(component.heroes.length).toBe(4)
    })
    it("check templete render child component correctly and passing @input value",()=>{
        let childDElist=fixture.debugElement.queryAll(By.directive(HeroComponent))
        expect(childDElist.length).toEqual(4)
        expect(childDElist[0].componentInstance.hero.name).toEqual(heroes[0].name)
        for (let i = 0; i < childDElist.length; i++) {            
            expect(childDElist[i].componentInstance.hero).toEqual(heroes[i])
        }
    })
    it("check if add fun will add hero",()=>{
        let inp=fixture.debugElement.query(By.css("input")).nativeElement
        inp.value=FakeData
        let btn=fixture.debugElement.queryAll(By.css("button"))[0]
        btn.triggerEventHandler("click")
        fixture.detectChanges()
        let ul=fixture.debugElement.query(By.css("ul")).nativeElement
        expect(ul.textContent).toContain(FakeData)        
    })
    
})