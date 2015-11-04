import React from 'react';

import { List, ListItem, RaisedButton, SelectField, DatePicker, DropDownMenu, TextField, Paper } from 'material-ui';


export default class PayForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedId: null,
      item: {},
      team: 'תכניתן ראשי'
    };
    this.handleTargetAccountChange = this.handleTargetAccountChange.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
  }
  handleTargetAccountChange (event, index, team) {
    this.setState({
      team: team.text
    });
  }
  handleClickSave (event) {
    this.props.addTransaction({
      amount: this.state.item.amount,
      account: this.state.team,
      desc: this.state.item.text
    });
  }
  handleClickService (item) {
    this.setState({
      selectedId: item.payload,
      item
    });
  }
  render () {
    let accounts = [
      { id: '1', text: 'תכניתן ראשי'},
      { id: '1', text: 'ליבת השוב'},
      { id: '1', text: 'ניטור ובקרה'},
      { id: '1', text: 'מתקן מחשב'},
      { id: '1', text: 'PaaS'},
      { id: '1', text: 'אבטחת מידע'},
      { id: '1', text: 'טירת האגםי'},
    ];
    let listServices = [
      { payload: '1', text: 'פתיחת חסימות', amount: 15 },
      { payload: '2', text: 'הלבנה', amount: 15 },
      { payload: '3', text: 'פירמוט מחשב', amount: 15 },
      { payload: '4', text: 'הזמנה לוגיסטית', amount: 15 },
      { payload: '5', text: 'הכשרה', amount: 15 },
      { payload: '6', text: 'פקודת מבצע', amount: 15 },
      { payload: '7', text: 'פתיחת קריאה: תשתיות השו"ב', amount: 15 },
      { payload: '8', text: 'חימום נקודה', amount: 15 },
      { payload: '9', text: 'בקשה לכח אדם', amount: 15 },
      { payload: '10', text: 'הקמת שרת', amount: 15 },
      { payload: '11', text: 'השחרה', amount: 15 },
      { payload: '12', text: 'הובלה', amount: 15 },
      { payload: '13', text: 'ליווי Agile', amount: 15 },
      { payload: '14', text: 'Cloud: Scale in', amount: 15 },
      { payload: '15', text: 'בקשה להשבתה', amount: 15 },
    ];
    return (
      <div
      style={{
        direction: 'rtl',
        display: 'flex'
      }}>
      <Paper zDepth={1} className="pay-form col-md-12"
      rounded={false}>
      <div className="row"
        style={{
          display: 'flex'
        }}>
        <div className="col-md-4">
            <SelectField
              menuItems={accounts}
              onChange={this.handleTargetAccountChange}
              valueMember="id"
              floatingLabelText="חשבון יעד"
              ref={(ref) => this.targetAccount = ref}
              displayMember="text"/>
        </div>
        <div className="col-md-4">
          <DatePicker
            hintText="בחר תאריך התחלה"
            mode="landscape"/>
        </div>
        <div className="col-md-4">
          <DatePicker
            hintText="בחר תאריך סיום"
            mode="landscape"/>
        </div>
      </div>
      <div className="row"
        style={{
          display: 'flex'
        }}>
        <div className="col-md-4">
          <TextField
            hintText="חיפוש שירותים..."
            ref={(ref) => this.targetService = ref}
            floatingLabelText="חפש שירותים" />
        </div>
        <div className="col-md-4">
        <TextField
          hintText="מהות התשלום"
          rowsMax={3}
          ref="desc"/>
        </div>
        <div className="col-md-2">
        <TextField
          value={this.state.item.amount}
          hintText="מחיר"
          disabled={true} />
        </div>
      </div>
      <div className="row">
      <div className="col-md-2">
        <RaisedButton label="אישור" secondary={true} disabled={!this.state.selectedId} onClick={this.handleClickSave} />
      </div></div>
      <div className="row"
        style={{
          display: 'flex'
        }}>
        <div className="col-md-12">
        {
          listServices.map((item) => {
            return <Paper zDepth={this.state.selectedId === item.payload ? 5 : 1} onClick={this.handleClickService.bind(this, item)} key={item.payload} value={item} className="service-block" rounded={false}>{item.text}</Paper>;
          })
        }
        </div>
      </div>
      </Paper>
      </div>

    );
  }
}
