# cyberedu-webapp

Work in progress

Intended design: https://www.figma.com/file/ORkv3rerirVfFih11cIO4Fps/CyberEdu

## Getting Started

1.  Install Node.js
2.  Clone project and `cd` into project folder
3.  Run `npm install` to install dependencies

Run `npm run serve` to serve files on http://localhost:8080

Before contributing:

1.  Familiarise yourself with [Vue.js](https://vuejs.org/), vue-router, and Webpack
2.  Skim through the [Vue.js Style Guide](https://vuejs.org/v2/style-guide/)

It's strongly recommended to use VSCode with the following extensions:

* Prettier
* Vetur
* TSLint

### Styling

Currently using [Buefy](https://buefy.github.io/#/) for default [Bulma](https://bulma.io/)-styled Vue components.
The options for Buefy have been set in [the App.vue file](src/App.vue).
These settings will be inherited by all other components because the components
are being used in the App.vue file through the `<router-view/>`. However, the
Sass variables (e.g. `$primary`) will _not_ be available for use in all other
components. Sass variables are not available for use outside of the component
where they have been declared.
