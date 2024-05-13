import logo from '../../assets/images-shark/shark-2.jpg';
import Social from '../ui/social';

const bottomNav = () => {
  const menus = ['ПРИКЛАДИ РОБІТ', 'ПОСЛУГИ', 'КОНТАКТИ'];

  return (
    <div className="flex  justify-between items-center max-md:flex-col text-[1rem] px-8 pt-[2.0625rem] pb-[1.875rem] border-t-2">
      <nav className="flex max-md:flex-col max-md:my-[2rem] gap-10 items-center tracking-[1.2px]">
        <img
          src={logo}
          alt="Bookmark Logo"
          className="object-cover w-14"
        />
        {menus.map((menu) => (
          <a
            href={menu}
            key={menu}
            className="hover:text-red-400 smooth">
            {menu}
          </a>
        ))}
      </nav>
      <Social />
    </div>
  );
};

export default bottomNav;
