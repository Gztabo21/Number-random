import React from 'react'
import {randomNumber} from '../tools'

export const ButtonGeneradorNum = (props) =>{
        const {numLimit,setNumber,setShowProgress} =props
        return(
            <button className="button is-info" onClick={()=>randomNumber(numLimit,setNumber,setShowProgress)}>
                Generar un numero
            </button>
        )
}