const mySeries = [
    {
        title: "True Detective",
        content: "Time is a flat circle",
        image: "./myapp/public/img/rust.jpg",
        tags: ["Crime", "Realistic"]
    },
    {
        title: "Dexter",
        content: "Just like me... empty inside",
        image: "./myapp/public/img/dexter.jpg",
        tags: ["Crime", "Thriller"]
    },
    {
        title: "Breaking Bad",
        content: "I'm not in danger, I am the danger!",
        image: "./myapp/public/img/Walter_White_S5B.png",
        tags: ["Crime", "Drugs"]
    },
    {
        title: "Utopia",
        content: "Where is Jessica Hide?",
        image: "./myapp/public/img/utopia-blogs.jpg",
        tags: ["Distopyc", "Violence"]
    },
    {
        title: "Luther",
        content: "I'm coming for you.",
        image: "./myapp/public/img/luther.jpg",
        tags: ["Crime", "Realistic"]
    }

]

function index(req, res) {
    res.json({
        data: mySeries,
        count: mySeries.length
    })
}

module.exports = {
    index
}