// app/book/select/loading.tsx
export default function Loading() {
  return (
    <div className='max-w-2xl mx-auto px-4 py-6 flex flex-col gap-6'>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className='animate-pulse flex flex-col gap-4 p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800'
        >
          <div className='h-40 bg-gray-300 dark:bg-gray-700 rounded' />
          <div className='h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded' />
          <div className='h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded' />
        </div>
      ))}
    </div>
  );
}
