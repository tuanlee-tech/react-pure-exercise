import { useCallback, useMemo } from "react";

// ✅ 2. useFieldArray Hook - Dynamic field arrays
export function useFieldArray(name, formContext) {
  const { values, setFieldValue } = formContext;
  const fields = useMemo(() => {
    return values[name] || [];
  }, [values, name]);

  const placeHolderTitle = s => s.slice(0, -1)[0].toUpperCase() + s.slice(1);

  const push = useCallback(
    (item) => {
      const newTitle = item || `${placeHolderTitle(name)} ${fields.length + 1}`
      setFieldValue(name, [...fields, newTitle]);
    },
    [fields, name, setFieldValue]
  );

  const remove = useCallback(
    (index) => {
      const newFields = fields.filter((_, i) => i !== index);
      setFieldValue(name, newFields);
    },
    [fields, name, setFieldValue]
  );

  const insert = useCallback(
    (index, item) => {
      const newFields = [...fields];
      newFields.splice(index, 0, item);
      setFieldValue(name, newFields);
    },
    [fields, name, setFieldValue]
  );

  const swap = useCallback(
    (indexA, indexB) => {
      const newFields = [...fields];
      [newFields[indexA], newFields[indexB]] = [
        newFields[indexB],
        newFields[indexA],
      ];
      setFieldValue(name, newFields);
    },
    [fields, name, setFieldValue]
  );

  const move = useCallback(
    (from, to) => {
      const newFields = [...fields];
      const [item] = newFields.splice(from, 1);
      newFields.splice(to, 0, item);
      setFieldValue(name, newFields);
    },
    [fields, name, setFieldValue]
  );

  return {
    fields,
    push,
    remove,
    insert,
    swap,
    move,
  };
}
