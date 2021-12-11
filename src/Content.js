import React from 'react'


const HandleNames = () => {
  const names = ['Allen', 'Bob', 'Charlie', 'Dick'];
  const int = Math.floor(Math.random() * names.length);
  return names[int];
}

const Content = () => {
    return (
        <div>
            <p>You are such a {HandleNames()}!</p>            
        </div>
    )
}

export default Content;
