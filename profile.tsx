import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Icon from "../components/icon/icon";

function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [bmi, setBmi] = useState("");

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    contact: "",
    address: "",
    bmi: "",
  });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("profile"))) {
      localStorage.setItem(
        "profile",
        JSON.stringify({
          fullName: JSON.parse(localStorage.getItem("profile")).fullName
            ? JSON.parse(localStorage.getItem("profile")).fullName
            : "",
          email: JSON.parse(localStorage.getItem("profile")).email
            ? JSON.parse(localStorage.getItem("profile")).email
            : "",
          contact: JSON.parse(localStorage.getItem("profile")).contact
            ? JSON.parse(localStorage.getItem("profile")).contact
            : "",
          address: JSON.parse(localStorage.getItem("profile")).address
            ? JSON.parse(localStorage.getItem("profile")).address
            : "",
          bmi: JSON.parse(localStorage.getItem("profile")).bmi
            ? JSON.parse(localStorage.getItem("profile")).bmi
            : "",
        })
      );

      if (JSON.parse(localStorage.getItem("profile")).fullName)
        setName(JSON.parse(localStorage.getItem("profile")).fullName);
      if (JSON.parse(localStorage.getItem("profile")).email)
        setEmail(JSON.parse(localStorage.getItem("profile")).email);
      if (JSON.parse(localStorage.getItem("profile")).contact)
        setContact(JSON.parse(localStorage.getItem("profile")).contact);
      if (JSON.parse(localStorage.getItem("profile")).address)
        setAddress(JSON.parse(localStorage.getItem("profile")).address);
      if (JSON.parse(localStorage.getItem("profile")).bmi)
        setBmi(JSON.parse(localStorage.getItem("profile")).bmi);
    }

    setProfile(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const updateProfile = () => {
    let profileDT = {
      fullName: name,
      email: email,
      contact: contact,
      address: address,
      bmi: bmi,
    };
    setProfile(profileDT);
    localStorage.setItem("profile", JSON.stringify(profileDT));
  };

  return (
    <>
      <Container>
        <div className="flex flex-col items-end text-white text-right mt-24">
          <h2 className="font-['Square_Peg']">
            The body achieves what the mind believes
          </h2>
          <h1 className="font-['DM_Serif_Text'] text-lime-500">About Myself</h1>
          <Form className="w-full my-3 font-['PT_Sans_Narrow']">
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    placeholder="Jack Murphy"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    placeholder="jack_murp_353@mail.ie"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    placeholder="99 159 9999"
                    value={contact}
                    onChange={(e: any) => setContact(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="Merrion Street, Dublin, Ireland"
                    value={address}
                    onChange={(e: any) => setAddress(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>My BMI</Form.Label>
                  <Form.Control
                    placeholder="27"
                    value={bmi}
                    onChange={(e: any) => setBmi(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="flex justify-end">
              <Button
                className="!flex items-center !rounded-full mt-3"
                onClick={() => {
                  updateProfile();
                }}
              >
                {Icon("fa", "FaRegSave")} <span className="ml-2">Save</span>
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default ProfilePage;
