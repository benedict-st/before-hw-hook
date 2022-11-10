import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SimpleComponent = (props) => {
    const { isAuth, onLogin, onLogOut } = props;
    const [auth, setAuth] = useState();
    useEffect(() => {
        if (isAuth === null || isAuth === undefined) {
           setAuth(false);
        } else {
            setAuth(true);
        }
    }, [isAuth]);
    const onHandleLogin = () => {
        onLogin();
        setAuth(true);
    };
    const onHandleLogOut = () => {
        onLogOut();
        setAuth(false);
    };
    return (
        <>
            {!auth ? (
                <button className="btn btn-primary" onClick={onHandleLogin}>
                    Войти
                </button>
            ) : (
                <button className="btn btn-warning" onClick={onHandleLogOut}>
                    Выйти из системы
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired
};
export default SimpleComponent;
