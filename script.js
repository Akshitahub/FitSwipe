// ================== STATE ==================
let username = "";
let likes = [];
let currentIndex = 0;

// ================== PRODUCT CATALOG (21+) ==================
const products = [
  {name:"Red Matte Lipstick",category:"beauty",vibe:"Bold • Confident • Statement",
   img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad",buy:"https://www.nykaa.com/search/result/?q=red+matte+lipstick"},

  {name:"Face Serum",category:"beauty",vibe:"Glowy • Healthy • Skincare",
   img:"https://images.unsplash.com/photo-1612832020997-c9c91b2e0e27",buy:"https://www.nykaa.com/search/result/?q=face+serum"},

  {name:"Lip Balm",category:"beauty",vibe:"Soft • Natural • Everyday",
   img:"https://images.unsplash.com/photo-1588776814546-5c7b2d4c7c6e",buy:"https://www.amazon.in/s?k=lip+balm"},

  {name:"Perfume",category:"beauty",vibe:"Elegant • Romantic • Signature",
   img:"https://images.unsplash.com/photo-1598514983623-86d3137e9b06",buy:"https://www.amazon.in/s?k=perfume"},

  {name:"Daily Vitamins",category:"wellness",vibe:"Healthy • Calm • Balanced",
   img:"https://images.unsplash.com/photo-1584367367093-5b77c8f0b7c0",buy:"https://www.amazon.in/s?k=daily+vitamins"},

  {name:"Yoga Mat",category:"wellness",vibe:"Calm • Focused • Mindful",
   img:"https://images.unsplash.com/photo-1599058917214-110d8e2ad80c",buy:"https://www.amazon.in/s?k=yoga+mat"},

  {name:"Protein Powder",category:"wellness",vibe:"Strong • Fit • Energetic",
   img:"https://images.unsplash.com/photo-1603071722201-521540a47be8",buy:"https://www.amazon.in/s?k=protein+powder"},

  {name:"Smart Watch",category:"electronics",vibe:"Minimal • Productive • Modern",
   img:"https://images.unsplash.com/photo-1517433456452-f9633a875f6f",buy:"https://www.amazon.in/s?k=smart+watch"},

  {name:"Bluetooth Speaker",category:"electronics",vibe:"Fun • Party • Music",
   img:"https://images.unsplash.com/photo-1618312090980-03f40f02b5aa",buy:"https://www.amazon.in/s?k=bluetooth+speaker"},

  {name:"Smart Glasses",category:"electronics",vibe:"Futuristic • Techy • Innovative",
   img:"https://images.unsplash.com/photo-1616461541960-91d1323c42b6",buy:"https://www.amazon.in/s?k=smart+glasses"},

  {name:"Leather Jacket",category:"fashion",vibe:"Edgy • Powerful • Cool",
   img:"https://images.unsplash.com/photo-1520975916090-3105956dac38",buy:"https://www.myntra.com/leather-jacket"},

  {name:"Blue Denim Jeans",category:"fashion",vibe:"Casual • Chic • Effortless",
   img:"https://images.unsplash.com/photo-1581579181100-7c31e6d3f62d",buy:"https://www.myntra.com/jeans"},

  {name:"Sunglasses",category:"fashion",vibe:"Cool • Stylish • Summer",
   img:"https://images.unsplash.com/photo-1556228724-4c3f99f2b5df",buy:"https://www.amazon.in/s?k=sunglasses"},

  {name:"Hoodie",category:"fashion",vibe:"Comfy • Casual • Street",
   img:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",buy:"https://www.myntra.com/hoodie"},

  {name:"Handbag",category:"fashion",vibe:"Elegant • Statement • Chic",
   img:"https://images.unsplash.com/photo-1555529669-6d3b1f1f3f4c",buy:"https://www.amazon.in/s?k=handbag"},

  {name:"Earrings",category:"fashion",vibe:"Trendy • Stylish • Accessory",
   img:"https://images.unsplash.com/photo-1562157877-818bc0726e2f",buy:"https://www.amazon.in/s?k=earrings"},

  {name:"Red Heels",category:"shoes",vibe:"Elegant • Party • Statement",
   img:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4",buy:"https://www.myntra.com/red-heels"},

  {name:"White Sneakers",category:"shoes",vibe:"Clean • Casual • Everyday",
   img:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",buy:"https://www.nike.com/in/w/white-shoes"},

  {name:"Casual Sneakers",category:"shoes",vibe:"Comfort • Sporty • Everyday",
   img:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",buy:"https://www.nike.com/in/sneakers"},

  {name:"Running Shoes",category:"shoes",vibe:"Active • Energetic • Sport",
   img:"https://images.unsplash.com/photo-1595433707802-03e69b9e2e63",buy:"https://www.nike.com/in/running-shoes"},

  {name:"Sports Watch",category:"electronics",vibe:"Active • Sporty • Modern",
   img:"https://images.unsplash.com/photo-1584270354949-6a5b0c8e2a3d",buy:"https://www.amazon.in/s?k=sports+watch"}
];

// ================== CELEB MATCHES ==================
const celebMap = {
  beauty: [
    {name:"Zendaya",img:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Zendaya_2021.jpg"},
    {name:"Selena Gomez",img:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Selena_Gomez_2019.jpg"},
    {name:"Ariana Grande",img:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Ariana_Grande_2019.jpg"}
  ],
  fashion: [
    {name:"Gigi Hadid",img:"https://upload.wikimedia.org/wikipedia/commons/1/15/Gigi_Hadid_2020.jpg"},
    {name:"Kim Kardashian",img:"https://upload.wikimedia.org/wikipedia/commons/d/d4/Kim_Kardashian_2019.jpg"},
    {name:"Harry Styles",img:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Harry_Styles_2019.jpg"},
    {name:"Billie Eilish",img:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Billie_Eilish_2020.jpg"}
  ],
  shoes: [
    {name:"Kanye West",img:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Kanye_West_2021.jpg"},
    {name:"Michael Jordan",img:"https://upload.wikimedia.org/wikipedia/commons/6/67/Michael_Jordan_in_2014.jpg"},
    {name:"LeBron James",img:"https://upload.wikimedia.org/wikipedia/commons/2/20/LeBron_James_Lakers.jpg"},
    {name:"Rihanna",img:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Rihanna_2018.jpg"}
  ],
  electronics: [
    {name:"Elon Musk",img:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"},
    {name:"Mark Zuckerberg",img:"https://upload.wikimedia.org/wikipedia/commons/d/d4/Mark_Zuckerberg_F8_2019_Keynote.jpg"},
    {name:"Tom Holland",img:"https://upload.wikimedia.org/wikipedia/commons/8/85/Tom_Holland_by_Gage_Skidmore.jpg"}
  ],
  wellness: [
    {name:"Deepak Chopra",img:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Deepak_Chopra_2012.jpg"},
    {name:"Chris Hemsworth",img:"https://upload.wikimedia.org/wikipedia/commons/7/71/Chris_Hemsworth_by_Gage_Skidmore.jpg"}
  ]
};

// ================== ELEMENTS ==================
const loginPage = document.getElementById("loginPage");
const app = document.getElementById("app");

const usernameInput = document.getElementById("usernameInput");
const loginBtn = document.getElementById("loginBtn");

const greeting = document.getElementById("greeting");
const itemImg = document.getElementById("itemImg");
const itemName = document.getElementById("itemName");
const itemVibe = document.getElementById("itemVibe");

const likeBtn = document.getElementById("likeBtn");
const passBtn = document.getElementById("passBtn");
const buyBtn = document.querySelector(".buy-btn");

const boardGrid = document.getElementById("boardGrid");
const vibeText = document.getElementById("vibeText");
const celebImg = document.getElementById("celebImg");
const celebName = document.getElementById("celebName");

const profileName = document.getElementById("profileName");
const likesCount = document.getElementById("likesCount");

// ================== LOGIN ==================
loginBtn.onclick = () => {
  if(!usernameInput.value.trim()) return alert("Name pls 😭");
  username = usernameInput.value.trim();
  startApp();
};

function startApp(){
  loginPage.classList.remove("active");
  app.classList.add("active");
  greeting.innerText = `Hey ${username} 👋`;
  profileName.innerText = username;
  renderProduct();
}

// ================== PRODUCT RENDER ==================
function renderProduct(){
  const product = products[currentIndex];
  itemImg.src = product.img;
  itemName.innerText = product.name;
  itemVibe.innerText = product.vibe;
}

// ================== ACTIONS ==================
likeBtn.onclick = () => {
  likes.push(products[currentIndex]); // save liked product
  updateCloset();
  updateVibe();
  updateAvatar();
  nextProduct();
};

passBtn.onclick = nextProduct;

buyBtn.onclick = () => {
  window.open(products[currentIndex].buy,"_blank"); // open shopping link
};

function nextProduct(){
  currentIndex = (currentIndex+1) % products.length;
  renderProduct();
}

// ================== CLOSET ==================
function updateCloset(){
  boardGrid.innerHTML = "";
  likes.forEach(item=>{
    const img=document.createElement("img");
    img.src=item.img;
    img.title=item.name;
    boardGrid.appendChild(img);
  });
  likesCount.innerText = likes.length;
}

// ================== VIBE ==================
function updateVibe(){
  if(likes.length===0) return;
  const count={};
  likes.forEach(i=>{ count[i.category] = (count[i.category]||0)+1; });
  const dominant = Object.entries(count).sort((a,b)=>b[1]-a[1])[0][0];
  const vibeMap={
    beauty:"Bold & Expressive",
    fashion:"Confident & Trendy",
    shoes:"Chill & Effortless",
    electronics:"Focused & Modern",
    wellness:"Calm & Grounded"
  };
  vibeText.innerText = `Your dominant vibe: ${vibeMap[dominant]}`;
}

// ================== AVATAR/CELEB ==================
function updateAvatar(){
  if(likes.length===0) return;
  const count={};
  likes.forEach(i=>{ count[i.category] = (count[i.category]||0)+1; });
  const dominant = Object.entries(count).sort((a,b)=>b[1]-a[1])[0][0];
  
  // randomly pick one celeb from the list for that category
  const celebList = celebMap[dominant];
  const celeb = celebList[Math.floor(Math.random()*celebList.length)];
  
  celebImg.src = celeb.img;
  celebName.innerText = celeb.name;
}

// ================== TABS ==================
document.querySelectorAll(".tab-btn").forEach(btn=>{
  btn.onclick = () => {
    document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t=>t.style.display="none");
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).style.display="block";
  };
});

// ================== LOGOUT ==================
document.getElementById("logoutBtn").onclick = () => location.reload();

  