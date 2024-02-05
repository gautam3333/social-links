export default function Header() {
  return (
    <header className='flex flex-col justify-center items-center'>
      <div className='mb-6'>
        <img
          src='/images/avatar-jessica.jpeg'
          alt='avatar'
          className='rounded-full'
        />
      </div>
      <div>
        <h1 className='text-2xl font-bold mb-2'>Jessica Randall</h1>
        <h2 className='text-base font-semibold text-[#c5f82a] mb-6'>
          London, United Kingdom
        </h2>
      </div>
      <p className='mb-5 text-[14px]'>
        &ldquo;Front-end developer and avid reader.&rdquo;
      </p>
    </header>
  );
}
