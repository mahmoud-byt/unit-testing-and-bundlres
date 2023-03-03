import { NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { of } from "rxjs"
import { Hero } from "../hero"
import { HeroComponent } from "../hero/hero.component"
import { HeroService } from "../services/hero service/hero.service"
import { HeroesComponent } from "./heroes.component"


describe("heros component:", () => {
    let fixture: ComponentFixture<HeroesComponent>,component:HeroesComponent,mockService: HeroService,heroes:Hero[];
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
        mockService.addHero= jasmine.createSpy().and.returnValue(of({id:2,name:"s"}))
        mockService.getHeroes= jasmine.createSpy().and.returnValue(of(heroes))
    })
    it("should getHeroes service should set heroes",()=>{
        fixture.detectChanges() //or ngOnInit()        
        expect(component.heroes.length).toBe(4)
        expect(mockService.getHeroes).toHaveBeenCalled()
    })

})