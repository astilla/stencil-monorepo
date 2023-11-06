# Stencil Monorepo

## Origin
Based on the full tutorial, ["Building React and Angular Component Libraries with Stencil and Nx"](https://ionicframework.com/blog/building-react-and-angular-component-libraries-with-stencil-and-nx/), on the Ionic blog and [video tutorial on Youtube](https://www.youtube.com/watch?v=p9NaM4_CdmQ)!


## Development Notes
```
nx build core-components

nx serve core-components
nx serve angular-app
nx serve react-app
```

To add to the various demo pages
* packages/core-components/src/index.html
* packages/angular-app/src/app/app.component.html
* packages/react-app/src/app/app.tsx

## To Do
* Get SCSS compiler set up based on previous project
* Work out how to set up Storybook with the monorepo and Stencil
