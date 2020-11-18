export default function Techs() {
    const techs = [
        'PHP',
        'NodeJs',
        'GO',
        'CSS3',
        'HTML5',
        'MYSQL',
        'MongoDB',
        'ReactJS',
        'NextJS',
        'Magento',
        'Wordpress',
        'JavaScript'
    ];
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 divide-x">
            {techs.map((tech) => (
                <div className="block bg-gray-600 m-1 p-4 text-center" key={tech}>
                    {tech}
                </div>
            ))}
        </div>
    );
}
