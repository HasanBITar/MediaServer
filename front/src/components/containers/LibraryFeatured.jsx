const LibraryFeatured = ({title, children}) => {
    return (
        <div className="flex flex-col m-auto rounded-md bg-gray-800">
                {/*  */}
            <div className="bg-gray-800 px-5 lg:px-8 sticky -top-1 z-10 rounded-t-md shadow-lg">
                <h1 className="flex py-5 font-bold text-4xl text-white">{title}</h1>
            </div>
            <div className="p-5 lg:p-8">{children}</div>
        </div>
    )
}

export default LibraryFeatured;