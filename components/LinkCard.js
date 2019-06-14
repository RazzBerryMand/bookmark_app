import React from "react";

const LinkCard = props => {
  const linkImageStyle = {
    backgroundImage:
      'url("https://static.thenounproject.com/png/225966-200.png")'
  };

  const mappedData = props.cards.map((card, index) => {
    return (
      <div key={index} className="linkCard">
        <div className="linkCardImage" style={linkImageStyle} />
        <div className="linkCardLink">
          <h2>
            <a href={card.linkHref} target="blank">
              {card.linkName}
            </a>
          </h2>
        </div>
      </div>
    );
  });

  return <React.Fragment>{mappedData}</React.Fragment>;
};

export default LinkCard;
