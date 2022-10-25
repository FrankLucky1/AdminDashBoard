import React from 'react';
import {GridComponent, Page, ColumnsDirective, Sort, Inject, Search, Filter, ColumnDirective, Toolbar, Selection, Edit} from '@syncfusion/ej2-react-grids';

import {customersData, customersGrid} from'../data/dummy';
import { Header } from '../components';


const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 mt-24 md:p-10 bg-white rounded-3xl sm:m-10'>
      <Header category='Page' title='Customers'/>

      <GridComponent
      id='gridcomp'
      dataSource={customersData}
      allowPaging
      allowSorting 
      toolbar={['Search', 'Delete', 'Add']}
      editSettings={{allowDeleting: true, allowAdding:true, allowEditing:true}}
      width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item,index)=> (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>

        <Inject services={[ Page, Sort, Search, Toolbar, Filter, Selection, Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Customers;