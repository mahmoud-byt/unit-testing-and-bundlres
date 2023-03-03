import { StrengthPipe } from "./strength.pipe"

describe("strength pipe:",()=>{

    it("should retrun weak when passing 5",()=>{
        // arrage
        let pipe= new StrengthPipe()

        expect(pipe.transform(5)).toContain("weak")
    })
})