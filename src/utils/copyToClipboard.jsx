import toast from "react-hot-toast";

// Function to copy text to clipboard
const copyToClipboard = (text) => {
  // Use the Clipboard API to write the provided text to the clipboard.
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // If copying is successful, show a success notification.
      toast.success("Copied to clipboard!");
    })
    .catch(() => {
      // If an error occurs during copying, show an error notification.
      toast.error("Error copying to clipboard!");
    });
};

// Export the copyToClipboard function for use in other parts of the application.
export default copyToClipboard;
