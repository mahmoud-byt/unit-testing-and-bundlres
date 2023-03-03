import { MessageService } from "./message.service"

describe("message Service:",()=>{
    let msgService:MessageService
    beforeEach(()=>{
       msgService= new MessageService()
    })
    it("messages[] should be []",()=>{
        expect(msgService.messages.length).toBe(0)
    })
    it("add fun",()=>{
        // act
        msgService.add("hello")
        expect(msgService.messages.length).toBe(1)
        expect(msgService.messages[0]).toBe("hello")
    })
    it("clear fun",()=>{
        // arrage
        msgService.add("hello")
        msgService.add("hello2")
        
        // act
        msgService.clear()
        // assert
        expect(msgService.messages.length).toBe(0)
    })
})