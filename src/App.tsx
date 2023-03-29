import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import PostsListPage from "./pages/PostsListPage/PostListPage";
import UsersListPage from "./pages/UsersListPage/UsersListPage";
import PostPage from "./pages/PostPage/PostPage";
import UserPage from "./pages/UserPage/UserPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import {isAuth} from "./services/AuthService";

import ProtectedRoute from "./components/PrivateRoute/PrivateRoute";

import './App.css';


const App: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(isAuth());
    const handleLogin = (isLogin: boolean):void => {
        setIsLogin(isLogin);
    }
  return (
        <Router>
            <div className="g-container">
                { isLogin && <Header changeLogin={handleLogin} /> }
                <Routes>
                    <Route path="/" element={
                        <ProtectedRoute user={isLogin}>
                            <HomePage/>
                        </ProtectedRoute>}/>
                    <Route path="/posts" element={
                        <ProtectedRoute user={isLogin}>
                            <PostsListPage/>
                        </ProtectedRoute>
                    } />
                    <Route path="/posts/:postID" element={
                        <ProtectedRoute user={isLogin}>
                            <PostPage/>
                        </ProtectedRoute>
                    } />
                    <Route path="/users" element={
                        <ProtectedRoute user={isLogin}>
                            <UsersListPage />
                        </ProtectedRoute>
                    } />
                    <Route path="/users/:userID" element={
                        <ProtectedRoute user={isLogin}>
                            <UserPage />
                        </ProtectedRoute>
                    } />
                    <Route path='*' element={<ErrorPage />}/>
                    <Route path="/login" element={<LoginPage isLogin={isLogin} changeLogin={handleLogin}/>} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
