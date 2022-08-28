import { ButtonGeneradorNum } from './button'

export const ActionButtons = (props)=>{

    return(
                <div className="columns is-centered is-gapless is-2-mobile">
                    <div className="column is-3 mt-4" ><button className="button is-success is-light" onClick={()=>props.setHideMe(props.hideMe)}>Cambiar numero limite</button></div>
                    <div className="column is-2 mt-4 " > <ButtonGeneradorNum setShowProgress={props.setShowProgress} numLimit={props.limit} setNumber={props.setNumber} /></div>
                </div>
    )

}