import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { UploadVideo } from "../apiData/uploadVideo";
import { toast } from "react-toastify";
import { X } from "lucide-react";

interface PostVideoFormPopUpProps {
  onClose: () => void;
}

const PostVideoFormPopUp = ({ onClose }: PostVideoFormPopUpProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: UploadVideo,
    onSuccess: () => {
      toast.success("video uploaded successfully");
      onClose();
    },
    onError: (err: any) => {
      toast.error(
        err?.response?.data?.message ||
          "something went wrong while uploading video",
      );
    },
  });

  const handleVideoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", titleRef.current?.value || "");
    formData.append("description", descriptionRef.current?.value || "");

    if (thumbnailRef.current?.files?.[0]) {
      formData.append("thumbnail", thumbnailRef.current.files[0]);
    }
    if (videoRef.current?.files?.[0]) {
      formData.append("videoFile", videoRef.current.files[0]);
    }
    mutate(formData);
  };
  return (
    <div className="relative flex justify-center mt-10 ml-100">
      <div
        onClick={onClose}
        className="absolute text-2xl text-black right-53 hover:text-xl hover:text-white"
      >
        <X />
      </div>
      <div className="w-full max-w-sm bg-linear-to-r from-white to-gray-400 rounded-2xl shadow-2xl p-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Upload Video</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleVideoUpload} className="space-y-3">
          {/* Username */}
          <div>
            <label className="text-sm font-semibold text-gray-600">title</label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="enter title of your video ..."
                required
                ref={titleRef}
                className="w-full pl-10 pr-3 py-2 bg-gray-100 border rounded-lg outline-none focus:ring-1 focus:ring-gray-800 focus:border-black"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Description
            </label>
            <div className="relative mt-1">
              <input
                type="textarea"
                placeholder="enter video description ..."
                required
                ref={descriptionRef}
                className="w-full pl-10 pr-3 py-2 bg-gray-100 border rounded-lg outline-none focus:ring-1 focus:ring-gray-800 focus:border-black"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Select Thumbnail
            </label>
            <div className="relative mt-1">
              <input
                type="file"
                placeholder="select thumbnail"
                required
                ref={thumbnailRef}
                className="w-full pl-10 pr-3 py-2 bg-gray-100 border rounded-lg outline-none focus:ring-1 focus:ring-gray-800 focus:border-black"
              />
            </div>
          </div>
          {/* choose avatar */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Select video
            </label>
            <div className="relative mt-1">
              <input
                type="file"
                placeholder="select video"
                required
                ref={videoRef}
                className="w-full pl-10 pr-3 py-2 bg-gray-100 border rounded-lg outline-none focus:ring-1 focus:ring-gray-800 focus:border-black"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-black to-gray-600 text-white py-2 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-md"
          >
            {isPending ? "Uploading" : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostVideoFormPopUp;
