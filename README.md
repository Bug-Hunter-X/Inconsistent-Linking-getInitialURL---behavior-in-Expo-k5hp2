# Inconsistent Linking.getInitialURL() behavior in Expo

This repository demonstrates an uncommon bug related to the Expo `Linking` API's `getInitialURL()` method.  The method inconsistently returns `null` even when the app is launched from a deep link, leading to difficulties in handling the initial URL.

## Bug Description

The `Linking.getInitialURL()` method is expected to return the initial URL of the app. However, it might return `null` even if the app is launched from a deep link.  This seems to depend on the specific circumstances under which the app is launched.

## Reproduction

1. Clone this repository.
2. Run `expo start`.
3. Try opening a deep link to the app (the exact method will depend on your Expo setup).
4. Observe the console output.  The `bug.js` file will show the inconsistent behavior.

## Solution

The `bugSolution.js` file offers a solution using an event listener that more reliably captures the initial URL, even if the app is launched directly from a deep link and `getInitialURL()` returns null.