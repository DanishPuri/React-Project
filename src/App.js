import React, { useEffect, useState } from 'react'
import './app.css'
// User Log File as API Was not working due to cors policies 
import user_log from './user_log.json'
//chart.js 2 Libraries Data
import {
  Chart as ChartJS, LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'
import { fetchApi } from './Services/services.js'
import Cards from './Components/Card/Cards'
import Loader from './Components/Loader/Loader'
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const App = () => {
  const [userData, setuserData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [userLogData, setUserLogData] = useState([])

  const fetchIntiliazeData = () => {
    fetchApi(setuserData, setIsLoading)

    setUserLogData(user_log.sort(function (a, b) {
      var dateA = new Date(a.time), dateB = new Date(b.time)
      return dateA - dateB
    }));
  }

  useEffect(() => {
    fetchIntiliazeData()
  }, [])
  return (
    <div className="App">
      <div className="contain">
        <div class="row mx-0 pt-4 px-4">
          {
            isLoading ? <Loader/> : <>
              {userData.map((item) => {
                return <Cards item={item} userLogData={userLogData} key={item.id} />
              })}
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
