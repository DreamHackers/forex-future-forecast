# spa-service
next hackathon candidate repository

２つ目のハッカソン用のリポジトリ

## はじめに

* issueを作ってください

[こちら](https://github.com/springhackathon/spa-service/issues)へ

# つぎに
* まずは、[このイシュー](https://github.com/springhackathon/spa-service/issues/1)にある環境を構築してみる→hello,worldでいいと思う
* 何を作るかは[こっち](https://github.com/springhackathon/spa-service/issues/2)に

# Develop

## 初期設定・インストール
```.sh
git clone git@github.com:DreamHackers/spa-service.git
cd spa-service
npm install
```

## 起動
```.sh
node app.js
```

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
