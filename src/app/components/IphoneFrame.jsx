import React from "react";

export const IPhoneFrame = ({ children }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.iphone}>
        <div style={styles.notch}></div>
        <div style={styles.screen}>{children}</div>
        <div style={styles.button}></div>
        <div style={styles.volumeButtons}></div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    background: "linear-gradient(90deg, #FF2B00, #FF6F00, #FFA100)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "screen",
    margin: 0,
  },
  iphone: {
    width: "390px", // iPhone 14 Plus width
    height: "844px", // iPhone 14 Plus height
    background: "rgba(255, 255, 255, 0.155)", // Semi-transparent white
    border: "12px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "50px",
    position: "relative",
    // boxShadow: "0 10px 30px ",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },
  notch: {
    width: "160px",
    height: "30px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "0 0 20px 20px",
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },
  screen: {
    // padding: "50px 20px 20px 20px",
    height: "100%",
    boxSizing: "border-box",
    // overflow: "auto",
  },
  button: {
    width: "5px",
    height: "50px",
    // background: "#000",
    position: "absolute",
    right: "-15px",
    top: "120px",
    borderRadius: "5px",
  },
  volumeButtons: {
    width: "5px",
    height: "100px",
    // background: "#000",
    position: "absolute",
    left: "-15px",
    top: "100px",
    borderRadius: "5px",
  },
};
