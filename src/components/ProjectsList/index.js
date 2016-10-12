import React from "react"

import Masonry from "../Masonry"
import styles from "./index.scss"
import cx from "classnames"

const PagesList = () => {
  return (
    <Masonry>
      <article className={ cx(styles.Project, styles.netwalk) }>
        <h1>{ "Netwalk the game" }</h1>
        <p>{ "November 2015. The goal of this project was to get my"
          + " hands dirty with ReactJS library released by Facebook."
          + " Although I didn't record a video screencast of me"
          + " building the game as I was planning I learned a lot"
          + " about ReactJS and all the tools that surround it,"
          + " like Webpack - amazing module bundler, Babel - ES*"
          + " to ES5 transpiler. Also I got another chance to be"
          + " responsible for UI / UX (used Sketch for OS X as my"
          + " primary weapon) which I always enjoy doing and find it"
          + " both challenging and satisfying. Go ahead and click"
          + " the button below to try out the game."
          + " Warning: it may be addictive :)" }</p>
        <div className={ styles.ProjectLauncher_container }>
          <a href="https://netwalk.github.io/"
            className={ styles.ProjectLauncher }
            target="_blank"
          >
            <span>{ "Visit project" }</span>
            <svg viewBox="-100.9 99.1 61.9 105.9">
              <path d="M-41.7
                145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8
                1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61
                152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6
                6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6
                11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4
                0-13.9z"
              />
            </svg>
          </a>
        </div>
      </article>
      <article className={ cx(styles.Project, styles.welcometotelaviv) }>
        <h1>{ "Welcome to Tel Aviv" }</h1>
        <p>{ "I could talk endlessly about this project."
          + " It was one of the most challenging and interesting"
          + " side projects I've dealt with. I made it for the"
          + " first Tel Aviv YouGottaLoveFrontEnd 2015"
          + " conference challenge. See " }
          <a
            href="https://github.com/YouGottaLoveFrontEnd
            /challenge-2015/pull/9"
            target="_blank"
          >{ "my submission on GitHub" }</a>
          { " for more details. I went through many iterations"
            + " while working on it. The most challenging part"
            + " was to come up with an idea that would be"
            + " impressive enough while still possible to"
            + " implement in given timeframe :)"
            + " Design and UX were also a big part of the process."
            + " I've learned about product management a lot as I"
            + " was managing myself to do everything in time from"
            + " idea storming to prototyping to kicking iterations"
            + " to polishing and what's not. Besides it was a good"
            + " opportunity to try out the best practices of that"
            + " time, like using Gulp to orchestrate all the project"
            + " build routines, assets"
            + " compilation / minification / code linting. Also I"
            + " think it was first project that I didn't use jQuery"
            + " in. Check it out by clicking the button below :)"
            + " Psst, once you're there, for better effect,"
            + " scroll the page slower ;)" }
          </p>
        <div className={ styles.ProjectLauncher_container }>
          <a href="http://sergeylukin.com/yougottalovefrontend"
            className={ styles.ProjectLauncher } target="_blank"
          >
            <span>{ "I want to see it" }</span>
            <svg viewBox="-100.9 99.1 61.9 105.9">
              <path
                d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8
                1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61
                152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6
                6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6
                11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4
                0-13.9z"
              />
            </svg>
          </a>
        </div>
      </article>
      <article className={ cx(styles.Project, styles.rocket) }>
        <h1>{ "Envato remix #2 challenge" }</h1>
        <p>
          { "Little project for " }
          <a href="http://contests.envato.com/remix-02/index.html"
            target="_blank"
          >{ "Envato Remix #2 CSS challenge" }</a>
          { " that took place in July 2015. Lots of CSS tricks"
            + " learned along the way, had a chance to come up"
            + " with craziest idea I could think of, which is"
            + " a good thing sometimes :)" }
        </p>
        <div className={ styles.ProjectLauncher_container }>
          <a href="http://sergeylukin.com/envatoremix2"
            className={ styles.ProjectLauncher } target="_blank"
          >
            <span>{ "Show it to me" }</span>
            <svg viewBox="-100.9 99.1 61.9 105.9">
              <path
                d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8
                1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61
                152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6
                6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6
                11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4
                0-13.9z"
              />
            </svg>
          </a>
        </div>
      </article>
      <article className={ cx(styles.Project, styles.charts) }>
        <h1>{ "3D Bar Charts" }</h1>
        <p>
          { "Year 2012 A.D., CSS 3 is in hype, very few people"
            + " know they could transform elements in 3d perspective"
            + " using pure CSS, a bit more people know they could"
            + " create functional buttons in pure HTML / CSS that"
            + " trigger styles change of other elements. And I came"
            + " across " }
          <a href="http://jquery-3d.truematter.com/"
            target="_blank"
          >{ "this experiment" }</a>
          { " that uses jQuery and images to create 3d bar chart."
            + " So I decided why not trying new shiny CSS 3 features"
            + " to do that in pure CSS and without images? The result"
            + " was even better than I thought. I was even invited by"
            + " Codrops to write " }
          <a href="http://tympanus.net/codrops/2012/05/21/
            animated-3d-bar-chart-with-css3/"
            target="_blank"
          >{ "an article" }</a>
          { " on that, that was even better as I could try myself"
            + " as a writer on such a great blog and get lots of"
            + " feedback and traffic to my website ;) Check out"
            + " the final result by clicking the button below."
            + " Note: there is no Javascript involved, everything"
            + " is powered by CSS, pretty impressive even today"
            + " (at least to me)." }
        </p>
        <div className={ styles.ProjectLauncher_container }>
          <a href="http://tympanus.net/Tutorials/Animated3DBarChart/"
            className={ styles.ProjectLauncher } target="_blank"
          >
            <span>{ "View project" }</span>
            <svg viewBox="-100.9 99.1 61.9 105.9">
              <path
                d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8
                1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61
                152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8
                1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4
                41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"
              />
            </svg>
          </a>
        </div>
      </article>
    </Masonry>
  )
}

export default PagesList
