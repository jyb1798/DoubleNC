## 더블앤씨 기업과제 저장소입니다.

## [Go Demo🚀]

## Member별 역할분담

<table>
<tr>
<td align="center"><b>팀원<b></td>
<td align="center"><b>역할</b></td>
</tr>
<tr>
<td>지연비</td>
<td style="fontsize=16"> Nav바 / SEO 작업 </td>
</tr>
<tr>
<td>권영채</td>
<td> 고객 센터 / 상품구매 페이지 / 공통 컴포넌트 / </td>
</tr>
<tr>
<td>신원규</td>
<td> 프로젝트 매니지먼트 / 프로젝트 초기세팅 / ServerSideProps 설정 / 브랜드 페이지 / page 레이아웃 구성 / API fetch </td>
</tr>
<tr>
<td>김서윤</td>
<td> Nav바 / 캐러셀 슬라이드 / 공통 컴포넌트 / </td>
</tr>

</table>

<br/>

## 구현 요구사항

### ✅기술스택

- Next.js 와 TypeScript 를 사용하였습니다.

### ✅레이아웃 및 기능

홈

- 홈 화면의 캐러셀은 라이브러리를 사용하지 않고 직접 구현했습니다.
- 홈 화면의 카테고리 아이콘을 누르면 각 카테고리별 브랜드 페이지로 이동하도록 구현했습니다.
- 홈 화면의 땡처리콘 하위 이미지를 클릭하면 브랜드 페이지를 거치지 않고 직접 해당 상품을 구매하는 페이지로 이동합니다.

브렌드 페이지

- 브랜드 페이지의 아이콘을 누르면, 해당 브랜드의 상품목록이 조회됩니다.

상품 리스트

- 상품리스트 중 하나를 클릭하면, 상품에 대한 설명과 구매를 위한 옵션을 선택하는 페이지로 이동합니다.

상품 구매

- 상품 구매 페이지에서 옵션 선택하기 버튼을 누르면 유효기간과 할인가별 옵션 메뉴가 노출되며, 상품에 관한 설명 부분은 어두워지도록 구현했습니다.

라우팅

- 니콘내콘 모바일 웹페이지와 같게 설정했습니다.

<br/>

## 프로젝트 실행 방법

```
$ git clone https://github.com/PreOnboardingTeam-16/3rdweek-ncnc-task
$ npm install
$ npm start
```

<br/>

## 이슈정리

### 'Bottom-Up' 방식의 개발

우리팀은 지난번 과제에서 `Bottom-Up` 방식의 개발방식을 선택했습니다. 재사용할 수 있는 코드의 사용성을 높이고, 전체적인 코드가 결합되기 전에 계획을 유연하게 수정하는 등 효율성이 올라갔다고 판단하여 이번 과제에서도 동일한 방식을 선택하였습니다. `Bottom-Up` 방식의 개발을 좀 더 효과적으로 하기 위해, gather에서 수시로 커뮤니케이션을 하는 노력을 기울였습니다.

<br/>

### Next.js 사용

이번 프로젝트에서는 처음으로 Next.js를 사용하였습니다. Nav바와 같이 페이지가 이동할 때마다 유지해야 하는 컴포넌트는 \_app.tsx에서 선언하며 초기세팅 시 직접 추가해야하는 등 CRA 방식과 다른 점들이 있었습니다. 또한, 프레임워크의 특성상 메서드, 정해진 규칙대로 로직을 작성해야하는 점들도 눈에 띄었습니다. 이슈가 생길 때마다 팀원들과 적극적으로 소통하여 프로젝트 진행을 원활하게 했습니다.

<br/>

### CSR vs SSR vs 정적생성

이번 과제의 주요 고민은 렌더링 방식을 어떻게 할 것인가였습니다. 각각의 API를 작성하기 전에 SSR, CSR, 정적생성 방식 중 어떤 것을 선택할 것인지를 팀원들과 토론하였습니다. 회의 중에 정적생성 방식을 SSR과 동시에 사용할 수 없다는 점을 알게되었습니다. SSR과 CSR 방식을 선택하기에 앞서 "왜"에 대한 충분한 고민 후, 예제 코드를 함께 작성하며 Next.js의 렌더링 방식을 프로젝트에 적용했습니다.

<br/>

### [⚡구현 중 기술적 이슈들](https://determined-kingfisher-cb7.notion.site/8efd61e0d42143c1b7c20d0168100fc5)

<br/>

## 디렉토리 구조

```
├─public
│  └─Images
├─components
│  ├─APICompo
│  ├─Carousel
│  ├─Category
│  ├─CategoryContainer
│  ├─ItemContainer
│  ├─Nav
│  ├─ProductContainer
│  ├─ProductContent
│  ├─Question
│  ├─QuestionContainer
│  └─Types
├─const
├─Hooks
├─Types
├─pages
│  ├─brands
│  ├─categories
│  └─items
└─styles

```

## E2E Test

![Animation]

`cypress`를 통해 주요 로직을 테스트하였습니다.
