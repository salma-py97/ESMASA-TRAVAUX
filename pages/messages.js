// import { db } from "../firebase"
// import { useState, useEffect } from "react"
// import {
// 	onSnapshot,
// 	collection,
// } from "@firebase/firestore"

import Message from '../components/Message'

const messages = () => {
	// const [messages, setMessages] = useState([])

	// useEffect(() =>
	// 	onSnapshot(collection(db, "messages"),
	// 		(snapshot) => {
  //       setMessages(snapshot.docs.map(doc => {
  //         return {id: doc.id, ...doc.data()}
  //       }))
	// 		}
	// 	),
	// 		[db]
  //     )

// console.log(messages)
	return (
		<div>
      {/* <h1>HELLO THERE</h1>
			{messages.map(message => {
        <Message key={message.id} Email={message.Email} Nom={message.Nom} Service={message.Service} Téléphone={message.Téléphone} />
			})}
      <h1>BYE THERE</h1> */}
      <Message />
		</div>
	)
}

export default messages
