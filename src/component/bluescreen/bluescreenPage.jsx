import "./bluescreenPageCss.css";

function BluescreenPage() {
  return (
    <div className="main">
      <div className="header">
        <h1 className="emotion">{":)"}</h1>
      </div>
      <p className="description">
        Quest'anno sta esaurendo i giorni a disposizione e ne deve iniziare uno
        nuovo. Sto raccogliendo un po' di auguri che poi ti manderò.
      </p>
      <p className="description">98% complete</p>
      <div className="footer">
        <table>
          <tbody>
            <tr>
              <td>
                <h6>
                  {
                    "Se vuoi saperne di più, puoi cercare online questi termini:"
                  }
                  <span>&nbsp;{"BUON+NATALE+MARIA"}</span>
                  <br></br>
                  <br></br>
                  {
                    "Se hai bisogno di aiuto chiama il servizio assistenza (guarda Fransis), e dagli queste info necessarie:"
                  }
                  <br></br>
                  {"Stop code: 2022_ENDED (aggiungici un bacio)"}
                </h6>
              </td>
            </tr>
            <tr className="justify-content-center">
              <td className="centraLoStronzo">
                <div>
                  <button
                    id="btnGo"
                    onClick={goToQuiz}
                    className="btn btn-success"
                  >
                    Cliccami!
                  </button>
                  {/* <img src={qrcode} alt="" width="100" /> */}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div> */}
    </div>
  );
}

const goToQuiz = () => {
  let element = document.getElementById("onehalf");
  element.hidden = false;
  document.getElementById("one").hidden = true;
};

export default BluescreenPage;
