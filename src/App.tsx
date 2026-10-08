import BoardHead from "./BoardHead"
import BoardRow from "./BoardRow"
import { players } from "./players"

const App = () => {

  return (
    <>
      <header>
        <h1 className="glitch" data-text="HIGHSCORE">HIGHSCORE</h1>
        <p className="subtitle">Képzeletbeli Programozó Verseny · 2026</p>
        <div className="stamp">PROD-ON NEM FUT*</div>
      </header>

      <div id="board" className="board">
        <BoardHead/>
        <div className="board-body" id="board-body">
          {players.map((player, idx) => <BoardRow data={player} idx={idx} />)}
        </div>
      </div>
    </>
  )
}

export default App