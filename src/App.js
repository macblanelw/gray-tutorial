import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {

  let myList = [
      {
          id: 1,
          checked: false,
          item: "Drink the blood of a baby goat"
      },
      {
          id: 2,
          checked: false,
          item: "Trip an old, blind woman"
      },
      {
          id: 3,
          checked: false,
          item: "Pee in someone\' cornflakes"
      },
      {
          id: 4,
          checked: false,
          item: "Stroke a pony"
      }
  ];

  const [items, setItems] = useState(myList);

  return (


    <div className='App'>
      <Header className='App section' title='Shugar Tits Moments'/>
      <Content className='App section'
        items = {items}
        setItems = {setItems}
      />
      <Footer className='App section' />
    </div>

  );
}

export default App;
