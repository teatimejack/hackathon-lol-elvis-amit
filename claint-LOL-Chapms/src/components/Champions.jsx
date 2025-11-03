import "./chapionsStyle.css"


const Champions = ({ champions }) => {

  return (
    <div className="all-champs ">
      {champions.map(champ => (
        <div className="one-champ" key={champ.id}>
            <img src={`https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${champ.image.full}`}/>
            <h3>{champ.name}</h3>
            <p>{champ.title}</p>
            <p>{champ.tags}</p>
            <button>Add To Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default Champions;