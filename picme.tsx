import { Button, Container, Form, Modal } from "react-bootstrap";
import Icon from "../components/icon/icon";
import { useState } from "react";
import ModalPhoto from "./modalPhoto";

function PicMePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="!overflow-none">
        <div className="flex flex-col items-end text-white text-right mt-24">
          <h2 className="font-['Square_Peg']">
            One good day: work out, <br />
            one bad day: work out harder
          </h2>
          <h1 className="font-['DM_Serif_Text'] text-lime-500">
            Photo of Myself
          </h1>
          <div className="border-2 border-white p-1 rounded-full rotate-45 my-8">
            <Button
              className="!rounded-full !p-3 mr-2 -rotate-45"
              onClick={handleShow}
            >
              {Icon("hi", "HiOutlineCamera", "32px")}
            </Button>
            <Button variant="danger" className="!rounded-full !p-2 -rotate-45">
              {Icon("hi", "HiOutlineSave", "24px")}
            </Button>
          </div>
          <h2 className="font-['DM_Serif_Text'] text-lime-500">
            Drag and Drop your file here
          </h2>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Group className="mb-2">
                <Form.Control type="file" placeholder="name" />
              </Form.Group>
            </Form.Group>
          </Form>
        </div>
        <div className="relative -z-1 left-0 md:left-[100px] bottom-[125px] ltr">
          <div className="absolute -left-[110px] top-[170px] block rounded-s-lg min-w-[100px] min-h-[100px] bg-[url('https://images.unsplash.com/photo-1518605360659-2aa9659ef66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80')] bg-cover bg-top"></div>
          <div className="absolute block rounded-t-full rounded-br-full min-w-[270px] min-h-[270px] bg-[url('https://images.unsplash.com/photo-1635862618032-806d63303a72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')] bg-cover bg-top"></div>
        </div>
      </Container>
      <ModalPhoto show={show} onHide={handleClose} />
    </>
  );
}

export default PicMePage;
