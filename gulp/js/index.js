const c=console.log.bind(document)
let Container=document.querySelector(".row")
let Blocks=Array.from(Container.children)
let orderRange=[...Blocks.keys()]
shuffle(orderRange)
Blocks.forEach((block,index) => { 
  block.style.order=orderRange[index] ;
  block.addEventListener('click',()=>{
    flipping(block)
    let flippedEles=Blocks.filter(f=> f.classList.contains("is-flipped"))
    if(flippedEles.length===2){
      stopclicking(document.querySelector(".row"))
      matching(flippedEles[0],flippedEles[1])
    }
    
  })})

function shuffle(array){ 
   i=array.length;
  while(i>0){
     random=Math.floor(Math.random()*i)
    i--
   [array[i],array[random]]=[array[random],array[i]] 
  }
 return array;
}
function matching(first,second){
if(first.dataset.img===second.dataset.img){
  first.classList.remove("is-flipped")
  second.classList.remove("is-flipped")
  first.classList.add("matching")
  second.classList.add("matching")
}else{
  setTimeout(()=>{
    first.classList.remove("is-flipped")
    second.classList.remove("is-flipped")
  },1000)
}

}



function flipping(ele){
 ele.classList.add("is-flipped")
};
function stopclicking(elee){
  elee.classList.add("stop-clicking")
  setTimeout(()=>{
    elee.classList.remove("stop-clicking")
  },2000)
}


