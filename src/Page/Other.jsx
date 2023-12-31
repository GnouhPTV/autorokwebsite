import React from 'react'
import OtherComment from '../components/Other/other-Comment/OtherComment'
import OtherNews from '../components/Other/other-News/OtherNews'
import Promotion from '../components/Other/sales/Promotion';

const Other = () => {
  return (
    <>
      {/* <OtherNews /> */}

      <Promotion />
      <OtherComment />
    </>
  );
}

export default Other