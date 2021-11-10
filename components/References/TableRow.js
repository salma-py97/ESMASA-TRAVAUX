import styles from '../../styles/ReferencesPage/styles.module.css'

const TableRow = ({client, projet, durée, année}) => {

  const {tr} = styles

  return (
    <tr className={tr}>
      <td className="text-nowrap text-center">{année}</td>
      <td className="text-nowrap text-center">{client}</td>
      <td className="text-capitalize">{projet}</td>
      <td className="text-nowrap text-center">{durée}</td>
    </tr>
  )
}

export default TableRow
