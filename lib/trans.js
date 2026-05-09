/**
 * 한타를 영타로 변환합니다.
 * @param {string} word - 변환할 한글 단어
 * @example toEn("안녕") // "dkssud"
 */
function toEn(word) {
    if (typeof word !== 'string' || word.length === 0) return word;

    const CHOSUNG = [
        'r', 'R', 's', 'e', 'E', 'f', 'a', 'q', 'Q', 't', 'T', 'd', 'w', 'W', 'c', 'v', 'x', 'z', 'g'
    ];
    const JUNGSUNG = [
        'k', 'o', 'i', 'O', 'j', 'p', 'u', 'P', 'h', 'hk', 'ho', 'hl', 'y', 'n', 'nj', 'np', 'nl', 'b', 'm', 'ml', 'l'
    ];
    const JONGSUNG = [
        '', 'r', 'R', 'rt', 's', 'sw', 'sg', 'e', 'f', 'fr', 'fa', 'fq', 'ft', 'fx', 'fz', 'fg', 'a', 'q', 'qt', 't', 'T', 'd', 'w', 'c', 'v', 'x', 'z', 'g'
    ];

    const JAMO_MAP = {
        'ㄱ': 'r', 'ㄲ': 'R', 'ㄴ': 's', 'ㄷ': 'e', 'ㄸ': 'E', 'ㄹ': 'f', 'ㅁ': 'a', 'ㅂ': 'q', 'ㅃ': 'Q', 'ㅅ': 't', 'ㅆ': 'T', 'ㅇ': 'd', 'ㅈ': 'w', 'ㅉ': 'W', 'ㅊ': 'c', 'ㅋ': 'v', 'ㅌ': 'x', 'ㅍ': 'z', 'ㅎ': 'g',
        'ㅏ': 'k', 'ㅐ': 'o', 'ㅑ': 'i', 'ㅒ': 'O', 'ㅓ': 'j', 'ㅔ': 'p', 'ㅕ': 'u', 'ㅖ': 'P', 'ㅗ': 'h', 'ㅘ': 'hk', 'ㅙ': 'ho', 'ㅚ': 'hl', 'ㅛ': 'y', 'ㅜ': 'n', 'ㅝ': 'nj', 'ㅞ': 'np', 'ㅟ': 'nl', 'ㅠ': 'b', 'ㅡ': 'm', 'ㅢ': 'ml', 'ㅣ': 'l',
        'ㄳ': 'rt', 'ㄵ': 'sw', 'ㄶ': 'sg', 'ㄺ': 'fr', 'ㄻ': 'fa', 'ㄼ': 'fq', 'ㄽ': 'ft', 'ㄾ': 'fx', 'ㄿ': 'fz', 'ㅀ': 'fg', 'ㅄ': 'qt'
    };

    let result = "";
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        
        if (code >= 0xAC00 && code <= 0xD7A3) { // 완성형 한글
            const base = code - 0xAC00;
            const cho = Math.floor(base / 588);
            const jung = Math.floor((base % 588) / 28);
            const jong = base % 28;
            result += CHOSUNG[cho] + JUNGSUNG[jung] + JONGSUNG[jong];
        } else if (JAMO_MAP[word[i]]) { // 개별 자모
            result += JAMO_MAP[word[i]];
        } else { // 그 외
            result += word[i];
        }
    }
    return result;
}

/**
 * 영타를 한타로 변환합니다.

 * @param {string} englishWord - 변환할 영문 단어
 * @example toKo("dkssud") // "안녕"
 */
function toKo(englishWord) {
    if (typeof englishWord !== 'string' || englishWord.length === 0) return englishWord;

    const enToKoMap = {
        'r': 'ㄱ', 'R': 'ㄲ', 's': 'ㄴ', 'e': 'ㄷ', 'E': 'ㄸ', 'f': 'ㄹ', 'a': 'ㅁ', 'q': 'ㅂ', 'Q': 'ㅃ', 't': 'ㅅ', 'T': 'ㅆ', 'd': 'ㅇ', 'w': 'ㅈ', 'W': 'ㅉ', 'c': 'ㅊ', 'v': 'ㅋ', 'x': 'ㅌ', 'z': 'ㅍ', 'g': 'ㅎ',
        'k': 'ㅏ', 'o': 'ㅐ', 'i': 'ㅑ', 'O': 'ㅒ', 'j': 'ㅓ', 'p': 'ㅔ', 'u': 'ㅕ', 'P': 'ㅖ', 'h': 'ㅗ', 'y': 'ㅛ', 'n': 'ㅜ', 'b': 'ㅠ', 'm': 'ㅡ', 'l': 'ㅣ'
    };

    const CHOSUNG = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const JUNGSUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const JONGSUNG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    const jungComplex = { 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ' };
    const jongComplex = { 'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' };

    let result = '';
    let cho = -1, jung = -1, jong = -1;
    let lastJong = -1;

    const combine = () => {
        if (cho !== -1 && jung !== -1) {
            result += String.fromCharCode(0xAC00 + (cho * 21 + jung) * 28 + (jong !== -1 ? jong : 0));
        } else if (cho !== -1) {
            result += CHOSUNG[cho];
        } else if (jung !== -1) {
            result += JUNGSUNG[jung];
        }
        cho = jung = jong = -1;
        lastJong = -1;
    };

    for (let i = 0; i < englishWord.length; i++) {
        const key = englishWord[i];
        const jamo = enToKoMap[key];

        if (!jamo) {
            combine();
            result += key;
            continue;
        }

        const isVowel = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ'.includes(jamo);

        if (isVowel) {
            if (cho !== -1 && jung === -1) {
                jung = JUNGSUNG.indexOf(jamo);
            } else if (cho !== -1 && jung !== -1 && jong === -1) {
                const complex = jungComplex[JUNGSUNG[jung] + jamo];
                if (complex) {
                    jung = JUNGSUNG.indexOf(complex);
                } else {
                    combine();
                    jung = JUNGSUNG.indexOf(jamo);
                }
            } else if (cho !== -1 && jung !== -1 && jong !== -1) {
                if (lastJong !== -1) {
                    const complexChar = JONGSUNG[jong];
                    const splitJamo = Object.keys(jongComplex).find(k => jongComplex[k] === complexChar);
                    jong = JONGSUNG.indexOf(splitJamo[0]);
                    combine();
                    cho = CHOSUNG.indexOf(splitJamo[1]);
                    jung = JUNGSUNG.indexOf(jamo);
                } else {
                    const prevJongChar = JONGSUNG[jong];
                    jong = 0;
                    combine();
                    cho = CHOSUNG.indexOf(prevJongChar);
                    jung = JUNGSUNG.indexOf(jamo);
                }
            } else {
                if (jung !== -1) {
                    const complex = jungComplex[JUNGSUNG[jung] + jamo];
                    if (complex) jung = JUNGSUNG.indexOf(complex);
                    else { combine(); jung = JUNGSUNG.indexOf(jamo); }
                } else {
                    jung = JUNGSUNG.indexOf(jamo);
                }
            }
        } else {
            if (cho === -1) {
                cho = CHOSUNG.indexOf(jamo);
            } else if (jung === -1) {
                combine();
                cho = CHOSUNG.indexOf(jamo);
            } else if (jong === -1) {
                const jIdx = JONGSUNG.indexOf(jamo);
                if (jIdx !== -1) {
                    jong = jIdx;
                } else {
                    combine();
                    cho = CHOSUNG.indexOf(jamo);
                }
            } else if (lastJong === -1) {
                const complex = jongComplex[JONGSUNG[jong] + jamo];
                if (complex) {
                    lastJong = jong;
                    jong = JONGSUNG.indexOf(complex);
                } else {
                    combine();
                    cho = CHOSUNG.indexOf(jamo);
                }
            } else {
                combine();
                cho = CHOSUNG.indexOf(jamo);
            }
        }
    }
    combine();
    return result;
}

/**

 * 한글을 로마자로 변환합니다. `(문화관광부 고시 제2000-8호 규격)`
 * @param {string} word - 변환할 한글 단어
 * @example toRoman("나비야") // "nabiya"
 */
function toRoman(word) {
    if (typeof word !== 'string' || word.length === 0) return word;

    const CHOSUNG = ['g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h'];
    const JUNGSUNG = ['a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i'];
    const JONGSUNG = ['', 'k', 'k', 'k', 'n', 'n', 'n', 't', 'l', 'k', 'm', 'l', 'l', 't', 'p', 'l', 'm', 'p', 'p', 't', 't', 'ng', 't', 't', 'k', 't', 'p', 't'];

    let result = "";
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        
        if (code >= 0xAC00 && code <= 0xD7A3) { // 완성형 한글
            const base = code - 0xAC00;
            const cho = Math.floor(base / 588);
            const jung = Math.floor((base % 588) / 28);
            const jong = base % 28;
            
            result += CHOSUNG[cho] + JUNGSUNG[jung] + JONGSUNG[jong];
        } else {
            // 개별 자모(0x3130~0x318F, 0x1100~0x11FF 등)는 제외하고 나머지만 추가
            const isJamo = (code >= 0x3130 && code <= 0x318F) || (code >= 0x1100 && code <= 0x11FF);
            if (!isJamo) {
                result += word[i];
            }
        }
    }
    return result;
}

module.exports = { toEn, toKo, toRoman };