import React, { useState, useEffect } from "react"
import loginImg from "../images/login.svg";
import reg from "../images/reg.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LogIn from '../images/login.svg';
import SignUp from '../images/reg.svg';

export default function Atuh(props) {

    const preloadSrcList = [
        LogIn,
        SignUp
    ]

    useEffect(() => {
        preloadSrcList.forEach((svg) => {
          const img = new Image();
          img.src = svg;
        });
      }, []);

    let [authMode, setAuthMode] = useState("signin")

    let [_name, setName] = useState(null)
    let [_email, setEmail] = useState(null)
    let [_password, setPassword] = useState(null)
    const [role, setRole] = useState('user'); // По умолчанию пользователь

    const users = useSelector(state => state.users);
    const admins = useSelector(state => state.admins);


    const handleChangeNmae = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const btnSignInClick = () => {
        users.forEach((user) => {
            // console.log(user.email + " " + user.password)
            // console.log(_email + " " + _password)
            if (user.email == _email && user.password == _password) {
                // console.log("пользователь найден")
                navigate(`/home/${_email}`);
            }
        });

        admins.forEach((admin) => {
            // console.log(admin.email + " " + admin.password)
            // console.log(_email + " " + _password)
            if (admin.email == _email && admin.password == _password) {
                // console.log("пользователь найден")
                navigate("/about")
            }
        });
        // console.log("пользователь не найден")
    }

    const btnSignUpClick = () => {
        if (role != 'user') {
            dispatch({
                type: "ADD_ADMIN", payload: {
                    email: _email,
                    password: _password,
                }
            });
            navigate("/about");
        } else {
            dispatch({
                type: "ADD_USER", payload: {
                    name: _name,
                    email: _email,
                    password: _password,
                    adress: "",
                }
            });
            navigate(`/home/${_email}`);
        }
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="image">
                            <img src={LogIn} />
                        </div>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span style={{ cursor: 'pointer' }} className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                value={_email}
                                onChange={handleChangeEmail}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={_password}
                                onChange={handleChangePassword}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="button" className="btn btn-primary" onClick={btnSignInClick}>
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="image">
                        <img src={SignUp} />
                    </div>
                    <div className="text-center">
                        Already registered?{" "}
                        <span style={{ cursor: 'pointer' }} className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            value={_name}
                            onChange={handleChangeNmae}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            value={_email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            value={_password}
                            onChange={handleChangePassword}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Role</label>
                        <select className="form-select mt-1" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="button" className="btn btn-primary" onClick={btnSignUpClick}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}