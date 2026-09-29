# FBB AIS Fiber - Web chat host page

A static site that embeds the **FBB Web Chat** widget from the Kore.ai Agent Platform.
Aree, the AIS Fibre collection assistant, greets visitors and helps in Thai or English.

```
index.html      page markup + widget embed
css/styles.css  page styles
js/main.js      "Start a chat" button opens the widget
```

## Run locally

```bash
npx -y serve -l 8765 .
```

Open http://localhost:8765 and click the chat bubble (bottom-right).

## Deploy with GitHub Pages

1. Push this folder to a GitHub repository.
2. Repository > Settings > Pages > Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. In Kore.ai Studio open **Deployments > Channels > Web SDK > FBB Web Chat > Configuration** and add
   `https://<your-user>.github.io` under **Allowed Origins**, then save.

## Platform details

| Item | Value |
| --- | --- |
| Project | FBB AIS Fiber (`01a0e7cc-bd78-7eed-b634-6695521782fa`) |
| SDK channel | FBB Web Chat (`01a0ebf6-88bc-7c00-9b02-722ad840b4bb`), environment `dev` |
| Public key | `fbb-web-widget` (`pk_665bed3a...`), publishable and safe in browser code |
| Widget script | `https://agents.kore.ai/api/sdk/embed/script` |
| Entry agent | Main_Agent |

## Notes

- The `pk_` key is public by design; the Allowed Origins list is what protects it.
- The widget stores a client session id in `localStorage`, so a reload resumes the same conversation.
- To add voice inside the widget: enable Voice on the channel's Configuration tab and set
  `voice-enabled="true"` and `mode="unified"` on the `<agent-widget>` element.
