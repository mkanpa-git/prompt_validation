# Childcare Wizard UI

This example demonstrates a modular multi-step intake form generated from `childcare_form.json` and using the endpoints defined in `childcare_openapi.yaml.txt`.

## Features

- **Modularity**: components are split using an atomic folder structure under `src/components`.
- **Domain Logic**: form state and visibility rules can be derived from the JSON spec fields such as `visibilityCondition`.
- **State Store**: form progress and data are managed via Zustand store located in `src/store/formStore.ts`.
- **Multi-Step Navigation**: the `Stepper` component handles next/back controls and highlights the current step.
- **RBAC**: `useFormStore` exposes a `role` property. UI elements can check this role to enforce restrictions described in the service's role access map.
- **Design System**: previously relied on a design system, but atoms now use basic HTML elements.
- **Form Lifecycle**: API calls for saving drafts and submission would use the operations described in `childcare_openapi.yaml.txt`.
- **Testing**: the project is ready for Playwright tests via `npm test`.
- **Accessibility & Mobile**: components use semantic markup and ARIA attributes where applicable.

Run tests (no real tests included) with:

```bash
npm test
```

## Local Development

To run the web application locally:

```bash
npm install
npm run dev
```

This starts a Vite dev server (usually on http://localhost:5173) where the wizard is available.
