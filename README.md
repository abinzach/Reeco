# React Redux Order Management System


## Description

This is a simple order management system built with React and Redux. It allows you to manage orders, approve orders, mark orders as urgent, and edit prices and quantities for each product in the order list.

## Features

- Add new orders with product details. Click on "Add Item" button.
- Approve orders to change their status to "Approved."
- Mark orders as urgent, changing their status to "Missing-Urgent."
- Mark orders as missing, changing their status to "Missing"
- Edit the price and quantity of products in the order list, updating their status accordingly.

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abinzach/reeco.git

2. Navigate to project directory:

   ```bash
   cd reeko

3. Install dependencies:

   ```bash
   npm install

4. Start the development server:

   ```bash
   npm start

### Folder Structure
src/
|-- components/
|   |-- OrderPage.js
|   |-- OrderModal.js
|   |-- EditModal.js
|-- redux/
|   |-- orderSlice.js
|   |-- store.js
|-- App.js
|-- index.js
|-- ...
