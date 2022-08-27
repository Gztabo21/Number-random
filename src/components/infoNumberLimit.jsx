

export const InfoNumberLimit = (props)=>{
    return(
        <div>
            <p className="content is-normal has-text-white " >Su numero limite es: <span className="tag is-info is-light is-large" >{props.limit}</span></p>
        </div>
    )
}