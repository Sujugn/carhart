// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as baseActions from 'redux/modules/base';
// import { AuthForm } from '../cotainer/auth';
// import { Routes, Route } from 'react-router-dom';
// import { Login, Register } from '../cotainer/auth';

// class Auth extends Component {
//     render() {
//         return (
//             <AuthForm>
//                 <Routes>
//                     <Route
//                         path="/login"
//                         element={<Login />}
//                     />
//                     <Route
//                         path="/register"
//                         element={<Register />}
//                     ></Route>
//                 </Routes>
//             </AuthForm>
//         );

//         // return (
//         //     <Routes>
//         //         <Route
//         //             path="/auth/login"
//         //             element={<Login />}
//         //         />
//         //         <Route
//         //             path="/auth/register"
//         //             element={<Register />}
//         //         />
//         //     </Routes>
//         // );
//     }
// }

// export default connect(
//     (state) => ({}),
//     (dispatch) => ({
//         BaseActions: bindActionCreators(baseActions, dispatch),
//     })
// )(Auth);
