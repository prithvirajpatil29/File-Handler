import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import { Register } from './components/auth/Register';
import Header from './components/default/Header';
import Home from './components/default/Home'
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/user/UserDashboard';
import Pnf from './components/default/Pnf';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Auth/PrivateRoute';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import View from './components/screens/View';
import FileUpload from './components/user/FileUpload';
import GeneratePassword from './components/auth/GeneratePassword';
import ResetPassword from './components/auth/ResetPassword';
function App() {
  const context = useContext(AuthContext)
  const isLogin = context.isLogin
  return (
    <BrowserRouter>
      <Header></Header>
      <ToastContainer autoClose={4000} position='top-center'></ToastContainer>
      <Routes>
          <Route element={<PrivateRoute></PrivateRoute>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/admin/dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
            <Route path='/user/dashboard' element={<UserDashboard></UserDashboard>}></Route>
            <Route path='/upload/new' element={<FileUpload></FileUpload>}></Route>
            <Route path='view/file/:id' element={<View></View>}></Route>
          </Route>
          <Route path='/password/reset' element={isLogin? <Navigate to='/'></Navigate> : <ResetPassword></ResetPassword>}></Route>
          <Route path='/generate/password' element={isLogin? <Navigate to='/'></Navigate> : <GeneratePassword></GeneratePassword>}></Route>
        <Route path='/login' element={isLogin? <Navigate to={'/'}></Navigate>:<Login></Login>}></Route>
        <Route path='/register' element={isLogin? <Navigate to={'/'}></Navigate>:<Register></Register>}></Route>
        <Route path='/*' element={<Pnf></Pnf>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
