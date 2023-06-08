import React from 'react';
import Pokemon from "./Pokemon";
import "./Pokedex.css";

function Pokedex (props) {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-Pokemon">
                {props.pokemons.map(p => 
                    <Pokemon
                        id={p.id}
                        key={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience}
                    />
                )}                
            </div>

        </div>
    );
}



export default Pokedex;