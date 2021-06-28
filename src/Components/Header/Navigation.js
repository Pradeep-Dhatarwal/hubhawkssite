import React from 'react'

const Navigation = (props) => {
  const {
    navOpen,
    navIsAnimating,
    closeNav,
  } = props;
  const keyPressHandler = ({ key }) => {
    if (key === "Escape" && navOpen) {
      closeNav();
    }
  };
  React.useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [navOpen]);
  const classes = `${navOpen ? ' active' : ''}${navIsAnimating ? ' is-animating' : ''}`;
  return (
    <div className={`navigation-menu${classes} page`}>
      <div className="wrap">
        <div className="cols">
          <div className="col col-left col-links">
            <ul className="links">
              <li className="link">
                <a
                  href="https://en.wikipedia.org/wiki/David_Bowie"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  WHO &lt;WE&gt; ARE
                </a>
              </li>
              <li className="link">
                <a
                  href="https://images.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  HOW &lt;WE&gt; Work
                </a>
              </li>
              <li className="link">
                <a
                  href="https://www.nasa.gov/audience/foreducators/stem-on-station/ditl_eating"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  WHAT &lt;WE&gt; HAVE DONE
                </a>
              </li>
              <li className="link">
                <a
                  href="https://en.wikipedia.org/wiki/Mission_control_center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  LET’S COLLABORATE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navigation
