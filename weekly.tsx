import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Icon from "../components/icon/icon";
import { useEffect, useState } from "react";
import { Agenda } from "../interfaces";

function WeeklyPage() {
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [sunday, setSunday] = useState("");
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [saturday, setSaturday] = useState("");

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
    notesAX.weeks.push({
      days: dayOfWeek,
      sunday: sunday,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
    });
    setNotes(notesAX);
    localStorage.setItem("notes", JSON.stringify(notesAX));
    setRender(!render);
  };

  return (
    <>
      <Container>
        <div className="flex flex-col items-end text-white text-right mt-24">
          <h2 className="font-['Square_Peg']">The best week starts on now</h2>
          <h1 className="font-['DM_Serif_Text'] text-lime-500">Weekly</h1>
          <Form className="w-full my-3 font-['PT_Sans_Narrow']">
            <Row>
              <Row>
                <Col className="flex justify-end">
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="week"
                      placeholder="activity"
                      value={dayOfWeek}
                      onChange={(e: any) => setDayOfWeek(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Sunday</Form.Label>
                  <Form.Control
                    placeholder="activity"
                    value={sunday}
                    onChange={(e: any) => setSunday(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Monday</Form.Label>
                  <Form.Control
                    placeholder="activity"
                    value={monday}
                    onChange={(e: any) => setMonday(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Tuesday</Form.Label>
                  <Form.Control
                    placeholder="activity"
                    value={tuesday}
                    onChange={(e: any) => setTuesday(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Wednesday</Form.Label>
                  <Form.Control
                    placeholder="activity"
                    value={wednesday}
                    onChange={(e: any) => setWednesday(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Thursday</Form.Label>
                  <Form.Control
                    placeholder="activity"
                    value={thursday}
                    onChange={(e: any) => setThursday(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Friday</Form.Label>
                  <Form.Control
                    placeholder="activity"
                    value={friday}
                    onChange={(e: any) => setFriday(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col className="flex flex-col justify-between">
                <Form.Group className="mb-2">
                  <Form.Label>Saturday</Form.Label>
                  <Form.Control
                    placeholder="activity"
                    value={saturday}
                    onChange={(e: any) => setSaturday(e.target.value)}
                  />
                </Form.Group>
                <div className="flex justify-center mt-2">
                  <Button
                    className="!flex items-center !rounded-full mb-2 !bg-lime-500 !border-lime-500"
                    onClick={() => updateNotes()}
                  >
                    {Icon("md", "MdOutlineAddCircleOutline")}{" "}
                    <span className="ml-2">Add</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <Table
          className="font-['PT_Sans_Narrow']"
          variant="dark"
          responsive
          hover
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Week day</th>
              <th>Activity</th>
              <th>Week</th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {notes !== null
              ? notes.weeks.map((el, i) => {
                  return (
                    <>
                      <tr key={i * 7}>
                        <td>{i * 7 + 1}</td>
                        <td>
                          <div className="flex items-center">Sunday</div>
                        </td>
                        <td>{el.sunday}</td>
                        <td>{el.days}</td>
                        <td className="flex justify-center">
                          <div
                            className={
                              "flex justify-center items-center p-1 rotate-45 rounded-full border-2 border-neutral-300 drop-shadow-none md:drop-shadow-md"
                            }
                          >
                            <Button
                              variant="warning"
                              className={
                                "!rounded-full !p-[2px] mr-2 -rotate-45"
                              }
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
                      <tr key={i * 7 + 1}>
                        <td>{i * 7 + 2}</td>
                        <td>
                          <div className="flex items-center">Monday</div>
                        </td>
                        <td>{el.monday}</td>
                        <td>{el.days}</td>
                        <td className="flex justify-center">
                          <div
                            className={
                              "flex justify-center items-center p-1 rotate-45 rounded-full border-2 border-neutral-300 drop-shadow-none md:drop-shadow-md"
                            }
                          >
                            <Button
                              variant="warning"
                              className={
                                "!rounded-full !p-[2px] mr-2 -rotate-45"
                              }
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
                      <tr key={i * 7 + 2}>
                        <td>{i * 7 + 3}</td>
                        <td>
                          <div className="flex items-center">Tuesday</div>
                        </td>
                        <td>{el.tuesday}</td>
                        <td>{el.days}</td>
                        <td className="flex justify-center">
                          <div
                            className={
                              "flex justify-center items-center p-1 rotate-45 rounded-full border-2 border-neutral-300 drop-shadow-none md:drop-shadow-md"
                            }
                          >
                            <Button
                              variant="warning"
                              className={
                                "!rounded-full !p-[2px] mr-2 -rotate-45"
                              }
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
                      <tr key={i * 7 + 3}>
                        <td>{i * 7 + 4}</td>
                        <td>
                          <div className="flex items-center">Wednesday</div>
                        </td>
                        <td>{el.wednesday}</td>
                        <td>{el.days}</td>
                        <td className="flex justify-center">
                          <div
                            className={
                              "flex justify-center items-center p-1 rotate-45 rounded-full border-2 border-neutral-300 drop-shadow-none md:drop-shadow-md"
                            }
                          >
                            <Button
                              variant="warning"
                              className={
                                "!rounded-full !p-[2px] mr-2 -rotate-45"
                              }
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
                      <tr key={i * 7 + 4}>
                        <td>{i * 7 + 5}</td>
                        <td>
                          <div className="flex items-center">Thursday</div>
                        </td>
                        <td>{el.thursday}</td>
                        <td>{el.days}</td>
                        <td className="flex justify-center">
                          <div
                            className={
                              "flex justify-center items-center p-1 rotate-45 rounded-full border-2 border-neutral-300 drop-shadow-none md:drop-shadow-md"
                            }
                          >
                            <Button
                              variant="warning"
                              className={
                                "!rounded-full !p-[2px] mr-2 -rotate-45"
                              }
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
                      <tr key={i * 7 + 5}>
                        <td>{i * 7 + 6}</td>
                        <td>
                          <div className="flex items-center">Friday</div>
                        </td>
                        <td>{el.friday}</td>
                        <td>{el.days}</td>
                        <td className="flex justify-center">
                          <div
                            className={
                              "flex justify-center items-center p-1 rotate-45 rounded-full border-2 border-neutral-300 drop-shadow-none md:drop-shadow-md"
                            }
                          >
                            <Button
                              variant="warning"
                              className={
                                "!rounded-full !p-[2px] mr-2 -rotate-45"
                              }
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
                      <tr key={i * 7 + 6}>
                        <td>{i * 7 + 7}</td>
                        <td>
                          <div className="flex items-center">Saturday</div>
                        </td>
                        <td>{el.saturday}</td>
                        <td>{el.days}</td>
                        <td className="flex justify-center">
                          <div
                            className={
                              "flex justify-center items-center p-1 rotate-45 rounded-full border-2 border-neutral-300 drop-shadow-none md:drop-shadow-md"
                            }
                          >
                            <Button
                              variant="warning"
                              className={
                                "!rounded-full !p-[2px] mr-2 -rotate-45"
                              }
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
                    </>
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

export default WeeklyPage;
