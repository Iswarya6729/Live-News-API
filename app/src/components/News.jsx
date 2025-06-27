import React, { Component } from 'react';
import Newsitems from './Newsitems';

export default class News extends Component {
    articles = [
        {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Joel Khalili",
      "title": "A False Start on the Road to an All-American Bitcoin",
      "description": "Donald Trump pledged to cement the US as the bitcoin mining capital of the planet. The president’s sweeping tariffs stand to simultaneously undermine and advance that ambition in one swoop.",
      "url": "https://www.wired.com/story/a-false-start-on-the-road-to-an-all-american-bitcoin/",
      "urlToImage": "https://media.wired.com/photos/68531ba03ca23a58119ac365/191:100/w_1280,c_limit/061825-amercian-bitcoin-false-start.jpg",
      "publishedAt": "2025-06-20T09:30:00Z",
      "content": "Mining firms are also facing heightened competition for limited energy resources in the US, mostly from AI companies flush with venture funding. New projections from the US Department of Energy indic…"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Emma Roth",
      "title": "Trump’s media company says it’s buying $2.5 billion in Bitcoin",
      "description": "President Donald Trump’s media company could soon own $2.5 billion in Bitcoin. On Tuesday, Trump Media announced that it’s working with “approximately 50 institutional investors” to sell and issue $1.5 billion in stock and $1 billion in convertible notes.",
      "url": "https://www.theverge.com/news/674684/trump-media-bitcoin-treasury-deal",
      "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/STK466_ELECTION_2024_CVirginia_F.webp?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      "publishedAt": "2025-05-27T14:31:48Z",
      "content": "The Truth Social operator will get the money from a deal with investors. President Donald Trump’s media company could soon own a large Bitcoin treasury."
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Luc Olinga",
      "title": "Bitcoin Who? Wall Street Has a New Crypto Obsession",
      "description": "While Bitcoin hits new highs, a little-known company is capturing the imagination of investors with a simple, yet revolutionary, idea: the stablecoin.",
      "url": "https://gizmodo.com/bitcoin-who-wall-street-has-a-new-crypto-obsession-2000618478",
      "urlToImage": "https://gizmodo.com/app/uploads/2024/09/An-image-of-Bitcoin-cryptocurrency.jpg",
      "publishedAt": "2025-06-21T14:28:22Z",
      "content": "For over a decade, Bitcoin has been the undisputed face of digital finance. Now, Wall Street is turning to a new star: the stablecoin."
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Luc Olinga",
      "title": "Your Bitcoin Might Soon Get You a Mortgage—No, Really",
      "description": "The new head of the U.S. housing regulator, a crypto investor with deep ties to Trump, wants to study using your digital coins for home loans. This is not a drill.",
      "url": "https://gizmodo.com/your-bitcoin-might-soon-get-you-a-mortgage-no-really-2000619523",
      "urlToImage": "https://gizmodo.com/app/uploads/2025/06/house-1200x675.jpg",
      "publishedAt": "2025-06-24T15:34:43Z",
      "content": "In a move that’s shaking the housing market, regulators are considering crypto assets like Bitcoin as part of home loan eligibility."
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Justine Calma",
      "title": "AI could consume more power than Bitcoin by the end of 2025",
      "description": "AI could soon surpass Bitcoin mining in energy consumption, according to a new analysis that concludes artificial intelligence could use close to half of all the electricity consumed by data centers globally by the end of 2025.",
      "url": "https://www.theverge.com/climate-change/676528/ai-data-center-energy-forecast-bitcoin-mining",
      "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STK428_CRYPTO_D.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      "publishedAt": "2025-05-29T18:58:37Z",
      "content": "Researchers forecast rising electricity demand from AI despite efficiency gains. AI could soon surpass Bitcoin mining in energy use."
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Lucas Ropek",
      "title": "Family of Bitcoin Influencers Hide Their Crypto Codes on Four Continents to Deter Kidnappers",
      "description": "That's certainly one way to get the crypto thieves off your back, maybe...",
      "url": "https://gizmodo.com/family-of-bitcoin-influencers-hide-their-crypto-codes-on-four-continents-to-deter-potential-kidnappers-2000613575",
      "urlToImage": "https://gizmodo.com/app/uploads/2024/11/dean-skurka-crypto.jpg",
      "publishedAt": "2025-06-10T15:00:26Z",
      "content": "A family who struck it big in Bitcoin investing years ago has a quite unusual strategy to deter potential kidnappers: hiding their cold storage seed phrases in hidden bunkers located all over the world."
    }
  
    ];

    constructor(props) {
        super(props);
        console.log("I am a constructor");
        this.state = {
            articles: this.articles
        };
    }

    render() {
        return (
            <>
                <h1 className='text-center text-danger'>Live News</h1>
                <div className='container m-3'>
                    <div className='row'>
                        {this.state.articles.map((element) => {
                            return (
                                <div className='col-md-4' key={element.url}>
                                    <Newsitems
                                        title={element.title}
                                        description={element.description}
                                        url={element.urlToImage} // This prop should be named 'imageUrl' or similar for clarity
                                        linkUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}


//fetch data from the API:
//componentDidMount()
