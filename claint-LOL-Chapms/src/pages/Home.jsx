import { useState, useEffect } from "react";
import Champions from "../components/Champions";
import Search from "../components/Search";
import RoleFilter from "../components/RoleFilter";
const Home = () => {
  const [champions, setChampions] = useState([]);
  const [allChamps, setAllChamps] = useState([]);
  const [tags, setTags] = useState([])

  useEffect(() => {
    const fetchAll = async () => {
      const versions = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
      const [latest] = await versions.json();
      const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latest}/data/en_US/champion.json`);
      const data = await res.json();
      const champs = Object.values(data.data);
      setAllChamps(champs);
      setChampions(champs);

    const uniqueTags = [...new Set(champs.flatMap(champ => champ.tags))].sort();
      setTags(uniqueTags)
      console.log(uniqueTags)
    };
    fetchAll();
  }, []);

  return (
    <div className="home">
      <h1 className="title">LoL Champions</h1>
        <Search allChamps={allChamps} setChampions={setChampions} />
        <RoleFilter allChamps={allChamps} setChampions = {setChampions} tags={tags}/>
        <Champions champions={champions} />
    </div>
  );
};

export default Home;