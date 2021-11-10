import styles from '../../styles/ReferencesPage/styles.module.css'

const TableRow = ({client, projet, durée, année}) => {

  const {tr, td} = styles

  return (
    <tr className={tr}>
      <td className={`text-nowrap text-center ${td}`}>{année}</td>
      <td className={`text-center ${td}`}>{client}</td>
      <td className={`text-capitalize ${td}`}>{projet}</td>
      <td className={`text-nowrap text-center ${td}`}>{durée}</td>
    </tr>
  )
}

export default TableRow
