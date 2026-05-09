# Korrect

한국어 텍스트 처리 및 맞춤법 검사를 위한 자바스크립트 라이브러리입니다.

## 기능

- **맞춤법 검사**: 네이버 맞춤법 검사기 API를 사용하여 문장의 맞춤법을 교정하고 에러 위치를 추적합니다.
- **초성 추출**: 단어에서 초성만 추출합니다.
- **조사 선택**: 받침 여부에 따라 적절한 조사를 자동으로 선택합니다.
- **영타/한타 변환**: 한글을 영타로, 영타를 한글로 변환하거나 로마자로 표기합니다.

## 구조

```text
korrect/
├── lib/          # 소스 코드 (chosung, pickJosa, trans, check)
├── tests/        # 테스트 코드
├── index.js      # 엔트리 포인트
└── package.json
```

## 설치

```bash
npm install korrect
```

## 테스트 실행

```bash
npm test
```

## 사용법

```javascript
const korrect = require('korrect');

// 맞춤법 검사
const result = await korrect.check("바나나가 잇다");

// 초성 추출
const chosung = korrect.chosung("가느다란 물방울"); // "ㄱㄴㄷㄹ ㅁㅂㅇ"

// 조사 선택
const wordWithJosa = korrect.pickJosa("사과", ["을", "를"]); // "사과를"

// 영타 -> 한타
const ko = korrect.toKo("dkssud"); // "안녕"
```

## API

### `check(text)`
- **text**: 검사할 문장
- **반환값**: `Promise<object>` (교정 결과, 에러 목록 등 포함)

### `chosung(word)`
- **word**: 초성을 추출할 단어
- **반환값**: `string`

### `pickJosa(word, josa)`
- **word**: 조사를 붙일 단어
- **josa**: 붙일 조사 배열 (예: `["이", "가"]`)
- **반환값**: `string`

### `toEn(word)` / `toKo(word)` / `toRoman(word)`
- 각 기능에 맞는 변환 결과를 반환합니다.
