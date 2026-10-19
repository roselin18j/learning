import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import GalleryService from "../../../services/gallery.service";

import VideoTable from "./VideoTable";
import VideoForm from "./VideoForm";

const Videos = () => {

    const [videos, setVideos] = useState([]);

    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {

        fetchVideos();

    }, []);

    const fetchVideos = async () => {

        try {

            setLoading(true);

            const response =
                await GalleryService.getVideos();

            setVideos(response.data.data);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load videos.");

        } finally {

            setLoading(false);

        }

    };

    const handleAdd = () => {

        setSelectedVideo(null);

        setShowModal(true);

    };

    const handleEdit = (video) => {

        setSelectedVideo(video);

        setShowModal(true);

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this video?")) return;

        try {

            const response =
                await GalleryService.deleteVideo(id);

            toast.success(
                response.data.message ||
                "Video deleted successfully."
            );

            fetchVideos();

        } catch (error) {

            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                "Delete failed."
            );

        }

    };

    return (

        <div className="p-8 bg-gray-50 rounded-xl mt-10">

            <div className="flex items-center justify-between mb-8">

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Gallery Videos
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage gallery videos.
                    </p>

                </div>

                <button
                    onClick={handleAdd}
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow"
                >
                    + Add Video
                </button>

            </div>

            <VideoTable
                videos={videos}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <VideoForm
                show={showModal}
                onClose={() => {

                    setShowModal(false);

                    setSelectedVideo(null);

                }}
                fetchVideos={fetchVideos}
                video={selectedVideo}
            />

        </div>

    );

};

export default Videos;