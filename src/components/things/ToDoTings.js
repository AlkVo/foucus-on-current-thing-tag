import React, { useContext } from 'react';
import ThingItem from './ThingItem';
import LabelList from '../label/LabelList';
import AddLabel from '../label/AddLabel';
import CurrentTime from '../time/CurrentTime';
import ThingContext from '../../context/things/ThingContext';

const ToDoThings = () => {
  const thingContext = useContext(ThingContext);
  const { things } = thingContext;

  if (things === null) return <div></div>;

  return (
    <ul>
      {things.map((thing) => (
        <li key={thing.id}>
          <ThingItem thing={thing} />
          <button>更</button>
          <button>删</button>
          <CurrentTime time={thing.time} />
          <LabelList labels={thing.labels} />
          <AddLabel />
        </li>
      ))}
    </ul>
  );
};

// ToDoThings.defaultProps = {
//   things: [
//     {
//       id: 1,
//       name: '第 1 件事',
//       date: '2020-6-18',
//       time: [[1592480475000, 1592484075000]],
//       labels: ['魑魅', '钩吻'],
//     },
//     {
//       id: 2,
//       name: '第 2 件事',
//       date: '2020-6-18',
//       time: [
//         [1592487675000, 1592491275162],
//         [1592473275000, 1592476875000],
//       ],
//       labels: ['山丘', '饕餮'],
//     },
//     {
//       id: 3,
//       name: '第 3 件事',
//       date: '2020-6-18',
//       time: [[1592466075000, 1592469675000]],
//       labels: ['南风', '貔貅'],
//     },
//   ],
// };

export default ToDoThings;
