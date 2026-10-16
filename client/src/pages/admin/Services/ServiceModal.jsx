import React, { useEffect } from "react";

export default function ServiceModal({
    isOpen,
    onClose,
    children,
}) {

    useEffect(() => {

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-xl"
            >
                <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-5">
                    <h2 className="text-2xl font-bold">
                        Add Service
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-3xl leading-none text-gray-500 hover:text-black"
                    >
                        ×
                    </button>
                </div>

                <div className="p-6 pb-10">
                    {children}
                </div>
            </div>

        </div>
    );
}