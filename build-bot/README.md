# gatsby build webhook

1. directus server 的 `Settings > Webhooks` 建立一個 webhook
2. 將所有需要的監聽的事件都選取起來。(`Triggers` 中的 `Actions` 跟 `Collections`。)
3. `main.js` 中設定目標資料夾。(`const projectPath = '';`)
4. 啟動此 server

```sh
yarn start
```
