const E = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="e" checked={values.choice === "e"} name="choice" readOnly/> {item.e}{values.choice==item.ans && item.ans=="e" &&"✔️"}</li>
        </>
    );
}

export default E;