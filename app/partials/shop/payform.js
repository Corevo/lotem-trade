import React from 'react';

import { List, ListItem, RaisedButton, SelectField, DatePicker, DropDownMenu, TextField, Paper } from 'material-ui';


export default class PayForm extends React.Component {
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
      { payload: '1', text: 'פתיחת חסימות' },
      { payload: '2', text: 'הלבנה' },
      { payload: '3', text: 'פירמוט מחשב' },
      { payload: '4', text: 'הזמנה לוגיסטית' },
      { payload: '5', text: 'הכשרה' },
      { payload: '6', text: 'פקודת מבצע' },
      { payload: '7', text: 'פתיחת קריאה: תשתיות השו"ב' },
      { payload: '8', text: 'חימום נקודה' },
      { payload: '9', text: 'בקשה לכח אדם' },
      { payload: '10', text: 'הקמת שרת' },
      { payload: '11', text: 'השחרה' },
      { payload: '12', text: 'הובלה' },
      { payload: '13', text: 'ליווי Agile' },
      { payload: '14', text: 'Cloud: Scale in' },
      { payload: '15', text: 'בקשה להשבתה' },
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
              valueMember="id"
              value={undefined}
              floatingLabelText="חשבון יעד"
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
            floatingLabelText="חפש שירותים" />
        </div>
        <div className="col-md-4">
        <TextField
          hintText="מהות התשלום"
          rowsMax={3}/>
        </div>
        <div className="col-md-4">
          <RaisedButton label="אישור" secondary={true} />
        </div>
      </div>
      <div className="row"
        style={{
          display: 'flex'
        }}>
        <div className="col-md-6">
        {
          listServices.map((item) => {
            return <Paper zDepth={1} key={item.payload} className="service-block" rounded={false}>{item.text}</Paper>;
          })
        }
        </div>
        <div className="col-md-6">
        <List subheader="שירותים שנבחרו">
          <ListItem primaryText="הלבנה" />
          <ListItem primaryText="קורס" />
        </List>
        </div>
      </div>
      </Paper>
      </div>

    );
  }
}
