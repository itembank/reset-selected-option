const B = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="b" checked={values.choice === "b"} name="choice" readOnly/> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>
        </>
    );
}

export default B;