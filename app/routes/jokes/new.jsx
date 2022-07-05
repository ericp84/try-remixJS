export default NewJokeRoute = () => {
    return(
        <div>
            <p>
                ajouter votre propre blagounette
            </p>
            <form method="post">
                <div>
                    <label>
                        Name: <input type="text" name="name"/>
                    </label>
                </div>
                <div>
                    <label>
                        Content: <input type="text" name="content" />
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">Ajouter</button>
                </div>
            </form>
        </div>
    )
}