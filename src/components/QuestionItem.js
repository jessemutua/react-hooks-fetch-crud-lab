import React, { useEffect, useState } from "react";

function QuestionItem({ question, onRender }) {
    const { id, prompt, answers, correctIndex } = question;


    useEffect(() => {
        fetch('http://localhost:4000/questions')
            .then((res) => res.json())
            .then((Question) => onRender(Question))
    }, [])


    const options = answers.map((answer, index) => ( <
        option key = { index }
        value = { index } > { answer } <
        /option>
    ));

    return ( <
        li >
        <
        h4 > Question { id } < /h4> <
        h5 > Prompt: { prompt } < /h5> <
        label >
        Correct Answer:
        <
        select defaultValue = { correctIndex } > { options } < /select> <
        /label> <
        button > Delete Question < /button> <
        /li>
    );
}

export default QuestionItem;