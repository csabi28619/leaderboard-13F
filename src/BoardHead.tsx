import { useState } from 'react'
import playerStore from './playerStore'

const BoardHead = () => {

    const sortByName = playerStore((state)=> state.sortByName);
    
    const [nameSort, setNameSort] = useState<number>(1)

    const nameSortClicked = () => {
        setNameSort(prev => prev ? prev * -1 : 1)
        sortByName(nameSort);
    }

  return (
    <div className="board-head">
          <div className="cell">Helyezés</div>
          <div onClick={nameSortClicked} className="cell">Név  {nameSort && nameSort == -1 ? '↑' : '↓'}</div>
          <div className="cell">Nyelv</div>
          <div className="cell">Pontszám</div>
          <div className="cell">Bugok</div>
    </div>
  )
}

export default BoardHead