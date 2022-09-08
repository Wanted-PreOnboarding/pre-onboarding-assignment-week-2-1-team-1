# 📺 I.M.LABFLIX

## 목차

<details>
<summary>펼쳐보기 🗂</summary>

[1. 프로젝트 Config](#1-프로젝트-config)

- 데모페이지
- 코딩컨벤션
- 팀원 소개

[2. 설치, 환경설정, 실행방법](#2-설치-환경설정-실행방법)

- 설치, 환경 설정
- 실행

[3. 구현된 기능 목록](#3-구현된-기능-목록)

- 공통
- movies / 리스트 페이지
- movies / 상세 페이지
- search

[4. 사용한 프레임워크및 라이브러리](#4-사용한-프레임워크및-라이브러리)

[5. 캐쉬에 대하여](#5-캐쉬에-대하여)

[6. 폴더 구조](#6-폴더-구조)

- 폴더 구조 설명
- 폴더 구조 tree
</details>

---

## 1. 프로젝트 Config

### (1) [데모페이지](https://wanted-pre-onboarding-fe-6-2-1-ntnevqp94-preonboardfe1.vercel.app/)

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
  - [x] API Response 데이터 캐쉬 (라이브러리 사용)
  - [x] 캐싱에 대한 간단한 개념을 글로 작성해서 README에 포함 or 링크형태로 연결해주세요
- movies / 리스트 페이지
  - [x] 한번에 가져올 데이터 최대 20
  - [x] 제목, 포스터, 별점 표시
  - [x] 포스터 없는 경우, 대체 이미지 사용
- movie / 상세 페이지
  - [x] 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
  - [x] 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
  - [x] 그 외의 데이터 추가 활용 여부는 자유
- search
  - [x] 제목, 포스터, 별점
  - [x] 포스터 없는 경우, 대체 이미지 사용

## 4. 사용한 프레임워크및 라이브러리

- ## [axios](https://axios-http.com/)

  - _호환성_: 기존의 fetch의 경우 웹 브라우저가 구버전일경우 지원하지 않는 경우가 많습니다. axios의 경우 훨씬더 지원 범위가 넓기 때문에 사용합니다.

  - _가독성_: fetch는 url을 입력할때, Param이나 Query부분을 문자열 형태로 길게 작성해야하는 반면, axios는 객체의 형태로 Param, Query를 설정할 수 있습니다.

  - _편의성_: 보통 fetch를 이용하는 경우 데이터를 전달받을 때마다 JSON 형태로 변환해주는 작업이 필요합니다. 하지만 axios는 자동으로 JSON으로 변환해 주기 때문에 더 편하게 사용할 수 있습니다.

  - _보안_: axios를 사용할 경우 Client Side에서 발생할 수 있는 XSRF 공격을 막아줍니다.

- ## [@emotion](https://emotion.sh/docs/introduction)

  - emotion은 `keyframe`을 제공합니다. 따라서 모바일 화면과 애니메이션에 대응하기 용이할 것 같다는 이유로 선정하였습니다.

- ## [TanStack Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)

  - 이번 프로젝트는 클라이언트 데이터보다 서버 데이터에 의존적인 서비스를 구현하는 과제였습니다. 과제 요구사항에 캐쉬에 대한 이해도와 사용을 요구한다는 점에서 저희는 가장 대중적인 `TanStack Query`(React-Query)를 선택하였습니다. 대중적이라는 말은 그만큼 자료를 찾기 쉽고 에러 시에 빠른 패치가 가능하기 때문입니다.

- ## [React Infinite Scroller](https://github.com/danbovey/react-infinite-scroller)
  - `TanStack Query`에서 제공하는 `useInfiniteQuery`와의 호환성이 좋아서 채택하였습니다. *useInfiniteQuery*는 여러 값을 반환합니다. 그중 `fetchNextPage`와 `hasNextPage`를 통해서 *React Infinite Scroller*가 다음으로 실행해야하는 함수와 페이지의 존재 여부를 파악할 수 있습니다.

## 5. 캐쉬에 대하여

> 캐쉬는 컴퓨터 공학에서 자주 등장하는 용어입니다. CPU에서 메모리에 접근하는 시간을 줄이기 위해서 데이터를 저장하기 위해 사용하는 별도의 공간입니다. 그 연장선에서 캐쉬는 자주 사용되는 데이터 등을 별도로 보관하여 보다 빠르게 데이터에 접근할 수 있도록 하는 전반적인 방법을 지칭합니다. 캐싱을 사용하면 불필요한 api fetching 등의 낭비를 줄일 수 있습니다.

## 6. 폴더 구조

- ### 폴더 구조 설명

  | 폴더           | 용도                                         |
  | -------------- | -------------------------------------------- |
  | **api**        | 공통적으로 사용되는 api를 정의하였습니다.    |
  | **components** | 페이지들 간에 공유되는 컴포넌트의 모음       |
  | **pages**      | 페이지와 페이지에서 사용되는 컴포넌트의 모음 |
  | **styles**     | 자주쓰이는 스타일과 글로벌 리셋파일          |
  | **utils**      | 재사용할수있는 모듈을 만든 폴더              |

    <details>
    <summary>🎄 폴더 tree 접기/펼치기</summary>
    <pre>
  ├── App.jsx
  ├── api
  │   ├── api.js
  │   ├── movie.js
  │   └── search.js
  ├── components
  │   ├── Footer.jsx
  │   ├── Header.jsx
  │   ├── ScrollTop.jsx
  │   ├── Skeleton.jsx
  │   └── common
  │       ├── Loader.jsx
  │       ├── MovieAdvancedCard.jsx
  │       ├── MovieCard.jsx
  │       └── Starts.jsx
  ├── hooks
  │   └── useRequest.js
  ├── index.css
  ├── index.js
  ├── pages
  │   ├── Detail
  │   │   └── Detail.jsx
  │   ├── List
  │   │   └── List.jsx
  │   ├── Now_playing
  │   │   └── Now_playing.jsx
  │   ├── Search
  │   │   ├── Search.jsx
  │   │   ├── components
  │   │   │   ├── ResultItem.jsx
  │   │   │   ├── ResultList.jsx
  │   │   │   ├── ResultSummary.jsx
  │   │   │   ├── SearchBar.jsx
  │   │   │   ├── SearchBarDetail.jsx
  │   │   │   └── SearchBarDetailList.jsx
  │   │   └── hooks
  │   │       ├── useAutoComplete.js
  │   │       └── useSearch.js
  │   ├── TopRated
  │   │   └── TopRated.jsx
  │   └── Upcoming
  │       └── Upcoming.jsx
  ├── styles
  │   ├── common.js
  │   └── reset.jsx
  └── util
      ├── debounce.js
      ├── getPoster.js
      └── querykey.js
  </pre>
  </details>
