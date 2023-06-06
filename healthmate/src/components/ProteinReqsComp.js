const ProteinReqsComp = () => {
    return (
        <div className="proteinreqs-wrap">
            <div className="proteinreqs-dropdown">
                <p>Select group: </p>
                <select name="group">
                    <option value="healthy-adults">Healthy adults (18-64 years)</option>
                    <option value="healthy-elderly">Healthy elderly (&gt; 65 years)</option>
                    <option value="ill-adults">Acutely & chronically ill adults</option>
                </select>
            </div>
        </div>
    )
}

export default ProteinReqsComp;