import React from 'react';
import { Descriptions } from 'antd';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CarouselComponent from '../../components/Carousel/CarouselComponent';
const items = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Remark',
    children: 'empty',
  },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
];
const ContactComponent = () => {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <Descriptions title="User Info" items={items} />
      <Footer />
    </div>
  )
};


export default ContactComponent;
