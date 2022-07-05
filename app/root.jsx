import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Links/>
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet/>
        <LiveReload />
      </body>
    </html>
  );
}
