# TypeScript types for simpleddp

## Installation

### Yarn

```sh
yarn add --dev simpleddp-types@github:fantostisch/simpleddp-types#2.2.4-{latest tag}
```

Add the following to the top of your `.ts` file:

```
/// <reference types="simpleddp-types/simpleddp" />
/// <reference types="simpleddp-types/simpleddp-plugin-login" />
```

### npm

```sh
npm install --save-dev fantostisch/simpleddp-types#2.2.4-{latest tag}
```

Update `tsconfig.json`:

```json
"typeRoots": ["./node_modules/@types", "./node_modules/simpleddp-types"],
```

## Development

Quilt assumes the patches are not applied, but they are, so before using quilt
we have to unapply the patches: `bash setup.sh`
