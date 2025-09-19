'use client';

import { useState, useEffect } from 'react';

interface TableData {
  name: string;
  data: any[];
  columns: string[];
}

export default function DatabasePage() {
  const [tables, setTables] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTable, setSelectedTable] = useState<string>('');

  useEffect(() => {
    fetchAllTables();
  }, []);

  const fetchAllTables = async () => {
    try {
      setLoading(true);
      const tableNames = ['users', 'brands', 'models', 'packages'];
      const tableData: TableData[] = [];

      for (const tableName of tableNames) {
        try {
          const response = await fetch(`/api/${tableName}`);
          if (response.ok) {
            const data = await response.json();
            if (data.length > 0) {
              const columns = Object.keys(data[0]);
              tableData.push({
                name: tableName,
                data: data,
                columns: columns
              });
            }
          }
        } catch (error) {
          console.error(`Error fetching ${tableName}:`, error);
        }
      }

      setTables(tableData);
      if (tableData.length > 0) {
        setSelectedTable(tableData[0].name);
      }
    } catch (error) {
      console.error('Error fetching tables:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectedTableData = tables.find(table => table.name === selectedTable);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Veritabanı Görüntüleyici</h1>
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600">Veriler yükleniyor...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Veritabanı Görüntüleyici</h1>
        
        {/* Tablo Seçici */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tablo Seçin:
          </label>
          <select
            value={selectedTable}
            onChange={(e) => setSelectedTable(e.target.value)}
            className="block w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {tables.map((table) => (
              <option key={table.name} value={table.name}>
                {table.name.charAt(0).toUpperCase() + table.name.slice(1)} ({table.data.length} kayıt)
              </option>
            ))}
          </select>
        </div>

        {/* Tablo Görüntüleme */}
        {selectedTableData && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedTableData.name.charAt(0).toUpperCase() + selectedTableData.name.slice(1)} Tablosu
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Toplam {selectedTableData.data.length} kayıt
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {selectedTableData.columns.map((column) => (
                      <th
                        key={column}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedTableData.data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {selectedTableData.columns.map((column) => (
                        <td key={column} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {typeof row[column] === 'object' && row[column] !== null
                            ? JSON.stringify(row[column])
                            : String(row[column] || '-')
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tables.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">Hiç tablo bulunamadı.</div>
          </div>
        )}
      </div>
    </div>
  );
}