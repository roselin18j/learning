const CategoryTable = ({
    categories,
    loading,
    onEdit,
    onDelete,
}) => {

    if (loading) {

        return (

            <div className="flex justify-center py-20">

                <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <table className="min-w-full">

                <thead className="bg-gray-100">

                    <tr className="text-left">

                        <th className="px-6 py-4">#</th>

                        <th className="px-6 py-4">Category</th>

                        <th className="px-6 py-4">Slug</th>

                        <th className="px-6 py-4">Description</th>

                        <th className="px-6 py-4">Order</th>

                        <th className="px-6 py-4">Status</th>

                        <th className="px-6 py-4 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {categories.length === 0 ? (

                        <tr>

                            <td
                                colSpan="7"
                                className="text-center py-16 text-gray-500"
                            >

                                No Categories Found

                            </td>

                        </tr>

                    ) : (

                        categories.map((category, index) => (

                            <tr
                                key={category._id}
                                className="border-t hover:bg-gray-50"
                            >

                                <td className="px-6 py-4">
                                    {index + 1}
                                </td>

                                <td className="px-6 py-4 font-semibold">
                                    {category.name}
                                </td>

                                <td className="px-6 py-4">

                                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">

                                        {category.slug}

                                    </span>

                                </td>

                                <td className="px-6 py-4">

                                    {category.description || "-"}

                                </td>

                                <td className="px-6 py-4">

                                    {category.order}

                                </td>

                                <td className="px-6 py-4">

                                    {category.isActive ? (

                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                                            Active

                                        </span>

                                    ) : (

                                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">

                                            Inactive

                                        </span>

                                    )}

                                </td>

                                <td className="px-6 py-4">

                                    <div className="flex justify-center gap-3">

                                        <button
                                            onClick={() => onEdit(category)}
                                            className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium"
                                        >

                                            Edit

                                        </button>

                                        <button
                                            onClick={() => onDelete(category._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
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

    );

};

export default CategoryTable;