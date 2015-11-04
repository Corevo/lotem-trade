import React from 'react';
import ReactChart from 'react-chartjs';
import {Styles, FontIcon} from 'material-ui';
import Chart from 'chart.js';

const {Colors} = Styles;
const PieChart = ReactChart.Pie;
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

export default class Pie extends React.Component {
    render () {
        return (
            <div style={{
                display: 'flex',
                paddingTop: '40px',
                paddingBottom: '40px'
            }}>
                <div className="col-md-6">
                    <PieChart data={this.props.data} options={this.props.options}/>
                </div>
                <div className="col-md-6">
                    <h2>Legend</h2>
                    <ul style={{
                        listStyle: 'none',
                        paddingLeft: '20px'
                    }}>
                        {this
                            .props
                            .data
                            .map((item) => (
                                <li key={item.label}>
                                    <FontIcon className="material-icons" color={item.color} style={{
                                        fontSize: '1.8em'
                                    }}>label</FontIcon>
                                    <span style={{
                                        verticalAlign: 'super',
                                        marginLeft: '5px',
                                        fontSize: '1.5em'
                                    }}>{item.label}</span>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        );
    }
}

Pie.propTypes = {
    data: React.PropTypes.object.isRequired,
    options: React.PropTypes.object
};

Pie.defaultProps = {
    data: [
        {
            value: 300,
            color: Colors.green400,
            highlight: Colors.green300,
            label: "Balance"
        }, {
            value: 50,
            color: Colors.blueGrey400,
            highlight: Colors.blueGrey300,
            label: "Reserved"
        }, {
            value: 100,
            color: Colors.cyan400,
            highlight: Colors.cyan300,
            label: "Paid"
        }
    ],
    options: {
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    }
};
