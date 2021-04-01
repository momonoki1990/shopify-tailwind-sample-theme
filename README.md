# shopify-tailwind-sample-theme
shopify theme using tailwind

### Build
```npx tailwindcss build src/css/application.css -o assets/application.css.liquid```
ref.:
- [Building Shopify themes with Tailwind CSS](https://dev.to/wearethreebears/building-shopify-themes-with-tailwind-css-496g)

### System
Theme Kit
ref.:
- [Shopify Theme Kit を使ったテーマ開発](https://medium.com/@yonemoto/shopify-theme-kit-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%83%86%E3%83%BC%E3%83%9E%E9%96%8B%E7%99%BA-55ced8ab3de9)
- [Shopify Theme Kit](https://shopify.dev/tools/theme-kit#reference-guides)

### Deploy
Please create config.yml and write private app password and store url, theme id with label 'default'.
```theme deploy```
