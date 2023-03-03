import { of } from "rxjs"
import { Hero } from "../hero"
import { HeroService } from "../services/hero service/hero.service"
import { HeroesComponent } from "./heroes.component"

describe("heros component:", () => {
    let component:HeroesComponent,mockService:HeroService,HEROSMock:Hero[]
    beforeEach(()=>{
         mockService=jasmine.createSpyObj(["deleteHero","addHero","getHeroes"])
         mockService.deleteHero=jasmine.createSpy().and.returnValue(of(true))
         mockService.addHero=jasmine.createSpy().and.returnValue(of(true))
        component= new HeroesComponent(mockService)
        HEROSMock=[
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 }
        ]
        // arrange
        component.heroes=Array.from(HEROSMock)
    })
    it("heroes[] should be 3",()=>{
        expect(component.heroes.length).toBe(3)
    })
    it("delete",()=>{
        // act
        component.delete({ id: 11, name: 'Mr. Nice', strength: 10 })
        // assert
        // expect(component.heroes.length).toBe(2)
        expect(mockService.deleteHero).toHaveBeenCalled()
    })
    it("add fun",()=>{
        // arrage
        // act
        component.add("Ali")
        expect(mockService.addHero).toHaveBeenCalled()
        expect(component.heroes.length).toBe(4)
    })
})