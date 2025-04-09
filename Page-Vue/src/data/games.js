import cyber from '@/assets/images/cyber.jpg'
import sekiro from '@/assets/images/sekiro.jpg'
import hotline from '@/assets/images/hotline.jpg'
import wit from '@/assets/images/witch.jpg'
import gta from '@/assets/images/download.jpg'
import under from '@/assets/images/under.jpg'
import emerald from '@/assets/images/emerald.jpg'
import fn from '@/assets/images/fnaf.webp'

export const games = [
    {
        id: 1,
        title: 'The Witcher 3: Wild Hunt',
        genre: 'RPG/Fantasia',
        platform: 'PC/PS/Xbox/Switch',
        description:
          'Geralt de Rívia, um caçador de monstros, procura sua filha adotiva Ciri enquanto enfrenta a ameaça cavalheiresca da Caçada Selvagem. Mundo aberto épico, escolhas morais complexas e DLCs aclamadas.',
        image: wit,
      },
      {
        id: 2,
        title: 'Cyberpunk 2077',
        genre: 'RPG/Ficção Científica',
        platform: 'PC/PS/Xbox',
        description:
          'Viva como V, um mercenário em Night City - uma megalópole obcecada por poder e modificações corporais. História não-linear, customização profunda e um mundo aberto caótico.',
        image: cyber
      },
      {
        id: 3,
        title: 'Sekiro: Shadows Die Twice',
        genre: 'Ação/Aventura',
        platform: 'PC/PS/Xbox',
        description:
          'Um ninja desgraçado busca resgatar seu jovem senhor e se vingar em um Japão feudal sombrio. Jogo conhecido por seu combate preciso com espadas, mecânicas de stealth e dificuldade desafiadora.',
        image: sekiro
      },
      {
        id: 4,
        title: 'Hotline Miami',
        genre: 'Ação/Top-Down',
        platform: 'PC/PS/Switch',
        description:
          'Um jogo psicodélico de ação rápida com visão superior. Combate brutal, trilha sonora synthwave e uma narrativa surreal que critica a violência.',
        image: hotline
      },
      {
        id: 5,
        title: 'Grand Theft Auto IV',
        genre: 'Ação/Aventura',
        platform: 'PC/PS/Xbox',
        description:
          'Niko Bellic, um imigrante da Europa Oriental, busca o "sonho americano" em Liberty City. História sombria, física realista e mundo aberto cheio de atividades criminosas.',
        image: gta,
      },
      {
        id: 6,
        title: 'Undertale',
        genre: 'RPG/Indie',
        platform: 'PC/PS/Switch',
        description:
          'Um RPG onde você NÃO precisa matar ninguém! Encare batalhas em estilo bullet-hell, faça amigos com monstros e decida o destino do Submundo em uma narrativa cheia de coração.',
        image: under,
      },
      {
        id: 7,
        title: 'Pokemon Emerald',
        genre: 'RPG/Aventura',
        platform: 'Game Boy Advance',
        description:
         'Aventure-se na região de Hoenn...',
        image: emerald,
      },
      {
        id: 7,
        title: 'Five Nights at Freddy\'s 2',
        genre: 'Horror/Sobrevivência',
        platform: 'PC/PS/Xbox',
        description: 'Trabalhe como guarda noturno...',
        image: fn,
      },
    // Adicione os outros jogos aqui...
  ];