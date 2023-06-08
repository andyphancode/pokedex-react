import React from 'react';
import "./Pokemon.css";

function Pokemon(props) {
    let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div className="Pokemon">
            <div className="Pokemon-title"><b>{props.name}</b></div>
            <img className="Pokemon-image" src={pokemonImg} alt="A cute pokemon"/>
            <div className="Pokemon-type"><p>Type: {props.type}</p></div>
            <div className="Pokemon-exp"><p>Exp: {props.base_experience}</p></div>
        </div>
    );
}



export default Pokemon;