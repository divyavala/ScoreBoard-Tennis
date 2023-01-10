import React,{useEffect,useState} from 'react'
import Server from './Server'
import Receiver from './Receiver'
const possibleScores=[
    [0,0,"0-0"],[1,1,"15-15"],[2,2,"30-30"],[3,3,"Deuce"],[4,4,"Deuce"],[0,1,"0-15"],[1,0,"15-0"],[0,2,"0-30"],[2,0,"30-0"],[0,3,"Game Receiver"],[3,0,"Game Server"],[0,4,"Game Receiver"],[4,0,"Gmae Server"],
    [2,1,"30-15"],[1,2,"15-30"],[3,1,"40-15"],[1,3,"15-40"],[4,1,"Game Server"],[1,4,"Game receiver"],[3,2,"40-30"],[2,3,"30-40"],[2,4,"Game Receiver"],[4,2,"Game Server"],[3,4,"40-A"],[4,3,"A-40"],[5,3,"Game Server"],[3,5,"Game Receiver"],[6,4,"Game Server"],[4,6,"Gmae Receiver"]
]

export default function Board() {
const [playerPoints,setPlayerPoints] =useState({player1:0,player2:0})
const [playerScore,setPlayerScore]=useState("0-0")


const handleServer=()=>{
    
const updatedPoints=setPoints(1,playerPoints)
    setPlayerPoints(updatedPoints)
    console.log(playerPoints)
}
const handleReceiver=()=>{  
    const updatedPoints=setPoints(2,playerPoints)
    setPlayerPoints(updatedPoints)
}


useEffect(()=>{
    const updatedScore=getPlayerScore(playerPoints)
    setPlayerScore(updatedScore)
},[playerPoints])


const getPlayerScore=(playerPoints)=>{
    var result=possibleScores.find((score)=>{
        console.log(score)
         return score[0]===playerPoints.player1 && score[1]===playerPoints.player2
        })
    console.log(result,"result")
    var update= result ? result[2]:"GameOver"
    console.log(update,"update")
    return update
 }



const setPoints=(number,previousPoints)=>{
    if(previousPoints.player1===4 && previousPoints.player2===3&&number===2){
    return{...previousPoints,player1:3,player2:3}
    }
    else if(previousPoints.player1===3 && previousPoints.player2===4&&number===1){
        
        return{...previousPoints,player1:3,player2:3}
    }
    else{
        return{...previousPoints,[`player${number}`]:previousPoints[`player${number}`]+1}
    }
}
const handleReset=(e)=>{
    e.preventDefault()
    setPlayerPoints({player1:0,player2:0})
    setPlayerScore("0-0")
}

  return (
   <>
    <h1>Score Board</h1>
    {console.log(playerScore,"PlayerScore")}
    <h2>{`Score:${playerScore}`}</h2>

    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
    <Server handleServer={handleServer} name="Point Server"/>
    <Receiver handleReceiver={handleReceiver} name="Point Receiver"/>

    {/* <button onClick={(e)=>{handleServer(e)}} >Point Server</button>
    <button onClick={(e)=>{handleReceiver(e)}}>Point receiver</button> */}
    </div>
    <button onClick={(e)=>{handleReset(e)}}>reset</button>
   </>
  )
}
