import './Landing.css'

export const Landing = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title">Welcome to Swiftly</h1>
            <p className="description">
              Swiftly is a logistics management platform that helps you manage
              your business operations efficiently. It provides you with
              real-time data and analytics to help you make informed decisions.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1602529610325-0b3d5e0b1c4e"
              alt="Delivery Truck"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

    </>
  )
}
export default Landing
