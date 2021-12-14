import './App.css';

export default function PageTitle({role}) {
    var res = ""
    if (role === 'Junior Doctor') {
        res = 'These are tonight’s available tasks assigned to you: ';
    }
    else if (role === 'SHO') {
        res = 'These are your tasks: ';
    }
    else {
        res = 'This is a summary of the night tasks: ';
    }

    return (
        <div>
            <h2>{res}</h2>
        </div>
    )
}