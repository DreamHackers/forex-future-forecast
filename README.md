[![Circle CI](https://circleci.com/gh/DreamHackers/fx-future-forecast/tree/master.svg?style=svg)](https://circleci.com/gh/DreamHackers/fx-future-forecast/tree/master)

# Summary
https://pollseed.gitbooks.io/fx-future-forecast-doc/content/index.html

# fx-future-forecast
必勝！FX未来予想チャート徹底比較についてのリポジトリです

# Develop

## 事前に必要なもの
* node.js v5系 (nvmとかで管理してください)
* npm
* pm2 (`npm install -g pm2`)

## 初期設定・インストール
```.sh
git clone git@github.com:DreamHackers/fx-future-forecast.git
cd fx-future-forecast
./setup.sh
```

## mongo セッティング
https://github.com/DreamHackers/fx-future-forecast/wiki/mongodb%E7%96%8E%E9%80%9A

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
[こちら](http://localhost:3000/)にアクセスしてください

```
