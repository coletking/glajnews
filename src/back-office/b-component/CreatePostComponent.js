import React, { useState, useMemo } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { serverTimestamp } from "firebase/firestore";
import "react-quill/dist/quill.snow.css";
import { doc, setDoc } from "firebase/firestore";
import "../Styles/CreatePost.css"; // Import the CSS file
import { Alert, ProgressBar } from "react-bootstrap";
import { getRandomString } from "../../Services/GetRandomNumber";
import { database } from "../../firebase";
const ReactQuill = React.lazy(() => import("react-quill"));

const PostComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const [progress, setUploadProgress] = useState(0);
  const [category, setcategories] = useState("");
  const [PublishBy, setpublishBy] = useState("");
  const [fileType, setfilType] = useState("");
  const [Blogtype, setBlogType] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Check if the file size exceeds the allowed limit (in bytes)
      const maxSizeBytes = 10 * 1024 * 1024; // 10 MB as an example; adjust as needed
      if (file.size > maxSizeBytes) {
        setmessage(
          "File size exceeds the limit. Please choose a smaller file."
        );
      } else {
        setSelectedFile(file);
        setmessage("");
      }
    }
  };

  const uploadFile = async () => {
    if (selectedFile) {
      const maxSizeBytes = 10 * 1024 * 1024; // 10 MB limit
      if (selectedFile.size > maxSizeBytes) {
        setmessage(
          "File size exceeds the limit. Please choose a smaller file."
        );
        return null;
      }

      const storage = getStorage();
      const fileRef = ref(storage, selectedFile.name);

      const uploadTask = uploadBytesResumable(fileRef, selectedFile);

      // Track upload progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
        },
        () => {
          // Upload complete
          console.log("File uploaded successfully");
        }
      );

      await uploadTask;

      const downloadURL = await getDownloadURL(fileRef);
      return downloadURL;
    }

    setmessage("");
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setUploadProgress(0);
    const messID = getRandomString(
      30,
      "1234567890qwertyuiopasdfhjklzxcvbnmQWERTYUIOPASDFHJKLZXCVBNM"
    );

    const ref = getRandomString(
      35,
      "1234567890qwertyuiopasdfhjklzxcvbnmQWERTYUIOPASDFHJKLZXCVBNM"
    );

    if (fileType === "image" && selectedFile.type === "video/mp4") {
      window.alert("wrong file selected");
      setloading(false);
      return;
    }
    try {
      const fileUrl = await uploadFile();

      if (
        !fileUrl ||
        title === "" ||
        category === "" ||
        content === "" ||
        fileType === "" ||
        Blogtype === ""
      ) {
        window.alert("Required filed missing");
        setloading(false);
        return;
      }
      const data = {
        id: ref,
        title,
        content,
        imageUrl: fileUrl,
        PublishBy,
        category,
        Blogtype,
        fileType,
        comment: [],
        blogid: messID,
        is_eye_witness: category === "eye-witness" ? true : false,
        is_active: true,
        is_Approved: true,
        createdAt: serverTimestamp(),
      };
      await setDoc(doc(database, "posts", data.id), data);
      setmessage("post Created Successfully");
      setTitle("");
      setContent("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error submitting post:", error);
    }
    setloading(false);
  };

  return (
    <div className="createpostrapper">
      <div className="post-container">
        <h2>Create a Post</h2>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          maxLength={100}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={(text) => setContent(text)}
        />
        <label>File Type:</label>
        <select
          name=""
          id=""
          required
          onChange={(e) => setfilType(e.target.value)}
        >
          <option value="">Select File </option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <label>Blog Type:</label>
        <select
          name=""
          id=""
          required
          onChange={(e) => setBlogType(e.target.value)}
        >
          <option value="">Select </option>
          <option value="Trending">Trending</option>
          <option value="Normal ">Latest News</option>
          <option value="Not-Normal">Normal</option>
        </select>
        <label>Upload File:</label>
        <input type="file" onChange={handleFileChange} />
        <br />
        <label>Category:</label>
        <select
          name=""
          id=""
          required
          onChange={(e) => setcategories(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="sport">Sport</option>
          <option value="entertainment">Entertainment</option>
          <option value="politics">Politics</option>
          <option value="eye-witness">Eye-witness</option>
          <option value="business">Business</option>
          <option value="foreign">Foreign</option>
          <option value="education">Education</option>
          <option value="extra">Extra</option>
          <option value="article">Article</option>
          <option value="documentary">Documentary</option>
        </select>
        <label>Publish by:</label>
        <input
          type="text"
          value={PublishBy}
          maxLength={50}
          required
          onChange={(e) => setpublishBy(e.target.value)}
        />
        <br />
        <br />
        {progress > 0 && (
          <ProgressBar now={progress} label={`${progress.toFixed(2)}%`} />
        )}{" "}
        <br />
        <button disabled={loading} onClick={handleSubmit}>
          {loading ? "Please wait.." : "Create Post"}
        </button>{" "}
        {message ? <Alert variant="success">{message}</Alert> : ""}
      </div>
    </div>
  );
};

export default PostComponent;
