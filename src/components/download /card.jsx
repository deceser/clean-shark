import Button from '../ui/PrimaryBtn';
import { delay, motion } from 'framer-motion';
import { item, set } from '../../utils/motion.js';

const card = ({ img, platform, version, flex, delay }) => {
  return (
    <motion.div
      variants={item(delay)}
      {...set}
      className={'p-2 border shadow-xl grid place-items-center   decoration-stone-400 text-center mb-4 ' + flex}>
      <img
        src={img}
        alt="platform"
        className="object-cover"
      />
      {/* <div className="my-8 ">
        <p className="font-medium text-xl">Add to {platform}</p>
        <p className="text-grayfishblue">Minimum version {version}</p>
      </div> */}
    </motion.div>
  );
};

export default card;
