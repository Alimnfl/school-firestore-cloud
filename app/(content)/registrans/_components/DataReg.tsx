'use client';

import { useEffect, useState } from 'react';
import { db } from '@/app/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Spinner } from '@/components/spinner';
import { cn } from '@/lib/utils';

interface data {
  id: number | string;
  name: string;
  date: string;
  school: string;
}

const itemsPerPage = 10;

async function fetchDataFromFirestore(page: number, pageSize: number) {
  const querySnapshot = await getDocs(collection(db, 'users'));

  const data: data[] = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as data);
  });

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
}

function DataReg() {
  const [userData, setUserData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataFromFirestore(currentPage, itemsPerPage);
        setUserData(data);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = userData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {!loading && userData && (
        <div className="container mx-auto p-4">
          <table className="min-w-full bg-white border rounded-lg border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">School</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.date}</td>
                  <td className="py-2 px-4 border-b">{user.school}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {loading && (
        <div className="h-full flex items-center justify-center">
          <Spinner size="icon" />
        </div>
      )}
      <div className="mt-4">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index + 1} onClick={() => onPageChange(index + 1)} className={`mx-2 px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-gray-300' : 'bg-white'}`}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default DataReg;
