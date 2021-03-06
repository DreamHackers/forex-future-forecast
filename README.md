

# forex-future-forecast

![logo](public/images/logo.png)

必勝！FX未来予想チャート徹底比較についてのリポジトリです。

# Summary

[![Circle CI](https://circleci.com/gh/DreamHackers/forex-future-forecast/tree/master.svg?style=svg)](https://circleci.com/gh/DreamHackers/fx-future-forecast/tree/master)
[![Join the chat at https://gitter.im/DreamHackers/fx-future-forecast](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/DreamHackers/fx-future-forecast?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

https://pollseed.gitbooks.io/fx-future-forecast-doc/content/index.html


# Develop

## 事前に必要なもの
* node.js v5系 (nvmとかで管理してください)
* npm
* pm2 (`npm install -g pm2`)

## 初期設定・インストール
```.sh
git clone git@github.com:DreamHackers/forex-future-forecast.git
cd forex-future-forecast
git checkout develop
./setup.sh
```

## mongo セッティング
https://github.com/DreamHackers/forex-future-forecast/wiki/mongodb%E7%96%8E%E9%80%9A

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

## [wiki](https://github.com/DreamHackers/forex-future-forecast/wiki)
* [gitフロー && リリース](https://github.com/DreamHackers/forex-future-forecast/wiki/git-%E3%83%95%E3%83%AD%E3%83%BC-&&-%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9)
* [version管理](https://github.com/DreamHackers/forex-future-forecast/wiki/version%E7%AE%A1%E7%90%86%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
