function splitStringIntoParagraphs(text:string,img:string,alt:string) {
    console.log(img)
   var count:number=0;
    const paragraphs = text.split('\n');
    
const articleBody=paragraphs.map((para,index)=>{
    count++
    if(count==3){
        return(
            <img src={img} key={index} alt={alt}></img>
        )
    }else{
        return(
            <p key={index}>{para}</p>
        )
    }
})
return articleBody
  }


  export default splitStringIntoParagraphs