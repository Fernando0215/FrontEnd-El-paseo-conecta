import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Paper } from "@mui/material";

const MessageBubble = ({ content, type }) => {
  const isImage = type === "image";

  return (
    <Box display="flex" justifyContent={isImage ? "center" : "flex-start"} mt={2}>
      <Paper elevation={3} style={{ padding: "10px", maxWidth: "300px" }}>
        {isImage ? (
          <img src={`data:image/jpeg;base64,${content}`} alt="Mensaje de imagen" style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "8px" }} />
        ) : (
          <Typography>{content}</Typography>
        )}
      </Paper>
    </Box>
  );
};

MessageBubble.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "image"]).isRequired,
};

export default MessageBubble;



