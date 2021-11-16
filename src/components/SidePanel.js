const SidePanel = ({ show }) => {
    const classes = `side-panel ${ show ? "show" : "" }`

    return (
        <div className={classes}>
            <h1>Yeet</h1>
        </div>
    )
}

export default SidePanel;