
import React from 'react';
import axios from 'axios';
import CustomersTable from '@/app/ui/customers/table';

export default async function CustomersPage() {
  const products = await (await axios.get('https://api.escuelajs.co/api/v1/products')).data;

  return (
    <div>
      <CustomersTable products={products} />
    </div>
  );
}
// ESTUDIANTE JAVIER GABRIEL PINTO CHARA CI:14346699 RU 80482