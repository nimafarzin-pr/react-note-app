import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

// also we can use props:Props and then access to paramater like this props.items
function ListGroup({ heading, items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group" >
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
          {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
