
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './App.css';

import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="App container">
        <header className="f-header position-relative js-f-header">
          <div className="f-header__mobile-content container max-width-lg">
            <a href="#0" className="f-header__logo">
              <svg width="104" height="30" viewBox="0 0 104 30"><title>Go to homepage</title><path d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z" fill="var(--color-contrast-higher)" /><circle cx="15" cy="15" r="15" fill="var(--color-primary)" /></svg>
            </a>

            <button className="reset anim-menu-btn js-anim-menu-btn js-tab-focus f-header__nav-control" aria-label="Toggle menu">
              <i className="anim-menu-btn__icon anim-menu-btn__icon--close" aria-hidden="true"></i>
            </button>
          </div>

          <div className="f-header__nav" role="navigation">
            <nav className="f-header__nav-grid container max-width-sm">
              <div className="f-header__nav-logo-wrapper margin-right-lg@md">
                <a href="#0" className="f-header__logo">
                  <h6>Bookstore CMS</h6>
                </a>
              </div>

              <ul className="f-header__list">
                <Link to="/" className="f-header__link js-tab-focus">BOOKS</Link>
                <Link to="/categories" className="f-header__link js-tab-focus">CATEGORIES</Link>
              </ul>

              <ul className="f-header__list margin-left-auto@md">
                <li className="f-header__item">
                  <div className="avatar avatar--lg">
                    <figure className="avatar__figure" role="img" aria-label="Emily Ewing">
                      <svg className="avatar__placeholder" aria-hidden="true" viewBox="0 0 20 20" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="6" r="2.5" stroke="currentColor" /><path d="M10,10.5a4.487,4.487,0,0,0-4.471,4.21L5.5,15.5h9l-.029-.79A4.487,4.487,0,0,0,10,10.5Z" stroke="currentColor" /></svg>
                      <img className="avatar__img" src="https://codyhouse.co/app/assets/img/avatar-img-1.svg" alt="Emily Ewing" title="Emily Ewing"></img>
                    </figure>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
