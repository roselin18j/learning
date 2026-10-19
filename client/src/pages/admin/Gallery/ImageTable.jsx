const ImageTable = ({
    images,
    loading,
    onEdit,
    onDelete,
}) => {

    if (loading) {

        return (

            <div className="flex justify-center py-20">

                <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="px-5 py-4 text-left">Preview</th>

                            <th className="px-5 py-4 text-left">Title</th>

                            <th className="px-5 py-4 text-left">Category</th>

                            <th className="px-5 py-4 text-center">Homepage</th>

                            <th className="px-5 py-4 text-center">Display Order</th>

                            <th className="px-5 py-4 text-center">Status</th>

                            <th className="px-5 py-4 text-center">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {images.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="py-16 text-center text-gray-500"
                                >

                                    No Images Found

                                </td>

                            </tr>

                        ) : (

                            images.map((image) => (

                                <tr
                                    key={image._id}
                                    className="border-t hover:bg-gray-50"
                                >

                                    <td className="px-5 py-4">

                                        <img
                                            src={image.image.url}
                                            alt={image.title}
                                            className="w-20 h-16 object-cover rounded-lg border"
                                        />

                                    </td>

                                    <td className="px-5 py-4 font-semibold">

                                        {image.title}

                                    </td>

                                    <td className="px-5 py-4">

                                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">

                                            {image.category}

                                        </span>

                                    </td>

                                    <td className="px-5 py-4 text-center">

                                        {image.showOnHomepage ? (

                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                                                Yes

                                            </span>

                                        ) : (

                                            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">

                                                No

                                            </span>

                                        )}

                                    </td>

                                    <td className="px-5 py-4 text-center">

                                        {image.order}

                                    </td>

                                    <td className="px-5 py-4 text-center">

                                        {image.isActive ? (

                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                                                Active

                                            </span>

                                        ) : (

                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">

                                                Inactive

                                            </span>

                                        )}

                                    </td>

                                    <td className="px-5 py-4">

                                        <div className="flex justify-center gap-2">

                                            <button
                                                onClick={() => onEdit(image)}
                                                className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm"
                                            >

                                                Edit

                                            </button>

                                            <button
                                                onClick={() => onDelete(image._id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                                            >

                                                Delete

                                            </button>

                                        </div>

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

export default ImageTable;