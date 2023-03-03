import { SquarePipe } from "./square.pipe"

describe("squarePipe:",()=>{

    it("should retrun 8*8 ",()=>{
       
        let pipe= new  SquarePipe()

        expect(pipe.transform(8)).toBe(8*8)
       

    })
    it("should retrun 36 ",()=>{
       
        let pipe= new  SquarePipe()

        expect(pipe.transform(6)).toBe(36)
       

    })
    it("should retrun number",()=>{
       
        let pipe= new  SquarePipe()

     
        expect(pipe.transform(Number))
    

        

    })
    it("should return Not m number when path in any thing not number",()=>{
        let pipe =new SquarePipe()
        expect(pipe.transform('m')).toContain("Not a number");
      })
      it("should return Not a number when path in null",()=>{
        let pipe =new SquarePipe()
        expect(pipe.transform(null)).toContain("Not a number");
      })
})