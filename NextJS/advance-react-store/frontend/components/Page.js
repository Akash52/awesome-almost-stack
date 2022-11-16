/* eslint-disable react/prop-types */
import PropsTypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <h2>I am the page compo</h2>
    {children}
  </div>
);

export default Page;

Page.propsTypes = {
  children: PropsTypes.arrayOf(PropsTypes.node),
};
