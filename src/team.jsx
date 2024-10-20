import { useState } from "react";

export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAdd2=()=>{
     const newTeam = team + 1;
         setTeam(newTeam)

    }
    const handleReduce2=()=>{
     const newTeam = team - 1;
         setTeam(newTeam)

    }
   
    return(
        <div style={{border:'2px solid tomato'}}>
            <h2>Players :{team}</h2>
            <button onClick={handleAdd2}>Add</button>
            <button onClick={handleReduce2}>Reduce</button>
        </div>
    )
}