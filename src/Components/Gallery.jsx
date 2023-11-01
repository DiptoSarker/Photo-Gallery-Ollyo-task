import "../Styles/gallery.css";
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
import Card12 from "./Cards/CArd12";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const cardComponents = [
  Card1, // Remove the <Card1 /> syntax
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

const Gallery = ({ onCardSelect }) => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div
            className="gallery"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cardComponents.map((CardComponent, index) => (
              <Draggable
                key={index}
                draggableId={index.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    className={`card card${index + 1}`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <CardComponent onCardSelect={onCardSelect} index={index} />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Gallery;
