const express = require('express');
const app = express();
const path = require('path');
const {v4: uuid} = require('uuid');

app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));
app.use(express.static(path.join(__dirname, 'public')));

let productList =[
    {
        id: uuid(),
        item: 'Mini Magenta Pralines',
        type: 'chocolate' ,
        description: 'Experience the ultimate chocolate indulgence with this selection of Lindt Mini Pralines. This beautiful gift box of assorted chocolate candy is the perfect way to turn everyday events into special occasions. Whether celebrating with colleagues, relaxing with family, sharing a meal with friends or savoring time to yourself, this selection of fine pralines is an elegant accompaniment to all of life’s little moments. Crafted with high quality filling inside and great attention to detail on the outside, this collection of gourmet chocolate pralines includes decadent dark chocolate and milk chocolate varieties with luscious fillings like hazelnut, praline, caramel, raspberry and nougat. Each gift box contains a hand-selected assortment of pralines, making it ideal for sharing or for treating that special someone. Embodying the passion and expert craftsmanship of the Lindt Master Chocolatiers, this gift box of Lindt chocolate mini pralines provides a unique and rewarding chocolate experience.' ,
        price: '$15.99' ,
        reviews:[
            {
                author: 'Elfie',
                review: "This is one of my favorites go to gift for any occaion" 
            }
        ] 
    },
    {
        id: uuid(),
        item: 'Holiday Snowfall Mini Pralines Boxed Chocolate',
        type: 'chocolate' ,
        description: 'Unwrap the magic of the holidays with this selection of Lindt Mini Pralines. This beautiful gift box of assorted chocolate Christmas candy is perfect for all of your holiday celebrations, big or small. Serve these Christmas chocolates at holiday gatherings, or give them as a thoughtful holiday candy gift for teachers, friends and coworkers. Crafted with high quality filling inside and great attention to detail on the outside, this collection of gourmet chocolate pralines includes decadent dark chocolate and milk chocolate varieties with luscious fillings like hazelnut, praline, caramel, raspberry and nougat. Each Christmas chocolate gift box measures approximately 9.3 x 9.3 x 1.1 inches and contains a hand-selected assortment of pralines, making it ideal for sharing or for treating that special someone. Embodying the passion and expert craftsmanship of the Lindt Master Chocolatiers, this gift box of Lindt chocolate candy provides a unique and rewarding chocolate experience. Make Holiday Moments Magical with Lindt.',
        price: '$14.99',
        reviews:[
            {
                author:'Mr.Clause',
                review: 'Finest of chocolates'
            }
        ]

    },
    {
        id: uuid(),
        item: 'Connaisseurs Golden Sparkle Box',
        type: 'chocolate' ,
        description: 'Experience the ultimate chocolate indulgence with this selection of 24 pieces of chocolate in 6 different varieties. Each box measures approximately 7.5 x 7.3 x 2.3 inches and contains two trays of 12 pieces each. This beautiful gift box of assorted chocolate candy is the perfect way to turn everyday events into special occasions. Whether celebrating with colleagues, relaxing with family, sharing a meal with friends or savoring time to yourself, this selection of fine chocolates is an elegant accompaniment to all of life’s little moments. Crafted with high quality filling inside and great attention to detail on the outside, this collection of gourmet chocolate includes decadent varieties. Embodying the passion and expert craftsmanship of the Lindt Master Chocolatiers, this gift box of Lindt chocolate provides a unique and rewarding chocolate experience.' ,
        price: '$17.24 ' ,
        reviews: [
            {
                author: 'Grinch',
                review: 'I hate it when it says "SOLD OUT"'
            }
        ]

    },
    {
        id: uuid() ,
        item: 'Lindt Truffles DeLuxe ' ,
        type: 'chocolate' ,
        description: 'Lindt chocolate embodies the passion and expert craftsmanship of its Lindt Master Swiss Chocolatiers. Lindt delivers a unique chocolate experience offering a distinctly smooth and rich, gourmet taste.' ,
        price: '$41.99',
        reviews:[
            {
                author: '',
                review: ""
            }
        ]

    }
]

app.get('/gifts', (req,res)=>{
    // console.log('Get/req sent')
    res.render('gifts/index', {productList})
})

app.get('/', (req,res)=>{
    // redirect to the home gifts page
    res.redirect('/gifts')
})
app.get('/gifts/:id', (req,res)=>{
    const {id} = req.params;
    const product = productList.find(e => e.id === id);
    // console.log(product);
    // console.log(id)
    res.render('gifts/show', {product})
})

app.get('/gifts/:id/review', (req,res)=>{
    const {id} = req.params;
    const product = productList.find(p => p.id === id);
    res.render('gifts/review', {product} )
})

app.post('/gifts/:id/review', (req,res)=>{
    const {id} = req.params;
    const product = productList.find(p => p.id === id);
    // console.log(req.body)
    const {review , author} = req.body
    let newReview = {review, author};
    product.reviews.push(newReview);
    res.redirect(`/gifts/${product.id}`)
})




app.listen(3000, ()=>{
    console.log('Listening on Port 3000')
})