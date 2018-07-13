# @comocapital/eslint-config
Наш внутренний eslint конфиг. За основу взят конфиг eslint-config-xo и eslint-config-google. Также добавлены используемые в XO плагины.

### Usage

```js
npm i -D @comocapital/eslint-config eslint@4 prettier@1.10.2
```

И добавить в `package.json` следующее:
```json
{
  "eslintConfig": {
    "extends":"@comocapital"
  }
}
```

### License

MIT, 2018 &copy; Como Capital
