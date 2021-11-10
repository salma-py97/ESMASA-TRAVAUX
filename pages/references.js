import TableRow from "../components/References/TableRow"

import {
  rowOne,
  rowTwo,
  rowThree,
  rowFour,
  rowFive,
  rowSix,
  rowSeven,
  rowEight,
  rowNine,
  rowTen,
  rowEleven,
  rowTwelve,
  rowThirteen,
  rowFourteen,
  rowFifteen,
  rowSixteen,
  rowSeventeen,
  rowEighteen,
  rowNineteen,
  rowTwenty,
  rowTwentyOne,
  rowTwentyTwo,
  rowTwentyThree,
  rowTwentyFour,
  rowTwentyFive,
  rowTwentySix,
  rowTwentySeven,
  rowTwentyEight,
} from '../components/References/data'

import styles from '../styles/ReferencesPage/styles.module.css'

const references = () => {
  const {table, thead, title, wrapper, table_wrapper} = styles
  return (
    <div className={`container d-flex justify-content-center align-items-center flex-column ${wrapper}`}>
      <h1 className={title} >Nos Références</h1>

      <div className={`d-flex justify-content-center align-items-center table-responsive ${table_wrapper}`}>
        <table className={`rounded ${table}`}>
          <thead className={thead}>
            <tr>
              <th>Année</th>
              <th>Client</th>
              <th>Projet</th>
              <th>Durée</th>
            </tr>
          </thead>
          <tbody>
            <TableRow {...rowOne} />
            <TableRow {...rowTwo} />
            <TableRow {...rowThree} />
            <TableRow {...rowFour} />
            <TableRow {...rowFive} />
            <TableRow {...rowSix} />
            <TableRow {...rowSeven} />
            <TableRow {...rowEight} />
            <TableRow {...rowNine} />
            <TableRow {...rowTen} />
            <TableRow {...rowEleven} />
            <TableRow {...rowTwelve} />
            <TableRow {...rowThirteen} />
            <TableRow {...rowFourteen} />
            <TableRow {...rowFifteen} />
            <TableRow {...rowSixteen} />
            <TableRow {...rowSeventeen} />
            <TableRow {...rowEighteen} />
            <TableRow {...rowNineteen} />
            <TableRow {...rowTwenty} />
            <TableRow {...rowTwentyOne} />
            <TableRow {...rowTwentyTwo} />
            <TableRow {...rowTwentyThree} />
            <TableRow {...rowTwentyFour} />
            <TableRow {...rowTwentyFive} />
            <TableRow {...rowTwentySix} />
            <TableRow {...rowTwentySeven} />
            <TableRow {...rowTwentyEight} />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default references
