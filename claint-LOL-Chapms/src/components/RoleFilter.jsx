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
  return (
    <div>

    {numberOf?<p>{numberOf}</p>:<></>}
        {tags.map((tag)=>(
            <button key={tag} onClick={()=>handleRoleClick(tag)}>{tag}</button>
        ))}
    
    </div>
  )
}

export default RoleFilter