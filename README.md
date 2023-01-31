# 🍱react-momuckji

> 아주 귀여운💞 음식 추천 어플리케이션

![momuckji](https://user-images.githubusercontent.com/51310674/215766761-29fd0419-4780-4c98-8060-6b1b94a72cb2.gif)

<br />

## 🗣️ Description
리액트로 구현한 음식 추천 어플리케이션 입니다. HTTP 비동기 통신 라이브러리 `axios`와 `KAKAO 이미지 검색 API`를 사용하여 구현하였습니다.

<br />

## 🚀 Getting Started
https://momuckji.netlify.app/

<br />

## ✅ Feature
- [x] 여러가지 음식을 슬라이드로 보여주는 메인 화면
- [x] 현재 시간 표시
- [x] 카테고리에 마우스 hover시 귀여운 아이콘 보여주기
- [x] 음식 별 이미지를 KAKAO 이미지 검색 API로 가져오
- [x] 데이터 패칭 시 Context API를 통해 전역 관리
- [x] 반응형 웹 사이트

<br />

## 🗂️ Project Structure
```
momuckji
└─ src
    ├─ components ─────────────── 컴포넌트 
    │  ├─ Button.js
    │  ├─ CategoryItem.js
    │  ├─ CategoryList.js
    │  ├─ CategoryTemplate.js
    │  ├─ Clock.js
    │  ├─ HomeTemplate.js
    │  ├─ ResultTemplate.js
    │  └─ Slider.js
    ├─ context ────────────────── 데이터 패칭 context api
    │  └─ FoodContext.js
    ├─ pages  ─────────────────── 라우팅 페이지 
    │  ├─ Category.js
    │  ├─ Home.js
    │  └─ Result.js
    ├─ data 
    │  └─ foodData.js ─────────── 카테고리별 음식 리스트  
    ├─ utils ──────────────────── 유틸 함수
    │   └─ api.js ─────────────── 카카오 검색 api 함수
    ├─ App.js
    └─ index.js
```
