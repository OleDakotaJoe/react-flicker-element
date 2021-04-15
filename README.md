# React Flicker Element

Thanks for checking out the `react-flicker-element`.

This is a simple project designed to easily allow css classes to be applied and removed, at seemingly random intervals, to produce a flickering 
effect. 

The package currently only supplies the functionality to apply and remove the css classes, and it will be necessary for you to write the css classes that will be applied
The expected use is that you change colors, shadows, etc, to make it look like an item is glowing and flickering. 

## Getting Started
To view a live demo, visit https://codesandbox.io/s/elastic-jackson-g13uo

### Installation
In your terminal run the command `npm install react-flicker-element`

### Usage
In its most basic form you can simply wrap an element with the ReactFlicker component, and supply it with 2 props:
`persistentClassName` & `flickerClassName`. 
The component has default values for the flicker interval and duration, but can be overridden by supplying props.
The Child element contained by this component MUST be a html element.

Example basic Usage:

```js

import OrderOnlineButton from "./order-online-button";
import "./styles.scss";
import FlickerElement from "./ReactFlicker";

export default function App() {
    return (
        <div>
            <FlickerElement persistentClassName="makes-color-of-text-blue" flickerClassName="makes-color-of-text-gray">
                <span>HELLO FLICKER</span>
            </FlickerElement>
        </div>
    );
}


```

In this usage the ENTIRETY of the `span` elements contents will be blue primarily, and occasionally flicker to gray. 

Simple!


You can adjust all the following props for a more custom look: 
```js
    flickerMaxDuration // Integer, greater than 0 : Maximum amount of time that the flickerClassName is applied // 
    flickerMinDuration  // Integer, greater than 0 : Minimum amount of time that the flickerClassName is applied // 
    flickerIntervalMax // Integer, greater than 0 : Maximum amount of time in-between flickers // 
    flickerIntervalMin // Integer, greater than 0 : Maximum amount of time in-between flickers // 
    persistentClassName // This class name will be applied at all times
    flickerClassName // This class name will only be applied while the flicker is active
```


