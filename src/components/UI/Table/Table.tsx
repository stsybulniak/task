import './Table.scss';

// helper to get an array containing the object values with
// the correct type infered.
const objectValues = <T extends {}>(obj: T) => {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
};

const objectKeys = <T extends {}>(obj: T) => {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
};

type PrimitiveType = string | number | boolean;

// Type guard for the primitive types which will support printing
// out of the box
function isPrimitive(value: any): value is PrimitiveType {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
}

interface MinTableItem {
  id: PrimitiveType;
}

type TableHeaders<T extends MinTableItem> = Record<keyof T, string>;

type CustomRenderers<T extends MinTableItem> = Partial<Record<keyof T, (it: T) => React.ReactNode>>;

interface ITableProps<T extends MinTableItem> {
  items: T[];
  headers: TableHeaders<T>;
  customRenderers?: CustomRenderers<T>;
}

const Table = <T extends MinTableItem>(props: ITableProps<T>) => {
  function renderRow(item: T, index: number) {
    return (
      <tr key={(typeof item.id !== 'boolean' && item.id) || index}>
        {objectKeys(item).map((itemProperty) => {
          const customRenderer = props.customRenderers?.[itemProperty];

          if (customRenderer) {
            return <td>{customRenderer(item)}</td>;
          }

          return <td>{isPrimitive(item[itemProperty]) ? item[itemProperty] : ''}</td>;
        })}
      </tr>
    );
  }

  return (
    <table className='Table'>
      <thead>
        <tr>
          {objectValues(props.headers).map((headerValue) => (
            <th key={headerValue}>{headerValue}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.items.map(renderRow)}</tbody>
    </table>
  );
};

export default Table;
