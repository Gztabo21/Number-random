import { ButtonGeneradorNum } from './button'

export const ActionButtons = (props)=>{

    return(
                <div className="columns is-centered is-gapless">
                    <div className="column is-3" ><button className="button is-success" onClick={()=>props.setHideMe(props.hideMe)}>Cambiar numero limite</button></div>
                    <div className="column is-2" > <ButtonGeneradorNum setShowProgress={props.setShowProgress} numLimit={props.limit} setNumber={props.setNumber} /></div>
                </div>
    )

}