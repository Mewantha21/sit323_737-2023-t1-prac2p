const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
       <style>
       body {background-color: powderblue;}
       p{
        font-size: 23px;
       }
       li{
        font-size: 20px;
       }
       </style>
        <title>My Website</title>
      </head>
      <body>
        <h1 align="center">Welcome to My Website!</h1>
        <h1>History of Australia</h1>
        <p>Australia is a region that includes both a nation and a continent. Indigenous Australians, who have inhabited the continent for over 65,000 years, were the first people to reside there.

        The eastern coast of Australia was claimed by Great Britain in 1770 by the British explorer James Cook, and in 1788 the British founded a penal colony at Sydney Cove, which is today known as Sydney, in the state of New South Wales. The British strengthened their dominance over the continent throughout the following century, founding colonies in what are now Victoria, Queensland, South Australia, Western Australia, and Tasmania.
        
        
        These distinct colonies united in 1901 to form the Commonwealth of Australia, a sovereign state within the British Empire. Australia and Britain had close ties throughout the 20th century.
        Australia underwent substantial economic and social transformation after the war, and a flood of post-war immigration helped to create a multicultural society there. Australia was a key player in the Vietnam War as well and has remained a close ally of the United States.

Australia is a developed, democratic nation with a broad economy, a good educational system, and a high level of life today. The nation is still very much rooted in its Indigenous history and culture, and it has made strides in recent years to redress historical wrongs and advance Indigenous rights.</p>
        
        <p>Here are some things you might be interested in Australia:</p>
        <ul>
          <li><a href="/state">States</a></li>
          <li><a href="/Culture">Culture</a></li>
          <li><a href="/Nature">Nature</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.get('/state', (req, res) => {
  res.send(`
    <html>
      <head>
      <style>
      p{
        font-size: 23px;
       }
       body {background-color: lightblue;}
       </style>
        <title>State</title>
      </head>
      <body>
        <h1>About States</h1>
        <p>
        New South Wales: The most populous state in Australia (Capital city = Sydney) <br>

        Victoria: The second-most populous state (Capital city = Melbourne) <br>
    
        Queensland: The third-most populous state (Capital city = Brisbane) <br>
    
        Western Australia: The largest state by land area (Capital city = Perth) <br>
    
        South Australia: The fourth-most populous state (Capital city = Adelaide) <br>
    
        Tasmania: An island state located south of mainland Australia (Capital city = Hobart)
        </p>
        
      </body>
    </html>
  `);
});

app.get('/Culture', (req, res) => {
  res.send(`
    <html>
      <head>
      <style>
      p{
        font-size: 23px;
       }
       body {background-color: lightblue;}
       </style>
        <title>Australian Cultures</title>
      </head>
      <body>
        <h1>Australian Cultures</h1>
        
        <p>With a long history and numerous cultural customs, Australia is a multicultural nation. Australia's Indigenous cultures, which have existed for over 65,000 years, are a vital component of the history of the nation. Australian culture has been influenced by waves of immigration from all over the world, mainly from Europe and Asia, in addition to Indigenous cultures.

        Australia's contemporary culture is frequently referred to as relaxed, cordial, and egalitarian. "Mateship," a concept used to convey a feeling of camaraderie and loyalty amongst friends, is highly valued in Australia. Australians take part in a variety of cultural pursuits, including sports and the arts.
        The British, Indigenous, Asian, and other cultures have all had an impact on Australian food. Meat pies, fish and chips, and "barbies," or barbeques, are a few of the country's most well-known meals.

        <br>The official language of Australia is English, but many Australians, especially those from immigrant backgrounds, also speak other languages. The vocabulary and accent of Australian English have grown to be distinctive.
        </p>
      </body>
    </html>
  `);
});

app.get('/Nature', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Nature</title>
        <style>
      p{
        font-size: 23px;
       }
    
       body {background-color: lightblue;}
       </style>
      </head>
      <body>
        <h1>Nature in Australia</h1>
        <ul>
        <li>The Great Barrier Reef is the world's biggest coral reef system and is home to hundreds of marine species. It is situated off the coast of Queensland.</li>
        <li>The indigenous inhabitants of the area revere the enormous sandstone rock formation known as Uluru (Ayers Rock), which is situated in the centre of Australia's Outback.</li>
        <li>The prominent ski resorts of Thredbo and Perisher are part of Australia's tallest mountain range, the Australian Alps, which is situated in the south-east of the continent.</li>
        <li>Kakadu National Park is a UNESCO World Heritage Site that is recognised for its gorgeous wetlands, steep escarpments, and variety of species, including saltwater crocodiles and wallabies. It is situated in the Northern Territory.</li>
        </ul>
        
        
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});