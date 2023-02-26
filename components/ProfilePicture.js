import React, { useState } from "react";
import axios from "axios";
import { Image, Divider } from "semantic-ui-react";

const JWT = `Bearer `;

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
