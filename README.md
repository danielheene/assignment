# instana-assignment 🐦

### install dependencies

```bash
yarn install
```

### start local development

```bash
yarn start
```

### build static files for delivery

```bash
yarn build
```

---

### some notes & trade-offs:

- I have developed under `node@12.20.1` and `yarn@1.22.10` if there should be any issues due to some breaking changes in
  some packages since `node@14` (an `.nvmrc` is also packed).
- I have tried to style the components according to the system-ui / styled-system specs, but I am not a designer and
  trying to define tokens is definitely not my best work here :)
- I would have liked to implement some unit tests to test the reducer but could not find a good way to test it like
  doing it with redux reducers. The only thing I have seen was an article in which was described to trigger the actions
  and test the rendered visual output from DOM. That seemed a bit strange for me and not like a good workaround. Then I
  didn't spend more time on it.
- I did not find the time to add Storybook and add an example story to it.
