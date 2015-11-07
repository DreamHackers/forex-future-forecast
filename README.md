# fx-future-forecast
必勝！FX未来予想チャート徹底比較についてのリポジトリです

# Develop

## 初期設定・インストール
```.sh
git clone git@github.com:DreamHackers/fx-future-forecast.git
cd spa-service
npm install
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
├── Gruntfile.js 
├── README.md
├── app.js → サーバサイドの処理を書いて下さい
├── index.html → UIはこちらに書いて下さい
├── node_modules → npm install後生成されます
├── package.json → 新しいパッケージを追加する時はこちらに直接書かずに npm install --save-dev hogeとして下さい
└── public
    ├── css → cssファイルを突っ込んで下さい
    ├── img → imageファイルを突っ込んで下さい
    └── js → javascriptファイルを突っ込んで下さい
```
