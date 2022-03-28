# Simple memo app w/ react-query

react-query는 서버의 값을 클라이언트

react-query는 서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트 및 동기화, 에러핸들링 등 비동기 과정의 과정을 리엑트 앱에게 책임지게 하는 라이브러리이다.

비동기 요청, 결과에 대한 무결함을 제공하고 뷰에서 데이터를 필요로 할 때 최신화된 데이터를 참조할 수 있도록 보장한다.

클라이언트에서 서버 상태를 참조하기 위해 클라이언트 스토어에 상태를 최신화하고 유지하는데, 클라이언트 스토어를 구현하기 위해 많은 리소스를 투자해야 하지만, 그만큼의 상태의 무결함, 서버 상태와의 동기화를 기대하기 힘든 경우가 빈번하다.

## react-query에서의 state

서버와 클라이언트 상태는 구분되어야 하고 서로 다른 방식으로 다루어져야 한다는 개념하에 `global state`라는 용어를 사용하지 않고, client, server state로 구분짓는다.

`server state`는 서버에서 가져오는 데이터들도 하나의 상태로 보며, 세션간 지속되는, 비동기적인 데이터를 말한다. 여러 클라이언트에 의해 수정될 수 있으며 클라이언트에서는 서버 데이터의 스냅샷을 사용하기 때문에 클라이언트에서 보이는 서버 데이터는 항상 최신이라는 보장이 없다. 가령, 비동기 요청으로 전달받는 백엔드 DB에 저장되어 있는 데이터이다.

`client state`는 세션간 지속되고, 진행되는 동기적인 데이터이며 클라이언트가 소유하고 있고, 랜더링에 반영하기 위해 항상 최신 데이터로 업데이트한다. 가령, 리엑트 컴포넌트의 state나 동기적으로 저장되는 클라이언트 스토어의 데이터이다.

## 장점

프론트엔드 개발자로서 감당해야 하는 데이터 최신화 및 동기화, 캐싱, 중복 요청 제거, 비동기 과정의 선언적인 관리를 react query에게 위임하여 비지니스 로직에 집중할 수 있게 해주며, 각각의 선언적인 쿼리의 옵션을 부여할 수 있다.

## 설치

```
~$ yarn add react-query
```

## 종속성 주입

프로젝트의 최상단에서 `queryClient`에 대한 종속성을 이하 컴포넌트에게 주입한다. 이러한 컨텍스트는 앱에서 비동기 처리를 담당하게끔 background 계층이 된다.

```tsx
...
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```
