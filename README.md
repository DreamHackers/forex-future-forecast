# fx-future-forecast
必勝！FX未来予想チャート徹底比較についてのリポジトリです

# Develop

## 事前に必要なもの
* node.js v5系 (nvmとかで管理してください)
* npm
* pm2

## 初期設定・インストール
```.sh
git clone git@github.com:DreamHackers/fx-future-forecast.git
cd fx-future-forecast
./setup.sh
```

## 起動 & 開発
```.sh
pm2 start bin/www --watch
[PM2] Spawning PM2 daemon
[PM2] PM2 Successfully daemonized
[PM2] Starting bin/www in fork_mode (1 instance)
[PM2] Done.
┌──────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────────────┬──────────┐
│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ memory      │ watching │
├──────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────────────┼──────────┤
│ www      │ 0  │ fork │ 14311 │ online │ 0       │ 0s     │ 13.645 MB   │  enabled │
└──────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────────────┴──────────┘

```
[こちら](http://localhost:9000/)にアクセスしてください

## 初期中身
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
