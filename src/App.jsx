import { v4 as uuid } from 'uuid';
import { useState } from 'react';

import { Button, Container, Input, ToDoList } from './styles'

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');


  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), inputTask }])
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} type="text" placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.map(item => (
              <li key={item.id}>{item.inputTask}</li>
            ))
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
