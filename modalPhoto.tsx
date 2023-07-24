import { Button, Form, Modal } from "react-bootstrap";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import Icon from "../components/icon/icon";

function ModalPhoto(props: any) {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [mirrored, setMirrored] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <Modal {...props} className="font-['PT_Sans_Narrow']">
      <Modal.Header className="!border-0" closeButton>
        <Modal.Title>
          <h1 className="font-['DM_Serif_Text'] text-lime-500">
            Take your Best Pose
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) : (
          <Webcam
            height={600}
            width={600}
            ref={webcamRef}
            mirrored={mirrored}
            screenshotFormat="image/jpeg"
            screenshotQuality={0.8}
          />
        )}
      </Modal.Body>
      <Modal.Footer className="!border-0 flex items-center !justify-center">
        <div className="controls border-2 rounded-full p-2">
          <Form.Check
            type="checkbox"
            label="mirror"
            checked={mirrored}
            onChange={(e) => setMirrored(e.target.checked)}
          />
        </div>
        <div className="btn-container">
          {imgSrc ? (
            <Button className="!rounded-full !p-3" onClick={retake}>
              {Icon("md", "MdFlipCameraIos", "32px")}
            </Button>
          ) : (
            <Button className="!rounded-full !p-3" onClick={capture}>
              {Icon("md", "MdPhotoCamera", "32px")}
            </Button>
          )}
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPhoto;
