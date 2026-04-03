import Nails from './Nails';

const nails = [
   '/nails/nokti01.jpg',
   '/nails/nokti02.jpg',
   '/nails/nokti03.jpg',
   '/nails/nokti04.jpg',
   '/nails/nokti05.jpg',
   '/nails/nokti06.jpg',
   '/nails/nokti07.jpg',
   '/nails/nokti08.jpg',
   '/nails/nokti09.jpg',
   '/nails/nokti10.jpg',
   '/nails/nokti11.jpg',
   '/nails/nokti12.jpg',
   '/nails/nokti13.jpg',
   '/nails/nokti14.jpg',
   '/nails/nokti15.jpg',
   '/nails/nokti16.jpg',
];

const lashes = [
   '/lashes/trepavice01.jpg',
   '/lashes/trepavice02.jpg',
   '/lashes/trepavice03.jpg',
   '/lashes/trepavice04.jpg',
   '/lashes/trepavice05.jpg',
   '/lashes/trepavice06.jpg',
   '/lashes/trepavice07.jpg',
   '/lashes/trepavice08.jpg',
   '/lashes/trepavice09.jpg',
   '/lashes/trepavice10.jpg',
   '/lashes/trepavice11.jpg',
   '/lashes/trepavice12.jpg',
   '/lashes/trepavice13.jpg',
   '/lashes/trepavice14.jpg',
   '/lashes/trepavice15.jpg',
   '/lashes/trepavice16.jpg',
];

const gallery = [...nails, ...lashes];

export default function Services() {
   return <Nails nails={nails} />;
}
