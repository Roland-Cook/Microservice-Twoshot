import "./index.css"
import logo1 from "./images/logo1.png"

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          <img className="logo-main-page" src={logo1} />
        </p>
      </div>
      <img className="main-page-image" alt="img"  src="https://img.freepik.com/premium-photo/interior-room-monochrome-blue-color-with-clothes-hanger-room-accessories_576429-1246.jpg?w=2000"/>
    </div>
  );
}

export default MainPage;
