let prodPrimerInicio = [
    {
        id: "5f49fab9-5c3fdbb1ae92",
        descripcion: "Modelo Jeans Las Locas",
        titulo: "Jean Nevado",
        precio: 8.000,
        cuotas: "2 cuotas $400",
        imagen:
            "assets/images/jeans/jeans1.jpg",
        categoria: "jean",
        fechaDeCreacion: "20/08/2023",
    },
    {
        id: "2e897bad-ed95df9ad917",
        fechaDeCreacion: "20/08/2023",
        descripcion: "Tela de morley viscosa",
        titulo: "Camiseta Sandra",
        precio: 3.000,
        cuotas: "2 cuotas $1500",
        imagen:
            "assets/images/camisetas/camiseta1.jpeg",
        categoria: "camiseta",
    },
    {
        id: "fc3025ec-1e8df3ee358a",
        descripcion:
            "Lana Acrilica",
        titulo: "Sweter Juana",
        fechaDeCreacion: "20/08/2023",
        precio: 6.900,
        cuotas: "12 cuotas $250",
        imagen:
            "assets/images/sweter/sueter.webp",
        categoria: "sweter",
    },
];


let productos =
    JSON.parse(localStorage.getItem("productos")) || prodPrimerInicio;

if (JSON.parse(localStorage.getItem("productos")) === null) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const userInicio = [
    {
        fullname: "Daniel Lee",
        email: "admin@admin.com",
        id: "6",
        password: "admin",
        role: "ROLE_ADMIN",
    },
    {
        fullname: "Samantha Davis",
        email: "samantha.davis@example.com",
        id: "7",
        password: "alfabeta",
        role: "ROLE_CLIENT",
    },
    {
        fullname: "James Moore",
        email: "james.moore@example.com",
        id: "8",
        password: "alfabeta",
        role: "ROLE_CLIENT",
    },
    {
        fullname: "Isabella Taylor",
        email: "isabella.taylor@example.com",
        id: "9",
        password: "alfabeta",
        role: "ROLE_CLIENT",
    },
];

if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(userInicio));
}
