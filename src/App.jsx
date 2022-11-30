import List from './List'
import data from './data'

function App() {
  return (
    <main>
      <section className='container'>
        <h3>0 birthdays today</h3>
      <List />
      <button onClick={() => console.log('You clicked me')}>clear all</button>
      </section>
    </main>
  )
}

export default App
