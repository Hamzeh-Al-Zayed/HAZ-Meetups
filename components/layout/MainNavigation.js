import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Image
        className={classes.image}
        src="/logo.png"
        alt="Logo"
        width={90}
        height={55}
      ></Image>
      <div className={classes.logo}>HAZ Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
