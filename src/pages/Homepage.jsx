import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from "react"
// import { Alert, AlertTitle } from "@mui/material";
// import Alert from 'react-bootstrap/Alert';

const Homepage = () => {

    const dispatch = useDispatch();
    const { _email } = useParams()

    let [_name, setName] = useState(null)
    let [_adress, setAdress] = useState(null)
    let [_motherland, setMotherland] = useState(null)
    let [_phone, setPhone] = useState(null)

    const handleChangeNmae = (e) => setName(e.target.value);
    const handleChangeAdress = (e) => setAdress(e.target.value);
    const handleChangeMotherland = (e) => setMotherland(e.target.value);
    const handleChangePhone = (e) => setPhone(e.target.value);

    const btnClick = () => {
        console.log(_email)
        dispatch({
            type: "CHANGE_USER", email: _email, name: _name, adress: _adress
        });
        alert("Your user information is currently changed!");
    }



    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">Full Name </label>
                    <input
                        className="form__input"
                        type="text" id="Full"
                        placeholder="Full Name"
                        value={_name}
                        onChange={handleChangeNmae}
                    />
                </div>
                <div className="useradress">
                    <label className="form__label" for="adress">Current Adress </label>
                    <input
                        className="form__input"
                        type="text" id="Current"
                        placeholder="Current adress"
                        value={_adress}
                        onChange={handleChangeAdress}
                    />
                </div>
                <div className="usermotherland">
                    <label className="form__label" for="motherland">Motherland </label>
                    <input
                        className="form__input"
                        type="text" id="Motherland"
                        placeholder="Motherland"
                        value={_motherland}
                        onChange={handleChangeMotherland}
                    />
                </div>
                <div className="userphone">
                    <label className="form__label" for="phone">Phone Number </label>
                    <input
                        className="form__input"
                        type="text" id="Phone"
                        placeholder="Phone Number"
                        value={_phone}
                        onChange={handleChangePhone}
                    />
                </div>
            </div>
            <div class="footer">
                <button type="button" class="btn btn-primary" onClick={btnClick}>Set new information</button>
            </div>
        </div>
    )
}

export { Homepage }