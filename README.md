## SSR을 위해 Next.js로 구현한 기프티콘 중고거래 페이지

## [Go Demo🚀](https://double-nc-jyb1798.vercel.app/)

## Member별 역할분담

<table>
<tr>
<td align="center"><b>팀원<b></td>
<td align="center"><b>역할</b></td>
</tr>
<tr>
<td>지연비</td>
<td style="fontsize=16"> 조건부 Nav 바 / E2E 테스트 / SEO 작업 / 배포 </td>
</tr>
<tr>
<td>권영채</td>
<td>고객 센터 / 상품구매 페이지 </td>
</tr>
<tr>
<td>신원규</td>
<td>브랜드 페이지 / API fetch </td>
</tr>
<tr>
<td>김서윤</td>
<td>공통 컴포넌트 / 캐러셀  </td>
</tr>

</table>

<br/>

## 구현 요구사항

### ✅기술스택

- NextJS
- TypeScript
- CSS Modules
- ESLint + Prettier
- Cypress

### ✅레이아웃 및 기능

#### 홈

- 홈 화면의 캐러셀은 라이브러리를 사용하지 않고 직접 구현했습니다.
- 홈 화면의 카테고리 아이콘을 누르면 각 카테고리별 브랜드 페이지로 이동하도록 구현했습니다.
- 홈 화면의 땡처리콘 하위 이미지를 클릭하면 브랜드 페이지를 거치지 않고 직접 해당 상품을 구매하는 페이지로 이동합니다.

#### Nav

- 홈 화면, 브랜드 페이지, 상품 리스트, 고객센터 등 사용자가 이동한 화면별로 보여지는 Nav가 다르도록 구현하였습니다.

#### 브렌드 페이지

- 브랜드 페이지의 아이콘을 누르면, 해당 브랜드의 상품목록이 조회됩니다.

상품 리스트

- 상품리스트 중 하나를 클릭하면, 상품에 대한 설명과 구매를 위한 옵션을 선택하는 페이지로 이동합니다.

#### 상품 구매

- 상품 구매 페이지에서 옵션 선택하기 버튼을 누르면 유효기간과 할인가별 옵션 메뉴가 노출되며, 상품에 관한 설명 부분은 어두워지도록 구현했습니다.

<br/>

## 프로젝트 실행 방법

```
$ git clone https://github.com/PreOnboardingTeam-16/3rdweek-ncnc-task
$ npm install
$ npm start
```

<br/>

### Next.js 사용

이번 프로젝트에서는 처음으로 Next.js를 사용하였습니다. Nav바와 같이 페이지가 이동할 때마다 유지해야 하는 컴포넌트는 \_app.tsx에서 선언하며 초기세팅 시 직접 추가해야하는 등 CRA 방식과 다른 점들이 있었습니다. 또한, 프레임워크의 특성상 메서드, 정해진 규칙대로 로직을 작성해야하는 점들도 눈에 띄었습니다. 이슈가 생길 때마다 팀원들과 적극적으로 소통하여 프로젝트 진행을 원활하게 했습니다.

<br/>

### CSR vs SSR vs 정적생성

이번 과제의 주요 고민은 렌더링 방식을 어떻게 할 것인가였습니다. 각각의 API를 작성하기 전에 SSR, CSR, 정적생성 방식 중 어떤 것을 선택할 것인지를 팀원들과 토론하였습니다. SSR과 CSR 방식을 선택하기에 앞서 "왜"에 대한 충분한 고민 후, 예제 코드를 함께 작성하며 Next.js의 렌더링 방식을 프로젝트에 적용했습니다.

<br/>

## 기술적 이슈

### styled-jsx 엘리먼트 width 추출

```jsx
const CarouselStyle = {
  transition: isSideImg ? '0ms' : 'transform 1s ease',
  transform: `translate(${step * CarouselWidth * -1}px)`,
};
const div = (node: any) => {
  if (node !== null) {
    setCarouselWidth(node.getBoundingClientRect().width);
  }
};
return (
  <div className={style.Container} ref={div}>
```

Next.js에서 기본적으로 내장되어있는 styled-jsx을 사용하여 스타일을 적용했다. styled-coponent와 비슷한 점이 많아 사용에는 큰 어려움이 없었지만 동적인 스타일링에 제약이 있었다. 조건부 스타일을 위해 인라인 스타일을 작성하였다. 스타일을 스플리팅하고 props로 값을 주고 받는다면 쉽게 끝날 문제였지만 지원되지 않았기에 inline style에서 스타일을 적용했다.

**`Element.getBoundingClientRect()`** 메서드는 엘리먼트의 크기와 뷰포트
에 상대적인 위치 정보를 제공하는 `DOMRect`객체를 반환한다. 나는 div의 width를 알기 위해 `getBoundingClientRect().width` 로 값을 받아왔고, 제대로 구현할 수 있었다. 매번 styled-component만 사용하다가 다른 도구를 사용해보았고, 그동안 몰랐던 함수들도 써보면서 익힐 수 있었다.

<br/>

## E2E Test
`cypress`를 통해 주요 로직을 테스트하였습니다.
(https://user-images.githubusercontent.com/64634495/159239243-18e2bfbf-c81e-4ef1-baab-385620515820.gif)



