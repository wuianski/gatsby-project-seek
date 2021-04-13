# gatsby build webhook

1. directus server 的 `Settings > Webhooks` 建立一個 webhook
2. 將所有需要的監聽的事件都選取起來。(`Triggers` 中的 `Actions` 跟 `Collections`。)
3. 將 `config.temp.js` 複製並命名為 `config.js`
4. 調整 `config.js` 中的設置
5. 啟動 server

```sh
yarn start
```
