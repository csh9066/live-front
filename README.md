# live-front

슬랙 클론 코딩인 live 프론트엔드 입니다.

backend: [live-backend](https://github.com/csh9066/live-backend)

![로그인](https://user-images.githubusercontent.com/50465901/102872541-2d849400-4483-11eb-8c79-d5b1add89c97.gif)

![채팅1](https://user-images.githubusercontent.com/50465901/102872546-2fe6ee00-4483-11eb-939a-9b922001b2fc.gif)

![그룹채팅](https://user-images.githubusercontent.com/50465901/102872544-2f4e5780-4483-11eb-81ed-edb4e94d42e5.gif)

## Feature

- facebook, google OAuth를 이용한 인증
- 채널
  - 채널 추가
  - 채널 맴버 추가
  - 채널 삭제
  - 다대다 채팅 (이미지 업로더 가능)
- 친구
  - 친구 추가
  - 친구 삭제
  - 일대일 채팅 (이미지 업로더 가능)
  - 친구 로그인 상태 확인

## Tech Stack

- typescript
- create-react-app
- react
- redux
- redux toolkit
- antd
- socket.io-client
- styled-components
- react-quill
- axios

## Installation

Clone repository

```shell
& git clone https://github.com/csh9066/live-front.git
```

Install dependency

```shell
& yarn install
# or
& npm install
```

Set up environment variable

```shell

REACT_APP_API_URL=<YOUR API URL>
```

Start then open [localhost:3000](http://localhost:3000/)

```shell
& yarn start
# or
& npm start
```
