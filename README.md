﻿# useIdlehookNpmPackage-
 
Installation
npm i @sonerer/npmpaket

Basic usage
import useIdle from 'your-package-name';

const App = () => {
  const isIdle = useIdle(5000);

  return <div>{isIdle ? 'You are idle!' : 'You are active!'}</div>;
};
