## Build Setup

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## 環境構築手順
1. Nodeのインストール（[参考](http://tech.pjin.jp/blog/2016/12/12/how_to_use_nodist/)）
    1. nodist（Nodeのバージョン管理）
    1. Node.js（最新の安定版v8.11.1を使用）
    1. npm（$ npm update -g npm）
    1. 再起動（再起動しないとパスが通らない）
1. 開発テンプレートのインストール（[参考](https://qiita.com/567000/items/dde495d6a8ad1c25fa43)）
    1. $ npm install -g vue-cli
    1. $ vue init webpack [PROJECT NAME]
    1. $ cd [PROJECT NAME]
    1. $ npm install
    1. $ npm install vue-router
    1. $ npm install vuetify --save
    1. $ npm run dev
    1. http://localhost:8080/　でアクセス
1. Visual Studio Codeの拡張
    1. VueHelper（Vueコード補完）
    1. Vetur（フォーマット）