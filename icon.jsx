import * as IconsBs from "react-icons/bs"
import * as IconsMd from "react-icons/md"
import * as IconsFa from "react-icons/fa"
// import * as IconsFa6 from "react-icons/fa6"
import * as IconsGi from "react-icons/gi"
import * as IconsHi from "react-icons/hi"
import * as IconsRi from "react-icons/ri"
import * as IconsSi from "react-icons/si"
import * as IconsTb from "react-icons/tb"
import * as IconsTfi from "react-icons/tfi"
import * as IconsWi from "react-icons/wi"

import { BsSlashCircleFill } from "react-icons/bs"

export default function Icon(ico, name, size = "auto") { //, margin="0", fill = "current"
  let IconComponent;

  if (ico === "bs") IconComponent = IconsBs[name];
  if (ico === "md") IconComponent = IconsMd[name];
  if (ico === "fa") IconComponent = IconsFa[name];
  // if (ico === "fa6") IconComponent = IconsFa6[name];
  if (ico === "gi") IconComponent = IconsGi[name];
  if (ico === "hi") IconComponent = IconsHi[name];
  if (ico === "ri") IconComponent = IconsRi[name];
  if (ico === "si") IconComponent = IconsSi[name];
  if (ico === "tb") IconComponent = IconsTb[name];
  if (ico === "tfi") IconComponent = IconsTfi[name];
  if (ico === "wi") IconComponent = IconsWi[name];
  if (!IconComponent) {
    return <BsSlashCircleFill style={{ width: size, height: size }} />; //style={{ width: size, height: size, fill: fill }}
  }

  return <IconComponent style={{ width: size, height: size }} />; //style={{ width: size, height: size, margin: margin, fill: fill }}
}