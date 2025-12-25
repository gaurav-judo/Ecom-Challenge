
export default function Products() {
    const products = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    brand: "Zudio",
    category: "Mens",
    price: 899,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 2,
    name: "Women's Floral Dress",
    brand: "Zara",
    category: "Womens",
    price: 2499,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 3,
    name: "Kids Denim Jacket",
    brand: "Zudio",
    category: "Kids",
    price: 1299,
    image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e7?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 4,
    name: "Men's Leather Wallet",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 8999,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 5,
    name: "Women's Handbag",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 12999,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 6,
    name: "Kids Sneakers",
    brand: "Zara",
    category: "Kids",
    price: 1599,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 7,
    name: "Men's Winter Jacket",
    brand: "Zara",
    category: "Mens",
    price: 4299,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 8,
    name: "Women's Sunglasses",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 6499,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    rating: 4.5,
    inStock: false,
  },
  {
    id: 9,
    name: "Kids T-Shirt Pack",
    brand: "Zudio",
    category: "Kids",
    price: 799,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 10,
    name: "Men's Running Shoes",
    brand: "Zara",
    category: "Mens",
    price: 3299,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 11,
    name: "Women's Evening Gown",
    brand: "Zara",
    category: "Womens",
    price: 5999,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 12,
    name: "Kids Backpack",
    brand: "Zudio",
    category: "Kids",
    price: 699,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 13,
    name: "Men's Formal Suit",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 15999,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 14,
    name: "Women's Casual Jeans",
    brand: "Zudio",
    category: "Womens",
    price: 1199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 15,
    name: "Kids Winter Cap",
    brand: "Zara",
    category: "Kids",
    price: 499,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 16,
    name: "Men's Belt",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 7299,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=400",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 17,
    name: "Women's Scarf",
    brand: "Zara",
    category: "Womens",
    price: 899,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 18,
    name: "Kids School Shoes",
    brand: "Zudio",
    category: "Kids",
    price: 1099,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 19,
    name: "Men's Sports Watch",
    brand: "Zara",
    category: "Mens",
    price: 2999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    rating: 4.3,
    inStock: false,
  },
  {
    id: 20,
    name: "Women's Pearl Necklace",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 9999,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 21,
    name: "Kids Raincoat",
    brand: "Zara",
    category: "Kids",
    price: 899,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 22,
    name: "Men's Polo T-Shirt",
    brand: "Zudio",
    category: "Mens",
    price: 799,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 23,
    name: "Women's High Heels",
    brand: "Zara",
    category: "Womens",
    price: 3499,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 24,
    name: "Kids Shorts Set",
    brand: "Zudio",
    category: "Kids",
    price: 599,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 25,
    name: "Men's Sunglasses",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 5999,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 26,
    name: "Women's Cardigan",
    brand: "Zudio",
    category: "Womens",
    price: 1399,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 27,
    name: "Kids Party Dress",
    brand: "Zara",
    category: "Kids",
    price: 1899,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400",
    rating: 4.5,
    inStock: false,
  },
  {
    id: 28,
    name: "Men's Gym Shorts",
    brand: "Zara",
    category: "Mens",
    price: 999,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 29,
    name: "Women's Watch",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 11999,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 30,
    name: "Kids Swimming Trunks",
    brand: "Zudio",
    category: "Kids",
    price: 449,
    image: "https://images.unsplash.com/photo-1578322851-c1e08bf0c3e7?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 31,
    name: "Men's Denim Jeans",
    brand: "Zara",
    category: "Mens",
    price: 2899,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 32,
    name: "Women's Skirt",
    brand: "Zudio",
    category: "Womens",
    price: 999,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 33,
    name: "Kids Hoodie",
    brand: "Zara",
    category: "Kids",
    price: 1799,
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 34,
    name: "Men's Blazer",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 13999,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 35,
    name: "Women's Blouse",
    brand: "Zara",
    category: "Womens",
    price: 1899,
    image: "https://images.unsplash.com/photo-1564257577154-75f67b3b2f43?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 36,
    name: "Kids Joggers",
    brand: "Zudio",
    category: "Kids",
    price: 899,
    image: "https://images.unsplash.com/photo-1598032895397-b9d28c9fe8dc?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 37,
    name: "Men's Tie",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 5499,
    image: "https://images.unsplash.com/photo-1589756823695-278bc407f5b3?w=400",
    rating: 4.6,
    inStock: false,
  },
  {
    id: 38,
    name: "Women's Ankle Boots",
    brand: "Zara",
    category: "Womens",
    price: 3999,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 39,
    name: "Kids School Bag",
    brand: "Zudio",
    category: "Kids",
    price: 799,
    image: "https://images.unsplash.com/photo-1577655197620-704858b270ac?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 40,
    name: "Men's Sweater",
    brand: "Zara",
    category: "Mens",
    price: 2499,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 41,
    name: "Women's Clutch",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 8999,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 42,
    name: "Kids Sandals",
    brand: "Zara",
    category: "Kids",
    price: 999,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 43,
    name: "Men's Track Pants",
    brand: "Zudio",
    category: "Mens",
    price: 1099,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 44,
    name: "Women's Earrings",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 7499,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 45,
    name: "Kids Beanie",
    brand: "Zudio",
    category: "Kids",
    price: 399,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 46,
    name: "Men's Formal Shoes",
    brand: "Zara",
    category: "Mens",
    price: 3799,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 47,
    name: "Women's Jumpsuit",
    brand: "Zara",
    category: "Womens",
    price: 3499,
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400",
    rating: 4.6,
    inStock: false,
  },
  {
    id: 48,
    name: "Kids Sweatshirt",
    brand: "Zara",
    category: "Kids",
    price: 1399,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 49,
    name: "Men's Cap",
    brand: "Zudio",
    category: "Mens",
    price: 499,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 50,
    name: "Women's Trench Coat",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 14999,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 51,
    name: "Kids Leggings",
    brand: "Zudio",
    category: "Kids",
    price: 599,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 52,
    name: "Men's Hoodie",
    brand: "Zara",
    category: "Mens",
    price: 2199,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 53,
    name: "Women's Sandals",
    brand: "Zara",
    category: "Womens",
    price: 2299,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 54,
    name: "Kids Socks Pack",
    brand: "Zudio",
    category: "Kids",
    price: 299,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400",
    rating: 3.9,
    inStock: true,
  },
  {
    id: 55,
    name: "Men's Leather Belt",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 7999,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=400",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 56,
    name: "Women's Tote Bag",
    brand: "Zara",
    category: "Womens",
    price: 2999,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 57,
    name: "Kids Jacket",
    brand: "Zara",
    category: "Kids",
    price: 2199,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 58,
    name: "Men's Chinos",
    brand: "Zara",
    category: "Mens",
    price: 2699,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 59,
    name: "Women's Bracelet",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 6999,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    rating: 4.8,
    inStock: false,
  },
  {
    id: 60,
    name: "Kids Slippers",
    brand: "Zudio",
    category: "Kids",
    price: 399,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 61,
    name: "Men's Shorts",
    brand: "Zudio",
    category: "Mens",
    price: 799,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 62,
    name: "Women's Maxi Dress",
    brand: "Zara",
    category: "Womens",
    price: 3299,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 63,
    name: "Kids Gloves",
    brand: "Zudio",
    category: "Kids",
    price: 299,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400",
    rating: 3.9,
    inStock: true,
  },
  {
    id: 64,
    name: "Men's Leather Jacket",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 15999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 65,
    name: "Women's Yoga Pants",
    brand: "Zudio",
    category: "Womens",
    price: 1199,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 66,
    name: "Kids Boots",
    brand: "Zara",
    category: "Kids",
    price: 1899,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 67,
    name: "Men's Vest",
    brand: "Zara",
    category: "Mens",
    price: 1499,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 68,
    name: "Women's Ring",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 9999,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 69,
    name: "Kids Mittens",
    brand: "Zudio",
    category: "Kids",
    price: 249,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400",
    rating: 3.8,
    inStock: true,
  },
  {
    id: 70,
    name: "Men's Pajamas",
    brand: "Zudio",
    category: "Mens",
    price: 999,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 71,
    name: "Women's Tank Top",
    brand: "Zudio",
    category: "Womens",
    price: 599,
    image: "https://images.unsplash.com/photo-1564257577154-75f67b3b2f43?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 72,
    name: "Kids Poncho",
    brand: "Zara",
    category: "Kids",
    price: 1299,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 73,
    name: "Men's Tuxedo",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 18999,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
    rating: 5.0,
    inStock: false,
  },
  {
    id: 74,
    name: "Women's Stockings",
    brand: "Zudio",
    category: "Womens",
    price: 299,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400",
    rating: 3.9,
    inStock: true,
  },
  {
    id: 75,
    name: "Kids Overalls",
    brand: "Zara",
    category: "Kids",
    price: 1799,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 76,
    name: "Men's Windbreaker",
    brand: "Zara",
    category: "Mens",
    price: 3499,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 77,
    name: "Women's Shawl",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 8499,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 78,
    name: "Kids Suspenders",
    brand: "Zudio",
    category: "Kids",
    price: 399,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
    rating: 3.9,
    inStock: true,
  },
  {
    id: 79,
    name: "Men's Robe",
    brand: "Zara",
    category: "Mens",
    price: 2199,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 80,
    name: "Women's Kimono",
    brand: "Zara",
    category: "Womens",
    price: 2799,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 81,
    name: "Kids Romper",
    brand: "Zudio",
    category: "Kids",
    price: 799,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 82,
    name: "Men's Cufflinks",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 6499,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 83,
    name: "Women's Leotard",
    brand: "Zudio",
    category: "Womens",
    price: 899,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 84,
    name: "Kids Tutu",
    brand: "Zara",
    category: "Kids",
    price: 1199,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 85,
    name: "Men's Scarf",
    brand: "Zara",
    category: "Mens",
    price: 1299,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 86,
    name: "Women's Kaftan",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 11999,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 87,
    name: "Kids Onesie",
    brand: "Zudio",
    category: "Kids",
    price: 699,
    image: "https://images.unsplash.com/photo-1578322851-c1e08bf0c3e7?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 88,
    name: "Men's Waistcoat",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 9999,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 89,
    name: "Women's Romper",
    brand: "Zara",
    category: "Womens",
    price: 2299,
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 90,
    name: "Kids Vest",
    brand: "Zara",
    category: "Kids",
    price: 999,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 91,
    name: "Men's Suspenders",
    brand: "Zara",
    category: "Mens",
    price: 899,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 92,
    name: "Women's Bodysuit",
    brand: "Zudio",
    category: "Womens",
    price: 1099,
    image: "https://images.unsplash.com/photo-1564257577154-75f67b3b2f43?w=400",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 93,
    name: "Kids Coveralls",
    brand: "Zudio",
    category: "Kids",
    price: 899,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 94,
    name: "Men's Loafers",
    brand: "Louis Vuitton",
    category: "Mens",
    price: 11999,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 95,
    name: "Women's Mules",
    brand: "Zara",
    category: "Womens",
    price: 2499,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    rating: 4.4,
    inStock: false,
  },
  {
    id: 96,
    name: "Kids Crocs",
    brand: "Zudio",
    category: "Kids",
    price: 599,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400",
    rating: 4.1,
    inStock: true,
  },
  {
    id: 97,
    name: "Men's Oxfords",
    brand: "Zara",
    category: "Mens",
    price: 3999,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 98,
    name: "Women's Wedges",
    brand: "Louis Vuitton",
    category: "Womens",
    price: 8999,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 99,
    name: "Kids Rain Boots",
    brand: "Zara",
    category: "Kids",
    price: 1299,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 100,
    name: "Men's Slip-Ons",
    brand: "Zudio",
    category: "Mens",
    price: 1199,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400",
    rating: 4.2,
    inStock: true,
  },
];
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-[#050814] border-r border-white/5 flex flex-col">
        <div className="px-6 py-5">
          <h1 className="text-xl font-semibold">Ecom</h1>
        </div>

        <div className="px-4">
          <div className="rounded-xl bg-[#0b1020] border border-white/5 px-3 py-3 text-[11px] text-gray-300 mb-6">
            <p className="text-[10px] text-gray-500 mb-1">Logged in as:</p>
            <p>gg@gmail.com</p>
          </div>

          <nav className="space-y-1 text-sm">
            <button className="w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5">
              Home
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg bg-white/10">
              Products
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5">
              Users
            </button>
          </nav>
        </div>

        <div className="mt-auto px-4 pb-6">
          <button className="w-full py-2 rounded-lg bg-white text-xs font-medium text-black hover:bg-gray-100">
            Logout
          </button>
          <p className="mt-3 text-[10px] text-gray-500 text-center">
            © Ecom App
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-8 py-6 overflow-y-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Products</h2>
          <p className="text-xs text-gray-400">
            Browse and filter products (100 products)
          </p>
        </div>

        {/* Filters */}
        <section className="mb-6 rounded-2xl bg-[#050814] border border-white/5 px-6 py-4">
          <h3 className="text-sm font-medium mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-gray-400">Brand</span>
              <select className="w-full bg-[#050814] border border-white/10 rounded-lg px-3 py-2 text-xs outline-none focus:border-indigo-400">
                <option>All Brands</option>
                <option>Zudio</option>
                <option>Zara</option>
                <option>Louis Vuitton</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-gray-400">Category</span>
              <select className="w-full bg-[#050814] border border-white/10 rounded-lg px-3 py-2 text-xs outline-none focus:border-indigo-400">
                <option>All Categories</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>Kids</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-gray-400">Price Range</span>
              <select className="w-full bg-[#050814] border border-white/10 rounded-lg px-3 py-2 text-xs outline-none focus:border-indigo-400">
                <option>All Prices</option>
                <option>Under ₹1,000</option>
                <option>₹1,000 - ₹2,500</option>
                <option>Above ₹2,500</option>
              </select>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl bg-[#050814] border border-white/5 overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative h-44 w-full">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-medium">
                  {p.brand}
                </span>
              </div>

              {/* Info */}
              <div className="px-4 py-4 flex flex-col gap-1">
                <h4 className="text-sm font-medium">{p.title}</h4>
                <p className="text-[11px] text-gray-400">{p.category}</p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold">{p.price}</span>
                  <span className="flex items-center gap-1 text-[11px] text-yellow-400">
                    <span>★</span>
                    <span>{p.rating}</span>
                  </span>
                </div>

                <button className="mt-4 w-full rounded-lg bg-white text-[11px] font-medium text-black py-2 hover:bg-gray-100 transition">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
