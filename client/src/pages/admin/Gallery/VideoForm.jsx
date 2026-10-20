import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import GalleryService from "../../../services/gallery.service";

const initialState = {
    title: "",
    category: "",
    showOnHomepage: false,
    homepageOrder: 1,
    order: 1,
    isActive: true,
};

const VideoForm = ({ show, onClose, fetchVideos, video }) => {
    const [formData, setFormData] = useState(initialState);
    const [videoFile, setVideoFile] = useState(null);

    useEffect(() => {
        if (video) {
            setFormData({
                title: video.title,
                showOnHomepage: video.showOnHomepage,
                homepageOrder: video.homepageOrder,
                order: video.order,
                isActive: video.isActive,
            });
        } else {
            setFormData(initialState);
        }

        setVideoFile(null);
    }, [video]);

  

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const submitData = new FormData();

            submitData.append("title", formData.title);
            submitData.append("showOnHomepage", formData.showOnHomepage);
            submitData.append("homepageOrder", formData.homepageOrder);
            submitData.append("order", formData.order);
            submitData.append("isActive", formData.isActive);

            if (videoFile) {
                submitData.append("video", videoFile);
            }

            if (video) {
                await GalleryService.updateVideo(video._id, submitData);
                toast.success("Video updated successfully.");
            } else {
                await GalleryService.createVideo(submitData);
                toast.success("Video created successfully.");
            }

            await fetchVideos();
            onClose();
        } catch (error) {
            console.error(error);
            toast.error(
                error?.response?.data?.message || "Something went wrong."
            );
        }
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center border-b px-6 py-5">
                    <h2 className="text-2xl font-bold">
                        {video ? "Edit Video" : "Add Video"}
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-3xl text-gray-500 hover:text-red-500"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter video title"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>
                    

                        {/* Video */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Video
                            </label>
                            <input
                                type="file"
                                accept="*/*"
                                onChange={(e) => setVideoFile(e.target.files[0])}
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            {video?.video?.url && (
                                <video
                                    key={video.video.url}
                                    controls
                                    className="mt-3 w-64 rounded-lg border"
                                >
                                    <source src={video.video.url} />
                                </video>
                            )}
                        </div>

                        {/* Show on Homepage */}
                        <div className="flex items-center gap-3">
                            <input
                                id="showOnHomepage"
                                type="checkbox"
                                name="showOnHomepage"
                                checked={formData.showOnHomepage}
                                onChange={handleChange}
                                className="h-5 w-5"
                            />
                            <label htmlFor="showOnHomepage" className="font-medium">
                                Show on Homepage
                            </label>
                        </div>

                        {/* Orders */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 font-medium">
                                    Homepage Order
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    name="homepageOrder"
                                    value={formData.homepageOrder}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Order
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    name="order"
                                    value={formData.order}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                />
                            </div>
                        </div>

                        {/* Active */}
                        <div className="flex items-center gap-3">
                            <input
                                id="isActive"
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                                className="h-5 w-5"
                            />
                            <label htmlFor="isActive" className="font-medium">
                                Active
                            </label>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-3 border-t px-6 py-5">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 rounded-lg border hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            {video ? "Update Video" : "Save Video"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VideoForm;