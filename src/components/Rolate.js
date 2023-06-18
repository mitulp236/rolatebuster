'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Rolate({ name }) {
  const listA = ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34'];
  const listB = ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35'];
  const listC = ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'];
  const listX = ['1', '2', '3', '4', '5', '6', '31', '32', '33', '34', '35', '36'];
  const listY = ['7', '8', '9', '10', '11', '12', '25', '26', '27', '28', '29', '30'];
  const listZ = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  const listE = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const listF = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  const listG = ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'];

  const [valueText, setValueText] = useState('');

  const [method1ValueList, setMethod1ValueList] = useState([]);
  const [method1Result, setMethod1Result] = useState({ status: false, count: 0, data: [] });

  const [method2ValueList, setMethod2ValueList] = useState([]);
  const [method2Result, setMethod2Result] = useState({ status: false, count: 0, data: [] });

  const [method3ValueList, setMethod3ValueList] = useState([]);
  const [method3Result, setMethod3Result] = useState({ status: false, count: 0, data: [] });

  const method1 = () => {
    let current;
    if (listA.includes(valueText)) {
      setMethod1ValueList((prev) => [
        ...prev,
        { data: 'A', val: valueText, index: prev.length + 1 },
      ]);
    //   current = { data: 'A', val: valueText, index: method1ValueList.length + 1 };
    } else if (listB.includes(valueText)) {
      setMethod1ValueList((prev) => [
        ...prev,
        { data: 'B', val: valueText, index: prev.length + 1 },
      ]);
    //   current = { data: 'B', val: valueText, index: method1ValueList.length + 1 };
    } else if (listC.includes(valueText)) {
      setMethod1ValueList((prev) => [
        ...prev,
        { data: 'C', val: valueText, index: prev.length + 1 },
      ]);
    //   current = { data: 'C', val: valueText, index: method1ValueList.length + 1 };
    }
    let updatedRecords = current ? [...method1ValueList, current] : [...method1ValueList];
    // alertCalculation(updatedRecords, 3, setMethod1Result);
  };

  const method2 = () => {
    let current;
    if (listX.includes(valueText)) {
      setMethod2ValueList((prev) => [
        ...prev,
        { data: 'X', val: valueText, index: prev.length + 1 },
      ]);
    //   current = { data: 'X', val: valueText, index: method2ValueList.length + 1 };
    } else if (listY.includes(valueText)) {
      setMethod2ValueList((prev) => [
        ...prev,
        { data: 'Y', val: valueText, index: prev.length + 1 },
      ]);
    //   current = { data: 'Y', val: valueText, index: method2ValueList.length + 1 };
    } else if (listZ.includes(valueText)) {
      setMethod2ValueList((prev) => [
        ...prev,
        { data: 'Z', val: valueText, index: prev.length + 1 },
      ]);
    //   current = { data: 'Z', val: valueText, index: method2ValueList.length + 1 };
    }
    // let updatedRecords = current ? [...method2ValueList, current] : [...method2ValueList];
    // alertCalculation(updatedRecords, 3, setMethod2Result);
  };

  const method3 = () => {
    let current;
    if (listE.includes(valueText)) {
      setMethod3ValueList((prev) => [
        ...prev,
        { data: 'E', val: valueText, index: prev.length + 1 },
      ]);
    //   current = { data: 'E', val: valueText, index: method3ValueList.length + 1 };
    } else if (listF.includes(valueText)) {
      setMethod3ValueList((prev) => [
        ...prev,
        { data: 'F', val: valueText, index: prev.length + 1 },
      ]);
    //   current = { data: 'F', val: valueText, index: method3ValueList.length + 1 };
    } else if (listG.includes(valueText)) {
      setMethod3ValueList((prev) => [
        ...prev,
        { data: 'G', val: valueText, index: prev.length + 1 },
      ]);
    //   current = { data: 'G', val: valueText, index: method3ValueList.length + 1 };
    }
    // let updatedRecords = current ? [...method3ValueList, current] : [...method3ValueList];
    // alertCalculation(updatedRecords, 3, setMethod3Result);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    method1();
    method2();
    method3();
    setValueText('');
  };

  function hasNoDuplicates(array) {
    let a = array.map((i) => i.data);
    return new Set(a).size === a.length;
  }

  const alertCalculation = (arr, countLimit = 4, setResult) => {
    let list = [...arr];
    const unmodifinedList = [...arr];

    let count = 0;
    while (list.length >= 3) {
      // console.log("list: ",list)
      let records = list.slice(-3);
      console.log('records', records);
      if (hasNoDuplicates(records) && records.length == 3) {
        count = count + 1;
        list.length = list.length - 1;
        // console.log('li', list);
      } else {
        break;
      }
    }
    // console.log("records", records)
    // console.log('count', count);
    if (count >= countLimit) {
      let flg = count + 2;
      console.log('flg', flg, unmodifinedList.slice(-flg));
      setResult({ status: true, count: count, data: unmodifinedList.slice(-flg) });
    } else {
      setResult({ status: false, count: 0, data: [] });
    }
  };

  function deleteRecord(index) {
    setMethod1ValueList(method1ValueList.filter(item => item.index !== index));
    setMethod2ValueList(method2ValueList.filter(item => item.index !== index));
    setMethod3ValueList(method3ValueList.filter(item => item.index !== index));
    toast('Item deleted!', { hideProgressBar: false, autoClose: 2000, type: 'success' })
  }

  useEffect(() => {
    alertCalculation(method1ValueList, 3, setMethod1Result);
    alertCalculation(method2ValueList, 3, setMethod2Result);
    alertCalculation(method3ValueList, 3, setMethod3Result);
  }, [method1ValueList, method2ValueList,method3ValueList])
  

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
                value={valueText}
                onChange={(e) => setValueText(e.target.value)}
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
                disabled={valueText ? false : true}
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

      <DisplayMethodValueList valueList={method1ValueList} methodName={'Brahma'} deleteRecord={deleteRecord} />
      <br />
      <DisplayMethodValueList valueList={method2ValueList} methodName={'Vishnu'} deleteRecord={deleteRecord} />
      <br />
      <DisplayMethodValueList valueList={method3ValueList} methodName={'Mahesh'} deleteRecord={deleteRecord} />

      <br />
      <DisplayMethodResult result={method1Result} rolateName={name} methodName={'Brahma'} />
      <br />
      <DisplayMethodResult result={method2Result} rolateName={name} methodName={'Vishnu'} />
      <br />
      <DisplayMethodResult result={method3Result} rolateName={name} methodName={'Mahesh'} />
    </>
  );
}

function DisplayMethodValueList({ valueList, methodName, deleteRecord }) {
  return (
    <div>
      {valueList && valueList.length > 0 && (
        <>
          Method: {methodName}
          <h3>
            {valueList &&
              valueList.map((i, index) => {
                return (
                  <span key={index}>
                    <>
                      <button
                        // disabled={true}
                        className='className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"'
                        onDoubleClick={() => deleteRecord(i.index)}
                      >
                        <span>
                          <b>{i.data}</b>
                        </span>{' '}
                        <hr />
                        {''}
                        <span>{i.val}</span>
                      </button>{' '}
                    </>
                  </span>
                );
              })}
          </h3>
        </>
      )}
    </div>
  );
}

function DisplayMethodResult({ result, rolateName, methodName }) {
  return (
    <div>
      {result && result.status && (
        <>
          <h3>
            Alert: {result.status ? 'YES' : 'NO'} for rolate:{' '}
            <span style={{ color: 'blue' }}>{rolateName}</span> and Method name:{' '}
            <span style={{ color: 'blue' }}>{methodName}</span>
          </h3>
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
          {result && result.count && <h3>Count: {result.count}</h3>}
        </>
      )}
    </div>
  );
}
