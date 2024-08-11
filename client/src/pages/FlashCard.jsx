import React, { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  // Styles for the flashcard component
  const flashcardStyle = {
    width: "650px", // Width of the card
    height: "400px", // Height of the card
    perspective: "1500px", // Perspective for 3D effect
    margin: "0 auto",
    cursor: "pointer", // Changes cursor to indicate clickable area
    transition: "transform 0.5s ease", // Smooth transition for the card
  };

  const flashcardInnerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transformStyle: "preserve-3d",
  };

  const frontStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column", // Stack elements vertically
    alignItems: "center", // Center items horizontally
    justifyContent: "center",
    fontSize: "32px", // Larger font size for better readability
    color: "#fff",
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // Gradient color for the front
    borderRadius: "15px", // Rounded corners
    boxShadow: "0 15px 30px rgba(106, 17, 203, 0.6)", // Deeper shadow effect
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Stronger text shadow
    padding: "20px", // Padding for inner content
    overflow: "hidden", // Prevents overflow of content
  };

  const backStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column", // Stack elements vertically
    alignItems: "center", // Center items horizontally
    justifyContent: "center",
    fontSize: "32px", // Larger font size for better readability
    color: "#fff",
    background: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)", // Gradient color for the back
    borderRadius: "15px", // Rounded corners
    boxShadow: "0 15px 30px rgba(150, 65, 108, 0.6)", // Deeper shadow effect
    transform: "rotateY(180deg)",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Stronger text shadow
    padding: "20px", // Padding for inner content
    overflow: "hidden", // Prevents overflow of content
  };

  const labelStyle = {
    fontSize: "24px", // Font size for labels
    fontWeight: "bold", // Bold text
    textAlign: "center", // Center the text
    marginBottom: "10px", // Space between label and content
    letterSpacing: "1px", // Increase space between letters
    textTransform: "uppercase", // Make text uppercase
    color: "#fff", // Solid white color for better contrast
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
    borderRadius: "8px", // Rounded corners for background
    padding: "10px 15px", // Padding around the text
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)", // Shadow for depth
    transition: "all 0.3s ease", // Smooth transition for hover effect
  };

  return (
    <div style={flashcardStyle} onClick={handleFlip}>
      <div
        style={{
          ...flashcardInnerStyle,
          transform: flipped ? "rotateY(180deg)" : "none",
        }}
      >
        <div style={frontStyle}>
          <h2 style={labelStyle}>Question:</h2> {/* Front label */}
          <h2>{question}</h2>
        </div>
        <div style={backStyle}>
          <h2 style={labelStyle}>Answer:</h2> {/* Back label */}
          <h2>{answer}</h2>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
