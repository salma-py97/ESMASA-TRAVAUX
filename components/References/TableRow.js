import styles from '../../styles/ReferencesPage/styles.module.css'

const TableRow = ({client, projet, durée, année}) => {

  const {tr} = styles

  return (
    <tr className={tr}>
      <td>{année}</td>
      <td>{client}</td>
      <td>{projet}</td>
      <td className="text-nowrap">{durée}</td>
    </tr>
  )
}

export default TableRow
