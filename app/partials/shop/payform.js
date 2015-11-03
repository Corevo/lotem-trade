import React from 'react';

import { DatePicker, DropDownMenu, TextField, Paper } from 'material-ui';

export default class PayForm extends React.Component {
  render () {
    let listServices = [
      { payload: '1', text: 'פתיחת חסימות' },
      { payload: '2', text: 'הלבנה' },
      { payload: '3', text: 'פירמוט מחשב' },
      { payload: '4', text: 'הזמנה לוגיסטית' },
      { payload: '5', text: 'הכשרה' },
      { payload: '6', text: 'פקודת מבצע' },
      { payload: '7', text: 'פתיחת קריאה: תשתיות השו"ב' },
      { payload: '8', text: 'Weekly' },
      { payload: '9', text: 'Weekly' },
      { payload: '10', text: 'Weekly' },
      { payload: '11', text: 'Weekly' },
      { payload: '12', text: 'Weekly' },
      { payload: '13', text: 'Weekly' },
      { payload: '14', text: 'Weekly' },
      { payload: '15', text: 'Weekly' },
    ];
    return (
      <div>
      <Paper zDepth={1} className="pay-form col-md-10" rounded={false}>
      <TextField
      hintText="מהות התשלום" />
      <br />
      <DatePicker
      hintText="בחר תאריך התחלה"
      mode="landscape"/>
      <DatePicker
      hintText="בחר תאריך סיום"
      mode="landscape"/>
      <br />
      {
        listServices.map((item) => {
          console.log(item.text);
          return <Paper zDepth={1} className="service-block" rounded={false}>{item.text}</Paper>;
        })
      }
      </Paper>
      </div>

    );
  }
}
