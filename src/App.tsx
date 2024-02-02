import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import './style.css'; // Assuming you move the CSS into App.css

interface Position {
  x: number;
  y: number;
}

const CatSprite: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [catPosition, setCatPosition] = useState<Position>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const speed: number = 1;
  const jiggleInterval: number = 7000;
  let lastMoveTime: number = Date.now();

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      lastMoveTime = Date.now();
      setIsMoving(true);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener(
        'mousemove',
        handleMouseMove as unknown as (this: Document, ev: MouseEvent) => any
      );
    };
  }, []);

  // Follow mouse movement
  useEffect(() => {
    const followMouse = () => {
      requestAnimationFrame(() => {
        const dx: number = mousePosition.x - catPosition.x;
        const dy: number = mousePosition.y - catPosition.y;
        const distance: number = Math.sqrt(dx * dx + dy * dy);

        if (distance > 50) {
          setCatPosition({
            x: catPosition.x + Math.cos(Math.atan2(dy, dx)) * speed,
            y: catPosition.y + Math.sin(Math.atan2(dy, dx)) * speed,
          });
          setIsMoving(true);
        } else {
          setIsMoving(false);
        }
      });
    };

    followMouse();
  }, [mousePosition, catPosition]);

  // Jiggle effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMoving && Date.now() - lastMoveTime >= jiggleInterval) {
        const catElement = document.getElementById('catSprite') as HTMLElement;
        catElement.style.animation = 'jiggle 1s';

        setTimeout(() => {
          catElement.style.animation = 'none';
        }, 1000);
        lastMoveTime = Date.now();
      }
    }, jiggleInterval);

    return () => clearInterval(interval);
  }, [isMoving]);

  return (
    <img
      src="black_cat_black_and_white.svg"
      id="catSprite"
      alt="Cat Sprite"
      style={{
        position: 'absolute',
        left: `${catPosition.x}px`,
        top: `${catPosition.y}px`,
        pointerEvents: 'none',
        width: '50px', // Adjust size as needed
        zIndex: 1000,
        transformOrigin: 'center', // Set rotation origin to the center of the sprite
      }}
    />
  );
};

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <p>Hello! Portfolio Coming Soon :)</p>
      <p>
        See my GitHub:{' '}
        <a href="https://github.com/williammunnich">William Munnich's GitHub</a>
      </p>
      <CatSprite />
    </div>
  );
};

export default App;
