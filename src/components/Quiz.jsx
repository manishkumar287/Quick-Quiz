import React,{useState} from 'react';
import Questions from "./Question";


function Quiz(){

    const [currentQuestion, setQuestion]=useState(0);
    const [count, setCount]=useState(0);
//     const [clicked, setClicked]=useState(false);
    const [show,setShow]=useState(false);
    
    function nextClick(){
        //setClicked(false);
        if(currentQuestion<Questions.length-1){
            setQuestion(currentQuestion+1);
        }
        else{
            setShow(true);
        }
        
    }
    function handleClick(isCorrect){
        if(isCorrect){
            setCount(count+1);
        }
        else{
            //setClicked(true);
        }
    }

    return(<>
        {show
        ?
        <div className="final">
            <h1>Hurray Your Quiz Is Completed!!</h1>
            <h2>Your Score is {count} out of {Questions.length}</h2>
            <h3>Thanks!</h3>
        </div>
        
        :
    <div className="var">
        <header>
            <h1>Quick Quizzz </h1>
            <h2>Question {currentQuestion+1} of {Questions.length}</h2>
        </header>
        
<div className="Options">
        <div className="Question">
           <h1> {Questions[currentQuestion].question} </h1>
        </div>
        <div className="note">
            {Questions[currentQuestion].Qlist.map((a)=>(
           <li value={currentQuestion+1}>
                <button className="note-button" onClick={()=>handleClick(a.isCorrect)}>{a.answer}</button>
            </li>
            
        ))}
        </div>
        <div>
            <button className="note-button-next" onClick={nextClick}>Next</button>
        </div>
</div>

    </div>
        }
        
        </>
    )
}
export default Quiz;
