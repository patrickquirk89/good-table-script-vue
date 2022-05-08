# Row Details Table

This option allows you to show or hide the details of a row.

## Configuration 

type: `Boolean`

`table-row` props now also contain `props.expandedRow` this will be true if row is expanded

Object containing select options
```html
<vue-good-table
  v-on:selected-rows-change="selectionChanged"
  :columns="columns"
  :rows="rows"
  :enable-row-expand="true"
  expanded-row-classes="bg-red"
  expanded-row-detail-classes="bg-yellow"
>
```

### Example
```vue
<vue-good-table
  v-on:selected-rows-change="selectionChanged"
  :columns="columns"
  :rows="rows"
  :enable-row-expand="true"
  expanded-row-classes="bg-red"
  expanded-row-detail-classes="bg-yellow">
    <template #row-details="props">
      <p>{{ props.formattedRow }}</p>
    </template>
</vue-good-table>
```
