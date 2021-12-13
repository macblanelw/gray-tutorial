import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';


const Content = ( { items, setItems }) => {

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
