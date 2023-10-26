import { useDispatch, useSelector } from 'react-redux';

const User = ({ name, email, password, adress }) =>
    <tr>
        <td style={{ border: "1px solid rgb(0, 0, 0)", paddingRight: "25px" }}>{name}</td>
        <td style={{ border: "1px solid rgb(0, 0, 0)", paddingRight: "25px" }}>{email}</td>
        <td style={{ border: "1px solid rgb(0, 0, 0)", paddingRight: "25px" }}>{password}</td>
        <td style={{ border: "1px solid rgb(0, 0, 0)", paddingRight: "25px" }}>{adress ? adress : "non initialized"}</td>
    </tr>

const Aboutpage = () => {
    const users = useSelector(state => state.users);

    return (
        <div style={{ width: "100%" }}>
            <h1>This is list of registred users</h1>
            <table>
                <tr>
                    <td style={{ border: "1px solid rgb(0, 0, 0)" }}><b>Name of user</b></td>
                    <td style={{ border: "1px solid rgb(0, 0, 0)" }}><b>User email</b></td>
                    <td style={{ border: "1px solid rgb(0, 0, 0)" }}><b>User password</b></td>
                    <td style={{ border: "1px solid rgb(0, 0, 0)" }}><b>Adress (if exist)</b></td>
                </tr>
                {users.map(User)}
            </table>
        </div>
    )
}

export { Aboutpage }