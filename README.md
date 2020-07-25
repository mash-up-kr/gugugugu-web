# gugugugu-web

## Tech Stack

- Next.js
- TypeScript
- Styled Components
- Prettier
- ESLint

## Development

```bash
yarn dev
```

## Rules

### directory structure

```bash
├── src
│   ├── components # 모든 component
│   ├── hooks
│   ├── pages
│   ├── stores
│   └── utils
└── public
```

#### Component

- 디렉토리 하위에 `index.tsx`, `index.scss`로 관리

### Style

- component 파일 안에 작성
- `Styled~` prefix 붙여서 작성

```js
const StyleHeader = styled.header`
  position: fixed;
`;

const Header = () => {
  return (
    <>
      <StyleHeader />
    </>
  );
};
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
