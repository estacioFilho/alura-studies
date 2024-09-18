import "./style.scss"

const List = () => {
    const tasks = [
        {
            taks: "TypeScript",
            time: "02:00:00"
        },
        {
            taks: "React",
            time: "01:30:00"
        },
        {
            taks: "JavaScript",
            time: "01:00:00"
        },
    ]
    return (
        <aside className="listaTarefas">
            <ul>
                <h2>Estudos do dia</h2>
                {
                    tasks.map((item, index) => (
                        <li className="item" key={index}>
                            <h3>{item.taks}</h3>
                            <span>{item.time}</span>
                        </li>
                    ))}
            </ul>
        </aside>
    )
}

export default List;