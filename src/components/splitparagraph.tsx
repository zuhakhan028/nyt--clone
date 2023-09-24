function splitStringIntoParagraphs(text: string, img: string, alt: string) {

    var count: number = 0;
    const paragraphs = text.split('\n');

    const articleBody = paragraphs.map((para, index) => {
        count++
        if (count == 3) {
            return (
                <img src={img} key={index} alt={alt} className="article-main-img"></img>
            )
        } else {
            return (
                <p key={index}>{para}</p>
            )
        }
    })
    return articleBody
}


export default splitStringIntoParagraphs