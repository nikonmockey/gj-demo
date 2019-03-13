##[Redaction](https://github.com/pavelivanov/redaction)

**Redaction** is wrapper for reducers. The main purpose is to refuse from using constants 
and dispatch method in code.

There are *Plain* and *Immutable* versions. For Plain version need to use `import {} from 'redaction'`, 
for Immutable - `import {} from 'redaction/immutable'`. This is very important to not do mistake, bcs stacktrace 
doesn't represent description what's going on and you can search for mistake too long.


### How it works

Instead reducers we use simple methods. Redaction exports `wrapReducers`, `combineReducers`, `createStore` methods.

#### wrapReducers

`wrapReducers` going over all exported reducers and return same object structure but the values 
are wrapped with `dispatch` methods. `wrapReducers` require two arguments: `reducers` and `store.dispatch` method.

Example:

#####`redux/reducers/user.js`

```
import { Map } from 'sb-immutable' 

export const initialState = Map({
  firstName: 'John',
  lastName: 'Doe',
})

export const update = (state, payload) =>
  state.mergeDeep(payload)
```

#####`redux/core/reducers.js`

```js
import store from 'redux/store'
import localReducers from 'redux/reducers'
import { wrapReducers } from 'redaction/immutable'

wrapReducers(localReducers, store.dispatch)
```

`wrapReducers` output:

```js
return {
  user: {
    update: (payload) => dispatch({ type: 'user.update', payload }),
  },
}
```

#### combineReducers

`combineReducers` going over all exported reducers and return new object there first level keys are
file names (the reducer files) and the value of these keys are functions (same as Redux reducers) 
which has two arguments: `state = initialState` and `action: { type: payload }`. On secent level of keys

Example:

#####`redux/reducers/user.js`

```
export const initialState = {
  firstName: 'John',
  lastName: 'Doe',
}

export const update = (state, payload) => ({
  ...state,
  ...payload,
})
```

#####`redux/core/reducers.js`

```js
import localReducers from 'redux/reducers'
import { combineReducers } from 'redaction/immutable'

combineReducers(localReducers)
```

`combineReducers` output:

```js
const reducers = {
  'user.update': (state, payload) => ({
    ...state,
    ...payload,
  })
}
return {
  user: {
    update: (state = initialState, action) => {
      if (action.type in reducers) {
        return reducers[action.type](state, action.payload)
      }
      return state
    },
  },
}
```

#### createStore

`createStore` has one argument, it‘s object with list of params: 
`initialState {object|Map}`, `reducers {object}`, `middleware {array}`, `enhancers {array}`. 
