import axios from "axios";

// let accessKey = "XlLjx_y_qeJLtTJcNx3l9dUdFIxzApYfVStyoNbDmeI";
let accessKey2 = "Qk6KrUCLxmG4guJxIMClRa355Sr3eYPyVRuqm-xKmJs";
let url = `https://api.unsplash.com/`;

export default axios.create({
  baseURL: url,
  headers: {
    Authorization: `Client-ID ${accessKey2}`,
  },
});
