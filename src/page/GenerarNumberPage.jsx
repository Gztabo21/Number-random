import React,{useState} from "react";
import {inputNumber, handleClick} from '../tools';
import { NumberSelected } from '../components/numberSelector';
import { NotificationError } from '../components/notificacion';
import { ActionButtons } from '../components/actionButtons';
import { InfoNumberLimit } from '../components/infoNumberLimit'

export function FormNumRamdon(){
    const [limit,setLimit] = useState(0)
    const [number,setNumber] = useState(0)
    const [hideMe,setHideMe] = useState(false)
    const [showAlert,setShowAlert] = useState(false)
    const [showProgress,setShowProgress] = useState(false)

    return(
        <>
            <InfoNumberLimit limit={limit} />
            { !hideMe && <div className="container is-max-desktop mt-2 " >
                <div className="columns is-centered is-2">
                    <div className="column is-three-fifths "><input className="input is-success" type='text' placeholder="Coloca el numero limite" onKeyUp={(e)=>inputNumber(e.target.value,setLimit)} /></div>
                    <div className="column is-2"><button className="button is-success" onClick={()=>handleClick(setHideMe,limit,setShowAlert,setNumber)}> Aceptar</button></div>
                </div>            
            </div>}
            {
                hideMe &&
                <div className="container" >
                    {showProgress && <progress className="progress is-small is-primary" max="100">15%</progress>}
                    {!showProgress && <NumberSelected number={number} />}
                    <ActionButtons setShowProgress={setShowProgress} setHideMe={setHideMe} limit={limit} setNumber={setNumber} hideMe={false} />
                </div>
            }
            {showAlert && 
            <NotificationError message={'El numero limite se encuentra en Cero o vacio.'} />
            
            }
           
            
        </>
    )
}