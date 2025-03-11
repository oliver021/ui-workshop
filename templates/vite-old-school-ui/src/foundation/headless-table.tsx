import { useState } from "react";
import { Table, Button, Portal, ActionBar, Kbd } from "@chakra-ui/react";
import { Checkbox } from "../components/ui/checkbox"


export interface SchemaField {
  key: string;
  label: string;
}

export interface GenericTableProps<T> {
  schema: SchemaField[];
  data: T[];
  rowKey: keyof T;
}

export const GenericTable = <T extends Record<string, any>>({
  schema,
  data,
  rowKey,
}: GenericTableProps<T>) => {
  const [selection, setSelection] = useState<string[]>([]);

  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < data.length;

  const toggleRowSelection = (rowId: string, checked: boolean) => {
    setSelection((prev) =>
      checked ? [...prev, rowId] : prev.filter((id) => id !== rowId)
    );
  };

  const rows = data.map((item) => (
    <Table.Row key={item[rowKey]} data-selected={selection.includes(item[rowKey]) ? "" : undefined}>
      <Table.Cell>
        <Checkbox
          aria-label="Select row"
          checked={selection.includes(item[rowKey])}
          onChange={(e:any) => toggleRowSelection(item[rowKey], e.target.checked)}
        />
      </Table.Cell>
      {schema.map((field) => (
        <Table.Cell key={field.key}>{item[field.key]}</Table.Cell>
      ))}
    </Table.Row>
  ));

  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>
              <Checkbox
                aria-label="Select all rows"
                checked={indeterminate ? "indeterminate" : selection.length > 0}
                onChange={(e:any) => {
                  setSelection(e.target.checked ? data.map((item) => item[rowKey]) : []);
                }}
              />
            </Table.ColumnHeader>
            {schema.map((field) => (
              <Table.ColumnHeader key={field.key}>{field.label}</Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>

      <ActionBar.Root open={hasSelection}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>
                {selection.length} selected
              </ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant="outline" size="sm">
                Delete <Kbd>⌫</Kbd>
              </Button>
              <Button variant="outline" size="sm">
                Share <Kbd>T</Kbd>
              </Button>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  );
};

