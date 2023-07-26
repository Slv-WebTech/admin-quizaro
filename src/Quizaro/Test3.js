import React, { useEffect } from "react";

const ReloadPageComponent = () => {
  useEffect(() => {
    const handlePageReload = () => {
      // Place your desired actions to be performed on reload here.
      // For example, saving data or showing a confirmation message.
      console.log("Page is being reloaded!");
      alert("Success");
      // Do your logic here...
    };

    // Add the event listener for beforeunload when the component mounts.
    window.addEventListener("beforeunload", handlePageReload);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("beforeunload", handlePageReload);
    };
  }, []); // The empty dependency array ensures this effect runs only once, on component mount.

  return <div>Reload Page Component</div>;
};

export default ReloadPageComponent;
