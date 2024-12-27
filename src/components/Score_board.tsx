
function Score_board() {
    return (
        <div className="flex-1 bg-[#272528] p-4">
            <div className="bg-[#302F31] shadow-lg rounded-lg p-[15px]">
            <label className="input input-xs input-bordered flex items-center gap-2 w-1/2 text-[#fff] bg-[#000]">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
            </label>
            <div className="overflow-x-auto">
            <table className="table table-zebra table-sm text-[24px] mt-5">
                {/* head */}
                <thead>
                <tr>
                    <th>Rating</th>
                    <th>User</th>
                    <th>Point</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>123</td>
                    <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>123</td>
                    <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>123</td>
                    <td>Red</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>
        
        </div>
    )
}

export default Score_board