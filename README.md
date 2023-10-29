# vue-comp-resolve-example

This is component name resolving example.

This exmaple is monorepo.

- `packages/comp-lib`: Vue Component lib example
- `packages/app`: Vue app that is using `packages/comp-lib`

```sh
# setup
pnpm install

# build `packages/comp-lib`
pnpm build:comp

# start dev server of `packages/app`
pnpm dev

# build `packages/app`
pnpm build:app

# preview `packages/app`
pnpm preview
```