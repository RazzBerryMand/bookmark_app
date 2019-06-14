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
          <img src="https://static.thenounproject.com/png/225966-200.png" />
          <form>
            <h2 className="formTitle">Add a bookmark</h2>
            <div>
              <label for="linkTitle" className="formLabel">
                Enter a title
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
                Enter a link
              </label>
              <input
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com/"
              />
            </div>
            <button>Add bookmark </button>
          </form>
        </div>

        <div className="rightContent">
          <div>
            <div style={linkImageStyle} />
            <div>
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
