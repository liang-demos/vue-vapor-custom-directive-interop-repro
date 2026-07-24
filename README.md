# Vue Vapor custom directive interop reproduction

When a Vapor component applies a custom directive to a VDOM component, the
directive receives an interop fragment instead of the component's root element.

## Run

```sh
pnpm install
pnpm dev
```

Open the browser console. The directive logs the fragment and throws:

```text
TypeError: element.setAttribute is not a function
```
