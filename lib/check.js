const axios = require('axios');

/**
 * 문장의 맞춤법을 검사하고 교정된 결과를 반환합니다.
 * @param {string} text - 맞춤법을 검사할 문장
 * @returns {Promise<object|null>} 교정된 결과 객체
 * @example
 * const result = await korrect.check("바나나가 잇다");
 * // { original: "바나나가 잇다", corrected: "바나나가 있다", errors: [...], errata_count: 1 }
 */
async function check(text) {
    if (typeof text !== 'string' || text.length === 0) return null;

    try {
        const encodedText = encodeURIComponent(text);
        const url = `https://ts-proxy.naver.com/ocontent/util/SpellerProxy?passportKey=12e3a39878a34a48ba1dfd7203522054aa417829&q=${encodedText}&where=nexearch&color_blindness=0`;

        const response = await axios.get(url);
        const result = response.data.message.result;

        const stripTags = (str) => str.replace(/<[^>]*>?/gm, '');
        const originalText = stripTags(result.origin_html);
        const correctedText = stripTags(result.html);

        const originalWords = originalText.split(/\s+/);
        const correctedWords = correctedText.split(/\s+/);
        
        const errors = [];
        let currentOffset = 0;

        originalWords.forEach((word, index) => {
            const correctedWord = correctedWords[index];
            
            if (word !== correctedWord) {
                errors.push({
                    wrong: word,
                    right: correctedWord,
                    start: currentOffset,
                    end: currentOffset + word.length
                });
            }

            const nextSpaceIndex = originalText.indexOf(' ', currentOffset + word.length);
            if (nextSpaceIndex !== -1) {
                currentOffset = nextSpaceIndex + 1;
            } else {
                currentOffset += word.length + 1;
            }
        });

        return {
            original: originalText,
            corrected: correctedText,
            errors: errors,
            errata_count: result.errata_count
        };

    } catch (error) {
        console.error("맞춤법 검사 오류:", error.message);
        return null;
    }
}

module.exports = check;

