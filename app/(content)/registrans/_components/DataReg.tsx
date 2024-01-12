'use client';

import { useEffect, useState } from 'react';
import { db } from '@/app/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

interface data {
  id: number | string;
  name: string;
  date: string;
  school: string;
}

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, 'users'));

  const data: data[] = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as data);
    console.log(data);
  });
  return data;
}

function DataReg() {
  const [userData, setUserData] = useState<data[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setUserData(data);
    }
    fetchData();
  }, []);

  console.log(userData);

  return (
    <div className="">
      {userData.map((user) => (
        <div key={user.id}>
          <div>{user.name}</div>
          <div>{user.date}</div>
          <div>{user.school}</div>
        </div>
      ))}
    </div>
  );
}

export default DataReg;
