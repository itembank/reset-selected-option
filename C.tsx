const C = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="c" checked={values.choice === "c"} name="choice" readOnly/> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>
        </>
    );
}

export default C;