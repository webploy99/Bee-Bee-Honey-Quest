// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/bee-bee-honey-quest/id6475209487";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/30/7b/3b/307b3b1d-3cee-102c-297a-5bf4cc78b65f/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};
var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;

// ======== get img url ========
imgUrl ({
  img1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  img2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  img3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  img4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  img5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/13/a4/3b/13a43bbf-4f69-46d3-c8da-fe45e1a2b18b/8a5fa6e2-3d9d-4330-b384-7fcaa98330e4_ipad__U00281_U0029.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/33/d8/97/33d89792-4612-cdee-2d27-204b399b526c/c82ff3c0-a13e-4100-aa12-189fb5310202_ipad__U00282_U0029.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/6b/55/ac/6b55ac73-2f2b-69e6-ab67-7cb54e1a512c/955ba9be-7f43-438f-bb8b-60ef388a96a8_ipad__U00283_U0029.jpg/434x0w.webp",
})

function imgUrl ({img1, img2, img3, img4, img5, appImg1, appImg2, appImg3}) {
  document.getElementById('img1').src = img1
  document.getElementById('img2').src = img2
  document.getElementById('img3').src = img3
  document.getElementById('img4').src = img4
  document.getElementById('img5').src = img5
  document.getElementById('pic1').src = appImg1
  document.getElementById('pic2').src = appImg2
  document.getElementById('pic3').src = appImg3
}