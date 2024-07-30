import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { login, AUTH_STATUS } from '../store/authSlice';
import FeaturedLogo from "../components/navbar/FeaturedLogo";
import ValidatedInput from "../components/inputs/ValidatedInput";
import { validateEmail, validatePassword } from "../utils/validators";

const SigninPage = () => {

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(null);

    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(null);

    const dispatch = useDispatch();
    const authStatus = useSelector(state => state.auth.status);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (authStatus === AUTH_STATUS.succeeded) {
            history.push('/home');
        } else if (authStatus === AUTH_STATUS.failed) {
            // Handle failed login, show error message
            setErrorMessage(authError || 'Login failed. Please try again.');
        }
    }, [authStatus, authError, history]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (isEmailValid && isPasswordValid) {
            dispatch(login({ email, password }));

        } else {

        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-20 w-full dark:bg-gray-900
            lg:items-center lg:justify-around lg:flex-row lg:space-y-0"
        >
            <FeaturedLogo />
            <div className="w-full md:max-w-xl sm:max-w-md max-w-sm p-6 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800">
                <form className="space-y-3" onSubmit={handleFormSubmit}>
                    <h4 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">Sign in to your account</h4>

                    <ValidatedInput
                        label="Your email"
                        placeholder="name@example.com"
                        type="email"
                        value={email}
                        setValue={setEmail}
                        isValid={isEmailValid}
                        setIsValid={setIsEmailValid}
                        validator={validateEmail}
                    />
                    <ValidatedInput
                        label="Your password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        setValue={setPassword}
                        isValid={isPasswordValid}
                        setIsValid={setIsPasswordValid}
                        validator={validatePassword}
                    />

                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <Link to="/reset-password" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default SigninPage;
