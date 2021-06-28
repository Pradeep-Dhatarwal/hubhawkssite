import React from 'react'
import breadcrumb from "../../images/SVG/breadcrumb.svg"
import close from "../../images/SVG/close.svg"
function NavToggle(props) {
  const {
    navOpen,
    navIsAnimating,
    toggleNavHandler,
  } = props;
      return (
        <header
          className="header"
        >
          <div className="wrap">
            <div
              className={`nav-button${navIsAnimating ? ' is-animating' : ''}`}
              type="button"
              aria-label="Toggle Navigation"
              onClick={event => toggleNavHandler(event)}
            >
              <span className={`label--nav-closed${!navOpen ? ' active' : ''}`}>
                <img src={breadcrumb} alt="toggle" width="30px" />
              </span>
              <span className={`label--nav-open${navOpen ? ' active' : ''}`}>
              <img src={close} alt="toggle" width="30px" />
              </span>
            </div>
          </div>
        </header>
      );
}

export default NavToggle
