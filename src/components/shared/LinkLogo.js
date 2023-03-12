const { default: Image } = require('next/image');
const { default: Link } = require('next/link');

const LinkLogo = ({ width, height, imageURL }) => {
  return (
    <>
      <Link
        href={{
          pathname: '/',
        }}
      >
        <a>
          <img
            src={imageURL}
            width={width || 120} // Width of logo
            height={height || 48} // Height of logo
            alt={'Houzing'}
          />
        </a>
      </Link>
    </>
  );
};

export default LinkLogo;
