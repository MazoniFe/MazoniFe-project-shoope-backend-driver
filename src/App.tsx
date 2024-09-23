import ProcessStatus from "./assets/components/ProcessStatus";

const App = () => {
    return (
        <div className="grid min-h-screen bg-gray-800 grid-rows-5 px-2 py-6">
            <div className="row-span-1 flex items-center justify-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png"
                    className="w-20 lg:w-22 h-auto rounded-lg shadow-md"
                    alt=""
                />
            </div>

            <div className="row-span-4 grid grid-cols-1 justify-items-center align-items-center">
                <div className="w-full self-center">
                    <ProcessStatus />
                </div>
            </div>
        </div>
    );
};

export default App;
