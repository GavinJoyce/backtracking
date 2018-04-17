# backtracking

This ember app contains example of some [Backtracking re-rendering exceptions](https://github.com/emberjs/ember.js/issues/13948) that you might come across in your app.

So far it includes:

 * [Modifying an already rendered property in a component lifecycle hook](https://github.com/GavinJoyce/backtracking/pull/1)
 * [Calling a `set` within a `get`](https://github.com/GavinJoyce/backtracking/pull/5)
 * [Emitting an action on component init](https://github.com/GavinJoyce/backtracking/pull/6)
 * [Setting a className bound property through blur events](https://github.com/GavinJoyce/backtracking/pull/13)

I'll add more cases as I come across them in my own app. Please send a PR if you have additional cases.

Ping me [@gavinjoyce](https://twitter.com/gavinjoyce) if you have any questions.

### Building

* `ember build` (development)
