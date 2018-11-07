# Gimme your content punk!

This is a project to showcase what happens to a page with and without a font loading strategy and how to show content to your users while this is happening.

## Emulate locally

_[Node](https://nodejs.org) and [yarn](https://yarnpkg.com/lang/en/) are required._

  - Download or fork the repository.
  - In the root folder of the project run `yarn`.
  - With `yarn bundle` a `font.js` is created for the optimized page.
  - Finally `yarn serve` will start a server at port `5000` with the project.
  - At the index of the site, you will find links for both optimized and unoptimized cases. _It's recommended to open the pages with network and CPU throttling to emulate a mobile slow connection and see it effects on users._

## Resources

I gave a lightning talk at [dotJS](https://dotjs.io) about font loading strategies. You can find the slides [here](https://slides.com/jeremenichelli/gimme-your-content-punk/).

Also I wrote a couple of articles on this topic, one about [font loading strategies for static sites](https://jeremenichelli.io/2016/05/font-loading-strategy-static-generated-sites/) and another [one for strategies on single page applications](https://jeremenichelli.io/2018/07/font-loading-strategy-single-page-applications/), check them out!

## LICENSE

That one that I don't remember the name but that allows you to do whatever you want with the code in this repository cause it's all good and I don't care.