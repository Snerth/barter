import { TradeStatus } from "../../types/Types";

export const trades = [
  {
    id: "1",
    status: TradeStatus.open,
    addedToFavorites: true,
    pictures: [
      "https://picsum.photos/400/500",
      "https://picsum.photos/400/500",
      "https://picsum.photos/400/500",
      "https://picsum.photos/400/500",
      "https://picsum.photos/400/500",
      "https://picsum.photos/400/500",
    ],
    owner: {
      picture: "https://picsum.photos/400/500",
      id: "34",
    },
    title: "Blue Iceberg",
    addedToWishList: false,
  },
  {
    id: "2",
    status: TradeStatus.promised,
    addedToFavorites: false,
    pictures: [
        'https://picsum.photos/400/500',
        'https://picsum.photos/400/500',
        'https://picsum.photos/400/500'
    ],
    owner: {
      picture: "",
      id: "56",
    },
    title: "Turquoise River",
    addedToWishList: false,
  },
  {
    id: "3",
    status: TradeStatus.traded,
    addedToFavorites: true,
    pictures: [
        'https://picsum.photos/400/500',
        'https://picsum.photos/400/500',
        'https://picsum.photos/400/500',
        'https://picsum.photos/400/500'
    ],
    owner: {
      picture: "",
      id: "346",
    },
    title: "Something Else",
    addedToWishList: true,
  },
  {
    id: "4",
    status: TradeStatus.open,
    addedToFavorites: false,
    pictures: [
        'https://picsum.photos/400/300',
        'https://picsum.photos/400/300',
        'https://picsum.photos/400/300',
        'https://picsum.photos/400/300',
        'https://picsum.photos/400/300'
    ],
    owner: {
      picture: "",
      id: "36",
    },
    title: "Red Bun",
    addedToWishList: false,
  },
];
