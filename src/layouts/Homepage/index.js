import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"
import ProjectsList from "../../components/ProjectsList"
import Page from "../Page"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Avatar from "../../components/Avatar"
import Card from "../../components/Card"
import SocialLinks from "../../components/SocialLinks"
import Info from "../../components/Info"
import Navigation from "../../components/Navigation"

import styles from "./index.scss"
import { Link } from "react-router"

import cx from "classnames"

const numberOfLatestPosts = 20

const Homepage = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, numberOfLatestPosts)

  return (
    <Page {...props}>
      <Header>
        <Navigation nohome />
        <Card hideOverflow carpet>
          <Avatar big />
          <Info>
            <p>
              { "Read more about me in my " }
              <Link to="/resume.html">{ "Résumé" }</Link>
            </p>
            <SocialLinks cv />
          </Info>
        </Card>
      </Header>
      <div className={ styles.stage }
        data-bottom="height:°50px;"
        data-top="height:°0;"
      >

        <div className={ styles.circleContainer }
          data-bottom="bottom: 20%;"
          data-top="bottom: 0%;"
        >
          <div className={ styles.circle }></div>
        </div>

        <div className={ styles.step }
          data-bottom="border-bottom-width:°50px;"
          data-top="border-bottom-width:°0;"
        ></div>

        <div className={ styles.cube }
          data-bottom="transform: rotateX(0deg);"
          data-top="transform: rotateX(10deg);"
        >
          <div className={ styles.a }>
            <span className={ styles.label }>{ "Side Projects" }</span>
          </div>
          <div className={ styles.b }></div>
          <div className={ styles.c }></div>
          <div className={ styles.d }></div>
        </div>

        <div className={ styles.letters }
          data-bottom="transform: translateY(0rem) rotateX(-20deg)"
          data-top="transform: translateY(.9rem) rotateX(0deg);"
        >
          <span className={ styles.SideprojectsChar1 }>
            { "S" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
            { "S" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar2 }>
            { "I" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
            { "I" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar3 }>
            { "D" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
            { "D" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar4 }>
            { "E" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
            { "E" }
            </span>
          </span>
          <span className={ cx(styles.SideprojectsChar5, styles.word) }>
            { "P" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
            { "P" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar6 }
            data-bottom="transform: rotateX(65deg) rotateY(-2deg)"
            data-top="transform: rotateX(90deg) rotateY(-2deg);"
          >
            { "R" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
            { "R" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar7 }>
            { "O" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.8rem);"
            >
            { "O" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar8 }>
            { "J" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.8rem);"
            >
            { "J" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar9 }>
            { "E" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.8rem);"
            >
            { "E" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar10 }>
            { "C" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.8rem);"
            >
            { "C" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar11 }>
            { "T" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.8rem);"
            >
            { "T" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar12 }>
            { "S" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.8rem);"
            >
            { "S" }
            </span>
          </span>
        </div>
      </div>

      <section className={ styles.content }>
        <div className={ styles.projects }>
          <ProjectsList />
        </div>
      </section>

      <Header minimal />
      <div className={ styles.stage }
        data-bottom="height:°50px;"
        data-top="height:°0;"
      >
        <div className={ styles.step }
          data-bottom="border-bottom-width:°50px;"
          data-top="border-bottom-width:°0;"
        ></div>

        <div className={ styles.cube }
          data-bottom="transform: rotateX(0deg);"
          data-top="transform: rotateX(10deg);"
        >
          <div className={ styles.a }>
            <span className={ styles.label }>{ "Blog posts" }</span>
          </div>
          <div className={ styles.b }></div>
          <div className={ styles.c }></div>
          <div className={ styles.d }></div>
        </div>

        <div className={ styles.letters }
          data-bottom="transform: translateY(0rem) rotateX(-20deg)"
          data-top="transform: translateY(.9rem) rotateX(0deg);"
        >
          <span className={ styles.SideprojectsChar1 }>
            { "B" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
              { "B" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar2 }>
            { "L" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
              { "L" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar3 }>
            { "O" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
              { "O" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar7 }>
            { "G" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
              { "G" }
            </span>
          </span>
          <span className={ cx(styles.SideprojectsChar5, styles.word) }>
            { "P" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
              { "P" }
            </span>
          </span>
          <span className={ styles.BlogChar6 }
            data-bottom="transform: rotateX(65deg) rotateY(-2deg)"
            data-top="transform: rotateX(90deg) rotateY(-2deg);"
          >
            { "O" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
              { "O" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar3 }>
            { "S" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
              { "S" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar7 }>
            { "T" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
              { "T" }
            </span>
          </span>
          <span className={ styles.SideprojectsChar8 }>
            { "S" }
            <span className={ styles.shadow }
              data-bottom="transform: rotateX(70deg) translate(0, 0rem);"
              data-top="transform: rotateX(90deg) translate(0, -1.5rem);"
            >
              { "S" }
            </span>
          </span>
        </div>
      </div>
      <section className={ styles.content }>
        <div className={ styles.projects }>
          <PagesList pages={ latestPosts } />
        </div>
      </section>
      <Footer />
    </Page>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
