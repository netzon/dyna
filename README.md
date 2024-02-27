# Dynamics CRM Notes

This is a demo repository for integrating a react front end with Dynamics CRM. The demo is intially based on the tutorial from [Tutorial: Register a Single-page application with the Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-single-page-app-react-register-app) and an npm library [dynamics-web-api](https://www.npmjs.com/package/dynamics-web-api).

## Environment Variables

You need to have an `.env` file in the root of the project with the following variables:

```env
VITE_ENTRA_TENANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
VITE_ENTRA_REDIRECT_URI=http://localhost:3000
VITE_ENTRA_CLIENT_ID==xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
VITE_DYNAMICS_CRM_URL=https://org11111111.crm1.dynamics.com
```

## Scopes

- Scopes can now be empty but one should set the Enterprise Application permissions to the required scopes. 
  - Dynamics 365 Business Central
    - `Financials.ReadWrite.All`
    - `user_impersonation`
  - Dynamics CRM
    - `user_impersonation`

![Example setup of scopes](docs/readme-scopes.png?raw=true "Example setup of Scopes")

## References

- [Entites](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/entitytypes?view=dataverse-latest)
- [Functions](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/functions?view=dataverse-latest)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
