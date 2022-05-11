import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import myStore from './Store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


/* console.log('State before dispatch', myStore.getState())
const unsubscribe = myStore.subscribe(() => console.log('Change in state occured'))
myStore.dispatch({
  type: 'BOOK_ADDED',
  bookInfo: {
    bookName: 'Head First JAVA',
    authorName: 'someOne'
  }
})

unsubscribe()
myStore.dispatch({
  type: 'BOOK_ADDED',
  bookInfo: {
    bookName: 'Head First NODE',
    authorName: 'someOtherAuthor'
  }
})



console.log('State after dispatch', myStore.getState()) */

/* const person = {
  fullName: 'Murugesan Selvarajan',
  city: 'Chennai',
  state: 'TN',
  contactInfo: {
    phoneNumber: 12345,
    emailId: 'xyz@gmail.com'
  }
}

const anotherPerson = {
  ...person,
  contactInfo: {
    ...person.contactInfo,
    phoneNumber: 11111
  },
  fullName: 'Credo Systemz',
  nickName: 'Credo'
} */


/* console.log('before person: ' + JSON.stringify(person))

console.log('before update anotherPerson: ' + JSON.stringify(anotherPerson))

anotherPerson.contactInfo.phoneNumber = 67890
console.log('after  update anotherPerson: ' + JSON.stringify(anotherPerson))
console.log('after person: ' + JSON.stringify(person)) */

/* const num = [1, 2, 3, 4]
const copyOfNum = [...num]
console.log('num:' + num)
console.log('copyOfNum:' + copyOfNum) */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


/* 1. Create a Store 
2. Create an action
3. Create Reducer
4. Update the store

{
books:[
  {
    id: 1,
    bookName: 'head first java',
    authorName: 'someone'
  },
  {
    id: 2,
    bookName: 'head first nodejs',
    authorName: 'someone'
  }
],
userInfo:{

}
}

Action
{
  type: 'BOOK_ADDED',
  bookInfo:{
    bookName: 
    authorName
  }

} */
reportWebVitals();
