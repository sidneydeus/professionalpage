export default function Footer() {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let m = newDate.getMonth();
    let day = newDate.getDate();

    let month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return (
        <div className="container mx-auto w-full bg-gray-900 p-8">
            <div className="flex">
                <p className="flex-1 text-white text-left">
                    <cite>"O dia em que nada aprendi, foi um dia não vivido."</cite>
                    <strong className="block">Leonardo da Vinci</strong>
                </p>
                <p className="flex-1 text-white text-right">
                    {month[m] + ' ' + day + ', ' + year + ' AD'}
                </p>
            </div>
        </div>
    );
}
