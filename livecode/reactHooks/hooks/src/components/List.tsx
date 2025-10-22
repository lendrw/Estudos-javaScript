import { useEffect, useState } from "react";

interface ListProps {
  getItems: () => string[];
}

const List: React.FC<ListProps> = ({ getItems }) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    console.log("buscando itens do db");
    setItems(getItems);
  }, [getItems]);

  return (
    <div>
      {items.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
};

export default List;
