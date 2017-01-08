import React from "react"

import InnerPage from "../../components/InnerPage"
import { Link } from "react-router"

import image from "./image.jpg"
import styles from "./index.scss"

const Resume = (props) => (
  <InnerPage {...props} nopadding>
    <div className={ styles.root }>
      <h1>
        { "I’m experienced web builder and novice designer who is"
          + " passionate about what he is doing"
        }
      </h1>
      <small>
        { "Psst.. I'm currently looking for a full-time dream job ;)" }
      </small>
      <p>
        { "My name is Sergey Lukin. I was born and grew up in Saint-Petersburg"
          + ", Russia, and currently live in Tel Aviv, Israel. I'm father of 2"
          + " wonderful children."
        }
      </p>
    </div>
      <img src={ image } />
    <div className={ styles.root }>
      <p>
        { "I share what I learn via this blog as well as occasional articles"
          + " and side projects."
        }
      </p>
      <p>
        { "Amongst my interests are all aspects of web development, mobile"
          + " development, scalable software architecture, user experience and"
          + " user interfaces."
        }
      </p>
      <h3>{ "Background" }</h3>
      <p>
        { "I was playing Violin and Piano till age 17 (I'm eager to get"
          + " back to it)."
        }
      </p>
      <p>
        { "Between 2007 and 2011 I was helping to build Investing.com portal."
          + " There I learned back-end technologies and grasped enough"
          + " experience in front-end technologies to build Signaltrader.com"
          + " as part of Investing.com brand from scratch between 2012 and"
          + " 2016."
        }
      </p>
      <p>
        { "During my free time I read books from O’Reilly, watch screencasts"
          + " from Tuts+, Upcase, PluralSight and experiment with cutting edge"
          + " technologies myself. See what I did at " }
        <Link to="/lab">{ "my projects" }</Link>
        { " page" }
      </p>
      <h3>{ "Technical skills" }</h3>
      <dl className={ styles.skillsDiagram }>
        <dt className={ styles.skill5 } data-xrange="20" data-yrange="20">
          { "UNIX" }
        </dt>
        <dd>{ "5" }</dd>
        <dt className={ styles.skill10 } data-xrange="30" data-yrange="10">
          { "Javascript" }
        </dt>
        <dd>{ "10" }</dd>
        <dt className={ styles.skill3 } data-xrange="40" data-yrange="40">
          { "Ruby" }
        </dt>
        <dd>{ "3" }</dd>
        <dt className={ styles.skill8 } data-xrange="10" data-yrange="20">
          { "PHP" }
        </dt>
        <dd>{ "8" }</dd>
        <dt className={ styles.skill4 } data-xrange="20" data-yrange="10">
          { "RegEx" }
        </dt>
        <dd>{ "4" }</dd>
        <dt className={ styles.skill6 } data-xrange="30" data-yrange="10">
          { "HTML5" }
        </dt>
        <dd>{ "6" }</dd>
        <dt className={ styles.skill7 } data-xrange="40" data-yrange="20">
          { "Git + Vim + Tmux" }</dt>
        <dd>{ "7" }</dd>
        <dt className={ styles.skill9 } data-xrange="20" data-yrange="30">
          { "CSS" }
        </dt>
        <dd>{ "9" }</dd>
        <dt className={ styles.skill2 } data-xrange="20" data-yrange="10">
          { "C#" }
        </dt>
        <dd>{ "2" }</dd>
      </dl>
      <p>
        { "Due to the nature of my responsibilities during my employment at"
          + " Investing.com and Signaltrader.com I'm used to maintain /"
          + " enhance web applications at all levels from setting up UNIX"
          + " servers to automating routine tasks such as code deployment,"
          + " codebase consistency, QA testing, to maintaining back-end"
          + " codebase, to introducing and integrating modern front-end"
          + " technologies, to keeping CSS styles clean and scalable."
        }
      </p>
      <p>
        { "My favorite working environment is a UNIX machine, be it a FreeBSD"
          + " or OS X laptop with custom setup of VIM editor, Tmux multiplexer"
          + " and Git as a version control of my choice. Above is a diagram"
          + " demonstrating the expertise in various subjects mentioned here."
        }
      </p>
      <p>
        { "I'm @sergeylukin or @sergey_lukin on " }
        <a href="https://twitter.com/sergey_lukin" target="_blank">
          { "Twitter" }
        </a>
        { ", " }
        <a href="https://codepen.io/sergeylukin">{ "Codepen" }</a>
        { " and " }
        <a href="https://github.com/sergeylukin">{ "GitHub" }</a>
      </p>
      <p>
        { "My email is " }
        <a href="mailto:contact@sergeylukin.com?subject=Hi, Sergey!">
          { "contact@sergeylukin.com" }
        </a>
      </p>
      <p><a href="/assets/cv.pdf">{ "My CV is available for download" }</a></p>
    </div>
  </InnerPage>
)

export default Resume
