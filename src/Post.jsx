export function Post(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

