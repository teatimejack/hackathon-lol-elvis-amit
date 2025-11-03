import { useState } from "react";
const Search = ({ allChamps, setChampions }) => {
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(e.target.value);

    if (!query.trim()) {
      setChampions(allChamps);
      return;
    }

    const filtered = allChamps.filter(champ =>
      champ.name.toLowerCase().includes(query)
    );

    setChampions(filtered);
  };

  return (
    <div className="search-bar">
      <input type="text" value={value} onChange={handleSearch} placeholder="Search by name" className="search-input"/>
    
    </div>
  );
};
export default Search