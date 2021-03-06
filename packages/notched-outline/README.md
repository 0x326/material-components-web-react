# React Notched Outline

A React version of an [MDC Notched Outline](https://github.com/material-components/material-components-web/tree/master/packages/mdc-notched-outline).

## Installation

```
npm install @material/react-notched-outline
```

## Usage

```js
import NotchedOutline from '@material/react-notched-outline';

const MyComponent = () => {
  return (
    <NotchedOutline />
  );
}
```

## Props

Prop Name | Type | Description
--- | --- | ---
className | String | Classes to be applied to the root element.
isRtl | Boolean | Shifts notch to right side if true.
notch | Boolean | Toggles between notched outline and idle outline state.
notchWidth | Number | Width of the notch in the outline.

## Sass Mixins

Sass mixins may be available to customize various aspects of the Components. Please refer to the
MDC Web repository for more information on what mixins are available, and how to use them.

[Advanced Sass Mixins](https://github.com/material-components/material-components-web/blob/v0.35.0/packages/mdc-notched-outline/README.md#sass-mixins)
