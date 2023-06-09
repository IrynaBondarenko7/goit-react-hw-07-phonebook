import { ColorRing } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#52BE80', '#1D8348', '#FDF608', '#abbd81', '#849b87']}
    />
  );
};
