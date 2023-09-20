import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const items = ['New York', 'San Franciso', 'Tokyo', 'London', 'Paris']
  const handleOnSelectedItem = (item: string) => console.log(item)
  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleOnSelectedItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}

      <Button onclick={() => setAlertVisible(true)} color="primary">
        My Button
      </Button>
    </div>
  )
}

export default App
