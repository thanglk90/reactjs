import React, { PropTypes } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link,
	NavLink
} from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";

import './index.scss';

const Chart = props => {


    return (
      <div className="row">
      <div className="col col-lg-6 col-sm-12">
        <div className="card">
          <div className="card__header">
            <div className="chart__header">
              <i className="fas fa-chart-area" />
              Area Chart Example
            </div>
          </div>
          <div className="card__body">
            <div className="chart__body">
              {/* <canvas id="myChart-1" width={400} height={180}>
                <p>Hello Fallback World</p>
              </canvas> */}
              <Line
                data={{
                  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                  datasets: [
                          {
                              label: 'First Week',
                              data: [12, 19, 3, 5, 2, 3],
                              backgroundColor: [
                                  'rgba(255, 99, 132, 0.2)',
                                  'rgba(54, 162, 235, 0.2)',
                                  'rgba(255, 206, 86, 0.2)',
                                  'rgba(75, 192, 192, 0.2)',
                                  'rgba(153, 102, 255, 0.2)',
                                  'rgba(255, 159, 64, 0.2)'
                              ],
                              borderColor: [
                                  'rgba(255, 99, 132, 1)',
                                  'rgba(54, 162, 235, 1)',
                                  'rgba(255, 206, 86, 1)',
                                  'rgba(75, 192, 192, 1)',
                                  'rgba(153, 102, 255, 1)',
                                  'rgba(255, 159, 64, 1)'
                              ],
                              borderWidth: 1
                          }
                  ]
                }}
                options={{
                  scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                    },
                    title: {
                        display: true,
                        text: 'Custom Chart Title'
                    }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-6 col-sm-12">
        <div className="card">
          <div className="card__header">
            <div className="chart__header">
              <i className="fas fa-chart-area" />
              Bar Chart Example
            </div>
          </div>
          <div className="card__body">
            <div className="chart__body">
              {/* <canvas id="myChart-2" width={400} height={180}>
                <p>Hello Fallback World</p>
              </canvas> */}
              <Bar
                data={{
                  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                  datasets: [
                          {
                              label: 'First Week',
                              data: [12, 19, 3, 5, 2, 3],
                              backgroundColor: [
                                  'rgba(255, 99, 132, 0.2)',
                                  'rgba(54, 162, 235, 0.2)',
                                  'rgba(255, 206, 86, 0.2)',
                                  'rgba(75, 192, 192, 0.2)',
                                  'rgba(153, 102, 255, 0.2)',
                                  'rgba(255, 159, 64, 0.2)'
                              ],
                              borderColor: [
                                  'rgba(255, 99, 132, 1)',
                                  'rgba(54, 162, 235, 1)',
                                  'rgba(255, 206, 86, 1)',
                                  'rgba(75, 192, 192, 1)',
                                  'rgba(153, 102, 255, 1)',
                                  'rgba(255, 159, 64, 1)'
                              ],
                              borderWidth: 1
                          }
                  ]
                }}
                options={{
                  scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                    },
                    title: {
                        display: true,
                        text: 'Custom Chart Title'
                    }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

Chart.propTypes = {
    
};

export default Chart;