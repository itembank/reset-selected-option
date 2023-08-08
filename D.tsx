const D = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="d" checked={values.choice === "d"} name="choice" readOnly/> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>
        </>
    );
}

export default D;