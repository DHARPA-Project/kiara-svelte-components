# [Svelte](https://svelte.dev/) components for [`kiara`](https://dharpa.org/kiara.documentation)

This repository contains components to display data from `kiara`, and to help interacting with `kiara`. They are written in Svelte, [learn more about Svelte in their docs](https://svelte.dev/docs).

## Developing

Clone this repository using git. Install operating system dependenices [NodeJS](https://nodejs.org/) and npm, then.

```bash
npm install  # install project dependencies, first time only
npm run dev
```

Everything inside `src/lib` is part of the component library, everything inside `src/routes` is the showcase or preview app.

## Testing

The project is set up to enable "unit" testing via [vitest](https://vitest.dev/), and browser/UI testing via [playwright](https://playwright.dev/). Run the tests with :

```bash
npm run test  # all the tests
npm run test:integration  # just the UI tests
npm run test:unit  # just the unit tests
```

## Building

To build the library:

```bash
npm run package
```

To create a production version of the showcase app:

```bash
npm run build
```

Preview the production build with `npm run preview`. The showcase app can be deployed anywhere you can host a static site, using [SvelteKit's adaper-static](https://kit.svelte.dev/docs/adapter-static). Deployment is not yet implemented.

## Publishing

Publishing the package to a package registry is not yet implemented.

To use the package in another JavaScript project with Svelte support:

- clone this repository to your machine,
- run `npm build` in this repository to build the package,
- then in your other project, run `npm install ../path/to/this-repo` to install this package as a [local path dependency](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#local-paths).

Note that when you want to update this package in your new project, you may need to delete your `node_modules` folder and run `npm install` again. This is to do with the build system (vite) interacting with local packages without version numbers. There may be a better solution, but this approach works sufficiently for now until publishing is implemented.
