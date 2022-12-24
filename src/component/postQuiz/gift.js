import React, { useState } from "react";
import "./gift.css";

export default function Gift() {
  const [aperto, setAperto] = useState(false);

  return (
    <>
      {/* <img src={gift} className="gift" alt="gift" /> */}
      <div className="container est" onClick={() => setAperto(!aperto)}>
        <div
          className="present"
          ontouchstart="ontouchstart"
          // onClick={() => setAperto(true)}
        >
          <div className="santa">
            <div className="santa__hat"></div>
            <div className="santa__eyes"></div>
            <div className="santa__beard">
              <div className="santa__beard--cover"></div>
            </div>
            <div className="santa__smile"></div>
          </div>
          <div className="present__box">
            <div className="present__ribbon--vertical"></div>
            <div className="present__ribbon--horizontal"></div>
          </div>
          <div className="present__top">
            <div className="present__ribbon--vertical"></div>
            <div className="present__bow"></div>
          </div>
        </div>
        <br></br>
        <div className="pt-6 text-center" onClick={() => setAperto(false)}>
          {aperto ? "It's mee :)" : "Aprimi!"}
        </div>
      </div>
    </>
  );
}
