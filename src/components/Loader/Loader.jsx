import { ColorRing } from 'react-loader-spinner';
import { LodeWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LodeWrapper>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#f8d703', '#cc06f4', '#f8d703', '#06d0f3', '#f8d703']}
      />
    </LodeWrapper>
  );
};

export default Loader;
