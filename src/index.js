const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function morseToBin(morse) {
    const morseBin = {};
    for (const [key, value] of Object.entries(morse)) {
        const bin = key.replace(/[.-]/g, (match) => match === '.' ? '10' : '11');
        morseBin[bin.padStart(10, '0')] = value;
    }
    return morseBin;
}

function decodeWord(wordBin, alphabet) {
    return wordBin.match(/.{1,10}/g).reduce((acc, charBin) => acc + alphabet[charBin], '');
}

function decode(expr) {
    const morseBin = morseToBin(MORSE_TABLE);
    const words = expr.split('**********');
    const sentence = words.reduce((acc, wordBin) => {
        const word = decodeWord(wordBin, morseBin);
        acc.push(word);
        return acc;
    }, []);
    return sentence.join(' ');
}

module.exports = {
    decode
}
