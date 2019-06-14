import React from "react";
import ReactDom from "react-dom";
import "./main.css";

const App = () => {
  const linkImageStyle = {
    backgroundImage:
      'url("https://static.thenounproject.com/png/225966-200.png")'
  };

  return (
    <React.Fragment>
      <nav className="navigation">
        <a>
          <img
            src="https://static.thenounproject.com/png/225966-200.png"
            height="40px"
          />
        </a>
        <ul>
          <li>My Bookmarks</li>
        </ul>
      </nav>

      <main>
        <div className="leftContent">
          <img src="http://chittagongit.com/images/ios-bookmark-icon/ios-bookmark-icon-29.jpg" />
          <form>
            <h2 className="formTitle">Add a bookmark</h2>
            <div>
              <label for="linkTitle" className="formLabel">
                Enter title
              </label>
              <input
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="Max 25 characters"
              />
            </div>
            <div>
              <label for="linkHref" className="formLabel">
                Enter link
              </label>
              <input
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com/"
              />
            </div>
            <button>Click to add</button>
          </form>
        </div>

        <div className="rightContent">
          <h2 className="rightTitle">Saved bookmarks</h2>
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle} />
            <div className="linkCardLink">
              <h2>
                <a href="#">Some link!</a>
              </h2>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
