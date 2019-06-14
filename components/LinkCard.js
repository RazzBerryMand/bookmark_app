import React from "react";

const LinkCard = props => {
  const linkImageStyle = {
    backgroundImage:
      'url("https://static.thenounproject.com/png/225966-200.png")'
  };

  return (
    <React.Fragment>
      <div className="linkCard">
        <div className="linkCardImage" style={linkImageStyle} />
        <div className="linkCardLink">
          <h2>
            <a href="#">Some link!</a>
          </h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LinkCard;
