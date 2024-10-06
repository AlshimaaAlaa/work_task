import React, { useState, useEffect } from 'react';

const initialItems = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
  { id: '4', content: 'Item 4' },
];

const SortableList = () => {
  const [items, setItems] = useState(initialItems);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  // Handle the start of dragging
  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  // Handle dragging over an item
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle dropping the dragged item
  const handleDrop = (index) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);
    setDraggedItemIndex(null);
  };

  // Update the order of the items after drop
  useEffect(() => {
    const orderedItems = items.map((item, index) => ({
      id: item.id,
      order: index + 1,
    }));
    console.log(orderedItems); 
  }, [items]);

  return (
    <div style={{ width: 300, backgroundColor: '#f0f0f0', padding: 8 }}>
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          style={{
            userSelect: 'none',
            padding: 16,
            margin: '0 0 8px 0',
            backgroundColor: '#fff',
            border: '1px solid lightgray',
            borderRadius: '4px',
            cursor: 'move',
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default SortableList;
