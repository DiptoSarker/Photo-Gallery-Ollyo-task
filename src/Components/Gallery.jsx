import "../Styles/gallery.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React from "react";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";
import Card8 from "./Cards/Card8";
import Card9 from "./Cards/Card9";
import Card10 from "./Cards/Card10";
import Card11 from "./Cards/Card11";
import Card12 from "./Cards/Card12";

const cardComponents = [
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
];

const Gallery = ({ onCardSelect, selectedCards, cards }) => {
  console.log("Selected cards IDs:", selectedCards);
  return (
    <DragDropContext>
      <Droppable droppableId="gallery">
        {(provided) => (
          <div className="all">
            <div className="featured">
              {/* <span className="txt1">Featured Image</span> */}
              <div className="ftdImg" onClick={() => onCardSelect(1)}>
                <Card1 />
              </div>
              <span className="txt1">Featured Image</span>
            </div>
            <div
              className="gallery"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map((card, index) => (
                <Draggable
                  key={card.id}
                  draggableId={card.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      key={card.id}
                      className={`card card${card.id} ${
                        selectedCards.includes(card.id) ? "selected" : ""
                      }`}
                      onClick={() => onCardSelect(card.id)}
                    >
                      {React.createElement(cardComponents[card.id - 1], {
                        key: card.id,
                        onCardSelect,
                      })}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Gallery;
