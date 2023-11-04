import "../../Styles/card.css";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
const Card1 = ({ item, index, type, onDropPlayer }) => {
  //const [isClicked, setIsClicked] = useState(false);

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  //   onCardSelect(index);
  // };

  const [{ isDraggble }, dragRef] = useDrag({
    type: type,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult && item) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className={`image-container`} ref={dragRef}>
      <img src={item} alt="Your moja" className={"image"} />
      <div className={`checkmark`}>✔</div>
    </div>
  );
};

export default Card1;
