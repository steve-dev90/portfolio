// //FROM TEMPLATE

// import React from 'react'
// import {connect} from 'react-redux'

// import {getGreetings} from '../actions/greetings'

// const renderGreeting = (greeting, key) => (
//   <h1 key={key}>{greeting.text}</h1>
// )

// export const Greetings = ({greetings, dispatch}) => (
//   <div>
//     <button onClick={() => dispatch(getGreetings())}>Show Greetings</button>
//     {greetings.map(renderGreeting)}
//     <section className="section">
//       <div className="container">
//         <h1 className="title">
//           Hello World
//         </h1>
//         <p className="subtitle">
//           My first website with <strong>Bulma</strong>!
//         </p>
//       </div>
//     </section>

//   </div>
// )

// const mapStateToProps = (state) => {
//   return {greetings: state.greetings}
// }

//export default connect(mapStateToProps)(Greetings)
