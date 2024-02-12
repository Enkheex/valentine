'use client';
import { useState } from 'react';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

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
    <div className="flex flex-col items-center justify-center h-screen  bg-slate-600">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/8wMk5Kah4rUAAAAi/penguin-love.gif" />
          <div className="text-4xl font-bold my-4 text-center">AAAA yaayyy</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://media.tenor.com/-xLIJlTMVvIAAAAi/thinking-penguin.gif" />
          <h1 className="text-4xl my-4">Миний валентин болох уу?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Тэгье
            </button>
            <button onClick={handleNoClick} className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              {noCount === 0 ? 'No' : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
