import React, { Fragment, useState, useRef } from "react";
import PostProfile from "@lib/utils/postProfile";

const style_title = {
  display: "flex",
  height: "60px",
  background: "#fffbe6",
  alignItems: "center",
  paddingLeft: "32px",
  borderTop: "2px solid #d9d9d9",
  borderBottom: "2px solid #d9d9d9",
};
const style_head_text = {
  margin: "0px",
  fontSize: "18px",
};

const style_img = {
  paddingTop: "50px",
  paddingBottom: "30px",
  marginLeft: "50%",
};

const style_basicInfo = {
  padding: "15px",
  paddingBottom: "0px",
};

const style_basicText = {
  width: "80%",
  fontSize: "20px",
  marginLeft: "10%",
  marginBottom: "15px",
  background: "#eeeeff",
};

const style_description = {
  height: "100px",
  fontSize: "14px",
  padding: "10px",
};

const style_button = {
  marginLeft: "10px",
  marginRight: "10px",
  fontSize: "15px",
  background: "blue",
  color: "white",
  border: "0px",
};

export default function UserProfile(props: { id: string; value: any }) {
  const userId = props.id;
  const profile = props.value.docs[0].data();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(String(profile.name));
  const [age, setAge] = useState(Number(profile.age));
  const [location, setLoc] = useState(String(profile.location));
  const [description, setDes] = useState(String(profile.description));
  const [imgSrc, setImg] = useState(String(profile.imgSrc));
  const [inputValue, setInput] = useState("");
  const [inputSize, setSize] = useState(0);
  const [modifyNum, setMod] = useState(-1);
  const [inputText, inputTextarea] = [useRef<any>(), useRef<any>()];
  //const geoSrc = `https://www.google.com/maps/@${String(profile.locationInfo._lat)},${String(profile.locationInfo._long)},13z`;
  //<iframe src={geoSrc} width="400" height="200" loading="lazy" />

  const openModals = (num: number) => {
    setMod(num);
    switch (num) {
      case 0:
        setInput(imgSrc);
        setSize(100);
        break;
      case 1:
        setInput(name);
        setSize(20);
        break;
      case 2:
        setInput(String(age));
        setSize(20);
        break;
      case 3:
        setInput(location);
        setSize(40);
        break;
      case 4:
        setInput(description);
        setSize(100);
        break;
      default:
        setInput("");
        setSize(0);
        break;
    }
    if (num >= 0) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const changeInput = () => {
    let text: string;
    let flag = false;
    if (modifyNum === 4) {
      text = inputText.current.value;
    } else {
      text = inputText.current.value;
    }
    switch (modifyNum) {
      case 0:
        flag = changeImg(text);
        break;
      case 1:
        flag = changeName(text);
        break;
      case 2:
        flag = changeAge(Number(text));
        break;
      case 3:
        flag = changeLoc(text);
        break;
      case 4:
        flag = changeDes(text);
        break;
    }
    if (flag) {
      PostProfile(userId, modifyNum, text);
    }
  };

  const changeName = (newName: string) => {
    if (newName.length >= 1) {
      setName(newName);
      openModals(-1);
      return true;
    } else {
      alert("Please type more than one character.");
      return false;
    }
  };
  const changeAge = (newAge: number) => {
    if (!isNaN(newAge)) {
      setAge(newAge);
      openModals(-1);
      return true;
    } else {
      alert("Please type only numbers.");
      return false;
    }
  };
  const changeLoc = (newLoc: string) => {
    if (newLoc.length >= 1) {
      setLoc(newLoc);
      openModals(-1);
      return true;
    } else {
      alert("Please type more than one character.");
      return false;
    }
  };
  const changeDes = (newDes: string) => {
    setDes(newDes);
    openModals(-1);
    return true;
  };
  const changeImg = (newImg: string) => {
    setImg(newImg);
    openModals(-1);
    return true;
  };

  return (
    <div>
      {profile && (
        <Fragment>
          <div>
            <div style={style_title}>
              <p style={style_head_text}>My Profile Setting</p>
            </div>
            <div style={style_img}>
              <img
                src={imgSrc}
                height="200px"
                width="200px"
                style={{ marginLeft: "-100px" }}
                onClick={() => {
                  openModals(0);
                }}
              />
            </div>
            <div style={style_basicInfo}>
              <div
                style={style_basicText}
                onClick={() => {
                  openModals(1);
                }}
              >
                <button style={style_button}>Name</button>: {name}
              </div>

              <div
                style={style_basicText}
                onClick={() => {
                  openModals(2);
                }}
              >
                <button style={style_button}>Age</button>: {age}
              </div>
              <div
                style={style_basicText}
                onClick={() => {
                  openModals(3);
                }}
              >
                <button style={style_button}>Location</button>: {location}
              </div>
              <div
                style={style_basicText}
                onClick={() => {
                  openModals(4);
                }}
              >
                <button style={style_button}>Introduction</button>
                <p style={style_description}>{description}</p>
              </div>
            </div>
            {showModal && (
              <div
                style={{
                  position: "fixed",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  background: "rgba(0,0,0,0.3)",
                  zIndex: 1,
                  paddingLeft: "50%",
                  paddingTop: "25%",
                }}
                onClick={() => {
                  openModals(-1);
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    padding: "5px",
                    marginLeft: "-250px",
                    background: "#eeeeff",
                    zIndex: 2,
                    alignItems: "center",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {modifyNum != 4 && (
                    <input
                      ref={inputText}
                      type="text"
                      placeholder={inputValue}
                      size={inputSize}
                    ></input>
                  )}
                  {modifyNum === 4 && (
                    <textarea
                      ref={inputTextarea}
                      placeholder={inputValue}
                      style={{ width: "400px", height: "150px" }}
                    ></textarea>
                  )}
                  <button
                    style={style_button}
                    onClick={() => {
                      changeInput();
                    }}
                  >
                    modify
                  </button>
                </div>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
}
