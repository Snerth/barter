import { ITrade, IUser, TradeStatus } from "../../types/Types";

export const usersArr: IUser[] = [
  {
    id: 1,
    firstName: "Irene",
    secondName: "Snerth",
    email: "ldsjfl@gmail.com",
    phoneNumber: "123443534",
    address: "Some random address",
    age: 22,
    login: "snerth",
    password: "GwyIzsd190()",
    picture: "https://picsum.photos/400/505",
    trades: [],
  },
  {
    id: 2,
    firstName: "Iana",
    secondName: "Babanu",
    email: "ldsjfl@gmail.com",
    phoneNumber: "123443534",
    address: "Some random address",
    age: 27,
    login: "iana",
    password: "GwyIzsd190()",
    picture: "https://picsum.photos/401/505",
    trades: [],
  },
  {
    id: 3,
    firstName: "Snjezana",
    secondName: "Dreznjak",
    email: "ldsjfl@gmail.com",
    phoneNumber: "123443534",
    address: "Some random address",
    age: 34,
    login: "szana",
    password: "GwyIzsd190()",
    picture: "https://picsum.photos/402/505",
    trades: [],
  },
  {
    id: 4,
    firstName: "Zana",
    secondName: "Mrdalj",
    email: "ldsjfl@gmail.com",
    phoneNumber: "123443534",
    address: "Some random address",
    age: 20,
    login: "zana",
    password: "GwyIzsd190()",
    picture: "https://picsum.photos/403/505",
    trades: [],
  },
  {
    id: 5,
    firstName: "Alem",
    secondName: "Osmanbegovic",
    email: "ldsjfl@gmail.com",
    phoneNumber: "123443534",
    address: "Some random address",
    age: 40,
    login: "aosmanbe",
    password: "GwyIzsd190()",
    picture: "https://picsum.photos/404/505",
    trades: [],
  },
  {
    id: 5,
    firstName: "Sergiu",
    secondName: "Barnaciuc",
    email: "ldsjfl@gmail.com",
    phoneNumber: "123443534",
    address: "Some random address",
    age: 46,
    login: "sbarnaciuc",
    password: "GwyIzsd190()",
    picture: "https://picsum.photos/405/505",
    trades: [],
  },
];

export const trades: ITrade[] = [
  {
    id: 1232432,
    status: TradeStatus.open,
    pictures: [
      "https://picsum.photos/400/500",
      "https://picsum.photos/401/500",
      "https://picsum.photos/400/501",
      "https://picsum.photos/402/500",
      "https://picsum.photos/400/502",
      "https://picsum.photos/403/500",
    ],
    owner: usersArr[1],
    title: "Trade Title 1",
    description: ""
  },
  {
    id: 435345,
    status: TradeStatus.promised,
    pictures: [
      "https://picsum.photos/404/500",
      "https://picsum.photos/400/504",
      "https://picsum.photos/405/500",
    ],
    owner: usersArr[2],
    title: "Trade Title 2",
    description: ""
  },
  {
    id: 324234,
    status: TradeStatus.traded,
    pictures: [
      "https://picsum.photos/406/500",
      "https://picsum.photos/400/506",
      "https://picsum.photos/407/500",
      "https://picsum.photos/400/507",
    ],
    owner: usersArr[3],
    title: "Trade Title 3",
    description: ""
  },
  {
    id: 234534,
    status: TradeStatus.open,
    pictures: [
      "https://picsum.photos/306/540",
      "https://picsum.photos/404/526",
    ],
    owner: usersArr[4],
    title: "Trade Title 4",
    description: ""
  },
  {
    id: 343465,
    status: TradeStatus.open,
    pictures: [
      "https://picsum.photos/343/532",
      "https://picsum.photos/444/523",
    ],
    owner: usersArr[5],
    title: "Trade Title 5",
    description: ""
  },
  {
    id: 24654,
    status: TradeStatus.open,
    pictures: [
      "https://picsum.photos/313/532",
      "https://picsum.photos/441/523",
      "https://picsum.photos/441/323",
    ],
    owner: usersArr[6],
    title: "Trade Title 6",
    description: ""
  },
  {
    id: 43684,
    status: TradeStatus.promised,
    pictures: [
      "https://picsum.photos/413/532",
      "https://picsum.photos/431/523",
      "https://picsum.photos/421/323",
    ],
    owner: usersArr[7],
    title: "Trade Title 7",
    description: ""
  },
  {
    id: 64553,
    status: TradeStatus.open,
    pictures: [
      "https://picsum.photos/411/532",
      "https://picsum.photos/461/523",
      "https://picsum.photos/471/323",
    ],
    owner: usersArr[8],
    title: "Trade Title 8",
    description: ""
  },
  {
    id: 9876,
    status: TradeStatus.open,
    pictures: [
      "https://picsum.photos/311/542",
      "https://picsum.photos/463/523",
      "https://picsum.photos/471/333",
    ],
    owner: usersArr[9],
    title: "Trade Title 9",
    description: ""
  },
];
