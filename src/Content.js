import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

let myList = [
    {
        id: 1,
        checked: false,
        item: "One half pound bag of chocolate covered almonds"
    },
    {
        id: 2,
        checked: true,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
]

const Content = () => {
    const [items, setItems] = useState(myList);

    const handleCheck = (id) => {
        console.log(`key: ${id}`)
        const listItems = items.map((item) =>
            item.id === id ? {...item, checked: !item.checked} : item
            );
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    return (
        <main>
            {items.length ? (
            <ul>
                { items.map((item) => (
                    <li className='item' key={item.id}>
                        <input
                            type='checkbox'
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked} />

                        <label
                            style={ (item.checked) ? { textDecoration: 'line-through'} : null }
                            onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>

                        <FaTrashAlt
                        role="button"
                        tabIndex="0"
                        onClick={ () => handleDelete(item.id) }
                        />
                    </li>
                ))}
            </ul>

            ) : (
                <h3 style={{ marginTop: '2rem' }}>Your list is empty!</h3>
            )}
        </main>
    )
}

export default Content;
