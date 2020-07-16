import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import { Menu, WeatherExchangeRatesBlock, Footer, MainFeed, RubricFeed, Article } from './components'
import { Route, NavLink, useLocation } from 'react-router-dom';

// Custom hook for fetсhing data
const useFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://yuri-pashkevich.github.io/news/db.json')
      .then(response => response.json())
      .then(json => setData(json.articles))
  }, []);
  return data;
};

export default function App() {

  // Getting data array / Filtering data by rubric
  const articlesDataArray = useFetch().sort((a, b) => new Date(b.date) - new Date(a.date));
  const filterDataByRubric = (dataArray, rubric) => dataArray.filter(item => item.rubric === rubric);

  const gamesData = filterDataByRubric(articlesDataArray, 'games'),
        hobbyData = filterDataByRubric(articlesDataArray, 'hobby'),
        politicsData = filterDataByRubric(articlesDataArray, 'politics'),
        sportsData = filterDataByRubric(articlesDataArray, 'sports'),
        advertisingData = filterDataByRubric(articlesDataArray, 'advertising');

  // Getting one object with article depending on the path
  const location = useLocation();
  const pathNameArray = location.pathname.split('/');
  const currentArticleId = pathNameArray[pathNameArray.length - 1];
  const filteredArticle = articlesDataArray.find(item => item.id === +currentArticleId);

  // Showing and hiding burger menu
  const [visiblePopup, setVisiblePopup] = useState(false);
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  }
  const burgerRef = useRef();
  const handleOutsideClick = event => {
    if (!event.path.includes(burgerRef.current)) {
      setVisiblePopup(false)
    }
  }
  const onScrollHide = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setVisiblePopup(false)
    }
  }
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', onScrollHide);
  }, [])

  // Responsive breaks for menu
  // const Desktop = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 769 })
  //   return isTablet ? children : null
  // }
  // const TabletOrMobile = ({ children }) => {
  //   const isMobile = useMediaQuery({ maxWidth: 768 })
  //   return isMobile ? children : null
  // }

  // Scroll to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
 
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="logo-wrapper">
            <NavLink exact to="/" className="logo-link">
              <img className="logo" src="./svg/logo.png" alt="img"></img>
            </NavLink>
            <WeatherExchangeRatesBlock />
            <div ref={burgerRef} className="burger-wrapper" onClick={toggleVisiblePopup}>
              <img className="burger-icon" src="./svg/bars-solid.svg" alt="img" />
              {visiblePopup && <Menu menutype="burger-menu"/>}
            </div>
          </div>
        </div>
        <Menu menutype="menu"/>
        <Route path="/" exact render={() => (
          <MainFeed
            allData={articlesDataArray}
            gamesData={gamesData}
            hobbyData={hobbyData}
            politicsData={politicsData}
            sportsData={sportsData}
            advertisingData={advertisingData}
          />
        )}
        />
        <Route path="/games" exact render={() => <RubricFeed data={gamesData} />} />
        <Route path="/hobby" exact render={() => <RubricFeed data={hobbyData} />} />
        <Route path="/politics" exact render={() => <RubricFeed data={politicsData} />} />
        <Route path="/sports" exact render={() => <RubricFeed data={sportsData} />} />
        <Route path="/advertising" exact render={() => <RubricFeed data={advertisingData} />} />
        <Route path="/:rubric/:article" exact render={() => <Article {...filteredArticle} allData={articlesDataArray} />} />
        <Footer />
      </div>
    </div>
  );
}