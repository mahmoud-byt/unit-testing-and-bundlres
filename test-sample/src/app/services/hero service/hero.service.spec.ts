import { TestBed } from "@angular/core/testing";
import { MessageService } from "../message/message.service";
import { HeroService } from "./hero.service";
import {HttpClientTestingModule ,HttpTestingController } from "@angular/common/http/testing"
describe("hero service:",()=>{
    let mockMsgService:MessageService,service:HeroService,httpServiceControler:HttpTestingController 
    beforeEach((() => {
        mockMsgService=jasmine.createSpyObj(["add"])
        TestBed.configureTestingModule({
          providers:[HeroService,
            {provide:MessageService,useValue:mockMsgService},
        ],
        imports:[HttpClientTestingModule]
        })
       service= TestBed.inject(HeroService)
       httpServiceControler= TestBed.inject(HttpTestingController )
      }));
    it("dummy spec1",()=>{
        // act
        service.getHero(1).subscribe({next:(data)=>{
            expect(data.name).toBe("ali")
            
        },error:()=>{}})
       let req= httpServiceControler.expectOne("api/heroes/1")
        req.flush({id:1,name:"ali"})
        httpServiceControler.verify()

        // assert
        expect(req.request.method).toBe("GET")
    })
})