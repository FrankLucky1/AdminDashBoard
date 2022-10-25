import React from 'react';
import {ScheduleComponent, Day,Month, Week, WorkWeek,Agenda,Resize,DragAndDrop, Inject,} from '@syncfusion/ej2-react-schedule';

import {scheduleData} from'../data/dummy';
import { Header } from '../components';

const Calender = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded'>
      <Header category='App' title='Calender'/>

      <ScheduleComponent
      height='650px'
      eventSettings={{dataSource: scheduleData}}
      selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[ Day,Month, Week, WorkWeek,Agenda,Resize,DragAndDrop,]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calender;