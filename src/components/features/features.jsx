// import all components
import { useState } from 'react';
import TabContent from './tabContent';
import TabNav from './tabNav';

// import all images for tabContent
import tab1 from '../../assets/images-example/ex-1.jpg';
import tab2 from '../../assets/images-example/ex-2.jpg';
import tab3 from '../../assets/images-example/ex-3.jpg';

// import all animation
import { motion } from 'framer-motion';
import { container, item, set } from '../../utils/motion.js';

const features = () => {
  // set default usestate
  const [activeTab, setActiveTab] = useState('1');

  return (
    <motion.section
      variants={container}
      {...set}
      id="ПРИКЛАДИ РОБІТ"
      className="mt-20">
      <motion.div
        variants={item(0.3)}
        className="text-center grid place-items-center">
        <motion.h1
          variants={item(0.5)}
          className="heading">
          Акула приклади ваших робіт
        </motion.h1>
        <motion.p
          variants={item(0.7)}
          className="paraf">
          якись текст рандомний про вас якись текст рандомний про вас якись текст рандомний про вас якись текст
          рандомний про вас якись текст рандомний про вас якись текст рандомний про вас якись текст рандомний про вас
          якись текст рандомний про вас
        </motion.p>
      </motion.div>

      {/* tabnav for navigating between panel, change the active states to id using useState hooks*/}
      <motion.nav
        variants={item(0.9)}
        className="flex max-md:flex-col justify-center text-center mx-8 mt-8">
        <TabNav
          id="1"
          title="Приклад - 1"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabNav
          id="2"
          title="Приклад - 2"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabNav
          id="3"
          title="Приклад - 3"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </motion.nav>

      {/* tabcontent get the id and activetab states to render a current tabpanel*/}
      <div>
        <TabContent
          id="1"
          activeTab={activeTab}
          title="Приклад - 1"
          description="Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись
          текст з описом"
          img={tab1}
        />
        <TabContent
          id="2"
          activeTab={activeTab}
          title="Приклад - 2"
          description="Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись
          текст з описом"
          img={tab2}
        />
        <TabContent
          id="3"
          activeTab={activeTab}
          title="Приклад - 3"
          description="Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись текст з описом Якись
          текст з описом"
          img={tab3}
        />
      </div>
    </motion.section>
  );
};

export default features;
