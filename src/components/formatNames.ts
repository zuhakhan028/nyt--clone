export function formatNames(inputString: string): string {
    const words = inputString.split(' ');
    const modifiedWords = [];
    for (const word of words) {
        if (word.toLowerCase() === 'and') {
            modifiedWords.push('and');
        } else if (word.toLowerCase() === 'by') {
            modifiedWords.push('By');
        } else {
            modifiedWords.push(word.toUpperCase());
        }
    }

    const resultString = modifiedWords.join(' ');
    return resultString;
}



      
 
  