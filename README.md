# useIdlehookNpmPackage-
Installation npm i @sonerer/npmpaket

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

use-idle-hook is a lightweight React hook that tracks user activity (mouse movements, keyboard inputs, clicks, etc.) and determines whether the user is idle after a specified timeout period.

It’s ideal for use cases like session timeouts, user notifications, analytics tracking, and more.

🚀 Features
Easy to Use: Simple integration with just one parameter (timeout).
Customizable Timeout: Set your desired inactivity threshold.
Lightweight and Optimized: Designed for performance with modern React patterns.
Extensible: Supports customizable activity events and callbacks.


[**Live Demo**](https://github.com/SonerEr2/useIdlehookNpmPackage-.git)

## Installation:

```bash
npm i useidlehooknpmpackage-
```

or

```bash
yarn add -D useidlehooknpmpackage-
```

## Usage :

Add `UseIdle` to your component:

```js

import React from 'react';
import useIdle from 'use-idle-hook';

const App = () => {
  const isIdle = useIdle(5000); // User is considered idle after 5 seconds of inactivity

  return (
    <div>
      {isIdle ? (
        <h1>User is idle!</h1>
      ) : (
        <h1>User is active.</h1>
      )}
    </div>
  );
};

export default App;

