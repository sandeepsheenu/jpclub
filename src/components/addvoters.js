import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_COLUMN_TO_TABLE = gql`
  mutation AddColumnToTable($tableName: String!, $columnName: String!, $columnType: String!) {
    addColumn(tableName: $tableName, name: $columnName, type: $columnType) {
      column {
        name
        type
      }
    }
  }
`;

const YourComponent = () => {
  const [tableName, setTableName] = useState('');
  const [columnName, setColumnName] = useState('');
  const [columnType, setColumnType] = useState('');
  const [addColumnToTable, { data }] = useMutation(ADD_COLUMN_TO_TABLE);

  const handleAddColumn = async () => {
    try {
      const result = await addColumnToTable({
        variables: {
          tableName,
          columnName,
          columnType
        }
      });
      console.log('Column added:', result.data.addColumn.column);
    } catch (error) {
      console.error('Error adding column:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Table Name"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Column Name"
        value={columnName}
        onChange={(e) => setColumnName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Column Type"
        value={columnType}
        onChange={(e) => setColumnType(e.target.value)}
      />
      <button onClick={handleAddColumn}>Add Column</button>
    </div>
  );
};

export default YourComponent;
