# korrect-js

[![npm version](https://img.shields.io/npm/v/korrect-js.svg)](https://www.npmjs.com/package/korrect-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**korrect-js**는 한국어 텍스트 처리와 맞춤법 검사를 간편하게 수행할 수 있는 자바스크립트 라이브러리입니다. 초성 추출, 조사 선택, 영타/한타 변환 등 한국어 서비스 개발에 꼭 필요한 유틸리티들을 제공합니다.

## 주요 기능

- **맞춤법 검사**: 문장의 맞춤법을 교정하고, 에러 위치와 교정 제안을 포함한 상세 데이터를 반환합니다.
- **초성 추출**: 한글 단어에서 초성(ㄱㄴㄷ...)만 깔끔하게 추출합니다.
- **조사 자동 선택**: 단어의 종성(받침) 여부에 따라 적합한 조사(은/는, 이/가, 을/를)를 자동으로 선택합니다.
- **영타/한타 변환**: 키보드 입력 실수를 교정하거나 한글을 로마자로 변환하는 기능을 제공합니다.

## 설치

```bash
npm install korrect-js
```

## 사용법

```javascript
const korrect = require('korrect-js');

// 1. 맞춤법 검사 (Async)
async function checkSpell() {
    const result = await korrect.check("바나나가 잇다");
    console.log(result.corrected); // "바나나가 있다"
}

// 2. 초성 추출
const chosung = korrect.chosung("가느다란 물방울"); 
console.log(chosung); // "ㄱㄴㄷㄹ ㅁㅂㅇ"

// 3. 조사 자동 선택
const word = "사과";
const sentence = `${word}${korrect.pickJosa(word, ["은", "는"])} 맛있다.`;
console.log(sentence); // "사과는 맛있다."

// 4. 영타/한타 변환
console.log(korrect.toKo("dkssud")); // "안녕"
console.log(korrect.toEn("안녕"));   // "dkssud"
console.log(korrect.toRoman("나비")); // "nabi"
```

## API 상세

### `check(text)`
네이버 맞춤법 검사기 API를 사용하여 문장을 검사합니다.
- **Parameters**: `text` (string)
- **Returns**: `Promise<object>`
  - `original`: 원본 문장
  - `corrected`: 교정된 문장
  - `errors`: 에러 배열 (wrong, right, start, end)
  - `errata_count`: 에러 개수

### `chosung(word)`
- **Parameters**: `word` (string)
- **Returns**: `string` (추출된 초성)

### `pickJosa(word, josa)`
- **Parameters**: 
  - `word`: 대상 단어
  - `josa`: `["은", "는"]` 형태의 조사 쌍
- **Returns**: `string` (선택된 조사)

### `toEn(word)` / `toKo(word)` / `toRoman(word)`
- 한글↔영어 키보드 입력 변환 및 로마자 표기법 변환을 수행합니다.

## 프로젝트 구조

```text
korrect/
├── lib/          # 핵심 로직 (check, chosung, pickJosa, trans)
├── tests/        # 테스트 스크립트
├── index.js      # 엔트리 포인트
└── package.json
```

## 링크

- **개발자**: [https://jeeks.my](https://jeeks.my)
- **GitHub**: [https://github.com/jikwxng/korrect](https://github.com/jikwxng/korrect)
- **NPM**: [https://www.npmjs.com/package/korrect-js](https://www.npmjs.com/package/korrect-js)

## 라이선스

이 프로젝트는 [MIT License](LICENSE)를 따릅니다.
