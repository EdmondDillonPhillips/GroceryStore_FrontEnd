import React from 'react';
import StoreInformation from './StoreInformation';
import CustomerOrder from './CustomerOrder';
import Tax from './Tax';
import DividingLine from './DividingLine';
import Total from './Total';

export default function OrderDisplay() {
  return (
    <>
      <div>Order Display</div>

      <StoreInformation />
      <CustomerOrder />
      <Tax />
      <DividingLine />
      <Total />
    </>
  );
}
