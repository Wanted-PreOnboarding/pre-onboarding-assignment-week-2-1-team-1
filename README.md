# 📺 I.M.LABFLIX

## 목차

- [1. 프로젝트 Config](#1-프로젝트-config)
  - 데모페이지
  - 코딩컨벤션
  - 팀원 소개
- [2. 설치, 환경설정, 실행방법](#2-설치-환경설정-실행방법)
  - 설치, 환경 설정
  - 실행
- [3. 구현된 기능 목록](#3-구현된-기능-목록)
  - 사용자 기능
  - 관리자 기능
- [4. 사용한 프레임워크및 라이브러리](#4-사용한-프레임워크및-라이브러리)
- [5. 폴더 구조](#5-폴더-구조)
  - 폴더 구조 설명
  - 폴더 구조 tree

## 1. 프로젝트 Config

### (1) 데모페이지

### (2) [코딩 컨벤션 노션주소](https://instinctive-moustache-aba.notion.site/WPO-FE-6-1-Coding-Convention-6a0123a0196343ea88c8434a3c157812#d00f53fad5c545a4b1e2aba7f6c62f31)

### (3) 팀원 소개

| 강민규   | 백승전        | 류웅선    | 윤여건      | 김정수    | ✨최홍규 (팀장) |
| -------- | ------------- | --------- | ----------- | --------- | --------------- |
| kagrin97 | BaikSeungJeon | unsnruu   | kunnyCode   | sunpl13   | gomgun-lab      |
| upcoming | home page     | top-rated | now playing | 영화 상세 | 검색 페이지     |

## 2. 설치, 환경설정, 실행방법

- ### 설치, 환경 설정

  ```bash
  > git clone https://github.com/wanted-fe-6/wanted-pre-onboarding-fe-6-2-1.git

  > npm install
  ```

- ### 실행

  ```bash
  > npm run start // 프로젝트가 실행됩니다.
  ```

## 3. 구현된 기능 목록

- 공통
  - [x] Loading 상태 표기
  - [x] Infinite scroll
  - [x] 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동
  - [ ] API Response 데이터 캐쉬 (라이브러리 사용)
    - 캐싱에 대한 간단한 개념을 글로 작성해서 README에 포함 or 링크형태로 연결해주세요
- movies / 리스트 페이지
  - [x] 한번에 가져올 데이터 최대 20
  - [x] 제목, 포스터, 별점 표시
  - [x] 포스터 없는 경우, 대체 이미지 사용
- movie / 상세 페이지
  - [ ] 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
  - [ ] 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
  - [ ] 그 외의 데이터 추가 활용 여부는 자유
- search
  - [ ] 제목, 포스터, 별점
  - [ ] 포스터 없는 경우, 대체 이미지 사용

## 4. 사용한 프레임워크및 라이브러리

- ## [axios](https://axios-http.com/)

  - 호환성

    - 기존의 fetch의 경우 웹 브라우저가 구버전일경우 지원하지 않는 경우가 많습니다.
      axios의 경우 훨씬더 지원 범위가 넓기 때문에 사용합니다.

  - 가독성

    - fetch는 url을 입력할때, Param이나 Query부분을 문자열 형태로 길게 작성해야하는 반면, axios는 객체의 형태로 Param, Query를 설정할 수 있습니다.

  - 편의성

    - 보통 fetch를 이용하는 경우 데이터를 전달받을 때마다 JSON 형태로 변환해주는 작업이 필요합니다. 하지만 axios는 자동으로 JSON으로 변환해 주기 때문에 더 편하게 사용할 수 있습니다.

  - 보안
    - axios를 사용할 경우 Client Side에서 발생할 수 있는 XSRF 공격을 막아줍니다.

- ## [@emotion](https://emotion.sh/docs/introduction)

  - emotion은 keyframe을 제공합니다. 따라서 모바일 화면에 대응하기 용이할 것 같다는 이유로 선정하였습니다.

- ## [TanStack Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
- ## [React Infinite Scroller](https://github.com/danbovey/react-infinite-scroller)

## 5. 폴더 구조 _(수정해야함)_

- ### 폴더 구조 설명

  | 폴더           | 용도                                    |
  | -------------- | --------------------------------------- |
  | **assets/svg** | 필요한 리소스들을 모은 폴더             |
  | **components** | 각 페이지에서 각 섹션을 컴포넌트로 분리 |
  | **hooks**      | 재사용할수있는 api를 훅으로 만든 폴더   |
  | **mocks**      | api데이터와 api handler                 |
  | **pages**      | 각각 하나의 페이지를 이룬파일 폴더      |
  | **styles**     | 자주쓰이는 스타일과 글로벌 리셋파일     |
  | **utils**      | 재사용할수있는 모듈을 만든 폴더         |

  <details>
  <summary>🎄 폴더 tree 접기/펼치기</summary>
  <pre>

</pre>
</details>
