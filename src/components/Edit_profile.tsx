
function Edit_profile() {
    return (
        <main className="flex-1 bg-[#272528] p-4">
        <div className="bg-[#302F31] shadow-lg rounded-lg p-[15px]">
            <p className="text-[64px] text-center font-bold">Edir Profile</p>

            <div className="flex justify-between">
                <div className="w-1/2 block justify-items-center mt-10">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="rounded-lg w-[150px] h-[150px] object-cover mr-6 items-center"
                    />
                    <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs text-[#000] mt-2" />
                </div>
                <div className="w-full">
                    <div className="pl-10">
                        <p>test</p><input type="text" placeholder="Type here" className="input input-xs input-bordered w-[80%] max-w-xs text-[#000]" />
                        <p>test</p><input type="text" placeholder="Type here" className="input input-xs input-bordered w-[80%] max-w-xs text-[#000]" />
                        <p>test</p><input type="text" placeholder="Type here" className="input input-xs input-bordered w-[80%] max-w-xs text-[#000]" />
                        <p>test</p><input type="text" placeholder="Type here" className="input input-xs input-bordered w-[80%] max-w-xs text-[#000]" />
                    </div>

                    <div className="mt-10 flex justify-end pr-[20px]">
                        <button className="btn btn-xs btn-error mr-[15px] texts-[#fff]">Cancel</button>
                        <button className="btn btn-xs btn-success text-[#fff]">Save</button>
                    </div>
                </div>
                
            </div>
            

        </div>
    </main>
    )
}

export default Edit_profile