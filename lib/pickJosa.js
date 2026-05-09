/**
 * 단어에 따라 조사를 붙입니다.
 * @param {string} word - 조사가 붙을 단어
 * @param {string[]} josa - 단어 뒤에 붙을 조사
 * @returns {string}
 * @example
 * korrect.pickJosa("사과", ["을", "를"]) // "사과를"
 * korrect.pickJosa("길동", ["이", "가"]) // "길동이"
 */
function pickJosa(word, josa) {
    if (typeof word !== 'string' || word.length === 0) return word;
    if (!Array.isArray(josa) || josa.length !== 2) return word;

    const lastChar = word[word.length - 1];
    const code = lastChar.charCodeAt(0);
    if (code < 0xAC00 || code > 0xD7A3) {
        return word + josa[0];
    }
    const hasBatchim = (code - 0xAC00) % 28 > 0;

    return word + (hasBatchim ? josa[0] : josa[1]);
}

module.exports = pickJosa;