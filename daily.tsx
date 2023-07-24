import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Icon from "../components/icon/icon";
import { useEffect, useState } from "react";
import { Agenda } from "../interfaces";

function DailyPage() {
  const [day, setDay] = useState();
  const [exercise, setExercise] = useState("");
  const [set, setSet] = useState("");
  const [reps, setReps] = useState();
  const [rest, setRest] = useState("");
  const [vel, setVel] = useState("");
  const [technique, setTechnique] = useState("");

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
    notesAX.days.push({
      date: day,
      exercise: exercise,
      set: set,
      reps: reps,
      rest: rest,
      vel: vel,
      technique: technique,
    });
    setNotes(notesAX);
    localStorage.setItem("notes", JSON.stringify(notesAX));
    setRender(!render);
  };

  return (
    <>
      <Container>
        <div className="flex flex-col items-end text-white text-right mt-24">
          <h2 className="font-['Square_Peg']">Better days are coming</h2>
          <h1 className="font-['DM_Serif_Text'] text-lime-500">Daily</h1>
          <Form className="w-full my-3 font-['PT_Sans_Narrow']">
            <Row>
              <Row>
                <Col className="flex justify-end">
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="date"
                      value={day}
                      onChange={(e: any) => setDay(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Excercise</Form.Label>
                  <Form.Control
                    placeholder="push-up, squat, lifting"
                    value={exercise}
                    onChange={(e: any) => setExercise(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Set</Form.Label>
                  <Form.Control
                    placeholder="3, 4, 1"
                    value={set}
                    onChange={(e: any) => setSet(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Reps</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="9, 10, 13"
                    value={reps}
                    onChange={(e: any) => setReps(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Rest</Form.Label>
                  <Form.Control
                    placeholder=".45s, 1.30m, 2m"
                    value={rest}
                    onChange={(e: any) => setRest(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Vel. C/E</Form.Label>
                  <Form.Control
                    placeholder=".45s, 1.30m, 2m"
                    value={vel}
                    onChange={(e: any) => setVel(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Technique</Form.Label>
                  <Form.Control
                    placeholder="nothing"
                    value={technique}
                    onChange={(e: any) => setTechnique(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="flex justify-end mt-2">
              <Button
                className="!flex items-center !rounded-full !bg-lime-500 !border-lime-500"
                onClick={() => updateNotes()}
              >
                {Icon("md", "MdOutlineAddCircleOutline")}{" "}
                <span className="ml-2">Add</span>
              </Button>
            </div>
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
              <th>Day</th>
              <th>Exercise</th>
              <th>Set</th>
              <th>Reps</th>
              <th>Rest</th>
              <th>Vel. C/E</th>
              <th>Technique</th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {notes !== null
              ? notes.days.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <div className="flex items-center">
                          {el.date ? el.date.toString() : ""}
                        </div>
                      </td>
                      <td>{el.exercise}</td>
                      <td>{el.set}</td>
                      <td>{el.reps}</td>
                      <td>{el.rest}</td>
                      <td>{el.vel}</td>
                      <td>{el.technique}</td>
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
  );
}

export default DailyPage;
