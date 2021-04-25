export default function IconSwitch({onSwitch, icon}) {
    return (
        <div className="icon-wrapper">
            <span className="material-icons icon-element" onClick = {onSwitch}>
                {icon}
            </span>
        </div>
        
    )
}