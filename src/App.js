import logo from './logo.svg';
import './App.css';
import { useFetchDataQuery } from './services/covidAPI'

function App() {
  const { data, error, isLoading, isSuccess } = useFetchDataQuery();
  console.log(data)

  const results = Object.entries(data)?.map(([key, value]) => {
    return {[key]: [value]}
  })
  console.log(results)

  return (
    <div className='App'>
      <h1>COVID-19 Statistics</h1>
      <div>
        {error && <p>An error occured</p>}
        {isLoading && <p>Loading ...</p>}
        {isSuccess && (results?.map((result, index) => (
          <div key={result.id} className="headline-stats">
            <div>Total Samples Tested: {result.data[0].totalSamplesTested}</div>
            <div>Total Confirmed Cases: {result.data[0].totalConfirmedCases}</div>
            <div>Total Active Cases: {result.data[0].totalActiveCases}</div>
            <div>Discharged: {result.data[0].discharged}</div>
            <div>Death: {result.data[0].death}</div>
          </div>
        )))}
        <br />
        <h2>Stats by states</h2>
        {isSuccess && (
          data && data?.data?.states?.map((item, index) => (
            <div key={index} className="state">
              <div>State: {item?.state}</div>
              <div>Cases On Admission: {item?.casesOnAdmission}</div>
              <div>Confirmed Cases: {item?.confirmedCases}</div>
              <div>Discharged: {item?.discharged}</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App;
