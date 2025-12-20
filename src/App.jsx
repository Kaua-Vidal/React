import {v4 as uuid} from 'uuid';
import { useState } from 'react';

import { Container } from './styles'

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');


  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    setList([...list, {id: uuid(), inputTask}])
  }

  return (
    <Container>
      <input onChange={inputMudou} type="text" placeholder="O que tenho para fazer..."/>
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.inputTask}</li>
          ))
        }
      </ul>
    </Container>
  )
}

export default App
