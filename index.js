import React, { useState } from "react";
import ReactDom from "react-dom";
import LinkCard from "./components/LinkCard";
import "./main.css";

const App = () => {
  const [cardData, setCardData] = useState([
    { linkName: "google", linkHref: "https://www.google.com" }
  ]);

  const [newCard, setNewCard] = useState({ linkName: "", linkHref: "" });

  const dispatchCardSet = payload => {
    let oldArray = cardData;
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewCard({ linkHref: "", linkName: "" });
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
          <li>Bookmarks</li>
        </ul>
      </nav>

      <main>
        <div className="leftContent">
          <img src="http://chittagongit.com/images/ios-bookmark-icon/ios-bookmark-icon-29.jpg" />
          <form onSubmit={e => e.preventDefault()}>
            <h2 className="formTitle">Add a bookmark</h2>
            <div>
              <label htmlFor="linkTitle" className="formLabel">
                Enter title:
              </label>
              <input
                value={newCard.linkName}
                onChange={e =>
                  setNewCard({ ...newCard, linkName: e.currentTarget.value })
                }
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="Max 25 characters"
              />
            </div>
            <div>
              <label htmlFor="linkHref" className="formLabel">
                Enter link:
              </label>
              <input
                value={newCard.linkHref}
                onChange={e =>
                  setNewCard({ ...newCard, linkHref: e.currentTarget.value })
                }
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com/"
              />
            </div>
            <button onClick={() => dispatchCardSet(newCard)}>
              Click to add
            </button>
          </form>
        </div>

        <div className="rightContent">
          <h2 className="rightTitle">Saved bookmarks</h2>
          <LinkCard cards={cardData} />
        </div>
      </main>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
