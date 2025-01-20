# React useEffect Bug

This repository demonstrates a common bug related to the `useEffect` hook in React. The bug involves an incorrectly specified dependency array, leading to unexpected re-renders and side effects.

## Bug Description
The `MyComponent` component uses `useEffect` to log the current `count` value. The first `useEffect` has an empty dependency array (`[]`), indicating that it should run only once on mount. However, the second `useEffect` has `[count]` as the dependency array. This causes the effect to run on every state update, leading to more console logs than expected.

## Solution
The solution involves reviewing the dependencies in the `useEffect` hook. If an effect should run only once after the initial render, the dependency array should be empty.  If an effect should run when specific values change, those values should be listed in the dependency array. This improves predictability and prevents unwanted side effects.