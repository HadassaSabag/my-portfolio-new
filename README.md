# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Contact form email delivery

The contact form uses EmailJS to send submissions to `hadassa313@gmail.com`.

1. Create an EmailJS email service and a template. Set the template recipient to
   `{{to_email}}`, the reply-to address to `{{reply_to}}`, and use
   `{{from_name}}`, `{{subject}}`, and `{{message}}` in the subject and body.
2. Copy `.env.example` to `.env.local` and fill in the service ID, template ID,
   and public key from the EmailJS dashboard.
3. Restart the Vite development server after changing `.env.local`.
4. Restrict the EmailJS allowed origins to the deployed site domain.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
