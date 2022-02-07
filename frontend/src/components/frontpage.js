import react from "react";
// import img1 from './img1.png';
import "bootstrap/dist/css/bootstrap.min.css";

const frontpage = () => {
  return (
    <>
      <div
        style={{
          //backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
          height: "36rem",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            fontSize: "15vh",
            fontWeight:"bolder",
            textAlign: "center",
            fontFamily: "cursive",
            color: "black",
          }}
        >
          Renting.com
        </div>
        <p
          style={{
            fontSize: "6vh",
            color: "blue",
            fontWeight: "bold",
            padding: "4vh 5vh",
            fontFamily: "revert",
            marginTop: "8vh",
            marginBottom: "5vh",
          }}
        >
          If you want to put your house up for rent -- 
        </p>
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: "2rem",
              color: "gold",
              marginLeft: "35vh",
              fontFamily: "revert",
              fontWeight: "bold",
            }}
          >
            Free to join --
          </div>
          <button
            className="btn btn-info"
            style={{ color: "white", marginLeft: "7vh" }}
            
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default frontpage;