function AffichageBoucle () {
    const Fruits = ["poire", "pomme", "raisin", "poivron"];
    return Fruits.map((fruit) => 
    <p>je vous propose le fruits/légumes suivant : {fruit}</p>
    )
}

export default AffichageBoucle;