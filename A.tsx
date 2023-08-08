const A = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="a" checked={values.choice === "a"} name="choice" readOnly/> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>
        </>
    );
}

export default A;