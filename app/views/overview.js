import React from 'react';
import Chart from 'react-chartjs';
import { Styles } from 'material-ui';

const { Colors } = Styles;
const Pie = Chart.Pie;
//Chart.defaults.global.responsive = true;

export default class Overview extends React.Component {
    componentWillMount () {
        this.props.changeTitle('Overview');
    }
    render () {
        var data = [
    {
        value: 300,
        color: Colors.green400,
        highlight: Colors.green300,
        label: "Paid"
    },
    {
        value: 50,
        color: Colors.cyan400,
        highlight: Colors.cyan300,
        label: "Reserved"
    },
    {
        value: 100,
        color: Colors.blueGrey400,
        highlight: Colors.blueGrey300,
        label: "Balance"
    }
];
let options = {
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};
        return (
            <div>
                <h1>Overview</h1>
                <Pie data={data} options={options} />
            </div>
        );
    }
}

Overview.contextTypes = {
    router: React.PropTypes.func
};
