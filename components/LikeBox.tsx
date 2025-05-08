'use client';

import { useEffect, useState } from 'react';

export default function LikeBox() {
  const [likes, setLikes] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const alreadyLiked = localStorage.getItem('liked-home');
    setLiked(!!alreadyLiked);

    // Имитация запроса: замени на реальный API fetch
    fetch('/api/likes')
      .then(res => res.json())
      .then(data => setLikes(data.count))
      .catch(() => setLikes(0));
  }, []);

  const handleLike = () => {
    if (liked) return;

    // Имитация POST-запроса
    fetch('/api/likes', { method: 'POST' });

    setLikes(prev => (prev !== null ? prev + 1 : 1));
    setLiked(true);
    localStorage.setItem('liked-home', 'true');
  };

  return (
    <div className='bg-yellow-100 dark:bg-yellow-300 text-black rounded-xl p-6 flex flex-col items-center text-center shadow-md'>
      <h3 className='text-lg sm:text-xl font-bold mb-2'>❤️ Нравится проект?</h3>
      <p className='mb-4 text-sm'>
        Если тебе полезно — нажми на кнопку! Это поможет развивать проект.
      </p>
      <button
        onClick={handleLike}
        disabled={liked}
        className={`px-6 py-2 rounded-lg text-white transition-all font-semibold text-lg ${
          liked ? 'bg-green-500' : 'bg-pink-600 hover:bg-pink-500'
        }`}
      >
        {liked ? 'Спасибо!' : '❤️ Лайкнуть'}
      </button>
      <p className='mt-3 text-sm font-medium text-gray-700 dark:text-gray-900'>
        Всего лайков: {likes !== null ? likes : '...'}
      </p>
    </div>
  );
}
