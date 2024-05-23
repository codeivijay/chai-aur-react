import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = 'Chai aur react with chuski kar ke piyo'

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  "click me to go to google",
  anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).render(
      reactElement
 
)
