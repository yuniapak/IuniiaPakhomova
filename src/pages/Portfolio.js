import Nav from '../components/Nav'
import { useState } from 'react'
import Quiz1 from '../assets/Quiz1.png'
import Quiz2 from '../assets/Quiz2.png'
import Quiz3 from '../assets/Quiz3.png'
import Game1 from '../assets/Game1.png'
import Game2 from '../assets/Game2.png'
import Game3 from '../assets/Game3.png'
import Garden1 from '../assets/Garden1.png'
import Garden2 from '../assets/Garden2.png'
import Garden3 from '../assets/Garden3.png'
import Library2 from '../assets/Library1.png'
import Library1 from '../assets/Library2.png'
import Library3 from '../assets/Library3.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Arrow from '../assets/icons/Arrow.png'

const Portfolio = () => {
  const [showP, setShowP] = useState(false)
  const [card, setCard] = useState('')
  const showInfo = (e) => {
    if (showP === false) {
      setShowP(true)
      setCard(e.target.className)
      console.log(e.target.className)
    } else {
      setShowP(false)
    }
  }

  return (
    <div className="portfolio">
      <div className="portfolio-nav">
        <Nav />
      </div>
      <div className="projects">
        <div className="project-card">
          <div>
            <h2>QuizCards</h2>
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay
              intervall="4000"
              transitionTime="2000"
            >
              <img src={Quiz1} className="sliderimg" alt="carouselPic" />
              <img src={Quiz2} className="sliderimg" alt="carouselPic" />
              <img src={Quiz3} className="sliderimg" alt="carouselPic" />
            </Carousel>
            <div className="link-card">
              <img
                src={Arrow}
                alt="arrow"
                className="about-lang-0"
                onClick={showInfo}
              />
              {showP && card === 'about-lang-0' ? (
                <p>
                  Built using PERN. Flash card study app, with easy
                  authentication system and user design. Allows you to create
                  your own card library and take a quiz to check your knowledge.
                  Full CRUD on cards page, to create, update, delete your cards
                  from the library.{' '}
                </p>
              ) : null}
              <a
                href="https://github.com/yuniapak/quizcards"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://quizardsapp.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-3">
            <h2>Maze Game: 'Sweet pea'</h2>
            <div>
              <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay
                intervall="4000"
                transitionTime="2000"
              >
                <img src={Game1} className="sliderimg" alt="carouselPic" />
                <img src={Game2} className="sliderimg" alt="carouselPic" />
                <img src={Game3} className="sliderimg" alt="carouselPic" />
              </Carousel>
            </div>
            <div className="link-card">
              <img
                src={Arrow}
                alt="arrow"
                className="about-lang-2"
                onClick={showInfo}
              />
              {showP && card === 'about-lang-2' ? (
                <p>
                  Built with vanilla JavaScript, HTML and CSS. Game with
                  animated character named 'Pea', that moves using arrow
                  buttons, has 3 levels and live bar. To win a game you have to
                  move through Maze and don't hit the wall, each hit will take
                  one live away.
                </p>
              ) : null}
              <a
                href="https://github.com/yuniapak/Maze"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://devilish-plants.surge.sh/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Game
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-4">
            <h2>Pocket Library</h2>
            <div>
              <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay
                intervall="4000"
                transitionTime="2000"
              >
                <img src={Library1} className="sliderimg" alt="carouselPic" />
                <img src={Library2} className="sliderimg" alt="carouselPic" />
                <img src={Library3} className="sliderimg" alt="carouselPic" />
              </Carousel>
            </div>
            <div className="link-card">
              <img
                src={Arrow}
                alt="arrow"
                className="about-lang-3"
                onClick={showInfo}
              />
              {showP && card === 'about-lang-3' ? (
                <p>
                  Built using PERN. Library social media app, where you can find
                  your friends, follow them, see your friends libraries and
                  reviews, search for any book, built using third-party API
                  'GoogleBooks', create and add them to the libraries, using
                  full CRUD operations on review you can rate books, includes
                  simple user settings to change password and update user
                  information like profile picture and username. You can try my
                  app by login as email: user@test.com password: user1234
                </p>
              ) : null}
              <a
                href="https://github.com/yuniapak/My_Library"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://pocketlibrary.herokuapp.com/search/book/fvlHAgAAQBAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="about-lang-1">
            <h2>My Garden</h2>
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              intervall="4000"
              transitionTime="2000"
            >
              <img src={Garden1} className="sliderimg" alt="quiz1" />
              <img src={Garden2} className="sliderimg" alt="quiz2" />
              <img src={Garden3} className="sliderimg" alt="quiz2" />
            </Carousel>
            <div className="link-card">
              <img
                src={Arrow}
                alt="arrow"
                className="about-lang-1"
                onClick={showInfo}
              />
              {showP && card === 'about-lang-1' ? (
                <p>
                  {' '}
                  Built using MERN. Gardening App that allows you to find any
                  sort of information about plants and how to care about garden,
                  has a built in search bar to find right plant. Function for
                  companion planting that allows you to see what would be best
                  planted with each other, using full CRUD you can add plant to
                  the cart and make a chart for companion plants out of your
                  cart.{' '}
                </p>
              ) : null}
              <a
                href="https://github.com/yuniapak/Your-Garden"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://github.com/yuniapak/Your-Garden"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web
              </a>
              <div>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Portfolio
