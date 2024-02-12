'use client';
import { useState } from 'react';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 15 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      'Үгүй',
      'Итгэлтэй байна уу?',
      'Бодож үзээч 🙏🧎',
      'Нээрээ итгэлтэй байна уу?',
      'Сүүлийн боломж?',
      'Чи харамсаж магадгүй дээ!',
      'Дахиад бодоод үзээч!',
      'Үнэхээр итгэлтэй байна уу?',
      'Энэ эцсийн хариулт чинь уу?',
      'Owww заза яахав дээ ;(',
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600">
      <div className="max-w-lg w-full px-4 mb-14">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/8wMk5Kah4rUAAAAi/penguin-love.gif" alt="Penguin love" className="h-48 mx-auto" />
            <div className="text-3xl font-bold my-4 text-center">AAAA yaayyy</div>
          </>
        ) : (
          <>
            <img src="https://media.tenor.com/-xLIJlTMVvIAAAAi/thinking-penguin.gif" alt="Thinking penguin" className="h-48 mx-auto" />
            <h1 className="text-3xl my-4 text-center">Миний валентин болох уу?</h1>
            <div className="text-center">
              <button
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 `}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Тэгье
              </button>
              <button onClick={handleNoClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                {noCount === 0 ? 'Үгүй' : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="absolute top-0 left-0 font-bold text-gray-300 mt-4 ml-4">
        <h1>Ирмүүн Мөнххүслэн-д зориулж хийв. 12/02/2023</h1>
      </div>
    </div>
  );
}
