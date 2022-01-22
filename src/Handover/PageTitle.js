import './HandoverScreen.css';

export default function PageTitle({role}) {
    var res = ""
    if (role === 'Junior Doctor') {
        res = 'These are tonight’s available tasks assigned to you: ';
    }
    else {
        res = "Here is a summary of all the tasks:";
    }

    return (
        <div>
            <h2 id="pageTitle" style={{color: '#21ACFA', left:'4%', position: 'relative'}}>{res}</h2>
        </div>
    )
}