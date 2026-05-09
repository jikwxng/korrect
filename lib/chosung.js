/**
 * 단어의 초성을 반환합니다.
 * @param {string} word 
 * @example korrect.chosung("가느다란 물방울") // "ㄱㄴㄷㄹ ㅁㅂㅇ"
 */
function chosung(word) {
    if (typeof word !== 'string' || word.length === 0) throw new Error("Invalid input: 초성으로 변환할 단어를 입력해주세요.");
    
    let result = "";
    for (let i = 0; i < word.length; i++) {
        const firstCode = word.charCodeAt(i);
        if (firstCode >= 0xAC00 && firstCode <= 0xD7A3) {
            const chosungCode = Math.floor((firstCode - 0xAC00) / 588) + 0x1100;
            result += String.fromCharCode(chosungCode);
        } else {
            result += word[i];
        }
    }
    return result;
}

module.exports = chosung;