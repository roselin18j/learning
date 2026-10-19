const VideoTable = ({
    videos,
    loading,
    onEdit,
    onDelete,
}) => {

    if (loading) {

        return (

            <div className="flex justify-center py-10">

                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="px-4 py-3 text-left">
                                Thumbnail
                            </th>

                            <th className="px-4 py-3 text-left">
                                Title
                            </th>


                            <th className="px-4 py-3 text-center">
                                Homepage
                            </th>

                            <th className="px-4 py-3 text-center">
                                Order
                            </th>

                            <th className="px-4 py-3 text-center">
                                Status
                            </th>

                            <th className="px-4 py-3 text-center">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {videos.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="8"
                                    className="text-center py-10 text-gray-500"
                                >

                                    No Videos Found

                                </td>

                            </tr>

                        ) : (

                            videos.map((video) => (

                                <tr
                                    key={video._id}
                                    className="border-t hover:bg-gray-50"
                                >

                                    <td className="px-4 py-3">

                                        {video.video?.url ? (

                                            <video
                                                controls
                                                className="w-32 h-20 rounded-lg border object-cover"
                                            >

                                                <source
                                                    src={video.video.url}
                                                    type="video/mp4"
                                                />

                                                Your browser does not support the video tag.

                                            </video>

                                        ) : (

                                            <span className="text-gray-400">
                                                No Video
                                            </span>

                                        )}

                                    </td>

                                    <td className="px-4 py-3 font-medium">

                                        {video.title}

                                    </td>

                                    <td className="px-4 py-3 text-center">

                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${video.showOnHomepage
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-gray-100 text-gray-600"
                                                }`}
                                        >

                                            {video.showOnHomepage
                                                ? "Yes"
                                                : "No"}

                                        </span>

                                    </td>

                                    <td className="px-4 py-3 text-center">

                                        {video.order}

                                    </td>

                                    <td className="px-4 py-3 text-center">

                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${video.isActive
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >

                                            {video.isActive
                                                ? "Active"
                                                : "Inactive"}

                                        </span>

                                    </td>

                                    <td className="px-4 py-3 text-center space-x-2">

                                        <button
                                            onClick={() => onEdit(video)}
                                            className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
                                        >

                                            Edit

                                        </button>

                                        <button
                                            onClick={() => onDelete(video._id)}
                                            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
                                        >

                                            Delete

                                        </button>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default VideoTable;