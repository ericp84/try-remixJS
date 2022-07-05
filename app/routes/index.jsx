import stylesUrl from "~/styles/index.css";

export const links = () => {
    return[{rel:"stylesheet", href: stylesUrl}];
};

export default JokesIndexRoute = () => {
    return (
        <div>
            <p>voici une blague aléatoire</p>
            <p>
                je me demande pourquoi le frisbee devenait de plus en plus gros, puis je l'ai reçu en pleine gueule ... PUTIN   
            </p>
        </div>
    )
}