// import { useState, useEffect } from "react";
// import styles from './Range.module.css'; // Импортируем CSS-модуль

// export default function RangeSlider() {
//   const [fromValue, setFromValue] = useState(120);
//   const [toValue, setToValue] = useState(260);
//   const [scale, setScale] = useState<number[]>([]); // Явное указание типа number[]

//   const MIN = 50;
//   const MAX = 350;
//   const STEPS = 50;

//   // Функция для обновления значений слайдеров и их отображения
//   const handleFromSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFromValue(parseInt(e.target.value));
//   };

//   const handleToSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setToValue(parseInt(e.target.value));
//   };

//   // Обновление scale
//   useEffect(() => {
//     const range = MAX - MIN;
//     const steps = range / STEPS;
//     const scaleArr: number[] = []; // Здесь явно указываем тип number[]
//     for (let i = 0; i <= steps; i++) {
//       const value = MIN + i * STEPS;
//       scaleArr.push(value);
//     }
//     setScale(scaleArr);
//   }, []);

//   return (
//     <div className={styles.rangeContainer}>
//       <div className={styles.slidersControl}>
//         <div
//           className={styles.sliderTooltip}
//           style={{ left: `${(fromValue - MIN) / (MAX - MIN) * 100}%` }}
//         >
//           {fromValue}
//         </div>
//         <input
//           id="fromSlider"
//           type="range"
//           value={fromValue}
//           min={MIN}
//           max={MAX}
//           step={STEPS}
//           onChange={handleFromSliderChange}
//         />
//         <div
//           className={styles.sliderTooltip}
//           style={{ left: `${(toValue - MIN) / (MAX - MIN) * 100}%` }}
//         >
//           {toValue}
//         </div>
//         <input
//           id="toSlider"
//           type="range"
//           value={toValue}
//           min={MIN}
//           max={MAX}
//           step={STEPS}
//           onChange={handleToSliderChange}
//         />
//       </div>

//       {/* Масштаб с метками */}
//       <div className={styles.scale}>
//         {scale.map((value, index) => (
//           <div key={index} style={{ left: `${(value - MIN) / (MAX - MIN) * 100}%` }}>
//             <span>{value}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
