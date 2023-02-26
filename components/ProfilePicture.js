import React, { useState } from "react";
import axios from "axios";
import { Image, Divider } from "semantic-ui-react";

const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzYWI0Y2E4My1mZDVlLTRkZTMtYjdhMi1hM2Q0YjJlODdkN2QiLCJlbWFpbCI6ImthYW5ha3k3N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYjU0ODQ0ZGM5ZDg4NmU0MmRkNjIiLCJzY29wZWRLZXlTZWNyZXQiOiI5ZmE4ZDJlMjEzZjhkZDc0M2JjNjlhMGMzZTMzMzU0MzdkNDZiY2YwNDE4MzY2MzYxYzVkN2Q2MjgyMmQ0ZjA2IiwiaWF0IjoxNjc3NDEyOTY2fQ.NqU9UqW-n-lFy2wrDXFtpYcA6e8kKQGcNJyAohEVExg`;

const imageAddress = "https://ipfs.io/ipfs/";

export default function ProfilePicture() {
  const [selectedFile, setSelectedFile] = useState();
  const [foto, setFoto] = useState(null);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    const metadata = JSON.stringify({
      name: "File name",
    });
    formData.append("pinataMetadata", metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", options);

    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: JWT,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPicture = async () => {
    var config = {
      method: "get",
      url: "https://api.pinata.cloud/data/pinList?includeCount=false",
      headers: {
        Authorization: JWT,
      },
    };
    const res = await axios(config);
    const pathData = res.data.rows;
    setFoto(pathData);
  };

  return (
    <div>
      <label className="form-label">Choose File</label>
      <input type="file" onChange={changeHandler} />
      <button onClick={handleSubmission}>Submit</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={getPicture}> Fotoları getir</button>
      <Divider />

      {foto == null ? console.log("şu an null") : renderImageList(foto)}
    </div>
  );
}

function renderImageList(props) {
  return props.map((element, index) => {
    return (
      <Image
        key={index}
        src={imageAddress + element.ipfs_pin_hash}
        size="tiny"
        
      />
    );
  });
}
