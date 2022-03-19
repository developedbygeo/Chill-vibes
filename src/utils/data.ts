import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        title: 'Seagulls',
        artist: 'Misha, Zmeyev, Viktor Minsky',
        cover: 'https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#76adc9', '#eb8575'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=28936',
        active: true,
    },
    {
        title: 'Nomad',
        artist: 'Aviino',
        cover: 'https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#da8147', '#5c91b1'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=23067',
        active: false,
    },
    {
        title: 'Tournament Arc',
        artist: 'Sleepy Fish',
        cover: 'https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#1d66aa', '#fd8535'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=24824',
        active: false,
    },
    {
        title: 'On The Other Side',
        artist: 'Hanz',
        cover: 'https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#ce4d54', '#80a8ec'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=23067',
        active: false,
    },
    {
        title: 'Looking In',
        artist: 'Smile High, Teddy Roxpin',
        cover: 'https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#3797a2', '#d76662'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=23335',
        active: false,
    },
    {
        title: 'Luz',
        artist: 'Juan Rios, Ian Ewing',
        cover: 'https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#fcc46f', '#fa810f'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=21651',
        active: false,
    },
];
export default data;
