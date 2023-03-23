import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { toggleAutth } from "../features/auth/authSlice";
import {
    decrement,
    increment,
    incrementWithPayload,
    reset,
} from "../features/counter/counterSlice";
import { toggleTheme } from "../features/theme/themeSlice";

const Home = () => {
    // From redux store
    const dispatch = useDispatch();
    const { value, minNum, maxNum } = useSelector(({ counter }) => counter); // counter slice
    const { mode } = useSelector(({ theme }) => theme);
    const { isLoggedIn } = useSelector(({ auth }) => auth);

    const incrementHandler = () => dispatch(increment());
    const incrementWithPayloadHandler = () =>
        dispatch(incrementWithPayload(15));
    const decrementHandler = () => dispatch(decrement());
    const resetHandler = () => dispatch(reset());

    return (
        <div>
            <div className="row justify-content-center gap-4 mt-4">
                <button
                    onClick={incrementHandler}
                    style={{ maxWidth: 100, fontSize: 12 }}
                >
                    increment
                </button>

                <button
                    onClick={decrementHandler}
                    style={{ maxWidth: 100, fontSize: 12 }}
                >
                    decrement
                </button>
                <button
                    onClick={incrementWithPayloadHandler}
                    style={{ maxWidth: 100, fontSize: 12 }}
                >
                    increment with payload
                </button>

                <button
                    onClick={resetHandler}
                    style={{ maxWidth: 100, fontSize: 12 }}
                >
                    reset
                </button>
            </div>

            <div className="fw-4 text-center mt-5 fs-1 mx-auto mw-content">
                {value}
            </div>

            <hr />

            <div className="container">
                <div className="d-flex flex-col align-items-center">
                    <h5 className="text-center py-5">Theme : {mode} </h5>
                    <button
                        className="ms-4"
                        onClick={() => dispatch(toggleTheme())}
                    >
                        Toggle theme
                    </button>
                </div>

                <div className="d-flex flex-col align-items-center">
                    <h4 className="text-center py-5">
                        {isLoggedIn ? (
                            <p>You are signed in</p>
                        ) : (
                            <p>plaese sign in</p>
                        )}
                    </h4>
                    <button
                        className="ms-4"
                        onClick={() => dispatch(toggleAutth())}
                    >
                        {isLoggedIn ? "logout" : "login"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
