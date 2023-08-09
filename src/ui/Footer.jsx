import Button from './Button';

function Footer() {
  return (
    <div className='bg-[#f1f1f1] text-primary flex items-center justify-between px-4 py-4'>
      <div className='text-lg'>Wishlist overview</div>
      <div className='space-x-4'>
        <Button to='wishlist' type='login'>
          Wishlist &rarr;
        </Button>
        <Button to='watched' type='login'>
          Watched &rarr;
        </Button>
      </div>
    </div>
  );
}

export default Footer;
