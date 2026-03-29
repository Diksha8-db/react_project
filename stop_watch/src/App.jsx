import './App.css'
import Button from './components/Button'

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center my-auto bg-black">

        <h1>STOPWATCH</h1>

        <div className="text-gray text-xl">10:00:00</div>

        <div>
        <Button Label="Submit"></Button>
        <Button Label="Reset"></Button>
        </div>
        
      </div>
    </>
  )
}

export default App