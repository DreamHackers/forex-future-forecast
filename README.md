# fx-future-forecast
必勝！FX未来予想チャート徹底比較についてのリポジトリです

# Develop

## 初期設定・インストール
```.sh
git clone git@github.com:DreamHackers/fx-future-forecast.git
cd fx-future-forecast
./setup.sh
```

## 起動
```.sh
node app.js
```
[こちら](http://localhost:9000/)にアクセスしてください

## 初期中身
TODO React.js対応
```
.
├── README.md
├── app.js → サーバサイドの処理を書いて下さい
├── gulpfile.js → 触らないでください
├── index.html → UIはこちらに書いて下さい
├── node_modules → npm install後生成されます
├── package.json → 触らないでください
├── public
│   ├── css → cssファイルを突っ込んで下さい
│   ├── img → imageファイルを突っ込んで下さい
│   └── js
│       ├── app.jsx → メインJSXファイル
│       ├── client.js → クライアントサイドJSファイル
│       ├── dest
│       │   ├── bundle-js.js → JSプリコンパイル済み → gulp後に生成
│       │   └── bundle-jsx.js → JSXプリコンパイル済み → gulp後に生成
│       ├── helloworld.jsx → サブJSXファイル
│       └── main.js → JSXヘッダファイル
└── setup.sh → セットアップ用のスクリプトです

```
