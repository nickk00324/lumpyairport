import * as React from "react";
import Link from "next/link";
import classNames from "classnames";
import { withRouter, NextRouter } from "next/router";
import Nav from "./Nav";
import "./Header.scss";

type HeaderProps = {
  router: NextRouter;
};

class Header extends React.Component<HeaderProps> {
  render() {
    const { pathname } = this.props.router;
    return (
      <div
        className={classNames("Header", {
          hide: pathname === "/",
        })}
      >
        <div className='Header__main'>
          <Link href={"/"}>
            <a>
              <h1>The Revolting Lumpen! at the Airport</h1>
            </a>
          </Link>
        </div>
        <Nav location={pathname} />
      </div>
    );
  }
}

export default withRouter(Header);
