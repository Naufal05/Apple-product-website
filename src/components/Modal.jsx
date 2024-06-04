import React, { useRef, useState } from "react";
import ModalView from "./ModalView";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";

const Modal = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // camera controls for the modal view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //modal
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a close look.
        </h1>
      </div>

      <div className="flex flex-col items-center mt-5">
        <div className="w-full h-[75vh] md:h-[090vh] overflow-hidden relative">
          <ModalView />
        </div>
      </div>
    </section>
  );
};

export default Modal;
