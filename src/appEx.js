// import React, { useEffect, useState } from 'react'
// import { getRandomColor, createImageFromInitials } from './Components/Utils.js'
// import user_log from './log.json'
// import './app.css'
// import { Line } from 'react-chartjs-2'
// import {
//   Chart as ChartJS, LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement
// } from 'chart.js'
// ChartJS.register(

//   LineElement, CategoryScale, LinearScale, PointElement
// )

// // import { getRandomColor, createImageFromInitials } from './Components/Utils/getInitials.js'
// // import { getRandomColor, createImageFromInitials } from './Components/Utils/createImageFromInitials.js'

// function App() {
//   const url = "https://api.airtable.com/v0/appBTaX8XIvvr6zEC/tblYPd5g5k5IKIc98?maxRecords=12&pageSize=100";
//   const [userData, setuserData] = useState()
//   const [isLoading, setIsLoading] = useState(true)
//   const [userLogData, setUserLogData] = useState([])
//   const fetchApi = () => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer key4v56MUqVr9sNJv");
//     myHeaders.append("Cookie", "brw=brwKWPXBZ6VlU47n6");

//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };

//     fetch(url, requestOptions)
//       .then(response => response.json())
//       .then(result => {

//         setuserData(result.records)
//         var data = user_log, ed = new Date("2013-04-30 23:59:59").getTime(), sd = new Date("2013-04-12 00:00:00").getTime(), result = data.filter(d => {
//           var time = new Date(d.time).getTime();
//           return (sd <= time && time <= ed);
//         });
//         console.log(result, "Fetch Ai"); // filter data from date 
//         setUserLogData(result); // filter data from date 
//         setIsLoading(false)

//       })
//       .catch(error => console.log('error', error));



//   }


//   useEffect(() => {
//     fetchApi()
//   }, [])


//   return (
//     <div className="App">
//       <div className="container bg-danger d">
//         <div className="row  mx-0">
//           <div className="col-md-4  px-0 d-flex justify-content-center py-2" style={{ height: "190px" }}>
//             <div className="card text-right" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">Special title treatment</h5>
//                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//               </div>
//             </div>

//           </div>
//           <div className="col-md-4  px-0 d-flex py-2 justify-content-center" style={{ height: "190px" }}>
//             <div className="card text-right" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">Special title treatment</h5>
//                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//               </div>
//             </div>

//           </div>
//           <div className="col-md-4  px-0 d-flex py-2 justify-content-center" style={{ height: "190px" }}>
//             <div className="card text-right" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">Special title treatment</h5>
//                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//               </div>
//             </div>

//           </div>



//         </div>
//         <div className="row  mx-0">
//           <div className="col-md-4  px-0 d-flex justify-content-center py-2" style={{ height: "190px" }}>
//             <div className="card text-right" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">Special title treatment</h5>
//                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//               </div>
//             </div>

//           </div>
//           <div className="col-md-4  px-0 d-flex py-2 justify-content-center" style={{ height: "190px" }}>
//             <div className="card text-right" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">Special title treatment</h5>
//                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//               </div>
//             </div>

//           </div>
//           <div className="col-md-4  px-0 d-flex py-2 justify-content-center" style={{ height: "190px" }}>
//             <div className="card text-right" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">Special title treatment</h5>
//                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//               </div>
//             </div>

//           </div>



//         </div>
//         <div className="row  mx-0">
//           <div className="col-md-4  px-0 d-flex justify-content-center py-2" style={{ height: "190px" }}>
//             <div className="card text-right" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">Special title treatment</h5>
//                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//               </div>
//             </div>

//           </div>
//           <div className="col-md-4  px-0 d-flex py-2 justify-content-center" style={{ height: "190px" }}>
//             <div className="card text-right" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">Special title treatment</h5>
//                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//               </div>
//             </div>

//           </div>
//           <div className="col-md-4  px-0 d-flex py-2 justify-content-center" style={{ height: "190px" }}>
//             <div className="card text-right" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="card-title">Special title treatment</h5>
//                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//               </div>
//             </div>

//           </div>



//         </div>


//       </div>
//     </div>
//   );
// }

// export default App;


















import React, { useEffect, useState } from 'react'
import { getRandomColor, createImageFromInitials } from './Components/Utils.js'
import user_log from './log.json'

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
      .then(result => {

        setuserData(result.records)
        var data = user_log, ed = new Date("2013-04-30 23:59:59").getTime(), sd = new Date("2013-04-12 00:00:00").getTime(), result = data.filter(d => {
          var time = new Date(d.time).getTime();
          return (sd <= time && time <= ed);
        });
        console.log(result, "Fetch Ai"); // filter data from date 
        setUserLogData(result); // filter data from date 
        setIsLoading(false)

      })
      .catch(error => console.log('error', error));



  }


  useEffect(() => {
    fetchApi()
  }, [])


  return (
    <div className="App">
      <div className="contain">
        <div className="row p-0">
          {
            isLoading ? <>loadding</> : <>


              {userData.map((item) => {




                let user_total_impression = 0;
                let user_total_conversion = 0;
                let user_total_revenue = 0

                let conversion_data_for_chart = []
                var sorted_date = userLogData.sort(function (a, b) {
                  var dateA = new Date(a.time), dateB = new Date(b.time)
                  return dateA - dateB
                })
                var specific_user_data = sorted_date.filter((log) => {
                  if (log.user_id === item.fields.Id) {
                    // counting expression /conversoipn
                    if (log.type === "impression") {
                      user_total_impression = user_total_impression + 1
                    } else
                      if (log.type === "conversion") {
                        conversion_data_for_chart.push(log)
                        user_total_conversion = user_total_conversion + 1
                      }
                    // sum of revenue 
                    user_total_revenue = user_total_revenue + log.revenue


                  }
                  return log.user_id === item.fields.Id
                })
                console.log(specific_user_data);
                console.log(conversion_data_for_chart);

                ;

             


                const data = {
                  labels: ["", "", "", "", "", "", "", "",], //list of date 
                  datasets: [
                    {
                      data: [8, 4, 5, 5, 7, 8, 9, 0, 4],  //data  in numer 
                      backgroundColor: "transparent",
                      borderColor: '#f26c6d',
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
                      min: 2,
                      max: 10,
                      ticks: {
                        stepSize: 2,
                        callback: (value) => ''
                      },
                      grid: {
                        borderDash: [10]
                      }
                    }
                  }
                }



                //_________________
                return <div className="col-md-4 " key={item.id}>

                  <div className="card text-right m-2" style={{ width: '100% ' }}>
                    <div className="card-body">


                      <div className="row">
                        <div className="col-md-3 ">
                          <img className='pb-1 ' id='preview'
                            src={
                              item?.fields.avatar === undefined
                                ? createImageFromInitials(500, item?.fields.Name, getRandomColor())
                                : item?.fields.avatar
                            }

                            width="20px"
                            alt='profile-pic' />
                          {/* <img src={item?.fields.avatar} alt="no_image" /> */}
                        </div>
                        <div className="col-md-9 bg-warning text-center">{item?.fields.Name}</div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-9 text-end">

                          <code>
                            {item?.fields.occupation}

                          </code>

                        </div>
                      </div>
                      <div className="row">

                        <div className="col-md-8 text-start">

                          <div className='' style={{ width: "250px", height: "80" }}>

                            <Line data={data} options={options}></Line>

                          </div>

                        </div>
                        <div className="col-md-4">

                          <div className="impressions bg-primary">
                            <div>impressions</div>
                            <span>{user_total_impression}</span>

                          </div>
                          <div className="conversions bg-warning">
                            <div>Conversion</div>
                            <span>{user_total_conversion}</span>

                          </div>
                          <div className="revenue text-dark">

                            <code>$  <span>{Number(user_total_revenue).toFixed(2)}</span> </code>

                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              })}
            </>
          }



        </div>
      </div>
    </div>
  );
}

export default App;
