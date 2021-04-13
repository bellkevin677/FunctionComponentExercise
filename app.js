const GrinchXmas = () => {
    return "Cheer up, dude. It's Christmas.";
}

ReactDom.render(
    <GrinchXmas/>,
    document.getElementById('root')
);

const GrinchMusic = () => {
    return <h1>Blast this Christmas music! It's joyful and triumphant.</h1>;
}

ReactDom.render(
    <GrinchMusic/>,
    document.getElementById('root')
);

const GrinchIdiot = () => {
    return (
        <div>
            <h2>I'm and idiot!</h2>
            <h2>You're an idiot!</h2>
        </div>
    );
}

ReactDom.render(
    <GrinchIdiot/>,
    document.getElementById('root')
);

const GrinchSchedule = () => {
    return (
        <div>
            <ul>
                <li>4:00, wallow in self-pity.</li>
                <li>4:30, stare into the abyss.</li>
                <li>5:00, solve world hunger, tell no one.</li>
                <li>5:30, jazzercize.</li>
                <li>6:30, dinner with me. I can't cancel that again.</li>
                <li>7:00, wrestle with my self-loathing.</li>
            </ul>
            <p>I'm booked. Of course, if I bump the loathing to 9, I could still be done in time to lay in bed, stare at the ceiling and slip slowly into madness.</p>
        </div>
    );
}

ReactDom.render(
    <GrinchSchedule/>,
    document.getElementById('root')
);

const GrinchPoster = () => {
    return <img src="https://img01.mgo-images.com/image/thumbnail/v2/content/1MV1ca3f097dd209568db5d4a36e429dbda.jpeg" alt="Poster of the Grinch Movie" />;
}

ReactDom.render(
    <GrinchPoster/>,
    document.getElementById('root')
);

const GrinchVMail = () => {
    const u = "YOU";
    return (
        <div>
            <h1>IF {u} UTTER SO MUCH AS ONE SYLLABLE, I'LL HUNT {u} DOWN AND GUT {u} LIKE A FISH!</h1>
            <h3>If you'd like to fax me press the star key.</h3>
        </div>
    );
}

ReactDom.render(
    <GrinchVMail/>,
    document.getElementById('root')
);

const GrinchAll = () => {
    return (
    <div>
        <GrinchXmas/>
        <GrinchMusic/>
        <GrinchIdiot/>
        <GrinchSchedule/>
        <GrinchPoster/>
        <GrinchVMail/>
    </div>
    );
}

ReactDom.render(
    <GrinchAll/>,
    document.getElementById('root')
);

const DiceRoll = () => {
    const die1 = Math.floor(6 * Math.Random()) + 1;
    const die2 = Math.floor(6 * Math.Random()) + 1;
    return (
        <h1>{(die1 === 1 && die2 === 1) ? "SNAKE EYES" : `${die1} & ${die2}`}</h1>
    );
}

ReactDom.render(
    <DiceRoll/>,
    document.getElementById('root')
);