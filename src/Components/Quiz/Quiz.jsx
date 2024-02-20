import React, { useState } from 'react'
import './Quiz.css'
import { data } from "../../assets/data"

export const Quiz = () => {
    let [index,setIndex] = useState(0);
    let [question,setQuestion] = useState(data[index])

    const checkAns = (e,ans) => {
        if(question.ans===ans) (
            e.target.classList
        )
    }



 return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>{index+1}. {question.question}</h2>
        <ul>
            <li>question.option1</li>
            <li>question.option2</li>
            <li>question.option3</li>
        </ul>
        <button>Next</button>
        <div className='index'>1 de 5 preguntas</div>
        
        </div>
)
}
export default Quiz
