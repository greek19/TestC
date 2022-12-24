import "./preQuiz.css";

function PreQuiz() {
  return (
    <div className="main text-center">
      <h2>
        <b>Ed ora vediamo se meriti questo regalo!</b>
      </h2>
      <br />
      <h4>Verrai messa alla prova con alcune domande a tema natalizio</h4>
      <h6>visto che sei fanatik-fantastik dovresti saperle tutte :)</h6>
      <h6>Sei pronta?</h6>
      <br></br>
      <button className="btn btn-info" onClick={goToQuiz}>
        INIZIAMO!!
      </button>
    </div>
  );
}

const goToQuiz = () => {
  let element = document.getElementById("two");
  element.hidden = false;
  document.getElementById("onehalf").hidden = true;
};

export default PreQuiz;
