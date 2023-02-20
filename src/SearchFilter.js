import React, { useState } from "react";

const SearchFilter = () => {
  const items = [
    { id: 1, name: "apple", category: "fruit" },
    { id: 2, name: "banana", category: "fruit" },
    { id: 3, name: "carrot", category: "vegetable" },
    { id: 4, name: "orange", category: "fruit" },
    { id: 5, name: "broccoli", category: "vegetable" },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
