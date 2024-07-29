import { useState } from "react";

import { validateEmail, validatePassword } from "../utils/validators";
import FeaturedLogo from "../components/navbar/FeaturedLogo";
import ValidatedInput from "../components/inputs/ValidatedInput";

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [emailNote, setEmailNote] = useState('')

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const [isValid, note] = validateEmail(value);
        setEmailNote(note);
        setIsEmailValid(isValid);
    };

    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(null);
    const [passwordNote, setPasswordNote] = useState('')

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        const [isValid, password] = validatePassword(value);
        setPasswordNote(password);
        setIsPasswordValid(isValid);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-20 w-full dark:bg-gray-900
            lg:items-center lg:justify-around lg:flex-row lg:space-y-0"
        >
            <FeaturedLogo />
            <div className="w-full md:max-w-xl max-w-md p-6 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800">
                <form className="space-y-3" action="#">
                    <h4 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">Sign in to your account</h4>
                    
                    <ValidatedInput
                        label="Your email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        note={emailNote}
                        onValueChange={handleEmailChange}
                        isValid={isEmailValid}
                    />
                    <ValidatedInput
                        label="Your password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        note={passwordNote}
                        onValueChange={handlePasswordChange}
                        isValid={isPasswordValid}
                    />
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default SigninPage;
