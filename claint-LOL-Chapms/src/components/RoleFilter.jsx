import React from 'react'
import { useState } from 'react';

const RoleFilter = ({tags, allChamps, setChampions}) => {
const [numberOf, setNumberOf] = useState('')

const handleRoleClick = (tag) => {
    const filtered = allChamps.filter(champ =>
        champ.tags.includes(tag)
        );
    setNumberOf(`Number of ${tag}s : ${filtered.length}`)
    setChampions(filtered);
}

const showAll = () => {
    setNumberOf(`Number of Champions : ${allChamps.length}`)
    setChampions(allChamps);
}
  return (
    <div>

    {numberOf?<p>{numberOf}</p>:<></>}
    <button key="all" onClick={()=>showAll()}>All</button>
        {tags.map((tag)=>(
            <button style={{margin:"0.5em"}} key={tag} onClick={()=>handleRoleClick(tag)}>{tag}</button>
        ))}
    
    </div>
  )
}

export default RoleFilter