import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Selection,
  Edit,
  Sort,
  Filter,
  Page,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import {
  customersData,
  customersGrid,
} from "../data/dummy";
import Header from "../components/Header";

const Customers = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowSorting
        allowPaging
        toolbar={["Delete"]}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit,Sort,Filter,Selection, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
