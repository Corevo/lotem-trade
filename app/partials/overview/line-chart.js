import React from 'react';
import ReactChart from 'react-chartjs';
import {Styles, FontIcon} from 'material-ui';
import Chart from 'chart.js';

const {Colors} = Styles;
const Line = ReactChart.Line;
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

export default class LineChart extends React.Component {
    render () {
        return (
            <div style={{
                display: 'flex',
                paddingTop: '40px',
                paddingBottom: '40px',
                marginRight: '40px',
                marginLeft: '40px'
            }}>
                <Line data={this.props.data} options={this.props.options}/>
            </div>
        );
    }
}

LineChart.propTypes = {
    data: React.PropTypes.object.isRequired,
    options: React.PropTypes.object
};

LineChart.defaultProps = {
    data: {
        labels: [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"
        ],
        datasets: [
            {
                label: "Trending Balance",
                fillColor: "rgba(102,185,106,0.2)",
                strokeColor: Colors.green400,
                pointColor: Colors.green400,
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: Colors.green400,
                data: [
                    65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 27
                ]
            }
        ]
    },
    options: {}
};
