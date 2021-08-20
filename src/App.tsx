
import { useState } from 'react';
import './App.css'
import Dragon from './pages/Dragon'
import Mission from './pages/Mission';
import Users from './pages/Users'

function App() {

  const [option, setOption] = useState('1')

  const renderOptions = () => {
    switch(option) {
      case '1': return <Dragon />
      case '2': return <Mission/>
      case '3': return <Users />
      
    }
  }

  return (
    <div>
      <label> Escolha entre as opções: </label>
      <select onChange={e => setOption(e.target.value)}>
        <option value='1'>Dragon</option>
        <option value='2'>Mission</option>
        <option value='3'>User</option>
      </select>
      {renderOptions()}    
      </div>
  );
}

export default App;
