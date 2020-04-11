import Link from "next/link";
import classNames from "classnames";
import "./Nav.scss";

type NavProps = {
  location: string;
};

const Nav = (props: NavProps) => {
  return (
    <div className='Nav'>
      <Link href={"/monster-lessons"}>
        <a
          className={classNames({
            selected: props.location === "/monster-lessons",
          })}
        >
          Sound like a Monster
        </a>
      </Link>
      <Link href={"/opera-game"}>
        <a
          className={classNames({
            selected: props.location === "/opera-game",
          })}
        >
          A Short Game of Opera
        </a>
      </Link>
      <Link href={"/dancing"}>
        <a
          className={classNames({
            selected: props.location === "/dancing",
          })}
        >
          Dance of the Lumps
        </a>
      </Link>
      <Link href={"/lumps-on-location"}>
        <a
          className={classNames({
            selected: props.location === "/lumps-on-location",
          })}
        >
          Lumps at the Airport
        </a>
      </Link>
      <div className='Nav__credits'>
        <Link href={"/credits"}>
          <a
            className={classNames({
              selected: props.location === "/credits",
            })}
          >
            Credits
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
