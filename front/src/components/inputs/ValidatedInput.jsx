
const ValidatedInput = ({ label, placeholder, value, onValueChange, isValid, type, note }) => {
    return (
        <div>
            <label className={`block mb-2 text-sm font-medium ${isValid === true ? 'text-green-700 dark:text-green-500' : isValid === false ? 'text-red-700 dark:text-red-500' : 'text-white'}`}>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onValueChange}
                className={`dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 border text-sm rounded-lg block w-full p-2.5 focus:ring-green-500 focus:border-green-500
                    ${isValid === true ? 'border-green-500 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:border-green-500'
                        : isValid === false ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
                            : ''
                    }`}
                placeholder={placeholder}
            />
            {isValid === true && (
                <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                    <span className="font-medium">Alright!</span> {note}
                </p>
            )}
            {isValid === false && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Oops!</span> {note}
                </p>
            )}
            {isValid === null && (
                <p className="mt-2 text-sm h-5">
                    <span className="font-medium"></span>
                </p>
            )}
        </div>
    );
};

export default ValidatedInput;
