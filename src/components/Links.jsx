import { links } from '../constant/index';

export default function Links() {
  return (
    <ul className='space-y-4'>
      {links.map((link) => (
        <li key={link.label} className='bg-[#333333] text-[14px] rounded-lg'>
          <a
            href={link.href}
            className='text-center font-semibold py-2 inline-block min-w-full hover:bg-[#c5f82a] hover:text-[#1f1f1f] hover:rounded-lg transition-all duration-300'
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
