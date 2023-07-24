import React, { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Icon from "./icon/icon";
import {
  Button,
  Offcanvas,
  Overlay,
  OverlayTrigger,
  Popover,
  Tooltip,
} from "react-bootstrap";

type Props = {
  children?: ReactNode;
  title?: string;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window as any;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    typeof window !== "undefined" ? getWindowDimensions() : undefined
  );

  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined")
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Layout({ children, title = "This is the default title" }: Props) {
  const [drop, setDrop] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/users">Users List</Link> |{' '}
        <a href="/api/users">Users API</a>
      </nav>
    </header>*/}
      <div className="text-center absolute top-0 left-[5%] md:!left-[25%] !rounded-b-3xl w-[90%] md:w-[50%] pt-4 bg-neutral-300 z-10">
        <div
          className={
            (!drop ? "!hidden" : "") +
            " hidden sm:flex items-center justify-center text-right"
          }
        >
          <h2 className="font-['Square_Peg'] mr-3">
            Hope is being able to see
            <br />
            that there is light
          </h2>
          <div className="">
            <Image src="/plateUp.svg" width="100" height="100" alt={""} />
          </div>
        </div>
        {/* <h1 className="font-['Just_Another_Hand'] font-bold text-lime-500 uppercase -mb-4">
        Plate Up
      </h1> */}
        {/* <p> */}
        <div className="flex justify-between items-end">
          <div>
            <div
              className={
                (!drop ? "!rotate-0 m-[.5rem]" : "") +
                " p-1 rotate-0 md:rotate-45 rounded-full bg-neutral-300 drop-shadow-none md:drop-shadow-md"
              }
            >
              <Button
                className={
                  (!drop ? "!rotate-0" : "") +
                  " !rounded-full !p-2 mr-2 rotate-0 md:-rotate-45"
                }
                onClick={() => {
                  setDrop(!drop);
                }}
              >
                {Icon(
                  "hi",
                  !drop ? "HiOutlineChevronDown" : "HiOutlineChevronUp",
                  "12px"
                )}
              </Button>
              {typeof window !== "undefined" ? (
                useWindowDimensions().width > 1280 ? (
                  <Button
                    variant="dark"
                    className={
                      (!drop ? "!rotate-0" : "") +
                      " !rounded-full !p-2 rotate-0 md:-rotate-45"
                    }
                    disabled
                  >
                    {Icon("hi", "HiMenu", "24px")}
                  </Button>
                ) : (
                  <Button
                    onClick={handleShow}
                    variant="dark"
                    className={
                      (!drop ? "!rotate-0" : "") +
                      " !rounded-full !p-2 rotate-0 md:-rotate-45"
                    }
                  >
                    {Icon("hi", "HiMenu", "24px")}
                  </Button>
                )
              ) : (
                <Button
                  variant="dark"
                  className={
                    (!drop ? "!rotate-0" : "") +
                    " !rounded-full !p-2 rotate-0 md:-rotate-45"
                  }
                  disabled
                >
                  {Icon("hi", "HiMenu", "24px")}
                </Button>
              )}
              {/* <Button
              variant="dark"
              className="!rounded-full !p-2 rotate-0 md:-rotate-45"
              disabled
            >
              {Icon("hi", "HiMenu", "12px")}
            </Button> */}
            </div>
            <div className="font-['PT_Sans_Narrow'] hidden xl:flex flex-row absolute -mt-[1.75rem] ml-[6rem]">
              <p className="ml-6 mr-2">
                <Link href="/">Home</Link>
              </p>
              |
              <p className="mx-2">
                <Link href="/daily">Daily</Link>
              </p>
              |
              <p className="mx-2">
                <Link href="/weekly">Weekly</Link>
              </p>
              |
              <p className="mx-2">
                <Link href="/monthly">Monthly</Link>
              </p>
              |
              <p className="mx-2">
                <Link href="/profile">Profile</Link>
              </p>
              |
              <p className="mx-2">
                <Link href="/picme">Pic Me</Link>
              </p>
              |
              <p className="ml-2">
                <Link href="/bmi">BMI</Link>
              </p>
            </div>
          </div>
          <div className="text-right py-1 px-3 border-t-2 border-slate-700 rounded-tl-xl relative drop-shadow-md">
            <Link href="/" className="font-['PT_Sans_Narrow']">
              Start{" "}
              <span className="font-['Just_Another_Hand'] font-bold uppercase text-lime-600">
                Plate Up
              </span>
            </Link>
          </div>
        </div>
        {/* </p> */}
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="font-['PT_Sans_Narrow']">
            <p className="">
              <Link href="/">Home</Link>
            </p>
            <p className="">
              <Link href="/daily">Daily</Link>
            </p>
            <p className="">
              <Link href="/weekly">Weekly</Link>
            </p>
            <p className="">
              <Link href="/monthly">Monthly</Link>
            </p>
            <p className="">
              <Link href="/profile">Profile</Link>
            </p>
            <p className="">
              <Link href="/picme">Pic Me</Link>
            </p>
            <p className="">
              <Link href="/bmi">BMI</Link>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="min-h-[75vh]">{children}</div>
      <div className="w-full relative bottom-0">
        <hr className="text-white" />
        <footer className="font-['PT_Sans_Narrow'] text-white text-right mb-1 mr-4">
          <span>
            Copyright ©{" "}
            <span className="font-['Just_Another_Hand'] font-bold uppercase text-lime-500">
              Plate Up
            </span>{" "}
            Website 2023
          </span>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
