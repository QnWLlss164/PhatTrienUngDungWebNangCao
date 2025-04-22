const products = [
    {
        name: "LẨU THẬP CẨM",
        image: "https://daotaobeptruong.vn/wp-content/uploads/2019/11/lau-thap-cam.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Nếu bạn đã quá quen thuộc với món lẩu bò mỗi khi du lịch Đà Lạt thì hãy chuyển sang một phiên bản đặc biệt hơn chính là món lẩu bò atiso. Món ăn này được chế biến từ các nguyên liệu như lẩu bò thông thường nhưng có thêm sự xuất hiện của bông atiso khiến cho nước dùng ở đây có vị ngọt thanh còn thịt bò thì mềm và thơm.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU ĐUÔI BÒ",
        image: "https://www.thucphamchosach.com/images/lau-duoi-bo-5.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Sẽ là một thiếu sót nếu như nhắc đến các món ăn về thịt bò nhưng lại thiếu lẩu đuôi bò giàu chất đậm và ấm nóng. Với những ngày mưa còn gì tuyệt vời hơn khi cùng nhau thưởng thức nồi lẩu đuôi bò nóng hổi và hàn huyên những câu chuyện.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU DỰNG BÒ",
        image: "https://botonhanphat.vn/wp-content/uploads/2021/01/Lau-dung-bo-tai-Bo-To-Nhan-Phat.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Món lẩu dựng bò thơm phức với dựng bò chín mềm, nước dùng được nêm nếm ngon ngọt, hấp dẫn. Khi ăn thì bạn nhúng phần bắp bò cắt lát mỏng và các loại rau ăn kèm vào nồi lẩu để thưởng thức. Ngoài ra bạn có thể ăn kèm món ăn này với mì hoặc bún đều ngon.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU ÓC BÒ",
        image: "https://botonhanphat.vn/wp-content/uploads/2020/12/Lau-oc-bo-1200x600.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Lẩu óc bò là món ăn nhiều dinh dưỡng cho cả người lớn lẫn trẻ em. Ngoài giá trị dinh dưỡng cao lẩu óc bò còn được yêu thích bởi mùi vị ngon tuyệt bởi cảm giác béo ngậy khó tả trên đầu lưỡi. Tham khảo bài viết dưới đây để biết rõ hơn những lợi ích của óc bò cũng như cách chế biến vẫn giữ được giá trị dinh dưỡng nhé!",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU BÒ BẮP HOA",
        image: "https://danviet.mediacdn.vn/296231569849192448/2021/6/9/base64-1623171951116882580064.png",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Không khí se lạnh luôn là điều mà du khách yêu thích mỗi khi đến du lịch Đà Lạt. Và trong tiết trời se lạnh ấy mà được xì xụp miếng nước lẩu nóng hổi thì không còn gì tuyệt vời hơn. Chính vì thế mà ở Đà Lạt lẩu luôn là món ăn được ưu tiên lựa chọn hàng đầu trong mỗi bữa ăn. Nếu đến Đà Lạt mà không ăn lẩu là một điều thiếu sót và càng thiếu sót hơn khi không đến thưởng thức món lẩu bò Bắp Hoa.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU BÒ TOYUM",
        image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/473832YjT/quan-ngoi-ctr-lau-thai-tomyum-1247117.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Vì sao gọi là lẩu tomyum? Được mệnh danh là vua của các món lẩu, lẩu tomyum mang hương vị đặc trưng của xứ sở Chùa Vàng. Trong tiếng Thái, “tom” là từ dùng để chỉ món súp hoặc canh, “yum” mang nghĩa chua cay. Nói nôm na, lẩu tomyum chính là món canh súp của người Thái Lan mang hương vị chua cay đặc biệt.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "BÒ HẤP SẢ",
        image: "https://i.ytimg.com/vi/qxo40XHXdKE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD6Ucoj1vyujqk51BBgNmGC-6DbwA",
        categories_id: "67fdf3af78d582fa804ca88c",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò hấp sả gần như chỉ có 2 nguyên liệu chính là bắp bò và sả. Bạn sẽ không phải chuẩn bị nhiều bước cũng như tiết kiệm thời gian nấu nướng hơn. Điểm nhấn của món bò hấp sả nằm ở nước chấm nên bạn hay “dắt túi” cách pha mắm gừng hoặc mắm chanh tỏi ớt thật vừa miệng",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ HẤP TÍA TÔ",
        image: "http://botocuchigiasi.net/wp-content/uploads/2021/09/cach-lam-be-hap-sa.jpg",
        categories_id: "67fdf3af78d582fa804ca88c",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò hấp tía tô ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ HẤP HÀNH",
        image: "https://botonhanphat.vn/wp-content/uploads/2021/01/Dung-bo-hap-gung-tai-Bo-To-Nhan-Phat.jpg",
        categories_id: "67fdf3af78d582fa804ca88c",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò hấp hành thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ HẤP GỪNG",
        image: "https://tieudung.kinhtedothi.vn/upload_images/images/2021/10/08/thuc-don1.jpg",
        categories_id: "67fdf3af78d582fa804ca88c",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò hấp gừng thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "LÁCH SÁCH HẤP HÀNH",
        image: "https://bloganchoi.com/wp-content/uploads/2023/10/cach-lam-mon-sach-bo-xao-khe-rau-ram.jpg",
        categories_id: "67fdf3af78d582fa804ca88c",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Lách xách bò hấp gừng thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ THẬP CẨM HẤP",
        image: "https://tiki.vn/blog/wp-content/uploads/2023/07/lau-bo-thap-cam-thumbnail.jpeg",
        categories_id: "67fdf3af78d582fa804ca88c",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ NƯỚNG TẢNG (Đặc sản Tây Ninh)",
        image: "https://29foods.com/media/news/520_bo_my_nuong_tang.jpg",
        categories_id: "67fdf3af78d582fa804ca883",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BA CHỈ NƯỚNG",
        image: "http://cdn.tgdd.vn/Files/2017/04/14/972222/15-cach-uop-thit-nuong-ngon-dung-chuan-vi-nha-hang-tai-nha-202201071019267824.jpg",
        categories_id: "67fdf3af78d582fa804ca883",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "SƯỜN BÒ NƯỚNG",
        image: "https://media.loveitopcdn.com/30778/thumb/de-suon-bo-nuong-sa-te.png",
        categories_id: "67fdf3af78d582fa804ca883",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "GU BÒ NƯỚNG",
        image: "http://botocuchigiasi.net/wp-content/uploads/2021/10/uop-thit-bo-nuong.jpg",
        categories_id: "67fdf3af78d582fa804ca883",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ NƯỚNG LỤI",
        image: "https://thanhnien.mediacdn.vn/Uploaded/2014/saigonamthuc.thanhnien.com.vn/Pictures20136/NgocLinh/bo_nuong_lui_b.jpg",
        categories_id: "67fdf3af78d582fa804ca883",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ XIÊN QUE",
        image: "https://29foods.com/media/product/154_b___xi__n_n_____ng.jpg",
        categories_id: "67fdf3af78d582fa804ca883",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ SỐT TIÊU",
        image: "https://sotaynauan.com/wp-content/uploads/2016/07/bo-sot-tieu-den-dspl1.jpg",
        categories_id: "67fdf3af78d582fa804ca883",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "CƠM CHIÊN TRỨNG",
        image: "https://tiki.vn/blog/wp-content/uploads/2023/08/com-chien-toi-1-1024x683.jpeg",
        categories_id: "67fdf3af78d582fa804ca891",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "CƠM CHIÊN TỎI",
        image: "https://bizweb.dktcdn.net/thumb/grande/100/021/974/products/unnamed2.jpg?v=1585215897597",
        categories_id: "67fdf3af78d582fa804ca891",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "CƠM CHIÊN THỊT BÒ",
        image: "https://yummyday.vn/uploads/images/com-chien-thit-bo.jpg",
        categories_id: "67fdf3af78d582fa804ca891",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "149000",
        unit: "Đĩa"
    },
    {
        name: "CƠM CHÁY - BÒ KHO SẢ ỚT",
        image: "https://i.ytimg.com/vi/eUxo5zbCG0g/sddefault.jpg",
        categories_id: "67fdf3af78d582fa804ca891",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b0",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },

    {
        name: "Carpaccio, Tartare or Viteo Tonato",
        image: "https://www.sfizioso.it/wp-content/uploads/2017/06/Carpaccio-di-vitello-con-ravanelli-rucola-e-salsa-alla-senape-e1496319800140.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Để chế biến ra Carpaccio, người ta phải thái thịt sống thành từng lát mỏng, sau đó rưới dầu olive lên cùng một chút chanh rồi cất vào tủ lạnh, khi thưởng thức phải lấy ra ăn ngay lúc còn lạnh. Nguyên liệu làm nên món thịt này cũng rất đa dạng, từ những món thịt sống hay những loại cá như cá hồi, cá ngừ...",
        price: "165000",
        unit: "Đĩa"
    },
    {
        name: "Cheese Platter",
        image: "https://i2.wp.com/www.lifeasastrawberry.com/wp-content/uploads/2018/11/how-to-build-a-cheese-plate.png",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Cheese Plate (đĩa phô mai tổng hợp) là một trong những món đãi khách đơn giản, đẹp mắt và được yêu thích nhất trong các bữa tiệc nhẹ của người phương Tây.",
        price: "150000",
        unit: "Đĩa"
    },
    {
        name: "Cured Meat Platter",
        image: "https://images.squarespace-cdn.com/content/v1/5616db19e4b0e8660091da10/1615985488271-70X0LJZPAK9EFIUOQTFK/LargeCharcuteriePlatter-TheRealCure-BritishCharcuterie.jpg?format=1500w",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Vậy, món chính của ngày hôm nay, chính là “Cured Meat”, hay còn được hiểu nôm na là thịt được xử lý bằng gia vị như muối, giấm, đường thông qua những biện pháp như sấy, ngâm, xông khói… – thứ rất hợp để thưởng thức cùng Whisky. Rượu và đồ ăn nói chung thường đi kèm với nhau",
        price: "160000",
        unit: "Đĩa"
    },
    {
        name: "Salad",
        image: "https://cdn.tgdd.vn/Files/2022/01/24/1412588/salad-la-gi-15-mon-salad-dinh-duong-cho-bua-com-gia-dinh-202201241950443123.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Salad là món gỏi trộn thanh đạm và thường xuất hiện trong thực đơn món Âu, nhưng bạn đã thực sự hiểu rõ về nó.",
        price: "100000",
        unit: "Đĩa"
    },
    {
        name: "Handmade Pasta Salsiccia",
        image: "https://ellerepublic.de/wp-content/uploads/2021/04/Pasta-con-Salsiccia-mit-cremiger-Tomatensauce-Rezept-1-of-1.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Pasta với ragù vẫn được thuận miệng gọi là “mỳ Ý sốt bò băm” hoặc “bolognaise” theo tiếng Pháp, bắt nguồn từ tên gọi “ragù alla Bolognese” trong tiếng Ý tức là món ragu của vùng Bologna. Loại pasta lý tưởng nhất cho sốt này là pasta sợi bản to (tagliatelle, pappardelle, fettucine), pasta hình ống (penne, rigatoni, tortiglioni) hay những loại hình sò (cavatelli) để có “chỗ” cho các miếng thịt băm trú ẩn",
        price: "195000",
        unit: "Đĩa"
    },
    {
        name: "Handmade Pasta w/Gorgonzola",
        image: "https://www.the-pasta-project.com/wp-content/uploads/Easy-Gorgonzola-Pasta-with-Olives-alla-Cenere-13.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Pasta với ragù vẫn được thuận miệng gọi là “mỳ Ý sốt bò băm” hoặc “bolognaise” theo tiếng Pháp, bắt nguồn từ tên gọi “ragù alla Bolognese” trong tiếng Ý tức là món ragu của vùng Bologna. Loại pasta lý tưởng nhất cho sốt này là pasta sợi bản to (tagliatelle, pappardelle, fettucine), pasta hình ống (penne, rigatoni, tortiglioni) hay những loại hình sò (cavatelli) để có “chỗ” cho các miếng thịt băm trú ẩn",
        price: "220000",
        unit: "Đĩa"
    },
    {
        name: "Handmade Pasta w/Veggies",
        image: "https://www.wholesomelicious.com/wp-content/uploads/2021/02/Vegetable-Garden-Pasta-Picture-1024x1434.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Pasta với ragù vẫn được thuận miệng gọi là “mỳ Ý sốt bò băm” hoặc “bolognaise” theo tiếng Pháp, bắt nguồn từ tên gọi “ragù alla Bolognese” trong tiếng Ý tức là món ragu của vùng Bologna. Loại pasta lý tưởng nhất cho sốt này là pasta sợi bản to (tagliatelle, pappardelle, fettucine), pasta hình ống (penne, rigatoni, tortiglioni) hay những loại hình sò (cavatelli) để có “chỗ” cho các miếng thịt băm trú ẩn",
        price: "180000",
        unit: "Đĩa"
    },
    {
        name: "Italian Pasta Salssiccia",
        image: "https://previews.123rf.com/images/yatomo/yatomo1403/yatomo140300278/26785694-italian-pasta-rigate-con-salsiccia.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Pasta với ragù vẫn được thuận miệng gọi là “mỳ Ý sốt bò băm” hoặc “bolognaise” theo tiếng Pháp, bắt nguồn từ tên gọi “ragù alla Bolognese” trong tiếng Ý tức là món ragu của vùng Bologna. Loại pasta lý tưởng nhất cho sốt này là pasta sợi bản to (tagliatelle, pappardelle, fettucine), pasta hình ống (penne, rigatoni, tortiglioni) hay những loại hình sò (cavatelli) để có “chỗ” cho các miếng thịt băm trú ẩn",
        price: "160000",
        unit: "Đĩa"
    },
    {
        name: "Risotto w/Formaggi",
        image: "https://cdn.therecipesclub.com/wp-content/uploads/2023/01/recipe-risotto-four-cheese-10-1.jpg-790x500.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Phô mai bột",
        price: "300000",
        unit: "Đĩa"
    },
    {
        name: "Soup of the day",
        image: "https://www.unileverfoodsolutions.co.id/en/chef-inspiration/fighting-covid-19-together/healthy-and-nutritious-menu/soup-of-the-day-6-recommended-soup-recipes/jcr:content/parsys/content-aside-footer/columncontrol_copy/columnctrl_parsys_2/textimage_copy/image.transform/jpeg-optimized/image.1706524957916.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Súp",
        price: "140000",
        unit: "Nồi"
    },
    {
        name: "Soda of Tonic",
        image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/club-soda-vs-seltzer-sparkling-tonic-1296x728-feature-1296x728.jpg?h=1528",
        categories_id: "62d38311453db4e8c36bdc75",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Soda of Tonic",
        price: "35000",
        unit: "Ly"
    },
    {
        name: "Sparkling water",
        image: "https://crushmag-online.com/wp-content/uploads/2024/03/Sparkling-Water_S.Pellegrino_1x65.jpg",
        categories_id: "62d38311453db4e8c36bdc75",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Sparkling water",
        price: "90000",
        unit: "Ly"
    },
    {
        name: "Mocktails",
        image: "https://cdn.tgdd.vn/2021/03/CookProduct/mocktail-la-gi-cac-loai-mocktail-phan-biet-mojito-cocktail-0-1200x676.jpg",
        categories_id: "62d38311453db4e8c36bdc75",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "Mocktails",
        price: "50000",
        unit: "Ly"
    },
    {
        name: "ITALIAN STYLE COFFE",
        image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2012/03/22/16/rexfeatures_1399841a.gif?width=1200",
        categories_id: "62d38311453db4e8c36bdc75",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b1",
        description: "ITALIAN STYLE COFFE",
        price: "35000",
        unit: "Ly"
    },
    {
        name: "PIZZA SEAFOOD (SỐT CÀ CHUA, PHOMAI, TÔM, MỰC, CÁ NGỪ NGÂM DẦU, HÀNH TÂY)",
        image: "https://img.dominos.vn/Pizza-Hai-San-Xot-Ca-Chua-Seafood-Delight.jpg",
        categories_id: "62d38311453db4e8c36bdc7a",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Moột trong những món best seller của MiMi",
        price: "141900",
        unit: "Đĩa"
    },
    {
        name: "SASHIMI CÁ HỒI - SALMON SASHIMI",
        image: "https://img.meta.com.vn/Data/image/2020/10/20/cach-lam-sashimi-ca-hoi-3.png",
        categories_id: "62d38311453db4e8c36bdc7a",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Gồm 6 miếng cá hồi tươi sống siêu ngon",
        price: "152900",
        unit: "Đĩa"
    },
    {
        name: "CƠM NGUỘI CÁ HỒI TÁI SỐT GRILL - SALMON ROLL WITH GRILL SAUCE",
        image: "https://product.hstatic.net/200000753159/product/i_cay_108k__spicy_cheese_salmon_roll__3e14b981342d463f8afee854789d6ba0_5aeb3d1d91c845a3b36abd6d00d10e60_master.jpg",
        categories_id: "67fdf3af78d582fa804ca891",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Một trong những món cơm nguội siêu ngon và luôn được quý khách chọn lựa đầu tiên",
        price: "141900",
        unit: "Đĩa"
    },
    {
        name: "SASHIMI COMBO A - (SALMON - TUNA - NISHIN - HOTATE - OCTOPUS - HOKKIGAI)",
        image: "https://product.hstatic.net/200000317293/product/combo_r1_7c428849c64544178f9ab51d3d8f3bf1_1024x1024.jpg",
        categories_id: "62d38311453db4e8c36bdc7a",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Set combo A là một trong những set Sashimi bán chạy nhất của MiMi",
        price: "482900",
        unit: "Đĩa"
    },
    {
        name: "CREAM BRULEE",
        image: "https://daylambanh.edu.vn/wp-content/uploads/2019/11/cream-brulee-trang-mieng.jpg",
        categories_id: "62d38311453db4e8c36bdc7d",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Món Cream Brulee, bạn sẽ bị kích thích bởi sự thú vị khi nghe âm thanh của tiếng lớp đường bị vỡ, lớp kem lạnh, béo và mịn đi cùng với lớp đường giòn tan ngọt ngào hơi thơm vị caramel siêu ngon",
        price: "53900",
        unit: "Đĩa"
    },
    {
        name: "CƠM NGUỘI GÀ SỐT TERIYAKI - TERIYAKI CHICKEN ROLL",
        image: "https://img-global.cpcdn.com/recipes/142a3f474964e5c0/400x400cq70/photo.jpg",
        categories_id: "67fdf3af78d582fa804ca891",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Những miếng gà xào cùng sốt teriyaki đuoecj cuộn trong lớp cơm và rong biể,kèm theo đó là hương vị của mè rang hoà quyện vào từng miếng cơm.Thật thơm ngon!",
        price: "93000",
        unit: "Đĩa"
    },
    {
        name: "PIZZA GÀ SỐT PESTO - CHICKEN PESTO PIZZA",
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pesto-Chicken-Pizza_EXPS_FT23_39454_ST_6_01_1.jpg",
        categories_id: "62d38311453db4e8c36bdc7a",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Chiếc pizza được nướng giòn rụm cùng vs sốt pesto,những miếng gà mềm mềm hoà quyện cùng sốt pesto và cheese tạo nên một hương vị đặc biệt cho chiếc pizza.",
        price: "120000",
        unit: "Đĩa"
    },
    {
        name: "PIZZA BEEF",
        image: "https://embed.widencdn.net/img/beef/78foq693gs/1540x1284px/pizza-with-a-purpose-horizontal.tiff?keep=c",
        categories_id: "62d38311453db4e8c36bdc7a",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Sốt cà chua, phomai, tôm, mực, cá ngừ ngâm dầu, hành tây",
        price: "141900",
        unit: "Đĩa"
    },
    {
        name: "PIZZA PEPERONI",
        image: "https://file.hstatic.net/1000389344/article/pepperoni_5_1c9ba759196f480eba397d628ac958ed_1024x1024.jpg",
        categories_id: "62d38311453db4e8c36bdc7a",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Sốt cà chua, phomai, xúc xích Pepperoni",
        price: "119000",
        unit: "Đĩa"
    },
    {
        name: "PIZZA CHEESE",
        image: "https://www.tasteofhome.com/wp-content/uploads/2024/03/Cheese-Pizzas_EXPS_FT23_275162_ST_1128_8.jpg",
        categories_id: "62d38311453db4e8c36bdc7a",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Sự kết hợp từ 4 loại phomai Ý. Dùng kèm Mật Ong. Không dùng với tương cà hay tương ớt ạ.",
        price: "207900",
        unit: "Đĩa"
    },
    {
        name: "PIZZA SALMON",
        image: "https://www.knowmsg.com/wp-content/uploads/2023/08/smoked-salmon-and-brie-pizza.jpg",
        categories_id: "62d38311453db4e8c36bdc7a",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "Sốt cà chua, phomai, cá hồi",
        price: "163900",
        unit: "Đĩa"
    },
    {
        name: "CÁ HỒI SASHIMI",
        image: "https://hoatuoc.com/wp-content/uploads/2021/05/CA-HOI-2.jpg",
        categories_id: "62d38311453db4e8c36bdc7a",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b2",
        description: "6 slices",
        price: "152900",
        unit: "Đĩa"
    },
    {
        name: "Bánh mì ốp la",
        image: "https://banhmihanoi.net/wp-content/uploads/2020/05/cach-lam-banh-mi-op-la-don-gian-tai-nha-1.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b3",
        description: "Bánh mì ốp la",
        price: "40000",
        unit: "Ổ"
    },
    {
        name: "Mì Quảng",
        image: "https://hoiana.com/wp-content/uploads/2024/12/mi-quang-hoi-an-5.webp",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b3",
        description: "Mì quảng",
        price: "52000",
        unit: "Tô"
    },
    {
        name: "Hủ tiếu",
        image: "https://img-global.cpcdn.com/recipes/90267c96d71f1775/1200x630cq70/photo.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b3",
        description: "Hủ tiếu",
        price: "52000",
        unit: "Tô"
    },
    {
        name: "Gỏi bò ngũ sắc",
        image: "https://cdn.tgdd.vn/2021/03/CookRecipe/GalleryStep/thanh-pham-401.jpg",
        categories_id: "62d38311453db4e8c36bdc7e",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b3",
        description: "Gỏi bò ngũ sắc",
        price: "130000",
        unit: "Đĩa"
    },
    {
        name: "Gỏi đu đủ (Song tam)",
        image: "https://www.huongnghiepaau.com/wp-content/uploads/2017/11/mon-som-tum.jpg",
        categories_id: "62d38311453db4e8c36bdc7e",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b4",
        description: "Gỏi đu đủ",
        price: "69000",
        unit: "Đĩa"
    },
    {
        name: "Gỏi tôm sống",
        image: "https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-102.jpg",
        categories_id: "62d38311453db4e8c36bdc7e",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b4",
        description: "Gỏi tôm sống",
        price: "75000",
        unit: "Đĩa"
    },
    {
        name: "Miến Thái",
        image: "https://cdn.tgdd.vn/2021/07/CookProductThumb/Tom-tron-mien-kieu-Thai-2-608x608.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b4",
        description: "Miến thái",
        price: "80000",
        unit: "Tô"
    },
    {
        name: "Lẩu Thái",
        image: "https://i-giadinh.vnecdn.net/2022/12/17/Thanh-pham-1-1-5372-1671269525.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b4",
        description: "Lẩu thái",
        price: "220000",
        unit: "Nồi"
    },
    {
        name: "Lẩu Khap Bun Kha",
        image: "https://vivuvietnam.org/wp-content/uploads/2024/05/khap-bun-kha.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b4",
        description: "Lẩu Khap Bun Kha",
        price: "370000",
        unit: "Nồi"
    },
    {
        name: "Chả cá Thái Lan",
        image: "https://cdn.tgdd.vn/Files/2021/11/26/1400610/doi-vi-bua-com-gia-dinh-voi-cha-ca-kieu-thai-ngon-nhuc-nach-202111261005337272.jpg",
        categories_id: "62d38311453db4e8c36bdc74",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b4",
        description: "chả cá thái lan",
        price: "138000",
        unit: "Đĩa"
    },
    {
        name: "Xôi xoài",
        image: "https://store.longphuong.vn/wp-content/uploads/2024/05/cach-lam-xoi-xoai-29.jpg",
        categories_id: "62d38311453db4e8c36bdc74",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b4",
        description: "Xôi xoài",
        price: "58000",
        unit: "Đĩa"
    },
    {
        name: "Kem xôi dừa",
        image: "https://bizweb.dktcdn.net/thumb/grande/100/424/895/products/kem-xoi-la-dua-nen2.png?v=1620204110337",
        categories_id: "62d38311453db4e8c36bdc74",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b4",
        description: "Kem xôi dừa",
        price: "58000",
        unit: "Đĩa"
    },
    {
        name: "BÒ PHÔ MAI",
        image: "https://product.hstatic.net/200000473381/product/lts00053_bw_8432870e97f2443798d992c597614e97_master.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "Bò phô mai",
        price: "35000",
        unit: "Ổ"
    },
    {
        name: "Bò Ttrứng",
        image: "https://anh.eva.vn/upload/3-2017/images/2017-08-29/bo-ne-op-la-bo-ne-op-la-8-1503971118-width650height686.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "bò trứng",
        price: "25000",
        unit: "Ổ"
    },
    {
        name: "Bò lúc lắc đặc biệt",
        image: "https://tiki.vn/blog/wp-content/uploads/2023/08/cach-lam-bo-luc-lac-chuan-ngon.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "bò lúc lắc đặc biệt",
        price: "50000",
        unit: "Ổ"
    },
    {
        name: "Bánh mì cá muối",
        image: "https://cdn.tgdd.vn/2021/07/CookProduct/m1thum-1200x676.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "bánh mì cá muối",
        price: "25000",
        unit: "Ổ"
    },
    {
        name: "Nui xào bò",
        image: "https://fujifoods.vn/wp-content/uploads/2021/03/nui-xao-thit-bo-1.png",
        categories_id: "62d38311453db4e8c36bdc74",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "nui xào bò",
        price: "30000",
        unit: "Đĩa"
    },
    {
        name: "67fdf3af78d582fa804ca891 bít tết sốt cá mòi",
        image: "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C2DHEU63WB6YVE/hero/cf41aa1372234c1e855c17befb808fdb_1646793772654144958.png",
        categories_id: "67fdf3af78d582fa804ca891",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "cơm bít tết sốt cá mòi",
        price: "50000",
        unit: "Đĩa"
    },
    {
        name: "Chawanmushi",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246471684787_5.%20Chawanmushi.jpg",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "茶碗蒸し Chawanmushi Non-sweet Steamed egg...",
        price: "48000",
        unit: "Chén"
    },
    {
        name: "Kimuchi",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhGqXJtTOUat3P1Z9jsXTPM5xF4DYevLCH3J9Sv11IyW05YQKDUMPMG8DO1IkRJqCZTlF0D2Dx3xZu10N-ljsJbmM5LPtHhd8xfFmrK9Me0d7rM1wd_aRKIIzxtFvWJ1n0YhTl8ZAU0cE/s1600/Asazuke+kimchi+May+26_comp.jpg",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "キムチ Kimuchi Kimchi Kim chi",
        price: "69000",
        unit: "Chén"
    },
    {
        name: "Agendashi Dofu",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Agedashi_tofu%2C_fried_tofu_with_broth.jpg",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "あげだし豆腐 Agedashi Dofu Fried tofu with dashi...",
        price: "76000",
        unit: "Chén"
    },
    {
        name: "Sashimi Omakase A",
        image: "https://www.elledecoration.vn/wp-content/uploads/2024/06/omakase1.jpg",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "刺身おまかせA Sashimi Omakase A Assorted Sashimi...",
        price: "749000",
        unit: "Đĩa"
    },
    {
        name: "Hotate",
        image: "https://gofood.vn/upload/r/san-pham/Hai-san-nhat-ban/coi-diep-2.jpg",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "帆立 Hotate Sell S&ograve; điệp",
        price: "207000",
        unit: "Chén"
    },
    {
        name: "Tako ssm",
        image: "https://nhahangminori.vn/upload/Menu%20Version%2020/Sashimi/futari%20ssm%20950k.png",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "タコ Tako Octopus Bạch tuộc",
        price: "166000",
        unit: "Đĩa"
    },
    {
        name: "Kaki",
        image: "https://media.istockphoto.com/id/185013290/photo/sushi-fuyu.jpg?s=612x612&w=0&k=20&c=77R7Ug1GpleRJbQoIHhQOEvI2219F13s3wQT8NyiUtY=",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b6",
        description: "カキ Kaki Oysters H&agrave;u",
        price: "170000",
        unit: "Đĩa"
    },
    {
        name: "Mì Quảng Trộn Tôm Thịt",
        image: "https://ganesh.vn/wp-content/uploads/2020/11/mi-quang-tron-2.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b7",
        description: "Yellow Noodle Salad With Shrimp & Pork",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "Phở bò",
        image: "https://cdn.tgdd.vn/Files/2017/03/18/962092/an-lien-3-bat-pho-voi-cong-thuc-nau-pho-nay-202201261419401397.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b7",
        description: "Beef Noodle Soup",
        price: "99000",
        unit: "Tô"
    },
    {
        name: "Gà Cà Ri",
        image: "https://i-giadinh.vnecdn.net/2022/12/15/Thanh-pham-1-1-5493-1671086922.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b7",
        description: "Yangzhou Beef with Lemongrass",
        price: "120000",
        unit: "Tô"
    },
    {
        name: "đậu khuôn cà ri",
        image: "https://ttol.vietnamnetjsc.vn/images/2021/03/04/15/00/ca-ri-dau-hu-8.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b7",
        description: "Tofu Curry Rice",
        price: "95000",
        unit: "Đĩa"
    },
    {
        name: "Súp Bí",
        image: "https://thucduongbaoan.com.vn/wp-content/uploads/2017/08/anh23-sup-bi-do-Copy.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b7",
        description: "Pumpkin Soup",
        price: "95000",
        unit: "Tô"
    },
    {
        name: "Cà chua & Cà chua xào",
        image: "https://monngonmoingay.tv/wp-content/uploads/2019/08/trung-chien-ca-chua.jpg",
        categories_id: "67fdf3af78d582fa804ca887",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b7",
        description: "Cà chua xào ",
        price: "75000",
        unit: "Đĩa"
    },
    {
        name: "Chawanmushi",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246471684787_5.%20Chawanmushi.jpg",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b8",
        description: "茶碗蒸し Chawanmushi Non-sweet Steamed egg...",
        price: "48000",
        unit: "Chén"
    },
    {
        name: "Kimuchi",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246416684714_4.%20Kimuchi.jpg",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b8",
        description: "キムチ Kimuchi Kimchi Kim chi",
        price: "69000",
        unit: "Chén"
    },
    {
        name: "Agendashi Dofu",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246370747501_3.%20Agedashi%20Dofu.jpg",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b8",
        description: "あげだし豆腐 Agedashi Dofu Fried tofu with dashi...",
        price: "76000",
        unit: "Chén"
    },
    {
        name: "Sashimi Omakase A",
        image: "https://www.elledecoration.vn/wp-content/uploads/2024/06/omakase1.jpg",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b8",
        description: "刺身おまかせA Sashimi Omakase A Assorted Sashimi...",
        price: "749000",
        unit: "Đĩa"
    },
    {
        name: "Tako ssm",
        image: "https://media.loveitopcdn.com/20960/ssm-tako-xl.png",
        categories_id: "67fdf3af78d582fa804ca890",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b8",
        description: "タコ Tako Octopus Bạch tuộc",
        price: "166000",
        unit: "Đĩa"
    },
    {
        name: "Artisan Plate of our Hanmade Coldcuts and Cheese",
        image: "https://media-cdn.tripadvisor.com/media/photo-p/1d/2a/5e/7b/artisan-antipasti-platter.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b9",
        description: "Nhắc đến ẩm thực phương Tây không thể không nhắc đến các loại phô mai và thịt nguội. Đây là những món khai vị phổ biến và được yêu thích trong các bữa tiệc bởi hương vị thơm ngon và giá trị dinh dưỡng cao. Biết cách phân loại và trình bày các loại phô mai (cheese plate) hay chuẩn bị phần đồ nguội (cold cuts) đẹp mắt rất quan trọng đối với một đầu bếp món Âu chuyên nghiệp.",
        price: "200000",
        unit: "Đĩa"
    },
    {
        name: "Carpaccio, Tartare or Viteo Tonato",
        image: "https://www.sfizioso.it/wp-content/uploads/2017/06/Carpaccio-di-vitello-con-ravanelli-rucola-e-salsa-alla-senape-e1496319800140.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b9",
        description: "Để chế biến ra Carpaccio, người ta phải thái thịt sống thành từng lát mỏng, sau đó rưới dầu olive lên cùng một chút chanh rồi cất vào tủ lạnh, khi thưởng thức phải lấy ra ăn ngay lúc còn lạnh. Nguyên liệu làm nên món thịt này cũng rất đa dạng, từ những món thịt sống hay những loại cá như cá hồi, cá ngừ...",
        price: "165000",
        unit: "Đĩa"
    },
    {
        name: "Cheese Platter",
        image: "https://i2.wp.com/www.lifeasastrawberry.com/wp-content/uploads/2018/11/how-to-build-a-cheese-plate.png",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b9",
        description: "Cheese Plate (đĩa phô mai tổng hợp) là một trong những món đãi khách đơn giản, đẹp mắt và được yêu thích nhất trong các bữa tiệc nhẹ của người phương Tây.",
        price: "150000",
        unit: "Đĩa"
    },
    {
        name: "Cured Meat Platter",
        image: "https://images.squarespace-cdn.com/content/v1/5616db19e4b0e8660091da10/1615985488271-70X0LJZPAK9EFIUOQTFK/LargeCharcuteriePlatter-TheRealCure-BritishCharcuterie.jpg?format=1500w",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b9",
        description: "Vậy, món chính của ngày hôm nay, chính là “Cured Meat”, hay còn được hiểu nôm na là thịt được xử lý bằng gia vị như muối, giấm, đường thông qua những biện pháp như sấy, ngâm, xông khói… – thứ rất hợp để thưởng thức cùng Whisky. Rượu và đồ ăn nói chung thường đi kèm với nhau",
        price: "160000",
        unit: "Đĩa"
    },
    {
        name: "Salad",
        image: "https://cdn.tgdd.vn/Files/2022/01/24/1412588/salad-la-gi-15-mon-salad-dinh-duong-cho-bua-com-gia-dinh-202201241950443123.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9b9",
        description: "Salad là món gỏi trộn thanh đạm và thường xuất hiện trong thực đơn món Âu, nhưng bạn đã thực sự hiểu rõ về nó.",
        price: "100000",
        unit: "Đĩa"
    },
    {
        name: "Frutti di mare",
        image: "https://www.ragu.com/wp-content/uploads/2016/01/Fruit_de_mar_mobile.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9bb",
        description: "Scallops in saffon Sauce, sea Prawns with butter Sauce",
        price: "230000",
        unit: "Đĩa"
    },
    {
        name: "Grilled Asparagus & Romaine",
        image: "https://del.h-cdn.co/assets/16/19/1600x900/gallery-1463008908-caesar-grilled-asparagus-003.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9bb",
        description: "With walnut sauted in our special Carlic Seafood Broth & Sauvignon Blanc",
        price: "240000",
        unit: "Đĩa"
    },
    {
        name: "chiên cố đô",
        image: "https://saigonangi.com/wp-content/uploads/2021/08/cd4-620x375.jpg",
        categories_id: "67fdf3af78d582fa804ca891",
        restaurant_id: "67ff2f59eeb7ef6fb014b9bb",
        description: "chiên cố đô",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "Ba chỉ Hàn Quốc",
        image: "https://pastaxi-manager.onepas.vn/content/uploads/articles/cach-lam-thit-ba-roi-nuong-kieu-han/cach-lam-thit-ba-roi-nuong-kieu-han-1.jpg",
        categories_id: "67fdf3af78d582fa804ca883",
        restaurant_id: "67ff2f59eeb7ef6fb014b9bb",
        description: "Ba chỉ Hàn Quốc",
        price: "109000",
        unit: "Đĩa"
    },
    {
        name: "Ức vịt nướng sốt thơm",
        image: "https://48bistro.com.vn/wp-content/uploads/2022/11/hinh-anh_2024-10-03_231741097.png",
        categories_id: "67fdf3af78d582fa804ca883",
        restaurant_id: "67ff2f59eeb7ef6fb014b9bb",
        description: "ức vịt nướng sốt thơm",
        price: "109000",
        unit: "Đĩa"
    },
    {
        name: "Cá đù chiên giòn mắm me",
        image: "https://vcdn1-ngoisao.vnecdn.net/2019/10/09/69407094-1328807410625972-4285-5679-8848-1570593749.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=1JAdpLPYKWB9AXo5EePEOg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9bb",
        description: "Cá đù chiên mắm me",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "Khoai tây mập",
        image: "https://cdn.tgdd.vn/Files/2015/03/01/615221/bi-quyet-lam-moi-khoai-tay-chien-cu-5-760x367.jpg",
        categories_id: "67fdf3af78d582fa804ca885",
        restaurant_id: "67ff2f59eeb7ef6fb014b9bb",
        description: "khoai tây mập",
        price: "69000",
        unit: "Đĩa"
    }
];

export default products;