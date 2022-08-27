// returna un numero.
function generarRandomNum(limit){
    return Math.floor( limit * Math.random())
}

export function randomNumber(limit,setNumber,setShowProgress){
    let numRandom = generarRandomNum(limit) 
    setShowProgress(true)

    if (numRandom === 0 ){
        numRandom = generarRandomNum(limit)
    }
    //numRandom = numRandom === 0 && generarRandomNum(limit) 
    
    setTimeout(() => {
        setShowProgress(false)
        setNumber( numRandom )
      }, 3000);
}
// keydown - input 
export function inputNumber(limit,setLimit){
    setLimit(limit)

}
// handle click
export function handleClick(setHideMe,limit,setShowAlert,setNumber){
    if (limit !== 0){
        setHideMe(true)
        setNumber(0)
    }else{
        setShowAlert(true)
    }
}
