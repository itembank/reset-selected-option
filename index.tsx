import { useEffect, useState } from 'react';
import A from './A';
import B from './B';
import C from './C';
import D from './D';
import E from './E';

function App() {

  const data = [
                {
                    "title": "This is a 3-option item*",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "option 3.",
                    "ans": "a"
                },
                {
                    "title": "This is a 2-option item.",
                    "a": "True",
                    "b": "False",
                    "ans": "a"
                },
                {
                    "title": "This is a 3-option item.",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "all of the above.",
                    "ans": "a"
                },
                {
                    "title": "This is a 4-option item.",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "option 3.",
                    "d": "all of the above.",
                    "ans": "a"
                },
                {
                    "title": "This is a 5-option item.",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "option 3.",
                    "d": "option 4.",
                    "e": "all of the above.",
                    "ans": "a"
                },
                {
                    "title": "This is a 4-option item*",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "option 3.",
                    "d": "option 4.",
                    "ans": "a"
                }]

  const [item, setItem] = useState<any>([]);
  const [swap, setSwap] = useState(0);
  const initialValues = {choice: ""};
  const [values, setValues] = useState(initialValues);

  const pickItem = async() => {
    try {
    	setItem(data[Math.floor(Math.random()*data.length)]);
    	setValues(initialValues);
    } catch (err) {
    console.log(err);
    }
  };

  useEffect(() => {
    pickItem();
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
        <button onClick={pickItem}>Randomize</button>

        <div onChange={handleInputChange}>
	 <ul>
            <li>{item.title&&item.title}</li>

            {item.a&&<A item={item} values={values}/>}
            {item.b&&<B item={item} values={values}/>}
            {item.c&&<C item={item} values={values}/>}
            {item.d&&<D item={item} values={values}/>}
            {item.e&&<E item={item} values={values}/>}

	 </ul>
	</div>

    </>
  )
}

export default App;
