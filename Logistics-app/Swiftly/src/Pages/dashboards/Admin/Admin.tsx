import "./Admin.css";
import SalesChart from "./SaleChart";
import TrafficSourcesChart from "./TrafficSourcesChart";
import TicketsGrid from "../../../assets/Components/Tickets";
import Sidebar from "../../../assets/Components/sidebar";
import Navbar from "../../../assets/Components/Navbar";
export const Admin = () => {
  return (
    <>
      {/* navbar starts here */}
      <div className="div">
        <Navbar />
      </div>
      {/* navbar ends here */}
      <div className="container-fluid page-body-wrapper">
       {/* sidebar starts here */}
       <div className="div">
        <Sidebar />
       </div>

        {/* sidebar end here */}


        {/* cards starts here */}
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                  <i className="mdi mdi-home" />
                </span>{" "}
                Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <span />
                    Overview{" "}
                    <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card bg-gradient-danger card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="./src/assets/dashboard/circle.svg"
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Weekly Sales{" "}
                      <i className="mdi mdi-chart-line mdi-24px float-end" />
                    </h4>
                    <h2 className="mb-5">$ 15,0000</h2>
                    <h6 className="card-text">Increased by 60%</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card bg-gradient-info card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="./src/assets/dashboard/circle.svg"
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Weekly Orders{" "}
                      <i className="mdi mdi-bookmark-outline mdi-24px float-end" />
                    </h4>
                    <h2 className="mb-5">45,6334</h2>
                    <h6 className="card-text">Increased by 10%</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card bg-gradient-success card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="./src/assets/dashboard/circle.svg"
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Customers Growth{" "}
                      <i className="mdi mdi-diamond mdi-24px float-end" />
                    </h4>
                    <h2 className="mb-5">95,5741</h2>
                    <h6 className="card-text">Increased by 5%</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* cards ends here */}

              {/* recent tickets grid user */}
              <div style={{ padding: "10px" }}>
                <h2>Recent Tickets</h2>
                <TicketsGrid />
              </div>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <h3>Visit and Sales Statistics</h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap", // Ensures wrapping for smaller screens
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "20px", // Adds spacing between charts
                  }}
                >
                  {/* Line Chart Component */}
                  <div
                    className="chart-container"
                    style={{
                      flex: "1 1 45%", // Adjusts size for both small and large screens
                      padding: "10px",
                      minWidth: "", // Ensures proper width on small screens
                      borderRadius: "8px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      gap: "20px",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <SalesChart />
                  </div>

                  {/* Pie Chart Component */}
                  <div
                    className="chart-container"
                    style={{
                      flex: "1 1 45%", // Adjusts size for both small and large screens
                      padding: "10px",
                      minWidth: "300px", // Ensures proper width on small screens
                      borderRadius: "8px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <h3>Traffic Sources</h3>
                    <TrafficSourcesChart />
                  </div>
                </div>
              </div>
              {/* footer starts here */}
              <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                  <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                    Copyright © 2024{" "}
                    <a href="/" target="_blank">
                      Swiftly
                    </a>
                    . All rights reserved.
                  </span>
                </div>
              </footer>
           {/* footer ends here */}
            </div>
          </div>
        </div>
      
    </>
  );
};
export default Admin;
