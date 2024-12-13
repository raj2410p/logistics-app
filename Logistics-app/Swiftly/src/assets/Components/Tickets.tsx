import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

 const TicketsGrid = () => {
  const [rowData] = useState([
    {
      assignee: "David Grey",
      subject: "Fund is not received",
      status: "DONE",
      lastUpdate: "Dec 5, 2017",
      trackingId: "WD-12345",
    },
    {
      assignee: "Stella Johnson",
      subject: "High loading time",
      status: "PROGRESS",
      lastUpdate: "Dec 12, 2017",
      trackingId: "WD-12346",
    },
    {
      assignee: "Marina Michel",
      subject: "Website down for one week",
      status: "ON HOLD",
      lastUpdate: "Dec 16, 2017",
      trackingId: "WD-12347",
    },
    {
      assignee: "John Doe",
      subject: "Losing control on server",
      status: "REJECTED",
      lastUpdate: "Dec 3, 2017",
      trackingId: "WD-12348",
    },
  ]);

  const columnDefs: ColDef[] = [
    { headerName: "Assignee", field: "assignee", flex: 1 },
    { headerName: "Subject", field: "subject", flex: 2 },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: (params: { value: string }) => {
        const statusStyles: Record<string, React.CSSProperties> = {
          DONE: { background: "#28a745", color: "#fff", padding: "5px 10px", borderRadius: "4px" },
          PROGRESS: { background: "#ffc107", color: "#000", padding: "5px 10px", borderRadius: "4px" },
          "ON HOLD": { background: "#17a2b8", color: "#fff", padding: "5px 10px", borderRadius: "4px" },
          REJECTED: { background: "#dc3545", color: "#fff", padding: "5px 10px", borderRadius: "4px" },
        };

        const style = statusStyles[params.value] || {};

        return <span style={style}>{params.value}</span>;
      },
      flex: 1,
    },
    { headerName: "Last Update", field: "lastUpdate", flex: 1 },
    { headerName: "Tracking ID", field: "trackingId", flex: 1 },
  ];

  return (
    <div
      className="ag-theme-alpine md:w-full w-screen"
      style={{
        // width: "100vh",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ sortable: true, filter: true, resizable: true }}
        domLayout="autoHeight"
      />
    </div>
  );
};
export default TicketsGrid;

