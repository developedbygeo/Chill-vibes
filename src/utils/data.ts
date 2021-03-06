import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        title: 'Cruising',
        artist: 'Evil Needle',
        cover: 'https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#ea4b4a', '#edc881'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=17087',
        active: false,
    },
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
        title: 'Wake Up',
        artist: 'Evil Needle',
        cover: 'https://chillhop.com/wp-content/uploads/2020/07/2c3bd458bfb0713c89f991d1ce469523e95e3b53-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#744184', '#fec29e'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=8285',
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
    {
        title: 'Time Went By',
        artist: 'Delayde, anybodyy',
        cover: 'https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#7747ce', '#ed92da'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=23194',
        active: false,
    },
    {
        title: 'Vitamin D',
        artist: 'fantompower',
        cover: 'https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#ad5bb8', '#87c8e0'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=22790',
        active: false,
    },
    {
        title: 'By The Window',
        artist: 'Middle School, Aso',
        cover: 'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#de6f47', '#4176a5'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=22937',
        active: false,
    },
    {
        title: 'Little Windows',
        artist: 'Delayde, anybodyy',
        cover: 'https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#7747ce', '#ed92da'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=23189',
        active: false,
    },
    {
        title: 'Places',
        artist: 'Ruck P',
        cover: 'https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#db8897', '#fcb263'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=20563',
        active: false,
    },
    {
        title: 'Dreamstate',
        artist: 'Toonorth',
        cover: 'https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#fcb32c', '#517BC4'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=17947',
        active: false,
    },
    {
        title: 'Easy Now',
        artist: 'Mo Anando',
        cover: 'https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#892d42', '#176241'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=16186',
        active: false,
    },
    {
        title: 'Railways',
        artist: 'Sleepy Fish',
        cover: 'https://chillhop.com/wp-content/uploads/2020/07/99c90197abcb6c4a16f48ea8f002eac25b9ac1da-1024x1024.jpg',
        id: uuidv4(),
        colors: ['#44aecc', '#cd7674'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=7813',
        active: false,
    },
];
export default data;
