import "./index.css"

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">WARDROBIFY!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Need to keep track of your shoes and hats? We have
          the solution for you!
        </p>
      </div>
      <img className="main-page-image" alt="img"  src="https://img.freepik.com/premium-photo/interior-room-monochrome-blue-color-with-clothes-hanger-room-accessories_576429-1246.jpg?w=2000"/>
    </div>
  );
}

export default MainPage;
