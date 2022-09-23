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
      .then(result => {

        setuserData(result.records)
        var data = user_log, ed = new Date("2013-04-30 23:59:59").getTime(), sd = new Date("2013-04-12 00:00:00").getTime(), result = data.filter(d => {
          var time = new Date(d.time).getTime();
          return (sd <= time && time <= ed);
        });
        // console.log(result, "Fetch Ai"); // filter data from date 
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
        <div class="row mx-0 pt-3">

          {
            isLoading ? <>loadding</> : <>


              {userData.map((item) => {




                let user_total_impression = 0;
                let user_total_conversion = 0;
                let user_total_revenue = 0

                let conversion_data_for_chart = []
                var sorted_date = userLogData.sort(function (a, b) { // place it
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
                        conversion_data_for_chart.push({time:log.time.slice(0,10)})
                        user_total_conversion = user_total_conversion + 1
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
                 if(newArray.filter((e)=>e===undefined && e.time===parentElement.time?true:false)===false){
                  var counter = 0;
                  conversion_data_for_chart.forEach((element) => {
                    if (element.time === parentElement.time) {
                      counter++;
                
                    }
                  });
                  // if(newArray.filter((e)=>e.time===parentElement.time?true:false)!==false){
                      newArray.push({
                    time: parentElement.time,
                    count: counter,
                  });  
                //  }
               
                   
                 }
                });
                console.log(newArray , "har ");

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
                          <div className='' style={{ width: "290px", height: "100" }}>

                            <Line data={data} options={options}></Line>

                          </div>
                        </div>
                        <div className="col-5">
                          <div className="Counter ColorOne">{user_total_impression}<br /><span>impression</span></div>
                          <div className="Counter ColorTwo">{user_total_conversion}<br /><span>Conversion</span></div>
                          <div className="Counter ColorThree">{Number(user_total_revenue).toFixed(2)}<br /></div>
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
