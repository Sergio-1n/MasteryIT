export default function GlobalLoading() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-300'>
      <div className='w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin' />
    </div>
  );
}
