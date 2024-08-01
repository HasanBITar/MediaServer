const SidebarLayout = ({ sidebar, children }) => {
    return (
        <div className="flex">
            <div className=" bg-gray-200 w-[18rem]">
                <div className="max-w-md w-full p-6">

                </div>
            </div>

            <div className=" bg-blue-700 flex-1">
                <div className="max-w-md w-full p-6">

                </div>
            </div>
        </div>
    )
}

export default SidebarLayout;