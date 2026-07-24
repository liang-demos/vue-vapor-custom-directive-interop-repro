# Vue Vapor custom directive interop reproduction

This reproduces a custom directive target mismatch when a Vapor parent renders
a VDOM child.

The same Vapor custom directive is applied in two isolated apps:

- Vapor → Vapor: receives the child's root `HTMLButtonElement`.
- Vapor → VDOM: receives an interop `RenderContextFragment`, then throws when
  the directive calls `setAttribute`.

The project uses Vue `3.6.0-rc.2`. The relevant compiler and runtime files are
unchanged between that release and Vue Core commit `3c9499c35`.

## Run

```sh
pnpm install
pnpm dev
```

Open the page and the browser console. The page prints the constructor name,
`instanceof Element` result, Vapor fragment / VNode markers, and enumerable
keys of the value passed to the directive.
