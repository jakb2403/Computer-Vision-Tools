import { useState, useEffect } from "react";
import "./App.css";
import ImageOutput from "./components/ImageOutput";

const App = () => {
  // create a state called image, with its setter function
  const [image, setImage] = useState({
    file: null,
  });

  // create a state which tracks whether the display image button has been pressed
  const [dispPressed, setDispPressed] = useState(false);

  // create event handler for when a new image is uploaded
  const fileSelectedHandler = (event) => {
    console.log("The image named %s was uploaded", event.target.files[0].name);
    setImage({
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  // create event handler to handle the display image button click event
  const displayImageHandler = (event) => {
    console.log("Display image button pressed. We will now display the image.");
    setDispPressed(true);
  };

  return (
    <div className="app">
      <h1>Computer Vision Tools</h1>
      {/* <FileUploadComponent /> */}
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={displayImageHandler}>Display image</button>

      {(image.file != null && dispPressed) ? (
        <ImageOutput imageFile={image.file} />
      ) : (
        <h2>No image was selected</h2>
      )}
    </div>
  );
};

export default App;
