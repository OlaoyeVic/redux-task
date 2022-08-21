import logo from './logo.svg';
import './App.css';
import { useFetchDataQuery } from './services/covidAPI'

function App() {
  const { data, error, isLoading, isSuccess } = useFetchDataQuery();
  console.log(data)

  const results = Object.entries(data).map(([key, value]) => {
    return {[key]: [value]}
  })
  console.log(results)

  // const statess = results.map(res => results.data[0].states)

  // const statess = Object.entries(data.data).map((element => element[5].states))
  // console.log(statess)


  return (
    <div className="App">
      <h1>COVID-19 Statistics</h1>
      <div className='isErrorIsLoading'>
        {error && <p>An error occured</p>}
        {isLoading && <p>Loading...</p>}
      </div>
      {isSuccess && (results?.map(result => (
        <>
          <div key={result.id} className="headline-stats">
            <div>Total Samples Tested: {result.data[0].totalSamplesTested}</div>
            <div>Total Confirmed Cases: {result.data[0].totalConfirmedCases}</div>
            <div>Total Active Cases: {result.data[0].totalActiveCases}</div>
            <div>Discharged: {result.data[0].discharged}</div>
            <div>Death: {result.data[0].death}</div>
          </div>
          <div className='state-stats' key={result.data[0].states[0].id}>
            <br />
            <h1>Stats by states</h1>
            <div className='state'>
            <div>State: {result.data[0].states[0].state}</div>
            <div>Cases On Admission: {result.data[0].states[0].casesOnAdmission}</div>
            <div>Confirmed Cases: {result.data[0].states[0].confirmedCases}</div>
            <div>Death: {result.data[0].states[0].death}</div>
            <div>Discharged: {result.data[0].states[0].discharged}</div>
          </div>
          </div>
        </>
      )))}
    </div>
  );
}

export default App;
