/* eslint-disable react/prop-types */
import PropsTypes from 'prop-types';

const Page = ({ children }) => (
  <div>
    <h2>I am the page compo</h2>
    {children}
  </div>
);

export default Page;

Page.propsTypes = {
  children: PropsTypes.arrayOf(PropsTypes.node),
};
