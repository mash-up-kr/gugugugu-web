# gugugugu-web

## Tech Stack

- Next.js
- TypeScript
- Sass
- Prettier
- ESLint

## Development

```bash
yarn dev
```

## Rules

### View

### Style

- module import 방식으로 적용

```js
import styles from "~/pages/hello.module.scss";

<div className={styles.hello} />;
```

### Commit

- `convention`
  - `prefix`(`context`): `message(한글로 작성)`
  - 본문도 한글로 작성
- `prefix`
  - fix
  - feat
  - docs
  - refactor
  - chore
- `context`
  - 알아서. 적당히. 예를들어 markup, npm, component, 도메인
