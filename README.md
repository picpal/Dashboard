# How to Local Test

## 1. install package

```bash
npm install or npm i
```

## 2. start serve

> port 변경은 package.json file에서 "script" > "start" > 3000 을 다른 숫자로 변경하세요

```bash
npm start
```

## 3. tailwind css auto compile

```bash
npx tailwindcss -i ./src/assets/css/base.css -o ./src/assets/css/tailwind.css -w
```

## 4. browser open and insert URL

```
http://localhost:3000/
```

## tip : tailwind css minify command

```bash
npx tailwindcss -o ./src/base.css --minify
```

# CountCard data request

- CountBoard.js
  - rendering 전에 api request 해서 설정
  - header영역의 기간 select box가 변경될 때 마다 재설정되야 함
  - CountBoard.js를 호출하는 부모영역에서 change event를 관리해야 할 것 같음.
    - 부모영역에서 호출후 setState로 하위컴포넌트를 재랜더링

# section area select Box data request

- AgencyBoard.js
  - board 생성시 select box data api request 해서 설정
- ChnlBoard.js
  - board 생성시 select box data api request 해서 설정

# chart data request

- LineChartCard.js
  - api request 주석으로 표시
- PieChartCard.js
  - api request 주석으로 표시
