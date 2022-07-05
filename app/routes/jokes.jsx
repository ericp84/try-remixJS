import { Outlet } from "@remix-run/react";

export default Jokes = () => {
    return (
        <div>
            <h1>JOKES</h1>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}