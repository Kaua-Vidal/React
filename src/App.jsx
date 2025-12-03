import {v4 as uuid} from 'uuid';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([])


  function inputMudou(event) {
    console.log(event.target.value);
    setList([{id: uuid(), task: event.target.value}])
  }

  function cliqueiNoBotao() {
    console.log("Cliquei no botão!")
  }

  return (
    <div>
      <input onChange={inputMudou} type="text" placeholder="O que tenho para fazer..."/>
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
