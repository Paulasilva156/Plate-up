import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Icon from "../components/icon/icon";
import { useEffect, useState } from "react";
import { Agenda } from "../interfaces";

function MonthlyPage() {
  const [month1, setMonth1] = useState("");
  const [activities1, setActivities1] = useState("");
  const [activities2, setActivities2] = useState("");
  const [activities3, setActivities3] = useState("");
  const [activities4, setActivities4] = useState("");

  const [notes, setNotes] = useState<Agenda>({
    months: [],
    weeks: [],
    days: [],
  });

  const [render, setRender] = useState(false);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("notes"));
    if (local) setNotes(local);
    setNotes(local);
  }, []);

  const updateNotes = () => {
    let notesAX =
      notes !== null
        ? notes
        : {
            months: [],
            weeks: [],
            days: [],
          };
    // alert(notesAX);
    notesAX.months.push({
      days: month1,
      week1: activities1,
      week2: activities2,
      week3: activities3,
      week4: activities4,
    });
    setNotes(notesAX);
    localStorage.setItem("notes", JSON.stringify(notesAX));
    setRender(!render);
  };

  return (
    <>
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-end text-white text-right mt-24 font-['PT_Sans_Narrow']">
          <Row className="flex justify-center items-center">
            <div className="flex justify-end">
              <Form.Group className="mb-2">
                <Form.Control
                  type="month"
                  value={month1}
                  onChange={(e: any) => setMonth1(e.target.value)}
                />
              </Form.Group>
            </div>
            <Col>
              <h2 className="font-['Square_Peg']">
                Wish you a beautiful new month
              </h2>
              <h1 className="font-['DM_Serif_Text'] text-lime-500">Week 1</h1>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={activities1}
                      onChange={(e: any) => setActivities1(e.target.value)}
                    />
                  </Form.Group>
                </Form.Group>
              </Form>
              <h2 className="font-['Square_Peg']">
                You can get big things by doing small workout
              </h2>
              <h1 className="font-['DM_Serif_Text'] text-lime-500">Week 2</h1>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={activities2}
                      onChange={(e: any) => setActivities2(e.target.value)}
                    />
                  </Form.Group>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <div className="text-left">
                <h2 className="font-['Square_Peg']">
                  You may not be there yet, but you were closer than you were
                  yesterday
                </h2>
                <h1 className="font-['DM_Serif_Text'] text-lime-500">Week 3</h1>
              </div>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={activities3}
                      onChange={(e: any) => setActivities3(e.target.value)}
                    />
                  </Form.Group>
                </Form.Group>
              </Form>
              <div className="text-left">
                <h2 className="font-['Square_Peg']">
                  Be stronger than your excuses
                </h2>
                <h1 className="font-['DM_Serif_Text'] text-lime-500">Week 4</h1>
              </div>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={activities4}
                      onChange={(e: any) => setActivities4(e.target.value)}
                    />
                  </Form.Group>
                </Form.Group>
              </Form>
            </Col>
            <div className="flex justify-end mt-2 mb-3">
              <Button
                className="!flex items-center !rounded-full mb-2 !bg-lime-500 !border-lime-500"
                onClick={() => updateNotes()}
              >
                {Icon("md", "MdOutlineAddCircleOutline")}{" "}
                <span className="ml-2">Add</span>
              </Button>
            </div>
          </Row>
        </div>
      </Container>
      <Container>
        <Table
          className="font-['PT_Sans_Narrow']"
          variant="dark"
          responsive
          hover
        >
          <thead className="!bg-transparent">
            <tr>
              <th>#</th>
              <th>Month</th>
              <th>Activities</th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {notes !== null
              ? notes.months.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <div className="flex items-center">{el.days}</div>
                      </td>
                      <td>
                        {el.week1 +
                          " | " +
                          el.week2 +
                          " | " +
                          el.week3 +
                          " | " +
                          el.week4}
                      </td>
                      <td className="flex justify-center">
                        <div
                          className={
                            "flex justify-center items-center p-1 rotate-45 rounded-full border-2 border-neutral-300 drop-shadow-none md:drop-shadow-md"
                          }
                        >
                          <Button
                            variant="warning"
                            className={"!rounded-full !p-[2px] mr-2 -rotate-45"}
                            disabled
                          >
                            {Icon("ri", "RiEditCircleFill", "16px")}
                          </Button>
                          <Button
                            variant="danger"
                            className={"!rounded-full !p-[2px] -rotate-45"}
                            disabled
                          >
                            {Icon("hi", "HiTrash", "10px")}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : undefined}
          </tbody>
        </Table>
      </Container>
    </>
    // </Layout>
  );
}

export default MonthlyPage;
