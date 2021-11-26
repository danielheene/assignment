# assignment-example


## problem

### description

> The task is to create a Twitter-like website. Please read through the document and try to solve the following tasks step-by-step.
> 
>  1. Create a small web application that runs completely in the browser.
>     - It must be a web-application using react and rxjs.
>     - Make sure that the application is build / running locally.
>  2. Take the tweets observable and render it as a list  
>     - Use a Twitter-like structure/style.
>     - Order the list by date descending.
>     - Do not change the tweets observable.
>  3. Tweets older than 30 secs should not be shown in the list anymore.
>  4. Add the ability to like and unlike tweets.
>     - A liked tweet must look visually different than the other tweets.
>     - Above the list of tweets is a counter that shows the number of liked tweets contained within the list.
>  5. It must be possible to toggle between "all tweets" and "liked tweets".
>  6. It must be possible to clear the list of tweets.

### data source 

```js
// rxjs is exposed by
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js
const { interval, merge } = rxjs; const { map } = rxjs.operators;
 
const createTweetSource = (frequency, account, attribute) => { 
  return interval(frequency).pipe(map(i => ({
    account,
    timestamp: Date.now(),
    content: `${attribute} Tweet number ${i + 1}`
  }))); 
}

const tweets = merge(
  createTweetSource(5000, 'AwardsDarwin', 'Facepalm'), 
  createTweetSource(3000, 'iamdevloper', 'Expert'), 
  createTweetSource(5000, 'CommitStrip', 'Funny')
); 

tweets.subscribe(console.log.bind(console));

```

---


## start this project

```bash

  yarn install
  yarn start

```

## build this project

```bash

  yarn install
  yarn build

```


---

### some notes & trade-offs:

- I was developing under `node@12.20.1` and `yarn@1.22.10` if there should be any issues due to breaking changes in
  some packages since `node@14` (a `.nvmrc` is also packed).
  
- I have tried to style the components according to the system-ui & styled-system specification. But I am not a designer and
  trying to define meaningful tokens was definitely not my best part here :)
  
- I would have liked to implement unit tests for the reducer component but I could not find a good solution to reacts own reducer
  like I would have done it with them from redux. I could only find an article in which was described to trigger actions 
  and test against the rendered visual output. That seemed a bit strange for me and not like a good workaround.
  Then I didn't spend more time on it. Due to some time loss in trying I also skipped testing the representational
  components as I would only generate snapshots of them.
  
- I did not find the time to add Storybook and add an example story to it.
