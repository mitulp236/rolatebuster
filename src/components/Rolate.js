'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Rolate({ name }) {
  const listA = ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34'];
  const listB = ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35'];
  const listC = ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'];

  const [valueList, setValueList] = useState([]);
  const [mainValueList, setMainValueList] = useState([]);
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    let current;
    if (listA.includes(value)) {
      setValueList((prev) => [...prev, { data: 'A', val: value, index: prev.length + 1 }]);
      // setMainValueList((prev) => [...prev, value]);
      current = { data: 'A', val: value, index: valueList.length + 1 };
    } else if (listB.includes(value)) {
      setValueList((prev) => [...prev, { data: 'B', val: value, index: prev.length + 1 }]);
      // setMainValueList((prev) => [...prev, value]);
      current = { data: 'B', val: value, index: valueList.length + 1 };
    } else if (listC.includes(value)) {
      setValueList((prev) => [...prev, { data: 'C', val: value, index: prev.length + 1 }]);
      // setMainValueList((prev) => [...prev, value]);
      current = { data: 'C', val: value, index: valueList.length + 1 };
    }

    setValue('');
    let updatedRecords = current ? [...valueList, current] : [...valueList];
    alertCalculation(updatedRecords);
  };

  function hasNoDuplicates(array) {
    let a = array.map((i) => i.data);
    return new Set(a).size === a.length;
  }

  // function kok(list, count){
  //     if(list.slice(-3))
  // }

  const [result, setResult] = useState({ status: false, data: [] });
  const [count, setCount] = useState(0);

  const alertCalculation = (arr) => {
    let list = arr;
    const unmodifinedList = [...arr];

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
      let flg = count + 2;
      console.log('flg', flg, unmodifinedList.slice(-flg));
      setResult({ status: true, data: unmodifinedList.slice(-flg) });
      setCount(count);
    } else {
      setResult({ status: false, data: [] });
    }
  };

  const deleteBlock = (index) => {
    
  }

  return (
    <>
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">
              {name}
            </label>

            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
                disabled={value ? false : true}
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          {/* ©2020 Acme Corp. All rights reserved. */}
        </p>
      </div>
      <h3>
        {console.log('result', result)}
        {valueList &&
          valueList.map((i, index) => {
            return (
              <span key={index}>
                <>
                  <button
                    disabled={true}
                    className='className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"'
                  >
                    <span>
                      <b>{i.data}</b>
                    </span>{' '}
                    <hr />
                    {''}
                    <span>{i.val}</span>
                    {/* <span>{mainValueList[index]}</span> */}
                  </button>{' '}
                </>
              </span>
            );
          })}
      </h3>
      <br />
      {result && result.status && (
        <>
          <h3>Alert: {result.status ? 'YES' : 'NO'} for rolate: <span style={{color:"blue"}}>{name}</span></h3>
          <h3>
            {result &&
              result.data.map((i, index) => {
                return (
                  <span key={index}>
                    <button
                      disabled={true}
                      className='className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"'
                    >
                      <span>
                        <b>{i.data}</b>
                      </span>{' '}
                      <hr />
                      {''}
                      <span>{i.val}</span>
                    </button>{' '}
                  </span>
                );
              })}
          </h3>
          <h3>Count: {count}</h3>
        </>
      )}
    </>
  );
}
