# Row Details Table

This option allows you to show or hide the details of a row.

## Configuration 

type: `Boolean`

Object containing select options
```html
<vue-good-table
  v-on:selected-rows-change="selectionChanged"
  :columns="columns"
  :rows="rows"
  :enable-row-expand="true"
>
```

### Example
```vue
<vue-good-table
  v-on:selected-rows-change="selectionChanged"
  :columns="columns"
  :rows="rows"
  :enable-row-expand="true">
    <template #row-details="props">
      <p>{{ props.formattedRow }}</p>
    </template>
</vue-good-table>
```
