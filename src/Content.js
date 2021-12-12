import React from 'react'


const HandleNames = () => {
  const names = ['Allen', 'Bob', 'Charlie', 'Dick'];
  const int = Math.floor(Math.random() * names.length);
  return names[int];
}

const handleClick = () => {
    console.log("Clicked!")
}

const handleClick2 = (name) => {
    console.log(`${name} was Clicked!`)
}

const handleClick3 = (e) => {
    console.log(e.target.innerText)
}

const Content = () => {
    return (
        <main>
            <p onDoubleClick={handleClick}>You are such a {HandleNames()}!</p>    
            <button onClick={ handleClick }>Click it!</button>
            <button onClick={ () => handleClick2('Lance') }>Click it!</button>        
            <button onClick={ (e) => handleClick3(e) }>Click it!</button>        
        </main>
    )
}

export default Content;
