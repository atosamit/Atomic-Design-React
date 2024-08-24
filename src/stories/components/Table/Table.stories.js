import React from 'react';
import Table from './Table';
import TableWithPagination from './TableWithPagination';
import TableWithPaginationAndFilter from './TableWithPaginationAndFilter';

export default {
  title: 'Table',
  component: Table,
};

const columns = ['Name', 'Age', 'Country'];
const data = [
  { Name: 'John Doe', Age: 28, Country: 'USA' },
  { Name: 'Jane Smith', Age: 34, Country: 'UK' },
  { Name: 'Pedro Alonso', Age: 40, Country: 'Spain' },
  { Name: 'Maria Garcia', Age: 30, Country: 'Mexico' },
  { Name: 'Li Wei', Age: 25, Country: 'China' },
  { Name: 'Anna Ivanova', Age: 32, Country: 'Russia' },
  { Name: 'Ahmed Khan', Age: 45, Country: 'Pakistan' },
  { Name: 'Sara Kim', Age: 29, Country: 'South Korea' },
];

const Template = (args) => <Table {...args} />;
const TemplateWithPagination = (args) => <TableWithPagination {...args} />;
const TemplateWithPaginationAndFilter = (args) => <TableWithPaginationAndFilter {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  columns,
  data,
};

export const WithPagination = TemplateWithPagination.bind({});
WithPagination.args = {
  columns,
  data,
  rowsPerPage: 2,
};

export const WithPaginationAndFilter = TemplateWithPaginationAndFilter.bind({});
WithPaginationAndFilter.args = {
  columns,
  data,
  rowsPerPage: 2,
};
