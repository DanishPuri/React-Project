



import React, { useEffect, useState } from 'react'
import { getRandomColor, createImageFromInitials } from './Components/Utils.js'
import user_log from './log.json'
import './app.css'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS, LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'
ChartJS.register(

  LineElement, CategoryScale, LinearScale, PointElement
)

// import { getRandomColor, createImageFromInitials } from './Components/Utils/getInitials.js'
// import { getRandomColor, createImageFromInitials } from './Components/Utils/createImageFromInitials.js'

function App() {
  const url = "https://api.airtable.com/v0/appBTaX8XIvvr6zEC/tblYPd5g5k5IKIc98?maxRecords=12&pageSize=100";
  const [userData, setuserData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [userLogData, setUserLogData] = useState([])
  const fetchApi = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer key4v56MUqVr9sNJv");
    myHeaders.append("Cookie", "brw=brwKWPXBZ6VlU47n6");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(resData => {

        setuserData(resData.records)


        setUserLogData(user_log.sort(function (a, b) { // place it
          var dateA = new Date(a.time), dateB = new Date(b.time)
          return dateA - dateB
        })); // filter data from date 
        console.log(user_log);
        setIsLoading(false)

      })
      .catch(error => console.log('error', error));



  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
    fetchApi()
  }, [])


  return (
    <div className="App">
      <div className="contain">
        <div class="row mx-0 pt-4 px-4">

          {
            isLoading ? <div className='d-flex justify-content-center align-item-center' style={{ marginTop: "17%" }}>
              <div className="lds-dual-ring" />

            </div> : <>


              {userData.map((item) => {




                let user_total_impression = 0;
                let user_total_conversion = 0;
                let user_total_revenue = 0

                let conversion_data_for_chart = []

                // var data = userLogData  //
                var ed = new Date("2013-04-30 23:59:59").getTime();
                var sd = new Date("2013-04-12 00:00:00").getTime()
                // var result = data.filter(d => {
                // });



                userLogData.filter((log) => {
                  if (log.user_id === item.fields.Id) {
                    // counting expression /conversoipn
                    if (log.type === "impression") {
                      user_total_impression = user_total_impression + 1
                    } else
                      if (log.type === "conversion") {
                        user_total_conversion = user_total_conversion + 1



                        var time = new Date(log.time).getTime();
                        if (sd <= time && time <= ed) {
                          conversion_data_for_chart.push({ time: log.time.slice(0, 10) })

                        };



                      }
                    // sum of revenue 
                    user_total_revenue = user_total_revenue + log.revenue


                  }
                  return log.user_id === item.fields.Id
                })
                // console.log(specific_user_data);
                // console.log(conversion_data_for_chart);




                const newArray = [];
                conversion_data_for_chart.forEach((parentElement) => {
                  var counter = 0;
                  conversion_data_for_chart.forEach((element) => {
                    if (element.time === parentElement.time) {
                      counter++;

                    }
                  });




                  newArray.push({
                    time: parentElement.time,
                    count: counter,
                  });





                });
                console.log(newArray, "har ");

                ;
                const arr = [...newArray]

                const ids = arr.map(o => o.time)
                const filtered = arr.filter(({ time }, index) => !ids.includes(time, index + 1))



                const data = {
                  labels: filtered.map((er) => ""), //list of date 
                  datasets: [
                    {
                      data: filtered.map((er) => er.count),  //data  in numer 
                      backgroundColor: "transparent",
                      borderColor: '#000000',
                      pointBorderColor: "transparent",
                      pointBorderWidth: 4,
                      tension: 0.5
                    }
                  ]
                }
                const options = {
                  plugins: {
                    legend: false
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false
                      }
                    },
                    y: {
                      min: 1,
                      max: 25,
                      ticks: {
                        stepSize: 2,
                        callback: (value) => []
                      },
                      grid: {
                        borderDash: []
                      }
                    }
                  }
                }

                return <div className="col-md-4 MyStyle mb-4" key={item.id}>
                  <div className="card">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon">
                          <img src={
                            item?.fields.avatar === undefined
                              ? createImageFromInitials(500, item?.fields.Name, getRandomColor())
                              : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                          } alt="pic" />
                          {/* <img src={
                          item?.fields.avatar === undefined
                            ? createImageFromInitials(500, item?.fields.Name, getRandomColor())
                            : item?.fields.avatar
                        } alt="pic" /> */}
                        </div>
                        <div className="ms-2 c-details">
                          <h6 className="mb-0">{item?.fields.Name}</h6> <span>{item?.fields.occupation}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="row">
                        <div className="col-7">
                          <div className='' style={{ width: "290px" }}>

                            <Line data={data} options={options}></Line>
                            <div className='text-center Figure-style'  >Conversion 4/12- 4/30</div>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="Counter ColorOne">{numberWithCommas(user_total_impression)}  <br /><span className='text-secondary'>impression</span></div>
                          <div className="Counter ColorTwo">{numberWithCommas(user_total_conversion)}<br /><span className='text-secondary'>Conversion</span></div>
                          <div className="Counter ColorThree">${numberWithCommas(Number((user_total_revenue)).toFixed(0))}<br /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                // dsad
              })}
            </>
          }


        </div>

      </div>
    </div>
  );
}

export default App;
