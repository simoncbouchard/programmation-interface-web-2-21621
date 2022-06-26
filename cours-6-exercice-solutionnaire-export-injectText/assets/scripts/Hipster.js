import { injectText } from './Lorem.js';


export default class Hipster {
    constructor(el) {
        this._el = el;

        this._quotes = [
            'I\'m baby iPhone meggings mustache, artisan squid locavore stumptown church-key chartreuse fixie kinfolk cray. Waistcoat trust fund portland pickled palo santo man braid shabby chic blog chia etsy cloud bread kitsch asymmetrical venmo. Typewriter leggings tbh gluten-free chia. Gentrify austin shaman cornhole kombucha.',
            'Austin farm-to-table swag, hella echo park lumbersexual retro DIY chillwave hexagon vice kitsch. Listicle vape farm-to-table, chartreuse offal cronut PBR&B photo booth taxidermy skateboard normcore af chia whatever. Cornhole tbh quinoa next level. Bitters PBR&B small batch wolf you probably haven\'t heard of them cardigan dreamcatcher green juice enamel pin photo booth mixtape waistcoat venmo pour-over copper mug. Pork belly taxidermy blog cold-pressed activated charcoal direct trade locavore keffiyeh pinterest wolf quinoa. Gastropub pork belly YOLO, man braid meggings post-ironic mumblecore sartorial normcore live-edge wayfarers.',
            'Retro raw denim tumblr butcher health goth vaporware. Hot chicken chartreuse sriracha shabby chic coloring book tofu, four dollar toast truffaut viral raw denim williamsburg celiac raclette XOXO. Everyday carry retro lo-fi swag waistcoat cred vice cardigan franzen quinoa heirloom. Beard small batch organic, yr ugh hashtag microdosing fixie leggings cray chartreuse. Plaid blue bottle slow-carb pickled master cleanse, vape waistcoat. Health goth hoodie pug williamsburg narwhal photo booth, heirloom fixie gluten-free hella coloring book synth sartorial. Chicharrones fashion axe godard, migas gastropub pickled palo santo shabby chic.',
            'Gastropub messenger bag tousled, pour-over banh mi neutra tofu viral kickstarter fashion axe. Marfa venmo humblebrag neutra. Live-edge brooklyn skateboard af occupy gluten-free. Succulents organic street art 90\'s, jianbing narwhal wayfarers paleo. IPhone church-key tousled kitsch, four loko helvetica bicycle rights cray master cleanse keffiyeh letterpress meggings vice kogi intelligentsia. Before they sold out post-ironic af jianbing farm-to-table meditation poke, next level deep v sartorial pork belly retro. Tacos la croix 90\'s, neutra lomo umami vice.'
        ];

        this.init();
    }

    init() {
        injectText(this._el, this._quotes);
    }
}