import "../reserve/reserve.css";

const Reserve = () => {
  return (
    <>
      <div className="container-8">
        <div className="main-8">
          <div className="sub-8">
            <div className="img-8">
              <img src={"src/assets/image/reserve-img-1.webp"} alt="" />
            </div>
            <div className="img-81">
              <img src={"src/assets/image/reserve-shape-1.webp"} alt="" />
            </div>
            <div className="icons-81">
              <img src={"src/assets/image/reserve-shape-2.webp"} alt="" />
            </div>
            <div className="icons-82">
              <img src={"src/assets/image/reserve-shape-3.webp"} alt="" />
            </div>
            <div className="icons-83">
              <img src={"src/assets/image/reserve-shape-4.webp"} alt="" />
            </div>
            <div className="icons-84">
              <img src={"src/assets/image/reserve-shape-5.webp"} alt="" />
            </div>
          </div>

          <div className="sub-81">
            <h3>Visit Us Today</h3>
            <h1>Make A Reserve</h1>
            <form action="">
              <div className="forminput">
                <input type="text" placeholder="Name" />
              </div>
              <div className="forminput">
                <input type="number" placeholder="Phone" />
              </div>
              <div className="forminput">
                <select name="" id="">
                  <option value="person">person</option>
                  <option value="person">One</option>
                  <option value="person">Two</option>
                  <option value="person">Three</option>
                </select>
              </div>
              <div className="forminput">
                <input type="date" />
              </div>
              <div className="forminput">
                <select name="" id="">
                  <option value="person">Time</option>
                  <option value="person">08:00AM-05:00PM</option>
                  <option value="person">09:00AM-06:00PM</option>
                  <option value="person">10:00AM-05:00PM</option>
                  <option value="person">09:00AM-05:00PM</option>
                </select>
              </div>
              <div className="forminput">
                <button>Book A Table</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;
