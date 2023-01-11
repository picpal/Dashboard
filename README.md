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
