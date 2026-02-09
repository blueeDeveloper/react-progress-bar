const ProgressBar = ({value}) => {

    const totalItems = [10, 20, 30, 40, 50, 80, 95, 100]
    return (
        <>
        {totalItems && totalItems.map((item) => {
            return (
                <div className="outer">
            <div className="inner" style={{ width: `${item}%`}}>
                {item}%</div>
        </div>
            )
        })}
        </>
    )
}

export default ProgressBar;