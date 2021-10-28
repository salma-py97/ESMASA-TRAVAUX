
import { db } from "../firebase"
import { useState, useEffect } from "react"
import {
	onSnapshot,
	collection,
  doc,
} from "@firebase/firestore"

// {Email, Nom, Société, Service, Téléphone}
const Message = () => {

  const [messages, setMessages] = useState([])

	useEffect(() =>
		onSnapshot(collection(db, "messages"),
			(snapshot) => {
        setMessages(snapshot.docs.map(doc => {
          console.log({...doc.data()})
          console.log(doc.data())
          return {id: doc.id, data: doc.data()}
        }))
			}
		),
			[db]
      )

  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1>HELLO</h1>
    <h1>HELLO</h1>
    <h1>HELLO0</h1>
      {messages.map(message => {
        // {console.log("hello : ", message.data.nom)}
        <div>    
          <h2>OK</h2>
          <h1>{message.data.nom}</h1>
        </div>
  })}
  </>

  )
}

export default Message
