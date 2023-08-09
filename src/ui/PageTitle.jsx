function PageTitle({ children }) {
  return (
    <p className='before:inline-block before:h-1 before:w-16 before:bg-secondary before:translate-y-[-9px] before:mr-4 after:inline-block after:h-1 after:w-16 after:bg-secondary after:translate-y-[-9px] after:ml-4 relative uppercase font-light tracking-widest mt-4 text-[2rem] text-center'>
      {children}
    </p>
  );
}

export default PageTitle;
