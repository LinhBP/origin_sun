const products = [
    {
        id: 1,
        tag: "nuochoa",
        category: "a",
        brand: "Brand A",
        title: "Product 1",
        price: "100.000 VND",
        desc: "descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc",
        image: "../asset/image/product1.jpg",
        liked: false 
    },
    {
        id: 2,
        category: "b",
        tag: "nuochoa",
        brand: "Brand B",
        title: "Product 2",
        price: "200.000 VND",
        desc: "d Product BProduct BProduct BProduct BProduct BProduct BProduct B",
        image: "../asset/image/product2.jpg",
        liked: false 
    },
    {
        id: 3,
        tag: "nuochoa", 
        category: "a",
        brand: "Brand C",
        title: "Product 3",
        price: "300.000 VND",
        desc: "d Brand CBrand CBrand CBrand CBrand CBrand CBrand CBrand CBrand C",
        image: "../asset/image/product3.jpg",
        liked: false
    },
    {
        id: 4,
        tag: "nuochoa",
        category: "b",
        brand: "Brand D",
        title: "Product 4",
        price: "400.000 VND",
        desc: "descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc",
        image: "../asset/image/product4.jpg",
        liked: false
    },
    {
        id: 5,
        tag: "dongho",
        brand: "Brand E",
        category: "c",
        title: "Product 5",
        price: "500.000 VND",
        desc: "dProduct EProduct EProduct EProduct EProduct EProduct EProduct E",
        image: "../asset/image/product5.jpg",
        liked: false 
    },
    {
        id: 6,
        tag: "dongho",
        category: "d",
        brand: "Brand F",
        title: "Product 6",
        price: "600.000 VND",
        desc: "Product FProduct FProduct FProduct FProduct FProduct FProduct FProduct F",
        image: "../asset/image/product6.jpg",
        liked: false 
    }
];

// Lưu dữ liệu sản phẩm vào local storage
localStorage.setItem('products', JSON.stringify(products));