 function splitStringIntoLinesWithImage(text:string, initialWordsPerLine:number, decrementBy:number, imageSrc:string) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    let wordsPerLine = initialWordsPerLine;
    let wordCount = 0;
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if ((currentLine + word).length <= wordsPerLine) {
        currentLine += `${word} `;
        wordCount += 1;
        if (wordCount === Math.floor(words.length / 2)) {
          // Insert the image tag here
          lines.push(currentLine.trim());
          lines.push(`<img src="${imageSrc}" alt="Image" />`);
          currentLine = '';
        }
      } else {
        lines.push(currentLine.trim());
        currentLine = `${word} `;
        wordsPerLine -= decrementBy;
      }
    }
  
    if (currentLine.trim() !== '') {
      lines.push(currentLine.trim());
    }
  console.log(lines.join("\n"))
    return lines.join('\n');
  }


  export default splitStringIntoLinesWithImage