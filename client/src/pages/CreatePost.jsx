import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`); //dynamic routing
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };
  return (
    <div className="p-1 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-10 font-semibold">
        Create a FlashCard
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-col justify-between">
          <TextInput
            type="text"
            placeholder="Question"
            required
            id="title"
            className="w-full h-full text-xl" // Make the input fill the container
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          {/* console.log('Title changed:', title); */}
          <TextInput
            type="text"
            placeholder="Answer"
            required
            id="title"
            className="w-full h-30 text-3xl" // Increase the height of the box to 20
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
            {/* // console.log('Title changed:', content)// */}
          {/* /> */}
        </div>

        <Button type="submit" gradientDuoTone="purpleToPink">
          Add FlashCard
        </Button>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
