// router
import { useNavigate } from "react-router";

// react
import { useRef, useEffect } from "react";

// assets
import tadum from "../assets/tadum.mp3";

const Play = () => {
  const navigate = useNavigate();

  const soundRef = useRef(null);
  const handleTadum = () => {
    soundRef.current.currentTime = 0;
    soundRef.current.play();
  };

  useEffect(() => {
    handleTadum();
    const navigateTimeout = setTimeout(() => {
      navigate("/browse");
    }, 4000);
    return () => clearTimeout(navigateTimeout);
  });

  return (
    <div className="PlayAnimation__wrp">
      <audio ref={soundRef} src={tadum} />
      <span className="PlayAnimation__text">FAKEFLIX</span>
    </div>
  );
};

export default Play;
