# 短網址產生器

這是一個幫使用者縮短網址的工具網站。
[短網址產生器](http://u-shorting.herokuapp.com)

![alt text](https://user-images.githubusercontent.com/68381960/181259680-e505316e-0b60-43aa-857b-50e7299fc214.png)

## Features/功能

- 首頁畫面上有一個表單，使用者可以在表單輸入原始網址，如 [https://github.com/Jennesy/url-shortener](https://github.com/Jennesy/url-shortener)；送出表單之後，畫面會回傳格式化後的短網址，如 [http://u-shorting.herokuapp.com/ePoQT](http://u-shorting.herokuapp.com/ePoQT)
- 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入你提供的短網址（如 [http://u-shorting.herokuapp.com/ePoQT](http://u-shorting.herokuapp.com/ePoQT)），瀏覽器就會導向原本的網站（如 [https://github.com/Jennesy/url-shortener](https://github.com/Jennesy/url-shortener)）
- 使用者可以按「複製網址」來複製縮短後的網址

## Environment Setup/環境建置

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon) -for development only

## Installation/專案安裝

### Clone

```
git clone https://github.com/Jennesy/url-shortener
cd url-shortener
npm install
```

### Run/執行專案

```
npm run start
```

若成功開啟伺服器你會看到：

```
Express server is running on http://localhost:3000
```

可以至 http://localhost:3000 查看網站

### Develop mode/專案開發模式

開啟此模式時，當你修改程式並存檔完畢，無須重啟伺服器，可以重新整理 http://localhost:3000 即可查看編輯效果。

```
npm run dev
```

若成功你會看到：

```
Express server is running on http://localhost:3000
```

可以至 http://localhost:3000 查看專案目前功能
