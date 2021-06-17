import styles from '../../styles/SafetyPage/Break.module.css'

const Break = () => {
  const {bg, inner_bg, title} = styles
  return (
    <div className={`d-flex justify-content-center align-items-center text-white p-5 text-center ${bg}`}>
      <div className={`px-5 py-3 ${inner_bg}`}>
        <h1 className={`my-3 ${title}`}>Sécurité</h1>
        <p className={`p-4 lead`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure earum tempora magnam, aliquam dolorem nesciunt nulla! Porro illum ducimus quos aspernatur perspiciatis eaque odio explicabo dolor odit rerum ea, illo corrupti nesciunt, debitis ut. Deleniti qui est provident similique, unde tempora. Quidem quasi sunt eveniet hic architecto dignissimos quis laudantium.</p>
      </div>
    </div>
  )
}

export default Break
