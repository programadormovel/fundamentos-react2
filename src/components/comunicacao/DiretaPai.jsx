import React from "react";
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho texto="Filho 1" numero={20}
            nerd ={true}></DiretaFilho>
            <DiretaFilho texto="Filho 2" numero={17}
            nerd ={false}></DiretaFilho>
        </div>
    )
}