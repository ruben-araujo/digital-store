import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Gallery({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  const resetTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      rightSlide();
    }, 10000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    resetTimeout();
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const leftSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const rightSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1440px] h-[681px] w-full pb-16 relative group'>
      {slides && slides.length > 0 ? (
        <>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
            className='w-full h-full rounded bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={leftSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={rightSlide} size={30} />
          </div>
          {/* Dot Indicators */}
          <div className='flex top-4 justify-center py-2'>
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled
                  size={34}
                  className={
                    currentIndex === slideIndex
                      ? 'text-primary'
                      : 'text-light-gray-2'
                  }
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className='w-full h-full flex items-center justify-center'>
          <p>Sem imagens disponíveis</p>
        </div>
      )}
    </div>
  );
}