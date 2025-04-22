import React, { useState } from 'react'

export const WordCounter  = () => {
    const [text,setText] = useState("")
   
    const handleWord=()=>{
        const wordCount = text.trim() === '' ? 0 : text.trim().split(" ").length;
        return wordCount;

    }
    return (
        <section className='head'>
            <div className="header">
                <h2>Word Counter</h2>
                <p>Free online character and word count tool.</p>
            </div>
            <div className="box">
                <textarea
                name='text'
                    onChange={(e)=>{setText(e.target.value)}}
                    value={text}
                    className="textBox"
                    placeholder="Type or paste your text"
                    maxLength={1000}
                />
                <button className={ text.length === 0  ? "clear" : "clearActive"} onClick={()=>setText("")}>Clear</button>
            </div>

            <div className="bButton">
                <button className="char">character: {text.length}</button>
                <button className='word'>word: {handleWord()}</button>
            </div>
        </section>
    )
}

export default WordCounter