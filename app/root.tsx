import type {
  LinksFunction,
  LoaderArgs,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import box from "../public/boxchicken2.jpeg";
import Nav from "./components/Navbar"; // Import the Nav component
import Art2 from "./routes/_index"
import Art3 from "./routes/intro-to-neural-networks";
export const meta: MetaFunction = () => ({
  title: "Putting the Sass n Fun in Tech" ,
   "og:image": "box"});


export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Nav /> {/* Add the Nav component here */}
        <Outlet />
        <ScrollRestoration />
        <Art3 />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
