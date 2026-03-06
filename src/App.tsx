import { SubnetService } from './services/SubnetService'

function App() {

  const result = SubnetService.calculate(
    "192.168.50.50",
    "/28"
  )

  const resultArray: string[] = Object.values(result).map(val => String(val));

  console.log(result)

  return (
    <div className='flex flex-col items-center justify-center'>
      {resultArray.map((val) => 
        <label>{val}</label>
      )}
    </div>
  )
}

export default App
