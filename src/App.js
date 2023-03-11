import List from './components/List'

function App() {
  const length = 100;
  const multipleMappings = [
    {number: 3, text: 'Falabella'},
    {number: 5, text: 'IT'},
    {number: 3 * 5, text: 'Marketplace'}];

  return (
    <div className="App">
      <List length={length} multipleMappings={multipleMappings}/>
    </div>
  );
}

export default App;
