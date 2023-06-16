'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const listA = ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34'];
  const listB = ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35'];
  const listC = ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'];

  const [valueList, setValueList] = useState([]);
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    let current;
    if (listA.includes(value)) {
      setValueList((prev) => [...prev, 'a']);
      current = 'a';
    } else if (listB.includes(value)) {
      setValueList((prev) => [...prev, 'b']);
      current = 'b';
    } else if (listC.includes(value)) {
      setValueList((prev) => [...prev, 'c']);
      current = 'c';
    }

    setValue('');
    let updatedRecords = current ? [...valueList, current] : [...valueList];
    alertCalculation(updatedRecords);
  };

  function hasNoDuplicates(array) {
    return new Set(array).size === array.length;
  }

  // function kok(list, count){
  //     if(list.slice(-3))
  // }

  const [result, setResult] = useState({ status: false, data: [] });

  const alertCalculation = (arr) => {
    let list = arr;
    const unmodifinedList = [...arr]

    let count = 0;
    while (list.length >= 3) {
      // console.log("list: ",list)
      let records = list.slice(-3);
      console.log('records', records);
      if (hasNoDuplicates(records) && records.length == 3) {
        count = count + 1;
        list.length = list.length - 1;
        console.log('li', list);
      } else {
        break;
      }
    }
    // console.log("records", records)
    console.log('count', count);
    if (count >= 4) {
      let flg = count + 2
      console.log("flg", flg, unmodifinedList.slice(-flg))
      setResult({ status: true, data: unmodifinedList.slice(-flg) });
    } else {
      setResult({ status: false, data: [] });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button disabled={value ? false : true} type="submit">
          Add
        </button>
      </form>
      <h3>
        {valueList &&
          valueList.map((i, index) => {
            return (
              <span key={index}>
                <button>{i}</button>{' '}
              </span>
            );
          })}
      </h3>
      {result && result.status && <>
        <h3>Alert: {result.status ? 'YES': 'NO'}</h3>
        <h3>
        {result &&
          result.data.map((i, index) => {
            return (
              <span key={index}>
                <button>{i}</button>{' '}
              </span>
            );
          })}
      </h3>
      </>}
    </>
  );
}
