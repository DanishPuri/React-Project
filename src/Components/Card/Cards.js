import React from 'react'

//utilities functions 
import { getRandomColor, createImageFromInitials } from '../Utils/Utils'
import { numberWithCommas } from '../Utils/numberWithCommas'
import { Line } from 'react-chartjs-2'

const Cards = ({ userLogData, item }) => {

    let user_total_impression = 0;
    let user_total_conversion = 0;
    let user_total_revenue = 0
    let conversion_data_for_chart = []

    //  user date to Manupulate Data for Chart Repreentations
    var start_d = new Date("2013-04-12 00:00:00").getTime()
    var end_d = new Date("2013-04-30 23:59:59").getTime();
    userLogData.filter((log) => {
        if (log.user_id === item.fields.Id) {
            // counting expression /conversoipn
            if (log.type === "impression") {
                user_total_impression = user_total_impression + 1
            } else
                if (log.type === "conversion") {
                    user_total_conversion = user_total_conversion + 1
                    var time = new Date(log.time).getTime();
                    if (start_d <= time && time <= end_d) {
                        conversion_data_for_chart.push({ time: log.time.slice(0, 10) })
                    };
                }
            // sum of revenue 
            user_total_revenue = user_total_revenue + log.revenue
        }
        return log.user_id === item.fields.Id
    })
    const refactored_Arr = [];
    conversion_data_for_chart.forEach((parentElement) => {
        var counter = 0;
        conversion_data_for_chart.forEach((element) => {
            if (element.time === parentElement.time) {
                counter++;
            }
        });
        refactored_Arr.push({
            time: parentElement.time,
            count: counter,
        });
    });
    const arr = [...refactored_Arr]
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
    return (
        <>
            <div className="col-md-4 MyStyle mb-4" >
                <div className="card">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="icon">
                                <img
                                    src={item?.fields.avatar === undefined
                                        ? createImageFromInitials(500, item?.fields.Name, getRandomColor())
                                        : item?.fields.avatar}
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "image_here";
                                    }}
                                    alt=""
                                />
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
        </>
    )
}

export default Cards