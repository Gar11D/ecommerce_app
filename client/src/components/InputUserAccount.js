import React, {Fragment, useState} from "react"; 

const InputUserAccount = () => {

    const [userAccount, setUserAccount] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {userAccount};
            const response = await fetch ("http://localhost:3000/user_accounts",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
        }   catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">PERN User Account Lists</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text"
                className="form-control"
                value={userAccount}
                onChange={e => setUserAccount(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}

export default InputUserAccount;