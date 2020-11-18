function Stars(props) {
    // eslint-disable-next-line react/prop-types
    let n = props.numbers;

    if (n > 5) return <span>error</span>;

    let stars = [];
    for (let i = 1; i <= n; i++) {
        stars.push(
            <svg
                key={i.toString()}
                className="mx-1 w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
        );
    }

    for (let i = 1; i <= 5 - n; i++) {
        stars.push(
            <svg
                key={i.toString() + 'l'}
                className="mx-1 w-4 h-4 fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
        );
    }

    return (
        <div className="flex items-end">
            <div className="flex items-center my-2">{stars}</div>
        </div>
    );
}
export default Stars;
