

export const NotificationError = (props)=>{
    return(
        <div className="container"> 
            <p className="notification is-danger" >{props.message}</p>
         </div>
    )
}